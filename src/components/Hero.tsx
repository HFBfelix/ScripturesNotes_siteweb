import React from 'react';
import AppMockup from './AppMockup';

export default function Hero() {
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
          La première application de prise de notes qui intègre la Bible <br className="hidden md:block" /> 
          directement dans vos pensées. Étudiez, méditez, grandissez.
          </p>
          
          {/* ZONE DE TÉLÉCHARGEMENT EXPLICITE ET PROPRE */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
            <a 
              href="#" 
              target="_blank" 
              className="transition-all hover:scale-105 active:scale-95 hover:shadow-xl rounded-2xl overflow-hidden"
            >
              <img src="/appstorebadge.png" alt="Télécharger sur l'App Store" className="h-16 w-auto" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              className="transition-all hover:scale-105 active:scale-95 hover:shadow-xl rounded-2xl overflow-hidden"
            >
              <img src="/playstorebadge.png" alt="Disponible sur Google Play" className="h-16 w-auto" />
            </a>
          </div>
        </div>

        {/* Le Mockup iPhone - Mise en avant visuelle avec une ombre portée douce */}
        <div className="relative w-full max-w-[320px] mx-auto animate-float shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-[3rem]">
          <AppMockup />
          
          {/* Décoration subtile pour le côté sympathique */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] bg-[#2A528A]/5 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}