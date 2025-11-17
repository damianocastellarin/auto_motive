import React, { useState } from 'react';
import { 
  MapPin, 
  Gauge, 
  Zap, 
  Activity, 
  Play, 
  Square,
  List, 
  Clock
} from 'lucide-react';
import { aColor } from '../constants/colors';
import Card from '../components/ui/Card';
import PageTitle from '../components/ui/PageTitle';
import BackButton from '../components/ui/BackButton';

const VitalStatItem = ({ icon: Icon, label, value, unit }) => (
  <li className="flex items-center">
    <Icon size={28} className={`${aColor.accent} mr-3`} />
    <div>
      <span className={aColor.baseTextSecondary}>{label}</span>
      <p className="text-2xl font-bold text-white">
        {value} <span className="text-base opacity-75">{unit}</span>
      </p>
    </div>
  </li>
);

const HistoryItem = ({ title, date, duration }) => (
  <li className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
    <div className="flex items-center">
      <Clock size={20} className={`${aColor.accent} mr-3`} />
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </div>
    <span className="text-sm text-gray-300">{duration}</span>
  </li>
);

export default function Telemetry() {
  const [isRecording, setIsRecording] = useState(false);

  const sessionHistory = [
    { title: 'Sessione Veloce', date: 'Oggi, 14:30', duration: '15:42' },
    { title: 'Test Pista', date: 'Ieri, 11:00', duration: '45:10' },
    { title: 'Guida Urbana', date: '02/11/2025', duration: '28:15' },
    { title: 'Autostrada A4', date: '01/11/2025', duration: '01:12:05' },
  ];

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      
      <div>
        <BackButton />
        <PageTitle title="Telemetria" />
      </div>
      
      <div className="mt-4 flex-grow grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 overflow-hidden lg:grid-rows-2">

        <div className="lg:col-span-2 lg:row-span-1">
          <Card className="h-full flex flex-col">
            <h3 className="font-bold text-lg text-white mb-2">Mappa Live</h3>
            <div className="flex-grow rounded-lg overflow-hidden relative 
                            flex items-center justify-center bg-gray-700"
            >
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                LIVE
              </div>
              <MapPin size={60} className={aColor.baseTextSecondary} />
              <div className={`absolute w-32 h-32 rounded-full 
                              border-2 border-red-500 opacity-70 animate-ping`}
              ></div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1 lg:row-span-1">
          <Card className="h-full flex flex-col p-4">
            <h3 className="font-bold text-lg text-white mb-2">Vitals</h3>
            
            <ul className="flex-grow flex flex-col justify-evenly">
              <VitalStatItem 
                icon={Gauge}
                label="Velocità"
                value="120"
                unit="km/h"
              />
              <VitalStatItem 
                icon={Zap}
                label="Potenza"
                value="210"
                unit="kW"
              />
              <VitalStatItem 
                icon={Activity}
                label="Forza G (Lat)"
                value="0.8"
                unit="g"
              />
            </ul>
          </Card>
        </div>

        <div className="lg:col-span-2 lg:row-span-1">
          <Card className="h-full flex flex-col p-4">
            <h3 className="font-bold text-lg text-white mb-2">Storico Sessioni</h3>
            <div className="flex-grow overflow-y-auto -mx-4 px-4">
              <ul className="divide-y divide-gray-700">
                {sessionHistory.map((item, index) => (
                  <HistoryItem 
                    key={index}
                    title={item.title}
                    date={item.date}
                    duration={item.duration}
                  />
                ))}
              </ul>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1 lg:row-span-1">
          <Card className="h-full flex flex-col p-4">
            <h3 className="font-bold text-lg text-white mb-2">Controllo Sessione</h3>
            <div className="flex-grow flex flex-col justify-center items-center">
              <p className={aColor.baseTextSecondary}>Durata Sessione Corrente</p>
              <p className="text-4xl font-bold text-white my-2">
                {isRecording ? '00:05:21' : '00:00:00'}
              </p>
              
              <button
                onClick={() => setIsRecording(r => !r)}
                className={`w-full flex items-center justify-center p-3 mt-4 rounded-lg 
                            font-semibold text-white text-lg transition-colors
                            ${isRecording 
                              ? 'bg-red-600 hover:bg-red-500' 
                              : 'bg-green-500 hover:bg-green-400'
                            }`}
              >
                {isRecording ? (
                  <Square size={20} className="mr-2" />
                ) : (
                  <Play size={20} className="mr-2" />
                )}
                {isRecording ? 'Stop Registrazione' : 'Avvia Registrazione'}
              </button>
            </div>
          </Card>
        </div>
        
      </div>
    </div>
  );
}