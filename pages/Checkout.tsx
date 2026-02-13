
import React, { useState } from 'react';
import { Professional, Booking } from '../types';

interface CheckoutProps {
  professional: Professional;
  bookingDetails: Partial<Booking>;
  onBack: () => void;
  onPay: (details: any) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ professional, bookingDetails, onBack, onPay }) => {
  const [paymentMethod, setPaymentMethod] = useState<'CARD' | 'PIX'>('CARD');

  const subtotal = bookingDetails.total || professional.pricePerHour;
  const platformFee = subtotal * 0.05;
  const total = subtotal + platformFee;

  return (
    <div className="flex-1 flex flex-col bg-gray-50 dark:bg-background-dark pb-32">
      <header className="flex items-center justify-between px-6 py-5 bg-white dark:bg-surface-dark sticky top-0 z-20 border-b border-gray-100 dark:border-neutral-800">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full">
          <span className="material-icons-round text-gray-800 dark:text-white">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold dark:text-white">Checkout</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pt-6 space-y-6 no-scrollbar">
        <section className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-neutral-800 flex items-center gap-4">
          <div className="relative">
            <img src={professional.imageUrl} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" alt={professional.name} />
            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-surface-dark rounded-full p-0.5">
              <span className="material-icons-round text-primary text-[16px]">verified</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-lg dark:text-white">{professional.name}</h2>
            <p className="text-sm text-gray-500">{professional.role}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-lg">
              <span className="material-icons-round text-yellow-500 text-[14px]">star</span>
              <span className="text-xs font-bold text-primary dark:text-white">{professional.rating.toFixed(1)}</span>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-neutral-800 space-y-4">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Detalhes do Serviço</h3>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
              <span className="material-icons-round text-sm">home_repair_service</span>
            </div>
            <div>
              <p className="font-bold text-sm dark:text-white">{bookingDetails.service || professional.role}</p>
              <p className="text-xs text-gray-500">Serviço profissional</p>
            </div>
          </div>
          <div className="h-px bg-gray-50 dark:bg-neutral-800"></div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
              <span className="material-icons-round text-sm">event</span>
            </div>
            <div>
              <p className="font-bold text-sm dark:text-white">{bookingDetails.date}</p>
              <p className="text-xs text-gray-500">Horário: {bookingDetails.time}</p>
            </div>
          </div>
          <div className="h-px bg-gray-50 dark:bg-neutral-800"></div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
              <span className="material-icons-round text-sm">location_on</span>
            </div>
            <div>
              <p className="font-bold text-sm dark:text-white">Seu Endereço</p>
              <p className="text-xs text-gray-500">Rua Principal 123, Apto 4B, São Paulo</p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Pagamento</h3>
            <div className="flex items-center gap-1 text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">
              <span className="material-icons-round text-[12px]">lock</span> SEGURO
            </div>
          </div>
          <div className="flex p-1 bg-gray-100 dark:bg-neutral-900 rounded-lg mb-6">
            <button 
              onClick={() => setPaymentMethod('CARD')}
              className={`flex-1 py-2 text-xs font-bold rounded transition-all ${paymentMethod === 'CARD' ? 'bg-white dark:bg-surface-dark shadow-sm text-primary' : 'text-gray-500'}`}
            >
              Cartão de Crédito
            </button>
            <button 
              onClick={() => setPaymentMethod('PIX')}
              className={`flex-1 py-2 text-xs font-bold rounded transition-all ${paymentMethod === 'PIX' ? 'bg-white dark:bg-surface-dark shadow-sm text-primary' : 'text-gray-500'}`}
            >
              PIX
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="relative">
              <label className="text-[10px] font-black text-gray-400 uppercase mb-1 block ml-1">Número do Cartão</label>
              <div className="relative">
                <input className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl py-3 px-4 pl-10 text-sm font-mono dark:text-white" type="text" value="**** **** **** 4242" readOnly />
                <span className="material-icons-round absolute left-3 top-3.5 text-gray-400 text-sm">credit_card</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase mb-1 block ml-1">Validade</label>
                <input className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl py-3 px-4 text-sm dark:text-white" placeholder="MM/AA" type="text" />
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase mb-1 block ml-1">CVV</label>
                <input className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl py-3 px-4 text-sm dark:text-white" placeholder="123" type="text" />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3 pt-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Subtotal</span>
            <span className="font-bold">R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Taxa da Plataforma (5%)</span>
            <span className="font-bold">R$ {platformFee.toFixed(2)}</span>
          </div>
          <div className="h-px bg-gray-200 dark:bg-neutral-800 w-full my-4"></div>
          <div className="flex justify-between items-end">
            <span className="text-base font-bold dark:text-white">Valor Total</span>
            <span className="text-2xl font-black text-primary tracking-tight">R$ {total.toFixed(2)}</span>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 w-full max-w-md bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-neutral-800 p-6 pb-8 backdrop-blur-lg bg-opacity-95 shadow-2xl">
        <button 
          onClick={() => onPay({ total })}
          className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all text-white font-black text-lg py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
        >
          <span>Confirmar e Pagar</span>
          <span className="bg-white/10 px-2 py-0.5 rounded text-sm">R$ {total.toFixed(2)}</span>
        </button>
      </footer>
    </div>
  );
};

export default Checkout;
