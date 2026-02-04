
import React, { useState, useRef, useEffect } from 'react';
import { getDiagnosticResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIDiagnostic: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const result = await getDiagnosticResponse(input);
      const botMsg: ChatMessage = { role: 'model', text: result || 'I am sorry, I am having trouble connecting to the network. Please call our emergency line directly.' };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'model', text: 'An error occurred. If this is an emergency, please call 844-340-6413 immediately.' }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
      <div className="bg-blue-600 p-6 text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <i className="fas fa-robot text-blue-200"></i>
            Emergency AI Assistant
          </h3>
          <p className="text-blue-100 text-sm mt-1">Immediate advice for frozen pipe emergencies</p>
        </div>
        <div className="bg-blue-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-400/30">
          Powered by Gemini
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="h-[400px] overflow-y-auto p-6 space-y-4 bg-slate-50/50"
      >
        {messages.length === 0 && (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600 text-2xl">
              <i className="fas fa-comment-dots"></i>
            </div>
            <p className="text-slate-500 max-w-sm mx-auto">
              Describe your situation (e.g., "Kitchen sink has no water" or "I hear water running in the wall") to get immediate safety steps.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <button 
                onClick={() => setInput('My main water is frozen')}
                className="text-xs font-semibold bg-white border border-slate-200 rounded-full px-4 py-2 text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                "Main water frozen"
              </button>
              <button 
                onClick={() => setInput('I have a burst pipe')}
                className="text-xs font-semibold bg-white border border-slate-200 rounded-full px-4 py-2 text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                "Burst pipe emergency"
              </button>
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-none'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white text-slate-400 shadow-sm border border-slate-100 rounded-2xl rounded-bl-none p-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <div className="relative">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Describe your plumbing problem..."
            className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-6 pr-14 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-800"
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 w-12 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
        <p className="text-[10px] text-slate-400 text-center mt-3 uppercase tracking-widest font-bold">
          Always call 844-340-6413 for active flooding
        </p>
      </div>
    </div>
  );
};

export default AIDiagnostic;
