import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Sparkles, 
  Bell, 
  Gamepad2, 
  ShieldCheck, 
  ArrowLeft,
  Hash
} from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
}

const FAQItem = ({ question, answer, icon }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-all px-4 rounded-xl group"
      >
        <div className="flex items-center gap-4">
          <div className="text-primary group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <span className="font-black text-[#1C1C1E] uppercase italic text-sm tracking-tight">
            {question}
          </span>
        </div>
        {isOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="px-14 pb-6 animate-fade-in">
          <div className="text-gray-600 text-sm leading-relaxed font-medium">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={true} />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Bouton Retour avec espacement optimisé */}
        <div className="mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary font-bold text-xs uppercase tracking-widest transition-all group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
        </div>

        {/* En-tête */}
        <div className="mb-16 border-b border-gray-100 pb-8 text-left">
          <h1 className="text-4xl md:text-5xl font-black text-[#1C1C1E] mb-4 italic uppercase">
            Questions <span className="text-primary">Fréquentes</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.2em]">
            Tout savoir sur Scriptures Notes
          </p>
        </div>

        <div className="space-y-2">
          {/* SECTION : UTILISATION */}
          <div className="pt-8 pb-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-4 px-4">Utilisation & Notes</h2>
            
            <FAQItem 
              icon={<Hash size={20} />}
              question="Comment fonctionne l'intégration des versets avec le #"
              answer={
                <p>C'est la magie de Scriptures Notes ! Lors de votre prise de note (prêche, étude), tapez simplement <strong>#</strong> suivi du nom du livre. Un système d'autocomplétion intelligent reconnaît les livres et les abréviations. Une fois validé, le texte biblique complet s'intègre directement dans votre note via notre API. Plus besoin de changer d'application ou d'ouvrir votre Bible physique pendant que vous écrivez.</p>
              }
            />

            <FAQItem 
              icon={<BookOpen size={20} />}
              question="À quoi servent les badges « Lu » et « Médité » ?"
              answer={
                <p>Pour vous aider à méditer « jour et nuit », l'application suit votre cycle de relecture. Un système de notifications vous invite à relire vos notes à des intervalles stratégiques : le lendemain, 5 jours après, puis à 1 mois et 3 mois. Les badges indiquent visuellement votre niveau d'ancrage de la Parole dans votre mémoire.</p>
              }
            />

            <FAQItem 
              icon={<Sparkles size={20} />}
              question="Qu'est-ce que le journal de méditation en bas de note ?"
              answer={
                <p>Chaque note possède un espace dédié en bas de page pour vos relectures. Vous pouvez y noter vos nouvelles pensées ou ce que Dieu vous a révélé à la date précise de votre méditation actuelle, créant ainsi un historique spirituel précieux.</p>
              }
            />
          </div>

          {/* SECTION : IA */}
          <div className="pt-8 pb-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-4 px-4">Assistant IA</h2>
            
            <FAQItem 
              icon={<Sparkles size={20} className="text-purple-500" />}
              question="Pourquoi une seule réponse par jour pour l'IA ?"
              answer={
                <p>L'IA de Scriptures Notes est conçue pour être une aide, pas un remplacement. Nous limitons les réponses pour vous encourager à cultiver votre relation personnelle avec Dieu et à chercher Ses réponses directement dans la prière. L'IA sert de guide 100% basé sur la Bible pour éclairer des points complexes de la vie.</p>
              }
            />

            <FAQItem 
              icon={<ShieldCheck size={20} />}
              question="Mes conversations avec l'IA sont-elles privées ?"
              answer={
                <p>Totalement. Nous ne vendons aucune donnée et vos conversations avec l'assistant ne sont <strong>jamais</strong> utilisées pour entraîner des modèles d'intelligence artificielle tiers. Votre vie spirituelle reste privée.</p>
              }
            />
          </div>

          {/* SECTION : PERSONNALISATION */}
          <div className="pt-8 pb-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-4 px-4">Préférences & Compte</h2>
            
            <FAQItem 
              icon={<Bell size={20} />}
              question="Puis-je gérer mes notifications et mes couleurs ?"
              answer={
                <p>Oui. Dans l'onglet Préférences, vous pouvez activer ou désactiver les rappels de méditation. Vous pouvez également définir la couleur par défaut de vos prochaines notes et modifier vos informations personnelles (Nom, Prénom) pour que l'application s'adapte à vous.</p>
              }
            />

            <FAQItem 
              icon={<Gamepad2 size={20} />}
              question="Les jeux sont-ils vraiment basés sur la Bible ?"
              answer={
                <p>Oui, 100%. Nos quiz et énigmes sont conçus pour tester et développer votre connaissance de la Parole de Dieu de manière ludique et fidèle aux textes originaux.</p>
              }
            />
          </div>

          {/* SECTION : PRIX */}
          <div className="pt-8 pb-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-4 px-4">Tarification</h2>
            
            <FAQItem 
              icon={<CreditCard size={20} className="text-green-500" />}
              question="L'application est-elle gratuite ?"
              answer={
                <p>L'essence même de Scriptures Notes (la prise de notes avec intégration automatique des versets via #) est et restera <strong>toujours gratuite</strong>. Une version Premium optionnelle est en préparation pour ceux qui souhaitent débloquer des fonctionnalités étendues comme l'IA illimitée ou des jeux avancés.</p>
              }
            />
          </div>
        </div>

        {/* Bloc Contact Final */}
        <div className="mt-20 bg-[#F2F2F7] p-10 rounded-[3rem] text-center border border-gray-100">
          <h3 className="font-black text-[#1C1C1E] uppercase italic mb-2">Vous avez une autre question ?</h3>
          <p className="text-gray-500 text-sm mb-6 font-medium">Nous vous apporterons une réponse.</p>
          <a 
            href="mailto:hfentreprises@gmail.com" 
            className="inline-flex items-center gap-2 bg-[#1C1C1E] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-primary transition-all shadow-xl shadow-gray-200"
          >
            Nous contacter par e-mail
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Petit ajout manuel si CreditCard n'est pas importé
const CreditCard = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
);