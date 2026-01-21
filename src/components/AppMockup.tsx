import React from 'react';

export default function AppMockup() {
  return (
    <div className="relative mx-auto w-[280px] h-[580px] bg-white rounded-[3rem] border-[10px] border-[#1F2937] shadow-2xl overflow-hidden animate-float">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1F2937] rounded-b-2xl z-20"></div>

      {/* Contenu App */}
      <div className="h-full bg-[#F2F2F7] flex flex-col pt-10">
        <div className="px-5">
           {/* Header */}
           <div className="flex justify-between items-center mb-6">
              <span className="text-blue-500 font-bold text-sm italic">〈 Notes</span>
              <div className="flex space-x-2">
                 <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-blue-500 shadow-sm">↑</div>
                 <button className="bg-white/80 text-gray-600 px-3 py-1 rounded-full text-[9px] font-black italic shadow-sm uppercase">Modifier</button>
              </div>
           </div>

           {/* Titre & Tags */}
           <div className="space-y-3 text-left">
              <span className="inline-block bg-white text-gray-400 px-2 py-1 rounded text-[8px] font-black italic uppercase tracking-tighter shadow-sm border border-gray-100">Méditée</span>
              <h2 className="text-4xl font-black text-gray-900 leading-none italic uppercase">La foi</h2>
              <span className="inline-block bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold"># foi</span>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">20 Janvier 2026</p>
           </div>

           {/* Pop-up Verset (Hébreux 3:5) */}
           <div className="mt-8 bg-white rounded-[1.5rem] shadow-xl p-5 border border-gray-50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
             <p className="text-[8px] text-gray-300 font-black uppercase tracking-widest mb-1">Parole Sacrée</p>
             <h3 className="text-lg font-black text-gray-900 italic mb-2">Hébreux 3:5</h3>
             <p className="text-[12px] leading-relaxed text-gray-700 font-medium">
               <span className="text-blue-500 font-black mr-1 italic">5</span>
               Pour Moïse, il a été fidèle dans toute la maison de Dieu, comme serviteur...
             </p>
           </div>
        </div>

        {/* Tab Bar Simulé */}
        <div className="mt-auto w-full h-16 border-t border-gray-100 flex items-center justify-around px-2 bg-white/95 backdrop-blur-sm">
          <div className="flex flex-col items-center text-blue-600"><span className="text-lg">📋</span><span className="text-[7px] font-bold uppercase tracking-tighter">Notes</span></div>
          <div className="flex flex-col items-center text-gray-300"><span className="text-lg">📖</span><span className="text-[7px] font-bold uppercase tracking-tighter">Bible</span></div>
          <div className="w-11 h-11 bg-[#0F172A] rounded-full flex items-center justify-center text-white shadow-lg -translate-y-4 text-xl">+</div>
          <div className="flex flex-col items-center text-gray-300"><span className="text-lg">🎮</span><span className="text-[7px] font-bold uppercase tracking-tighter">Jeux</span></div>
          <div className="flex flex-col items-center text-gray-300"><span className="text-lg">⚙️</span><span className="text-[7px] font-bold uppercase tracking-tighter">Réglages</span></div>
        </div>
      </div>
    </div>
  );
}