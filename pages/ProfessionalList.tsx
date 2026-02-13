
import React from 'react';
import { PROFESSIONALS } from '../constants';
import { ViewState, Professional } from '../types';

interface ProfessionalListProps {
  category?: string;
  onNavigate: (view: ViewState, data?: any) => void;
  onBack: () => void;
}

const ProfessionalList: React.FC<ProfessionalListProps> = ({ category, onNavigate, onBack }) => {
  // Simple heuristic for filtering: check if category name matches role or bio
  const filteredPros = category 
    ? PROFESSIONALS.filter(p => 
        p.role.toLowerCase().includes(category.toLowerCase()) || 
        p.categories.some(c => c.toLowerCase().includes(category.toLowerCase())) ||
        category.toLowerCase().includes(p.role.toLowerCase())
      )
    : PROFESSIONALS;

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md pt-12 pb-4 px-6 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-neutral-100 transition-colors">
            <span className="material-icons-round text-neutral-900 dark:text-white">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold text-neutral-900 dark:text-white">{category || 'Profissionais'}</h1>
          <button className="p-2 -mr-2 rounded-full hover:bg-neutral-100 transition-colors relative">
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
            <span className="material-icons-round text-neutral-900 dark:text-white">tune</span>
          </button>
        </div>
        
        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-1">
          {['Todos', 'Melhor Avaliados', 'Disponíveis', 'Perto de Mim'].map((tab, idx) => (
            <button 
              key={tab}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                idx === 0 ? 'bg-primary text-white' : 'bg-white dark:bg-surface-dark border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-between px-2 mb-2">
          <span className="text-sm font-medium text-neutral-500">{filteredPros.length} Profissionais encontrados</span>
          <div className="text-primary text-sm font-bold flex items-center gap-1">
            Avaliação <span className="material-icons-round text-sm">expand_more</span>
          </div>
        </div>

        {filteredPros.length > 0 ? (
          filteredPros.map(pro => (
            <div 
              key={pro.id}
              onClick={() => onNavigate('PROFILE', { professional: pro })}
              className="bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-neutral-100 dark:border-neutral-800 hover:shadow-md transition-all cursor-pointer relative overflow-hidden group"
            >
              {pro.isTopPro && (
                <div className="absolute top-0 right-0 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  <span className="material-icons-round text-xs">verified</span> Top Pro
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img 
                    src={pro.imageUrl} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-neutral-800 shadow-md"
                    alt={pro.name}
                  />
                  {pro.isOnline && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-surface-dark"></div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-neutral-900 dark:text-white text-lg leading-tight">{pro.name}</h3>
                    {!pro.isTopPro && <span className="material-icons-round text-neutral-300">bookmark_border</span>}
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-sm">
                    <span className="material-icons-round text-primary text-sm">star</span>
                    <span className="font-bold dark:text-white">{pro.rating.toFixed(1)}</span>
                    <span className="text-neutral-400 text-xs">({pro.reviewsCount} avaliações)</span>
                  </div>
                  <p className="text-neutral-500 text-sm mt-2 flex items-center gap-1">
                    <span className="material-icons-round text-xs opacity-70">location_on</span>
                    {pro.distance ? `${pro.distance} • ` : ''} {pro.location}
                  </p>
                </div>
              </div>

              {pro.categories && (
                <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
                  <div className="flex gap-2">
                    {pro.categories.slice(0, 2).map(cat => (
                      <span key={cat} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-[10px] font-bold text-neutral-600 dark:text-neutral-400">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <span className="text-primary font-black text-sm">A partir de R$ {pro.pricePerHour}/h</span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-20 px-6">
            <span className="material-icons-round text-6xl text-neutral-200 mb-4">person_search</span>
            <p className="text-neutral-500 font-medium">Nenhum profissional encontrado nesta categoria.</p>
            <button onClick={onBack} className="mt-4 text-primary font-bold">Ver todas as categorias</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProfessionalList;
