import React from 'react';
import { Check, Calendar, Crown, Bell } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-[#0F172A] text-white font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Titre principal selon maquette */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Gratuit Aujourd'hui, <br />
            <span className="text-[#FBBF24]">Abordable Demain</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Profitez de toutes les fonctionnalités gratuitement pendant notre phase de lancement. 
            Dans 6 mois, nous passerons à un modèle freemium accessible à tous.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* CARTE GAUCHE : MAINTENANT (GRATUIT) */}
          <div className="p-10 rounded-[2.5rem] bg-[#1E293B]/50 border border-slate-800 flex flex-col relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#059669]/20 rounded-2xl text-[#10B981]">
                <Calendar size={32} />
              </div>
              <div>
                <span className="block font-bold text-xl">Maintenant</span>
                <span className="text-slate-400 text-sm">Phase de lancement</span>
              </div>
            </div>

            <div className="mb-10">
              <div className="text-6xl font-bold mb-2">Gratuit</div>
            </div>

            <ul className="space-y-5 mb-12 flex-grow">
              <PricingLink text="Toutes les fonctionnalités incluses" />
              <PricingLink text="Notes avec versets intégrés" />
              <PricingLink text="Assistant IA biblique" />
              <PricingLink text="Accès à tous les jeux" />
              <PricingLink text="Synchronisation cloud" />
            </ul>

            <div className="mt-auto p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50 flex items-center gap-3 text-sm text-slate-400">
              <Calendar size={18} />
              Disponible jusqu'à la transition freemium
            </div>
          </div>

          {/* CARTE DROITE : PREMIUM (0,99€) */}
          <div className="p-10 rounded-[2.5rem] border-2 border-[#FBBF24] bg-[#1E293B]/30 flex flex-col relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FBBF24] text-slate-900 px-6 py-1 rounded-full text-sm font-bold shadow-lg">
              Dans 6 mois
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#FBBF24]/10 rounded-2xl text-[#FBBF24]">
                <Crown size={32} />
              </div>
              <div>
                <span className="block font-bold text-xl">Premium</span>
                <span className="text-slate-400 text-sm">Modèle Freemium</span>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold">0,99€</span>
                <span className="text-slate-400 font-medium italic">/mois TTC</span>
              </div>
            </div>

            <ul className="space-y-5 mb-12 flex-grow">
              <PricingLink text="Version gratuite avec fonctions de base" dimmed />
              <PricingLink text="Notes illimitées (Premium)" active />
              <PricingLink text="Assistant IA avancé (Premium)" active />
              <PricingLink text="Tous les jeux débloqués (Premium)" active />
              <PricingLink text="Support prioritaire (Premium)" active />
            </ul>

            <button className="w-full py-5 bg-transparent border border-slate-700 hover:border-[#FBBF24] hover:bg-[#FBBF24]/5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 text-white">
              <Bell size={20} className="text-[#FBBF24]" />
              Disponible bientôt
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

function PricingLink({ text, active = false, dimmed = false }: { text: string; active?: boolean; dimmed?: boolean }) {
  return (
    <li className={`flex items-start gap-4 ${dimmed ? 'opacity-50' : ''}`}>
      <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${active ? 'bg-[#FBBF24]' : 'bg-[#10B981]'}`}>
        <Check size={14} className={active ? 'text-slate-900' : 'text-white'} strokeWidth={3} />
      </div>
      <span className="text-slate-200 font-medium">{text}</span>
    </li>
  );
}