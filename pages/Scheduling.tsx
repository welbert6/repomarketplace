
import React, { useState } from 'react';
import { Professional, Booking } from '../types';

interface SchedulingProps {
  professional: Professional;
  onBack: () => void;
  onContinue: (details: Partial<Booking>) => void;
}

const Scheduling: React.FC<SchedulingProps> = ({ professional, onBack, onContinue }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(1);
  const [selectedSlotId, setSelectedSlotId] = useState('afternoon');

  const dates = [
    { day: 'Seg', date: '21', month: 'Out', disabled: true },
    { day: 'Ter', date: '22', month: 'Out', disabled: false },
    { day: 'Qua', date: '23', month: 'Out', disabled: false },
    { day: 'Qui', date: '24', month: 'Out', disabled: false },
    { day: 'Sex', date: '25', month: 'Out', disabled: false }
  ];

  const slots = [
    { id: 'morning', label: 'Manhã', time: '09:00', price: professional.pricePerHour, icon: 'wb_twilight', color: 'bg-yellow-100 text-yellow-600' },
    { id: 'afternoon', label: 'Tarde', time: '14:30', price: professional.pricePerHour, icon: 'wb_sunny', color: 'bg-primary text-white' },
    { id: 'evening', label: 'Noite', time: '18:30', price: professional.pricePerHour * 1.2, icon: 'bedtime', color: 'bg-indigo-100 text-indigo-600' }
  ];

  const currentSlot = slots.find(s => s.id === selectedSlotId)!;
  const currentDay = dates[selectedDayIndex];

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark pb-32">
      <header className="px-6 pt-12 pb-4 flex items-center justify-between sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-neutral-100 transition-colors">
          <span className="material-icons-round text-gray-800 dark:text-white">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">Agendamento</h1>
        <button className="p-2 -mr-2 rounded-full">
          <span className="material-icons-round text-gray-400">more_horiz</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pt-4 space-y-8 no-scrollbar">
        <div className="flex items-center space-x-4 p-4 bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-800">
          <img src={professional.imageUrl} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/10" alt={professional.name} />
          <div>
            <h2 className="text-sm font-bold dark:text-white">{professional.name}</h2>
            <p className="text-xs text-gray-500">{professional.role}</p>
          </div>
          <div className="ml-auto flex items-center bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded text-xs font-bold text-primary">
            <span className="material-icons-round text-[14px] mr-1">star</span> {professional.rating.toFixed(1)}
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold dark:text-white">Selecione a Data</h3>
            <div className="flex items-center text-sm font-bold text-primary">
              Outubro 2024 <span className="material-icons-round text-sm ml-1">expand_more</span>
            </div>
          </div>
          <div className="flex space-x-3 overflow-x-auto no-scrollbar -mx-6 px-6">
            {dates.map((d, idx) => (
              <button
                key={idx}
                disabled={d.disabled}
                onClick={() => setSelectedDayIndex(idx)}
                className={`flex-none w-[4.5rem] h-20 rounded-xl flex flex-col items-center justify-center border transition-all ${
                  d.disabled ? 'bg-gray-50 opacity-50 cursor-not-allowed' : 
                  selectedDayIndex === idx ? 'bg-primary border-primary shadow-lg shadow-primary/30 scale-105' : 'bg-white dark:bg-surface-dark border-neutral-100 dark:border-neutral-800'
                }`}
              >
                <span className={`text-[10px] font-bold mb-1 uppercase ${selectedDayIndex === idx ? 'text-white' : 'text-gray-400'}`}>{d.day}</span>
                <span className={`text-xl font-black ${selectedDayIndex === idx ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{d.date}</span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-base font-bold mb-4 dark:text-white">Selecione o Horário</h3>
          <div className="space-y-3">
            {slots.map(slot => (
              <label key={slot.id} className="block cursor-pointer">
                <input 
                  type="radio" 
                  name="slot" 
                  className="sr-only" 
                  checked={selectedSlotId === slot.id}
                  onChange={() => setSelectedSlotId(slot.id)}
                />
                <div className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                  selectedSlotId === slot.id ? 'border-primary bg-blue-50 dark:bg-blue-900/20 shadow-sm' : 'border-neutral-100 dark:border-neutral-800 bg-white dark:bg-surface-dark'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      selectedSlotId === slot.id ? 'bg-primary text-white' : slot.color
                    }`}>
                      <span className="material-icons-round text-xl">{slot.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold dark:text-white">{slot.label}</h4>
                      <p className={`text-xs ${selectedSlotId === slot.id ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500'}`}>{slot.time}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center space-x-3">
                    <span className="block text-sm font-black text-primary">R$ {slot.price.toFixed(2)}</span>
                    {selectedSlotId === slot.id && (
                      <div className="bg-primary rounded-full p-1 flex items-center justify-center">
                        <span className="material-icons-round text-white text-sm font-bold">check</span>
                      </div>
                    )}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </section>

        <div className="flex items-start space-x-2 text-[10px] font-medium text-gray-500 bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-lg">
          <span className="material-icons-round text-sm text-primary">info</span>
          <p>Os preços podem variar com base na demanda durante o horário noturno. Cancelamento grátis até 24h antes.</p>
        </div>
      </main>

      <div className="fixed bottom-0 w-full max-w-md p-6 bg-white dark:bg-surface-dark border-t border-neutral-100 dark:border-neutral-800 z-30 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-black uppercase">Total Estimado</span>
            <span className="text-xl font-black text-primary">R$ {currentSlot.price.toFixed(2)}</span>
          </div>
          <button 
            onClick={() => onContinue({ 
              date: `${currentDay.date} ${currentDay.month}, 2024`, 
              time: currentSlot.time, 
              total: currentSlot.price, 
              service: professional.role
            })}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transform active:scale-95 transition-all flex items-center"
          >
            Continuar <span className="material-icons-round text-sm ml-2 font-bold">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
