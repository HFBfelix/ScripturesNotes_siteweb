import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDownloadClick = () => {
    // Si on n'est pas sur la page d'accueil, on y va d'abord
    if (location.pathname !== '/') {
      navigate('/');
      // On laisse un petit délai pour le chargement avant de scroller
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // Si on est déjà sur l'index, on remonte simplement vers le Hero
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-[#C6C6C8] py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO : Redirige vers Index */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/ScripturesNotes.png" alt="Logo" className="w-20 h-20 rounded-lg" />
          <span className="text-lg font-bold tracking-tight text-[#1C1C1E]"> </span>
        </Link>

        {/* BOUTON : Scroll vers la zone de téléchargement (Hero) */}
        <button 
          onClick={handleDownloadClick}
          className="bg-[#2A528A] text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hover:opacity-90 transition-all active:scale-95"
        >
          TÉLÉCHARGER
        </button>
      </div>
    </nav>
  );
}