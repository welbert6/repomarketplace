
import { Professional } from './types';

export const CATEGORIES = [
  { id: '1', name: 'Terapia', icon: 'spa' },
  { id: '2', name: 'Massagem', icon: 'self_improvement' },
  { id: '3', name: 'Beleza', icon: 'face_retouching_natural' },
  { id: '4', name: 'Personal', icon: 'fitness_center' },
  { id: '5', name: 'Marido de Aluguel', icon: 'home_repair_service' },
  { id: '6', name: 'Diarista', icon: 'cleaning_services' },
];

export const PROFESSIONALS: Professional[] = [
  {
    id: '1',
    name: 'Marcos Silva',
    role: 'Eletricista',
    rating: 5.0,
    reviewsCount: 128,
    location: 'Centro e Zona Oeste',
    pricePerHour: 80,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnDWlNAvvPABjZQiknOJ3504KBpqN07FKIKBCdVsYV0fww57zJldnkNQ0PMJg6dqBgvX2dwj1_hXuIkW4rDnQTiJlpb4_m5ptNIn8rgzEblEBmdx4PH1LuNE9j8oqoOJcQoPfkAP7Tjz7EZpltgXCxH-EXhaxdNS8KJhnj4sP5x9-mQ-Q4WeZploe6zG9bJuXGujuUa7w94UsoCWCoYO9EtcDdmF7zttwyW0dYNf9X_0NOprWo13dNXEl7cElpXac_Z_CKmU-ApKwC',
    isTopPro: true,
    isOnline: true,
    categories: ['Residencial', 'Comercial'],
    experienceYears: 10,
    bio: 'Especialista em fiação residencial e instalação de casa inteligente. Tenho orgulho da pontualidade e transparência.'
  },
  {
    id: '2',
    name: 'Sarah Costa',
    role: 'Eletricista',
    rating: 4.9,
    reviewsCount: 84,
    location: 'Vila Mariana',
    distance: '4 km',
    pricePerHour: 90,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3w667RxMl0HeY93piMwMTzy-fP50fFav3maHohOnDq3LB69d4eGbIJw-LGUYa6IJyCpsCkHADqfVQXOc3vhTF8u1q1eHdueoGZ-bDOC2DH59l2rGQopy4dkvyveCqtbTGFLg-r0_7t9ASGTibEsmDDZTPFK1TRFf1rJQDBHRQMiFJuWgtoSSMGAQOC8Qo7tFIpDfvOup1X5RD5zR571-3_oS0Ka3wXc42FdHmdb7J_-I6uo-rMDM_gOenVbpj488P-HauL4X9lRlR',
    categories: ['Manutenção'],
    experienceYears: 8,
    bio: 'Sarah é dedicada e foca em soluções seguras para sua casa.'
  },
  {
    id: '3',
    name: 'Davi Melo',
    role: 'Hidráulica',
    rating: 4.8,
    reviewsCount: 210,
    location: 'Zona Sul',
    distance: '8 km',
    pricePerHour: 75,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJba4i8hEJzIrnpELaJ9Ay-lubZ0UjKs5amiKDNgggil9Hv6S7gbPFvxePK7yLqSWNqoDU2_NpjfQpXDLeApFhg8591B5Tjws-moKLuD_7T5kW4QIP_3QxJyp4bEUWbJFdzX7cB2BZicE_wNmAs9KnoHH7QF-tFPECb92t7Pl8huR01O_ZubNwvFfWTslzSNxkFVs5j-GTXb-ykf67s6m_Y0MesYijpA2obPmx41sZz_j0mQPL8oA632OkulL0EaR0QIOBidKbuLtw',
    categories: ['Reparos'],
    isOnline: false
  },
  {
    id: '4',
    name: 'Sarah Jenkins',
    role: 'Eletricista Certificada',
    rating: 4.9,
    reviewsCount: 124,
    location: 'Grande São Paulo',
    pricePerHour: 85,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc4Vvi1JWVty8NugGMJrCO9XX3KFR6GSvLbF65GPsnaN2yKBzkmABcBpaTBedyJAMdl-nnnxVI2tJTd7az-UEO7AKFM7hwjiAPl-bS7xSY942iCxJ_o01EKjXYsDWHT_KXPflzdpTTUmBQ-c0DSyOrwl9OYsLIcxuyBwLCRKQ1PXNFaPcX71HblC2qWmC6MeO3GViwpOw3cLG3Dlm_bptBkUW-fGq0da4dNe8UQTP92bJo7Woi54ZpaDqGJigtIpS9sd3ar1cobfAy',
    isTopPro: true,
    categories: ['Casa Inteligente', 'Painéis'],
    experienceYears: 12,
    bio: 'Especialista em fiação residencial e instalação de casa inteligente. Tenho orgulho da pontualidade, locais de trabalho limpos e preços transparentes.'
  }
];

export const CITIES = [
  'São Paulo, SP',
  'Rio de Janeiro, RJ',
  'Belo Horizonte, MG',
  'Curitiba, PR',
  'Porto Alegre, RS',
  'Brasília, DF',
  'Salvador, BA',
  'Fortaleza, CE',
  'Recife, PE',
  'Manaus, AM',
];
