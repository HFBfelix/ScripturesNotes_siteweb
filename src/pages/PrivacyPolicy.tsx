import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, Lock, EyeOff, FileText, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={true} />
  
      {/* Ajout de pt-32 pour descendre tout le contenu par rapport à la Navbar */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        
        {/* Ajout de mb-16 pour donner de l'espace après le bouton */}
        <div className="mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary font-bold text-xs uppercase tracking-widest transition-all group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
        </div>

        {/* En-tête de la page */}
        <div className="mb-16 border-b border-gray-100 pb-8 text-left">
          <h1 className="text-4xl md:text-5xl font-black text-[#1C1C1E] mb-4 italic uppercase">
            Politique de <span className="text-primary">Confidentialité</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.2em]">
            Dernière mise à jour : 21 Janvier 2026
          </p>
        </div>

        {/* Corps du texte - Strictement inchangé */}
        <div className="space-y-12 text-left">
          
          <section className="space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              La présente Politique de Confidentialité décrit la manière dont <strong>Scriptures Notes</strong> collecte, utilise et protège vos informations lors de l'utilisation de notre application mobile et de notre site web.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-black text-[#1C1C1E] uppercase italic">
              <FileText size={20} className="text-primary" /> 1. Collecte des Données
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous collectons uniquement les données nécessaires au bon fonctionnement de l'expérience Scriptures Notes :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Données d'identification :</strong> Adresse e-mail pour la création de compte et la synchronisation.</li>
              <li><strong>Contenu utilisateur :</strong> Vos notes bibliques et méditations sont stockées de manière sécurisée.</li>
              <li><strong>Données techniques :</strong> Informations anonymisées (type d'appareil, version OS) pour la stabilité.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-black text-[#1C1C1E] uppercase italic">
              <Lock size={20} className="text-primary" /> 2. Intelligence Artificielle (IA)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Notre Assistant IA traite vos questions pour fournir des réponses basées exclusivement sur les Écritures.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-primary italic text-sm text-gray-500">
              "Confidentialité stricte : Vos notes personnelles ne sont jamais utilisées pour entraîner des modèles d'IA tiers."
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-black text-[#1C1C1E] uppercase italic">
              <ShieldCheck size={20} className="text-primary" /> 3. Conservation et Sécurité
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous appliquons des protocoles de chiffrement <strong>SSL/TLS</strong> de niveau industriel. Vos données sont hébergées sur des serveurs sécurisés garantissant l'intégrité de vos méditations personnelles.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-black text-[#1C1C1E] uppercase italic">
              <EyeOff size={20} className="text-primary" /> 4. Non-partage des Données
            </h2>
            <p className="text-gray-600 leading-relaxed font-bold text-[#1C1C1E]">
              Scriptures Notes ne vend, ne loue et ne partage jamais vos données personnelles à des fins commerciales ou publicitaires.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#1C1C1E] uppercase italic">5. Vos Droits</h2>
            <p className="text-gray-600 leading-relaxed">
              Vous disposez d'un droit d'accès, de rectification et d'effacement de vos données. Conformément aux directives Apple et Google, vous pouvez supprimer votre compte et l'intégralité de vos données directement depuis les réglages de l'application.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
            <h2 className="text-xl font-black text-[#1C1C1E] uppercase italic mb-4">6. Contact</h2>
            <p className="text-gray-600 mb-2 font-bold">Responsable de la protection des données :</p>
            <a 
              href="mailto:hfentreprises@gmail.com" 
              className="text-primary font-black hover:underline transition-all"
            >
              hfentreprises@gmail.com
            </a>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}