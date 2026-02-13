
import React from 'react';
import { Professional, Booking } from '../types';

interface ConfirmationProps {
  professional: Professional | null;
  bookingDetails: Partial<Booking>;
  onBackToHome: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ professional, bookingDetails, onBackToHome }) => {
  if (!professional) return null;

  return (
    <div className="flex-1 flex flex-col bg-blue-50 dark:bg-background-dark pb-24">
      <header className="w-full max-w-md flex justify-between items-center py-4 px-6 mb-2">
        <button onClick={onBackToHome} className="p-2 rounded-full hover:bg-white/50 transition-colors">
          <span className="material-icons-round text-2xl opacity-70 dark:text-white">close</span>
        </button>
        <span className="font-black text-[10px] tracking-widest uppercase opacity-40 dark:text-white">Comprovante</span>
        <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
          <span className="material-icons-round text-2xl opacity-70 dark:text-white">ios_share</span>
        </button>
      </header>

      <main className="w-full px-6 flex-1 flex flex-col gap-6 overflow-y-auto no-scrollbar">
        <div className="text-center space-y-2 py-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-2 shadow-2xl">
            <span className="material-icons-round text-4xl">check_circle</span>
          </div>
          <h1 className="text-2xl font-black text-neutral-900 dark:text-white">Agendamento Confirmado!</h1>
          <p className="text-neutral-500 text-sm">Sua sessão está reservada. Um e-mail de confirmação foi enviado.</p>
        </div>

        <div className="relative w-full shadow-soft">
          <div className="bg-white dark:bg-surface-dark rounded-3xl overflow-hidden border border-white/20">
            <div className="bg-primary/5 py-3 px-6 flex justify-between items-center border-b border-primary/10">
              <span className="text-[10px] font-black text-primary uppercase tracking-wider">Recibo</span>
              <span className="font-mono text-xs font-bold text-primary tracking-widest">#BK-{Math.floor(Math.random() * 90000) + 10000}</span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4">
                <img 
                  src={professional.imageUrl} 
                  className="w-16 h-16 rounded-2xl object-cover shadow-sm ring-2 ring-primary/5"
                  alt="Pro"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg dark:text-white">{professional.name}</h3>
                  <p className="text-xs text-neutral-400">{professional.role}</p>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-primary font-black uppercase">
                    <span className="material-icons-round text-sm">verified</span> Verificado
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] text-neutral-400 uppercase font-black tracking-widest">Data</label>
                  <div className="flex items-center gap-2 font-bold dark:text-white">
                    <span className="material-icons-round text-primary text-base">calendar_today</span> {bookingDetails.date}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-neutral-400 uppercase font-black tracking-widest">Horário</label>
                  <div className="flex items-center gap-2 font-bold dark:text-white">
                    <span className="material-icons-round text-primary text-base">schedule</span> {bookingDetails.time}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-neutral-400 uppercase font-black tracking-widest">Serviço</label>
                <div className="p-3 bg-gray-50 dark:bg-neutral-900 rounded-xl text-xs font-bold dark:text-gray-300">
                  {bookingDetails.service || professional.role}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-dashed border-neutral-200 dark:border-neutral-800">
                <span className="text-sm font-bold text-neutral-400">Total Pago</span>
                <span className="text-2xl font-black text-primary">R$ {bookingDetails.total?.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="flex flex-col items-center justify-center p-4 bg-[#25D366] text-white rounded-2xl shadow-lg active:scale-95 transition-all">
            <span className="material-icons-round text-3xl mb-1">chat</span>
            <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-md border border-gray-100 dark:border-neutral-800 active:scale-95 transition-all">
            <span className="material-icons-round text-primary text-3xl mb-1">phone</span>
            <span className="text-[10px] font-black dark:text-white uppercase tracking-widest">Ligar</span>
          </button>
        </div>

        <div className="flex flex-col items-center py-6 opacity-40">
          <div className="bg-white p-2 rounded-xl">
             <div className="w-20 h-20 bg-neutral-900" style={{backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px'}}></div>
          </div>
          <span className="text-[10px] mt-2 font-black uppercase tracking-widest dark:text-white">Escaneie para Check-in</span>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full max-w-md p-6 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md border-t border-neutral-100 dark:border-neutral-800 z-40">
        <div className="flex gap-3">
          <button className="flex-1 py-4 px-4 rounded-xl border border-neutral-300 font-bold text-neutral-600 dark:text-gray-400 text-sm">
            Salvar PDF
          </button>
          <button 
            onClick={onBackToHome}
            className="flex-1 py-4 px-4 rounded-xl bg-primary text-white font-black shadow-lg shadow-primary/25 text-sm"
          >
            Voltar ao Início
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Confirmation;
