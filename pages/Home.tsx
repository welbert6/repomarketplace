
import React from 'react';
import { CATEGORIES } from '../constants';
import { ViewState } from '../types';

interface HomeProps {
  onNavigate: (view: ViewState, data?: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark pb-24">
      <header className="px-6 pt-12 pb-6 sticky top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-30">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-neutral-500 text-sm font-medium mb-1">Bom dia, Alex</p>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
              O que vamos<br/>resolver hoje?
            </h1>
          </div>
          <button className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-200 p-0.5">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlXjZW5wtS4M0mNO3ZMt_o-f_vyrHnk5PTgczZXhrXo3hiEAIic-5NhQqNC9zY3iUWO4kGQqE-UK9PVFDKf4HlTPqovtJ6o58o7mYIr87TkKkDgpnW0TLT63yzwpRb67d10S4FuBy8cHl-hi6xJJXcCpnu8Hg8amRRIPwNWL3JFPJ7MmQ7nCBkQNUeCx_CwyJgG_EB4Q4Jx6NbYaNHVnQEKmH1Y-C7O1QGrkRt7zMuXmK-IGtVuNof2TzqZQWwtScRlM5Cqb5XkPMA" 
                className="w-full h-full rounded-full object-cover"
                alt="Profile"
              />
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </button>
        </div>

        <div className="mt-6 relative">
          <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">search</span>
          <input 
            type="text" 
            placeholder="Buscar serviços, profissionais..."
            className="w-full pl-12 pr-14 py-4 rounded-3xl border-none shadow-card bg-white dark:bg-surface-dark dark:text-white focus:ring-2 focus:ring-primary/20"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
            <span className="material-icons-outlined text-sm">tune</span>
          </button>
        </div>
      </header>

      <main className="px-6 flex-1 overflow-y-auto no-scrollbar">
        <section className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Categorias</h2>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
              <span className="material-icons-outlined text-base">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => onNavigate('PROFESSIONAL_LIST', { category: cat.name })}
                className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-card hover:shadow-soft transition-all flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-icons-round text-3xl">{cat.icon}</span>
                </div>
                <span className="font-semibold text-neutral-800 dark:text-white text-sm">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-5">Próximos horários</h2>
          <div className="space-y-3">
            {[
              { label: 'Massagem Relaxante', time: 'Hoje, 14:00', icon: 'spa', color: 'bg-primary/10', textColor: 'text-primary' },
              { label: 'Limpeza Padrão', time: 'Amanhã, 09:00', icon: 'cleaning_services', color: 'bg-orange-50', textColor: 'text-orange-600' },
              { label: 'Reparo Elétrico', time: 'Hoje, 16:30', icon: 'home_repair_service', color: 'bg-blue-50', textColor: 'text-blue-600' }
            ].map((slot, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-neutral-100 dark:border-neutral-800 flex items-center justify-between shadow-subtle">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${slot.color} ${slot.textColor}`}>
                    <span className="material-icons-round">{slot.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm dark:text-white">{slot.label}</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">{slot.time}</p>
                  </div>
                </div>
                <button 
                  onClick={() => onNavigate('PROFESSIONAL_LIST', { category: slot.label })}
                  className="text-primary font-bold text-sm px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Agendar
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-3 mt-8">
          <button className="flex items-center justify-center gap-3 w-full py-4 border border-neutral-300 dark:border-neutral-700 rounded-2xl text-neutral-600 dark:text-neutral-300 font-semibold">
            <span className="material-icons-round text-lg">instagram</span> Instagram
          </button>
          <button className="flex items-center justify-center gap-3 w-full py-4 border border-neutral-300 dark:border-neutral-700 rounded-2xl text-neutral-600 dark:text-neutral-300 font-semibold">
            <span className="material-icons-round text-lg">whatsapp</span> WhatsApp
          </button>
        </div>
      </main>

      <nav className="fixed bottom-0 w-full max-w-md bg-white dark:bg-surface-dark border-t border-neutral-200 dark:border-neutral-800 px-6 py-4 flex justify-around">
        <button className="text-primary flex flex-col items-center">
          <span className="material-icons-round">home</span>
          <span className="text-[10px] font-bold">Início</span>
        </button>
        <button className="text-neutral-400 flex flex-col items-center" onClick={() => onNavigate('PROFESSIONAL_LIST')}>
          <span className="material-icons-round">receipt_long</span>
          <span className="text-[10px] font-bold">Agendamentos</span>
        </button>
        <button className="text-neutral-400 flex flex-col items-center">
          <span className="material-icons-round">person</span>
          <span className="text-[10px] font-bold">Perfil</span>
        </button>
      </nav>
    </div>
  );
};

export default Home;
