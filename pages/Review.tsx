
import React, { useState } from 'react';

interface ReviewProps {
  onComplete: () => void;
}

const Review: React.FC<ReviewProps> = ({ onComplete }) => {
  const [rating, setRating] = useState(4);

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark p-6 pb-24 animate-fade-in">
      <div className="flex justify-between items-center mb-10">
        <button onClick={onComplete} className="p-2 -ml-2 text-gray-400">
          <span className="material-icons-round text-2xl">close</span>
        </button>
        <button onClick={onComplete} className="text-sm font-bold text-gray-400 hover:text-primary">Pular</button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-6">
            <div className="w-24 h-24 rounded-full p-1 bg-white shadow-lg ring-4 ring-primary/5">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJba4i8hEJzIrnpELaJ9Ay-lubZ0UjKs5amiKDNgggil9Hv6S7gbPFvxePK7yLqSWNqoDU2_NpjfQpXDLeApFhg8591B5Tjws-moKLuD_7T5kW4QIP_3QxJyp4bEUWbJFdzX7cB2BZicE_wNmAs9KnoHH7QF-tFPECb92t7Pl8huR01O_ZubNwvFfWTslzSNxkFVs5j-GTXb-ykf67s6m_Y0MesYijpA2obPmx41sZz_j0mQPL8oA632OkulL0EaR0QIOBidKbuLtw" 
                className="w-full h-full rounded-full object-cover"
                alt="Pro"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1.5 border-4 border-background-light shadow-sm">
              <span className="material-icons-round text-xs font-bold">check</span>
            </div>
          </div>
          <h1 className="text-2xl font-black text-center dark:text-white">Como foi com Davi?</h1>
          <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mt-2">Reparo Hidráulico • Ontem às 14:00</p>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 shadow-soft border border-gray-100 dark:border-neutral-800 mb-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button 
                  key={star} 
                  onClick={() => setRating(star)}
                  className="transition-transform active:scale-125"
                >
                  <span className={`material-icons-round text-5xl ${star <= rating ? 'text-primary' : 'text-gray-200'}`}>star</span>
                </button>
              ))}
            </div>
            <span className="text-lg font-black text-primary">Excelente Serviço!</span>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Adicione um comentário (opcional)</label>
          <textarea 
            placeholder="O que foi bom? O que poderia melhorar?"
            className="w-full rounded-2xl border-none bg-white dark:bg-surface-dark shadow-subtle dark:text-white dark:placeholder-neutral-500 focus:ring-2 focus:ring-primary/20 p-5 h-32 resize-none"
          />
          <div className="flex flex-wrap gap-2">
            {['Profissional', 'Pontual', 'Bom Valor', 'Amigável'].map(tag => (
              <button key={tag} className="px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[10px] font-black uppercase text-neutral-600 hover:bg-primary hover:text-white transition-all">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-neutral-800">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-bold dark:text-white">Dar uma gorjeta para Davi?</span>
            <span className="text-[10px] font-black text-gray-400 uppercase">100% vai para ele</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[5, 10, 20, 0].map(val => (
              <button 
                key={val} 
                className={`py-3 rounded-xl border text-xs font-black transition-all ${val === 20 ? 'bg-primary border-primary text-white' : 'border-neutral-200 bg-white text-neutral-600'}`}
              >
                {val === 0 ? 'Outro' : `R$ ${val}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full max-w-md p-6 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-12">
        <button 
          onClick={onComplete}
          className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-xl shadow-lg transform active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span>Enviar Avaliação</span>
          <span className="material-icons-round text-lg">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Review;
