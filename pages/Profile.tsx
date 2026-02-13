
import React from 'react';
import { Professional } from '../types';

interface ProfileProps {
  professional: Professional;
  onBack: () => void;
  onSchedule: (p: Professional) => void;
}

const Profile: React.FC<ProfileProps> = ({ professional, onBack, onSchedule }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark pb-32">
      <header className="absolute top-0 w-full z-20 px-4 pt-12 pb-4 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
          <span className="material-icons-round">arrow_back</span>
        </button>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <span className="material-icons-round">share</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <span className="material-icons-round text-red-400">favorite</span>
          </button>
        </div>
      </header>

      <main className="flex-grow overflow-y-auto no-scrollbar">
        <div className="relative h-96 w-full">
          <img src={professional.imageUrl} className="w-full h-full object-cover" alt={professional.name} />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
        </div>

        <div className="px-5 -mt-12 relative z-10">
          <div className="flex items-end justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">{professional.name}</h1>
              <p className="text-gray-500 font-medium mt-1">{professional.role}</p>
            </div>
            {professional.isTopPro && (
              <div className="bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full flex items-center gap-1 border border-blue-200">
                <span className="material-icons-round text-primary text-sm">verified</span>
                <span className="text-[10px] font-black text-primary uppercase tracking-wide">Verificado</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-6 mt-6 pb-6 border-b border-gray-200 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-1.5 rounded-lg text-primary">
                <span className="material-icons-round text-lg">star</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-none dark:text-white">{professional.rating.toFixed(1)}</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">{professional.reviewsCount} Avaliações</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200 dark:bg-neutral-800"></div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-1.5 rounded-lg text-primary">
                <span className="material-icons-round text-lg">work_history</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-none dark:text-white">{professional.experienceYears}+</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Anos Exp.</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300 mb-4">
              <span className="material-icons-round text-primary mt-0.5">location_on</span>
              <span className="text-sm font-medium leading-relaxed">{professional.location}</span>
            </div>
            <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Sobre a {professional.name.split(' ')[0]}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {professional.bio}
              </p>
            </div>
          </div>

          <div className="mt-8 mb-8">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4 px-1">Serviços Oferecidos</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Atualização de Painel', price: 1200, icon: 'electrical_services' },
                { name: 'Instalação de Iluminação', price: 150, icon: 'lightbulb' },
                { name: 'Reparo de Tomadas', price: 95, icon: 'power' }
              ].map((svc, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-neutral-800 flex items-center justify-center text-primary">
                      <span className="material-icons-round">{svc.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm dark:text-white">{svc.name}</h4>
                      <p className="text-xs text-gray-500">A partir de R$ {svc.price}</p>
                    </div>
                  </div>
                  <span className="material-icons-round text-gray-300">chevron_right</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 w-full max-w-md bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-neutral-800 px-6 py-4 pb-8 z-20 shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-black uppercase tracking-wide">A partir de</span>
            <span className="text-2xl font-black text-gray-900 dark:text-white">R$ {professional.pricePerHour}<span className="text-sm font-normal text-gray-500">/h</span></span>
          </div>
          <button 
            onClick={() => onSchedule(professional)}
            className="flex-1 bg-primary text-white font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Agendar Agora</span>
            <span className="material-icons-round text-lg">calendar_today</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
