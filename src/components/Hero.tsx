import React, { useState } from 'react';
import AppMockup from './AppMockup';
import { supabase } from '../lib/supabase'; // Vérifie que ce chemin est correct

export default function Hero() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleJoinBeta = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email.trim().toLowerCase() }]);

      if (error) {
        if (error.code === '23505') {
          alert("Vous êtes déjà inscrit sur la liste d'attente ! Merci pour votre patience.");
        } else {
          throw error;
        }
      } else {
        alert("C'est noté ! Vous recevrez votre invitation pour la bêta prochainement.");
        setEmail('');
      }
    } catch (err) {
      console.error("Erreur d'inscription:", err);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-32 pb-24 bg-[#F2F2F7] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Logo Iconique */}
        <div className="animate-fade-in-up duration-700">
          <img 
            src="/ScripturesNotes.png" 
            alt="Scriptures Notes" 
            className="w-28 h-28 mx-auto mb-10 rounded-[32px] shadow-apple border-[6px] border-white transition-transform hover:rotate-3" 
          />
          
          <h1 className="text-5xl md:text-7xl font-[900] text-[#1C1C1E] mb-8 tracking-tight leading-[1.1]">
            Gravez la Parole de Dieu, <br />
            <span className="text-[#2A528A]">une note à la fois.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-[#636366] text-xl md:text-2xl font-medium leading-relaxed mb-12">
            La première application de prise de notes avec <span className="text-[#1C1C1E] font-bold">Assistant IA Biblique</span> intégré. <br className="hidden md:block" /> 
            Étudiez, méditez, grandissez.
          </p>
          
          {/* ZONE D'ENGAGEMENT BÊTA */}
          <div className="max-w-md mx-auto mb-16 w-full">
            <form 
              onSubmit={handleJoinBeta}
              className="bg-white p-2 rounded-[2rem] shadow-apple border border-white flex flex-col sm:flex-row items-center gap-2"
            >
              <input 
                type="email" 
                placeholder="Votre email..." 
                required
                className="flex-1 px-6 py-4 bg-transparent text-[#1C1C1E] text-lg outline-none w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <button 
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#2A528A] text-white font-bold shadow-button active:scale-95 transition-all disabled:opacity-50"
              >
                {loading ? 'Inscription...' : 'Rejoindre la Bêta'}
              </button>
            </form>
            <p className="mt-4 text-[#8E8E93] text-sm font-medium">
              ✨ Accès anticipé gratuit • Disponible sur iOS & Android
            </p>
          </div>

          {/* Badges Bientôt Disponibles */}
          <div className="flex gap-4 justify-center items-center mb-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/appstorebadge.png" alt="Bientôt sur App Store" className="h-10 w-auto" />
            <img src="/playstorebadge.png" alt="Bientôt sur Play Store" className="h-10 w-auto" />
          </div>
        </div>

        {/* Le Mockup iPhone */}
        <div className="relative w-full max-w-[320px] mx-auto animate-float shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-[3rem]">
          <AppMockup />
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] bg-[#2A528A]/5 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}