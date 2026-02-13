
import React, { useState } from 'react';
import { ViewState, Professional, Booking } from './types';
import Login from './pages/Login';
import Home from './pages/Home';
import ProfessionalList from './pages/ProfessionalList';
import Profile from './pages/Profile';
import Scheduling from './pages/Scheduling';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import CitySelect from './pages/CitySelect';
import Review from './pages/Review';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('LOGIN');
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [bookingDetails, setBookingDetails] = useState<Partial<Booking>>({});

  const navigateTo = (view: ViewState, data?: any) => {
    if (data?.professional) setSelectedProfessional(data.professional);
    if (data?.booking) setBookingDetails(data.booking);
    if (data?.category) setSelectedCategory(data.category);
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case 'LOGIN':
        return <Login onLogin={() => navigateTo('CITY_SELECT')} />;
      case 'CITY_SELECT':
        return <CitySelect onSelect={() => navigateTo('HOME')} />;
      case 'HOME':
        return <Home onNavigate={navigateTo} />;
      case 'PROFESSIONAL_LIST':
        return (
          <ProfessionalList 
            category={selectedCategory}
            onNavigate={navigateTo} 
            onBack={() => navigateTo('HOME')} 
          />
        );
      case 'PROFILE':
        return selectedProfessional ? (
          <Profile 
            professional={selectedProfessional} 
            onBack={() => navigateTo('PROFESSIONAL_LIST')} 
            onSchedule={(p) => navigateTo('SCHEDULING', { professional: p })}
          />
        ) : <Home onNavigate={navigateTo} />;
      case 'SCHEDULING':
        return selectedProfessional ? (
          <Scheduling 
            professional={selectedProfessional} 
            onBack={() => navigateTo('PROFILE')} 
            onContinue={(details) => navigateTo('CHECKOUT', { booking: details })}
          />
        ) : <Home onNavigate={navigateTo} />;
      case 'CHECKOUT':
        return selectedProfessional ? (
          <Checkout 
            professional={selectedProfessional} 
            bookingDetails={bookingDetails}
            onBack={() => navigateTo('SCHEDULING')}
            onPay={(details) => navigateTo('CONFIRMATION', { booking: { ...bookingDetails, ...details } })}
          />
        ) : <Home onNavigate={navigateTo} />;
      case 'CONFIRMATION':
        return (
          <Confirmation 
            professional={selectedProfessional}
            bookingDetails={bookingDetails}
            onBackToHome={() => navigateTo('HOME')} 
          />
        );
      case 'REVIEW':
        return <Review onComplete={() => navigateTo('HOME')} />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark">
      {renderView()}
    </div>
  );
};

export default App;
