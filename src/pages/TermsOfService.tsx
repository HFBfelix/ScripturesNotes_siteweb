import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Scale, AlertCircle, CreditCard, UserCheck, ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={true} />
      
      {/* Espacement haut (pt-32) pour laisser respirer sous la Navbar */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        
        {/* Bouton de retour avec grand espacement (mb-16) */}
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
            Conditions <span className="text-primary">Générales</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.2em]">
            En vigueur au 21 Janvier 2026
          </p>
        </div>

        <div className="space-y-12 text-left">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-black text-[#1C1C1E] uppercase italic">
              <UserCheck size={20} className="text-primary" /> 1. Acceptation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              En utilisant <strong>Scriptures Notes</strong>, vous acceptez les présentes conditions. Nous nous réservons le droit de les modifier pour refléter les évolutions de nos services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-black text-[#1C1C1E] uppercase italic">
              <AlertCircle size={20} className="text-primary" /> 2. Utilisation de l'IA
            </h2>
            <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-400 text-sm text-amber-900">
              <strong>Avertissement :</strong> L'Assistant IA fournit des analyses à titre informatif. L'utilisateur est seul responsable de l'interprétation théologique des résultats.
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-black text-[#1C1C1E] uppercase italic">
              <CreditCard size={20} className="text-primary" /> 3. Abonnement Premium
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Le service propose un accès Premium à <strong>0,99€/mois</strong>. Ce tarif permet l'accès aux fonctions avancées (IA illimitée, Jeux débloqués). L'abonnement est sans engagement.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#1C1C1E] uppercase italic">4. Propriété Intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">
              Le contenu, l'interface et les algorithmes sont la propriété exclusive de <strong>Scriptures Notes Inc.</strong>
            </p>
          </section>

          {/* Section Contact */}
          <section className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
            <h2 className="text-xl font-black text-[#1C1C1E] uppercase italic mb-4">5. Contact</h2>
            <p className="text-gray-600">
              Pour toute question juridique : <br />
              <strong className="text-primary">hfentreprises@gmail.com</strong>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}