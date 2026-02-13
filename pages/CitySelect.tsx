
import React from 'react';
import { CITIES } from '../constants';

interface CitySelectProps {
  onSelect: (city: string) => void;
}

const CitySelect: React.FC<CitySelectProps> = ({ onSelect }) => {
  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-background-dark animate-fade-in-up">
      <header className="px-6 pt-12 pb-6">
        <h1 className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white mb-2">
          Selecione sua cidade
        </h1>
        <p className="text-gray-500 text-sm font-medium">
          Encontre os melhores profissionais locais perto de você.
        </p>
        
        <div className="mt-8 relative">
          <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
          <input 
            type="text" 
            placeholder="Buscar cidade ou CEP"
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-none ring-1 ring-gray-100 dark:ring-neutral-800 bg-gray-50 dark:bg-neutral-900 dark:text-white focus:ring-2 focus:ring-primary shadow-subtle"
          />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar px-6 pb-12">
        <button 
          onClick={() => onSelect('São Paulo, SP')}
          className="w-full flex items-center p-4 bg-primary/5 hover:bg-primary/10 rounded-2xl transition-colors border border-primary/10 group"
        >
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg group-active:scale-90 transition-transform">
            <span className="material-icons-round text-lg">near_me</span>
          </div>
          <div className="ml-4 text-left">
            <span className="block text-sm font-bold dark:text-white">Usar minha localização atual</span>
            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">Habilitar GPS</span>
          </div>
          <span className="material-icons-round ml-auto text-primary">chevron_right</span>
        </button>

        <div className="mt-8 space-y-1 bg-gray-50 dark:bg-neutral-900/50 rounded-3xl p-2">
          <h3 className="px-4 pt-4 pb-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">Cidades Disponíveis</h3>
          {CITIES.map(city => (
            <button 
              key={city}
              onClick={() => onSelect(city)}
              className="w-full flex items-center justify-between p-4 bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-2xl transition-all border-b border-gray-100 last:border-0 group mb-1 shadow-sm"
            >
              <span className="text-base font-bold text-gray-800 dark:text-gray-200">{city}</span>
              <span className="material-icons-round text-gray-300 group-hover:text-primary transition-colors">chevron_right</span>
            </button>
          ))}
        </div>

        <div className="mt-8 p-8 bg-background-light dark:bg-neutral-900/80 rounded-3xl flex flex-col items-center text-center border border-gray-100 dark:border-neutral-800">
          <div className="w-12 h-12 bg-gray-200 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-4">
            <span className="material-icons-round text-gray-400">location_off</span>
          </div>
          <h4 className="text-sm font-bold dark:text-white mb-1">Não vê sua cidade?</h4>
          <p className="text-xs text-gray-500 mb-6">Estamos expandindo rapidamente. Conte-nos para onde devemos ir a seguir.</p>
          <button className="text-primary font-bold text-sm">Solicitar uma cidade</button>
        </div>
      </main>
    </div>
  );
};

export default CitySelect;
