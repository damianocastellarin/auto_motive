import React, { useState } from 'react';
import { 
  Clock, 
  Coffee,
  RotateCcw,
  MapPin, 
  TrendingUp, 
  Zap,
  Calendar
} from 'lucide-react';
import { aColor } from '../constants/colors';
import Card from '../components/ui/Card';
import PageTitle from '../components/ui/PageTitle';
import BackButton from '../components/ui/BackButton';

const ProgressBar = ({ value, maxValue, colorClass }) => {
  const percent = Math.min(Math.max((value / maxValue) * 100, 0), 100);
  return (
    <div className="w-full bg-gray-700 rounded-full h-4">
      <div 
        className={`h-4 rounded-full transition-all ${colorClass.replace('text-', 'bg-')}`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

const TripStatItem = ({ icon: Icon, label, value }) => (
  <li className="flex justify-between items-center py-2">
    <div className="flex items-center">
      <Icon size={18} className="text-gray-400 mr-3" />
      <span className={`${aColor.baseText} text-sm`}>{label}</span>
    </div>
    <span className="font-semibold text-white text-sm">{value}</span>
  </li>
);

export default function Intertime() {
  
  const [currentTripTime, setCurrentTripTime] = useState(6312);
  const maxDriveTime = 7200;

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [hours, minutes, seconds]
      .map(v => v.toString().padStart(2, '0'))
      .join(':');
  };

  const handleResetTrip = () => {
    alert('Viaggio corrente azzerato (simulato)');
    setCurrentTripTime(0);
  };

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      
      <div>
        <BackButton />
        <PageTitle title="Intertime" />
      </div>
      
      <div className="mt-4 flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 overflow-hidden lg:grid-rows-2">

        <Card className="h-full flex flex-col items-center justify-center text-center p-6">
          <Clock size={48} className={aColor.accent} />
          <h3 className="text-lg font-semibold text-gray-400 mt-2">Tempo Viaggio Corrente</h3>
          <p className="text-7xl font-bold text-white">
            {formatTime(currentTripTime)}
          </p>
        </Card>

        <Card className="h-full flex flex-col justify-center p-6">
          <div className="flex items-center mb-3">
            <Coffee size={24} className={aColor.alert} />
            <h3 className="font-bold text-lg text-white ml-2">Prossima Pausa</h3>
          </div>
          <ProgressBar 
            value={currentTripTime} 
            maxValue={maxDriveTime}
            colorClass={aColor.alert}
          />
          <div className="flex justify-between items-center mt-2">
            <span className={`${aColor.alert} text-sm font-semibold`}>
              Pausa consigliata tra {formatTime(maxDriveTime - currentTripTime)}
            </span>
            <span className="text-sm text-gray-400">
              {formatTime(maxDriveTime)}
            </span>
          </div>
        </Card>

        <Card className="h-full flex flex-col p-4">
          <h3 className="font-bold text-lg text-white mb-1">Statistiche Viaggio</h3>
          <ul className="divide-y divide-gray-700">
            <TripStatItem 
              icon={MapPin} 
              label="Distanza Viaggio" 
              value="128.5 km" 
            />
            <TripStatItem 
              icon={TrendingUp} 
              label="Velocità Media" 
              value="73 km/h" 
            />
            <TripStatItem 
              icon={Zap} 
              label="Consumo Viaggio" 
              value="17.1 kWh/100km" 
            />
          </ul>
        </Card>

        <Card className="h-full flex flex-col p-4 justify-between">
          <div>
            <h3 className="font-bold text-lg text-white mb-1">Totale Giornaliero</h3>
            <div className="flex items-center">
              <Calendar size={18} className="text-gray-400 mr-3" />
              <span className={`${aColor.baseText} text-sm`}>Tempo Guida Totale</span>
              <span className="font-semibold text-white text-sm ml-auto">03:10:25</span>
            </div>
          </div>
          
          <button 
            onClick={handleResetTrip}
            className={`w-full flex items-center justify-center p-2.5 bg-gray-700 rounded-lg 
                        hover:bg-gray-600 transition-colors font-semibold text-white mt-3`}
          >
            <RotateCcw size={18} className="mr-2" />
            <span className="text-sm">Azzera Viaggio Corrente</span>
          </button>
        </Card>
        
      </div>
    </div>
  );
}