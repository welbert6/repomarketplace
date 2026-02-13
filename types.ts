
export interface Professional {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviewsCount: number;
  location: string;
  distance?: string;
  pricePerHour: number;
  imageUrl: string;
  isTopPro?: boolean;
  isOnline?: boolean;
  isAgency?: boolean;
  experienceYears?: number;
  bio?: string;
  categories: string[];
}

export interface Service {
  id: string;
  name: string;
  price: number;
  icon: string;
}

export interface Booking {
  id: string;
  professional: Professional;
  service: string;
  date: string;
  time: string;
  address: string;
  total: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
}

export type ViewState = 
  | 'LOGIN' 
  | 'HOME' 
  | 'PROFESSIONAL_LIST' 
  | 'PROFILE' 
  | 'SCHEDULING' 
  | 'CHECKOUT' 
  | 'CONFIRMATION' 
  | 'REVIEW' 
  | 'CITY_SELECT';
