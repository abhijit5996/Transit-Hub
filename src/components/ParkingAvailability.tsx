import { MapPin, ParkingCircle } from 'lucide-react';
import { MetroStation } from '@/utils/data';

interface ParkingAvailabilityProps {
  stations: MetroStation[];
}

const ParkingAvailability = ({ stations }: ParkingAvailabilityProps) => {
  const getAvailabilityColor = (percentage: number) => {
    if (percentage > 50) return 'text-green-400 bg-green-400/20';
    if (percentage > 25) return 'text-yellow-400 bg-yellow-400/20';
    return 'text-red-400 bg-red-400/20';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stations.map((station) => {
        const availabilityPercentage = (station.availableSlots / station.parkingSlots) * 100;
        
        return (
          <div
            key={station.id}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-smooth shadow-card"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <ParkingCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{station.name}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>Metro Station</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Available Slots:</span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getAvailabilityColor(availabilityPercentage)}`}>
                  {station.availableSlots} / {station.parkingSlots}
                </span>
              </div>

              <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    availabilityPercentage > 50 ? 'bg-green-400' : 
                    availabilityPercentage > 25 ? 'bg-yellow-400' : 'bg-red-400'
                  }`}
                  style={{ width: `${availabilityPercentage}%` }}
                />
              </div>

              <p className="text-xs text-muted-foreground">
                {availabilityPercentage > 50 ? 'Good availability' : 
                 availabilityPercentage > 25 ? 'Limited slots' : 'Almost full'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ParkingAvailability;
