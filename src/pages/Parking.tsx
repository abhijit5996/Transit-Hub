import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParkingAvailability from '@/components/ParkingAvailability';
import { metroStations } from '@/utils/data';
import { ParkingCircle } from 'lucide-react';

const Parking = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ParkingCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="mb-4">Metro Station Parking</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check real-time parking availability at metro stations across the city
          </p>
        </div>

        <ParkingAvailability stations={metroStations} />

        <div className="mt-12 max-w-4xl mx-auto bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Parking Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-lg">Two-Wheeler Parking</h3>
              <p className="text-muted-foreground mb-2">₹10 per day</p>
              <p className="text-sm text-muted-foreground">Available at all metro stations</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">Four-Wheeler Parking</h3>
              <p className="text-muted-foreground mb-2">₹30 per day</p>
              <p className="text-sm text-muted-foreground">Limited slots, subject to availability</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="font-semibold mb-3">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                24/7 CCTV surveillance
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Secure parking zones
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Digital payment accepted
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Real-time slot monitoring
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Parking;
