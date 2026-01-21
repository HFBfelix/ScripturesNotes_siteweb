import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // VERIFICATION DU HONEYPOT
    if (formData.get('_b_trap')) {
      console.warn("Bot detected");
      return;
    }

    setStatus('sending');
    // Simulation d'envoi (on connectera l'API Vercel plus tard)
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <footer className="bg-[#F2F2F7] py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* LIGNE 1 : ARCHITECTURE ORIGINALE */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
            <img src="/ScripturesNotes.png" alt="Logo" className="w-10 h-10 rounded-xl shadow-sm" />
            </Link>
            <div className="text-left">
              <p className="font-black text-[#1C1C1E] text-sm uppercase italic tracking-tighter">Scriptures Notes</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">© 2026 — Méditer. Noter. Grandir.</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[11px] text-gray-500 font-medium italic max-w-xs leading-relaxed">
              « Ta parole est une lampe à mes pieds, et une lumière sur mon sentier. » <br />
              <span className="not-italic font-bold text-primary">— Psaume 119:105</span>
            </p>
          </div>

          <div className="flex gap-4">
             <img src="/appstorebadge.png" alt="App Store" className="h-8 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
             <img src="/playstorebadge.png" alt="Google Play" className="h-8 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>

        <hr className="border-gray-300/50 mb-12" />

        {/* LIGNE 2 : LÉGAL & FORMULAIRE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-2">Informations</h4>
            <Link to="/faq" className="text-xs font-bold text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
               <MessageSquare size={14} /> Questions Fréquentes (FAQ)
            </Link>
            <Link to="/privacy" className="text-xs font-bold text-gray-600 hover:text-primary transition-colors">
              Politique de Confidentialité
            </Link>
            <Link to="/terms" className="text-xs font-bold text-gray-600 hover:text-primary transition-colors">
              Conditions Générales
            </Link>
            
            <div className="mt-4 flex gap-3">
              <a href="https://instagram.com/scripturesnotes_app" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-lg shadow-sm text-gray-500 hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://tiktok.com/@scripturesnotes_app" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-lg shadow-sm text-gray-500 hover:text-primary transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="bg-white p-8 rounded-3xl border border-green-100 flex flex-col items-center justify-center gap-4 animate-fade-in shadow-sm">
                <CheckCircle2 className="text-green-500" size={40} />
                <div className="text-center">
                  <p className="font-black text-[#1C1C1E] uppercase text-xs tracking-widest">Message envoyé</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">Notre équipe vous répondra sous 24h.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="text" name="_b_trap" className="hidden" tabIndex={-1} autoComplete="off" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="E-mail" 
                    required
                    className="px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none font-medium"
                  />
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Sujet" 
                    required
                    className="px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none font-medium"
                  />
                </div>
                
                <div className="relative">
                  <textarea 
                    name="message"
                    placeholder="Comment pouvons-nous vous aider ?" 
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none font-medium resize-none"
                  ></textarea>
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="absolute bottom-3 right-3 p-3 bg-[#1C1C1E] text-white rounded-lg font-black uppercase text-[10px] tracking-widest hover:bg-primary transition-all flex items-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    {status === 'sending' ? '...' : <><Send size={14} /> Envoyer</>}
                  </button>
                </div>
              </form>
            )}
            <div className="flex justify-between items-center mt-4">
              <p className="text-[9px] text-gray-400 italic font-medium">Soutien prioritaire Premium.</p>
              <p className="text-[9px] text-gray-300 font-bold uppercase tracking-tighter text-right">Secured by ScripturesNotes Anti-Bot</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}