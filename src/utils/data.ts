// Mock data for metro routes, rides, and parking

export interface MetroStation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  parkingSlots: number;
  availableSlots: number;
}

export interface RideOption {
  id: string;
  type: 'auto' | 'e-rickshaw' | 'bike' | 'bus';
  name: string;
  price: number;
  eta: number;
  distance: number;
  ecoFriendly: boolean;
  available: boolean;
}

export interface Journey {
  origin: string;
  destination: string;
  totalTime: number;
  totalCost: number;
  steps: JourneyStep[];
}

export interface JourneyStep {
  mode: string;
  from: string;
  to: string;
  duration: number;
  cost: number;
  distance: number;
}

export const metroStations: MetroStation[] = [
  { id: '1', name: 'Salt Lake Sector V', latitude: 22.5726, longitude: 88.4303, parkingSlots: 150, availableSlots: 45 },
  { id: '2', name: 'Garia', latitude: 22.4697, longitude: 88.3823, parkingSlots: 200, availableSlots: 78 },
  { id: '3', name: 'Dum Dum', latitude: 22.6279, longitude: 88.4268, parkingSlots: 120, availableSlots: 32 },
  { id: '4', name: 'Sealdah', latitude: 22.5697, longitude: 88.3697, parkingSlots: 180, availableSlots: 92 },
  { id: '5', name: 'Park Street', latitude: 22.5532, longitude: 88.3632, parkingSlots: 100, availableSlots: 15 },
  { id: '6', name: 'Kalighat', latitude: 22.5205, longitude: 88.3426, parkingSlots: 90, availableSlots: 55 },
  { id: '7', name: 'New Garia', latitude: 22.4512, longitude: 88.3823, parkingSlots: 160, availableSlots: 68 },
  { id: '8', name: 'Kavi Subhash', latitude: 22.4721, longitude: 88.3687, parkingSlots: 140, availableSlots: 42 },
];

export const rideOptions: RideOption[] = [
  {
    id: 'r1',
    type: 'auto',
    name: 'Ola Auto',
    price: 50,
    eta: 7,
    distance: 2.3,
    ecoFriendly: false,
    available: true,
  },
  {
    id: 'r2',
    type: 'auto',
    name: 'Uber Auto',
    price: 48,
    eta: 5,
    distance: 2.3,
    ecoFriendly: false,
    available: true,
  },
  {
    id: 'r3',
    type: 'e-rickshaw',
    name: 'E-Rickshaw',
    price: 30,
    eta: 10,
    distance: 2.3,
    ecoFriendly: true,
    available: true,
  },
  {
    id: 'r4',
    type: 'bike',
    name: 'Yulu Bike',
    price: 15,
    eta: 12,
    distance: 2.3,
    ecoFriendly: true,
    available: true,
  },
  {
    id: 'r5',
    type: 'bus',
    name: 'Feeder Bus',
    price: 10,
    eta: 15,
    distance: 2.3,
    ecoFriendly: true,
    available: false,
  },
];

export const sampleJourney: Journey = {
  origin: 'Salt Lake Sector V',
  destination: 'Garia',
  totalTime: 47,
  totalCost: 95,
  steps: [
    {
      mode: 'Walk',
      from: 'Home',
      to: 'Salt Lake Sector V Metro',
      duration: 5,
      cost: 0,
      distance: 0.4,
    },
    {
      mode: 'Yulu Bike',
      from: 'Salt Lake Sector V Metro',
      to: 'Metro Entry',
      duration: 3,
      cost: 15,
      distance: 0.5,
    },
    {
      mode: 'Metro',
      from: 'Salt Lake Sector V',
      to: 'Garia',
      duration: 32,
      cost: 30,
      distance: 18,
    },
    {
      mode: 'Ola Auto',
      from: 'Garia Metro Exit',
      to: 'Destination',
      duration: 7,
      cost: 50,
      distance: 2.3,
    },
  ],
};

export const benefits = [
  {
    icon: 'Home',
    title: 'HOME PICKUP',
    description: 'We run door-to-door pickup to serve you better and add to your convenience',
  },
  {
    icon: 'Gift',
    title: 'BONUSES FOR RIDE',
    description: 'When you book us frequently we give you different bonuses that can put a smile on your face',
  },
  {
    icon: 'Zap',
    title: 'FAST BOOKING',
    description: 'Our booking method is very fast and easy. It won\'t stress you.',
  },
  {
    icon: 'MapPin',
    title: 'GPS SEARCHING',
    description: 'We run GPS searching in case you aren\'t sure of your destination. So you don\'t have to worry.',
  },
];
