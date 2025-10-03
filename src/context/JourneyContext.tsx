import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Journey, RideOption } from '@/utils/data';

interface JourneyContextType {
  currentJourney: Journey | null;
  setCurrentJourney: (journey: Journey | null) => void;
  selectedRide: RideOption | null;
  setSelectedRide: (ride: RideOption | null) => void;
  origin: string;
  setOrigin: (origin: string) => void;
  destination: string;
  setDestination: (destination: string) => void;
}

const JourneyContext = createContext<JourneyContextType | undefined>(undefined);

export const JourneyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentJourney, setCurrentJourney] = useState<Journey | null>(null);
  const [selectedRide, setSelectedRide] = useState<RideOption | null>(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <JourneyContext.Provider
      value={{
        currentJourney,
        setCurrentJourney,
        selectedRide,
        setSelectedRide,
        origin,
        setOrigin,
        destination,
        setDestination,
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
};

export const useJourney = () => {
  const context = useContext(JourneyContext);
  if (context === undefined) {
    throw new Error('useJourney must be used within a JourneyProvider');
  }
  return context;
};
