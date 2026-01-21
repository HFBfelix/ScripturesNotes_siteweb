import React from 'react';
import { CheckCircle2, Sparkles, Brain, BookOpen } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* PARTIE 1 : LA PRISE DE NOTES (LA PROMESSE DE MÉDITATION) */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-40">
          <div className="relative animate-fade-in-up">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            {/* Remplace par ta capture d'écran réelle de la prise de note */}
            <img 
              src="/noteverset.png" 
              alt="Interface Scriptures Notes - Prise de notes bibliques intelligente" 
              className="rounded-[2.5rem] shadow-2xl border-[10px] border-[#F2F2F7] max-w-md mx-auto" 
            />
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-[2rem] shadow-2xl hidden lg:block animate-float">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={20} />
                <span className="font-black italic uppercase text-xs tracking-widest">Verset Détecté</span>
              </div>
              <p className="font-bold text-lg">Hébreux 11:1</p>
              <p className="text-[10px] opacity-70 leading-tight max-w-[150px]">« Or la foi est une ferme assurance des choses qu'on espère... »</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#1C1C1E] leading-tight italic uppercase">
              Gravez la Parole <br /><span className="text-primary">dans votre cœur.</span>
            </h2>
            <p className="text-xl text-script-subtext leading-relaxed">
              Ne perdez plus le fil de votre méditation. Notre technologie détecte vos références bibliques pour les afficher instantanément au sein de votre note.
            </p>
            
            <div className="space-y-6">
              <FeatureItem 
                title="Versets intégrés" 
                desc="Les références bibliques apparaissent instantanément dans vos notes. Plus besoin d'ouvrir une autre application, tout est là." 
              />
              <FeatureItem 
                title="Reconnaissance intelligente" 
                desc="Notre système détecte automatiquement les références et affiche le verset complet en un clic." 
              />
              <FeatureItem 
                title="Mode sans distraction" 
                desc="Un environnement épuré pour vous concentrer sur l'essentiel : votre méditation et vos réflexions." 
              />
            </div>
          </div>
        </div>

        {/* PARTIE 2 : L'ASSISTANT IA (LA RELATION & CONNAISSANCE) */}
        <div className="bg-[#1C1C1E] rounded-[3.5rem] p-8 md:p-16 text-white grid md:grid-cols-2 gap-16 items-center mb-40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-0"></div>
          
          <div className="relative z-10 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/10">
              <Sparkles size={16} className="text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Assistant IA Biblique</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight italic uppercase">
              Une Sagesse <br />Fondée sur <span className="text-primary">la Parole de DIEU.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Posez vos questions sur la vie, la foi ou les épreuves. Notre IA ne spécule pas : elle répond exclusivement à partir des Écritures pour vous éclairer.
            </p>
            <ul className="grid grid-cols-1 gap-4">
              <li className="flex items-center gap-3 font-bold text-sm text-gray-200"><CheckCircle2 className="text-primary" size={20} /> Réponses 100% Bibliques</li>
              <li className="flex items-center gap-3 font-bold text-sm text-gray-200"><CheckCircle2 className="text-primary" size={20} /> Accompagnement spirituel</li>
              <li className="flex items-center gap-3 font-bold text-sm text-gray-200"><CheckCircle2 className="text-primary" size={20} /> conversations naturelles</li>
            </ul>
          </div>
          
          <div className="relative z-10 order-1 md:order-2">
            {/* Ici on met ta vidéo ou une image de l'IA */}
            <div className="aspect-[9/16] max-w-[280px] mx-auto bg-[#2C2C2E] rounded-[2.5rem] border-[6px] border-[#38383A] shadow-inner overflow-hidden">
               <video 
                 src="/videoassistantIA.mp4" 
                 autoPlay loop muted playsInline 
                 className="w-full h-full object-cover opacity-90"
               />
            </div>
          </div>
        </div>

        {/* PARTIE 3 : LES JEUX (LA MÉMORISATION) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-[#1C1C1E] mb-6 italic uppercase">Apprendre. <span className="text-primary">Mémoriser.</span> S'amuser.</h2>
          <p className="text-lg text-script-subtext">La connaissance de la Bible ne doit pas être une corvée. Relevez nos défis quotidiens pour graver les Écritures dans votre mémoire.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           <GameCard 
             icon="🧩" 
             title="Anagramme Flash" 
             desc="Démêlez les mots-clés de la semaine pour mieux les retenir. 500+ questions" 
           />
           <GameCard 
             icon="📖" 
             title="Versets à trous" 
             desc="Testez votre mémorisation des Écritures de manière ludique. 200+ citations" 
           />
           <GameCard 
             icon="🏆" 
             title="Défi des Livres" 
             desc="Maîtrisez la structure de la Parole, de la Genèse à l'Apocalypse. 150+ énigmes" 
           />
        </div>

      </div>
    </section>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-5 group">
      <div className="flex-shrink-0 w-12 h-12 bg-[#F2F2F7] rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <CheckCircle2 size={24} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#1C1C1E] mb-1">{title}</h3>
        <p className="text-script-subtext leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function GameCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="p-8 bg-[#F2F2F7] rounded-[2.5rem] hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 text-center">
      <div className="text-4xl mb-6">{icon}</div>
      <h3 className="text-xl font-black mb-3 italic uppercase">{title}</h3>
      <p className="text-script-subtext text-sm leading-relaxed">{desc}</p>
    </div>
  );
}