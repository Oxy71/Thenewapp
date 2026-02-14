
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SHOUTOUTS = [
  "Arre, normie alert! 🚨 Jk, but your drip needs an upgrade. Talk to me?",
  "POV: You found the best meme shop in India. Need a hand, legend?",
  "Your ex might have ghosted you, but I'm here with the memes. Chat?",
  "Engineering viva got you down? Wear the pain. Desi therapy inside! 👇",
  "West or Desi? The ultimate debate. I'll help you pick your vibe.",
  "Is that a basic white tee? My eyes! 🫣 Let's fix that real quick.",
  "Meme Bazzar is open, and I'm spilling tea (and T-shirts). Talk?",
  "I have 99 problems but a basic wardrobe ain't one. Want in?",
  "Looking for the 'Woman Yelling at Cat' energy? I got you.",
  "Startup founder or struggling student? Either way, you need a new fit."
];

const SYSTEM_INSTRUCTION = `You are MemeMaharaj 2.0, the official AI chatbot of MemeBazaar, a meme-based clothing brand. 
Categories:
- DESI: Indian meme-based T-shirts (Bollywood, Cricket, Indian parents, Engineering/Medical life, Startup satire, relatable Indian humor).
- WEST: Western meme-based T-shirts (Gen-Z humor, gaming memes, internet culture, pop culture, viral formats, dark humor).

Personality: Witty, playful, slightly sarcastic, culturally aware (Indian + Western memes), friendly, sales-smart but not pushy.
Tone: Streetwear-inspired, Gen-Z friendly, uses light Hinglish (for Desi) or POV/Gen-Z slang (for West).

Responsibilities:
1. Explain website works (Buy -> Pick category -> Size -> Cart -> Checkout). Mention Pan-India shipping.
2. Recommend products based on user vibe.
3. Handle queries playfully but clearly. Redirect unrelated topics back to drip/memes.
Hard Rules: No politics, no offensive jokes, stay brand-safe.`;

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showShoutout, setShowShoutout] = useState(false);
  const [shoutoutText, setShoutoutText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Namaste! I'm MemeMaharaj 2.0. Ready to upgrade your drip from normie to legend? What's the vibe today—Desi or West?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatInstance = useRef<any>(null);

  useEffect(() => {
    // Proactive shoutout after 2 seconds
    const timer = setTimeout(() => {
      const randomMsg = SHOUTOUTS[Math.floor(Math.random() * SHOUTOUTS.length)];
      setShoutoutText(randomMsg);
      setShowShoutout(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const initChat = () => {
    if (!chatInstance.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatInstance.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.8,
        },
      });
    }
    return chatInstance.current;
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowShoutout(false);
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const chat = initChat();
      const streamResponse = await chat.sendMessageStream({ message: userMessage });
      
      let fullText = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of streamResponse) {
        const c = chunk as GenerateContentResponse;
        const newText = c.text || '';
        fullText += newText;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].text = fullText;
          return updated;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Oye, even my server is feeling the monday blues. Try again in a bit!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Quirky Shoutout Bubble */}
      {showShoutout && !isOpen && (
        <div 
          onClick={handleOpenChat}
          className="fixed bottom-40 right-4 z-[69] max-w-[200px] bg-accent text-black p-3 rounded-2xl rounded-br-none shadow-2xl border-2 border-black animate-bounce cursor-pointer"
        >
          <p className="text-[10px] font-black uppercase leading-tight">{shoutoutText}</p>
          <div className="absolute -bottom-2 right-0 w-4 h-4 bg-accent border-r-2 border-b-2 border-black transform rotate-45"></div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => (isOpen ? setIsOpen(false) : handleOpenChat())}
        className="fixed bottom-24 right-4 z-[70] w-14 h-14 bg-primary rounded-full shadow-2xl flex items-center justify-center text-white neon-glow-pink hover:scale-110 active:scale-95 transition-all border-4 border-background"
      >
        <span className="material-icons-round text-3xl">{isOpen ? 'close' : 'workspace_premium'}</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-4 left-4 md:left-auto md:w-96 h-[500px] z-[70] bg-surface border border-primary/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <header className="p-4 bg-gradient-to-r from-primary to-accent/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                <span className="material-icons-round text-white">workspace_premium</span>
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-tighter text-white leading-none">MemeMaharaj 2.0</h3>
                <span className="text-[8px] font-bold uppercase tracking-widest text-white/70 animate-pulse">Online & Spitting Facts</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
              <span className="material-icons-round">expand_more</span>
            </button>
          </header>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs font-medium leading-relaxed shadow-lg ${
                  msg.role === 'user' 
                  ? 'bg-accent text-black rounded-tr-none font-bold' 
                  : 'bg-white/5 text-slate-200 border border-white/10 rounded-tl-none backdrop-blur-md'
                }`}>
                  {msg.text || (idx === messages.length - 1 && isTyping && <span className="animate-pulse">Maharaj is cooking...</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-background border-t border-primary/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask the Maharaj..."
              className="flex-1 bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all placeholder:text-slate-600"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 active:scale-90 transition-all disabled:opacity-50"
            >
              <span className="material-icons-round">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
