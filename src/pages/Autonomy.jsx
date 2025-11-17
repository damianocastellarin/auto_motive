import React from 'react';
import { MapPin, BatteryCharging, Zap, Gauge, Clock } from 'lucide-react';
import { aColor } from '../constants/colors';
import Card from '../components/ui/Card';
import PageTitle from '../components/ui/PageTitle';
import BackButton from '../components/ui/BackButton';

import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis
} from 'recharts';

const accentHex = '#4ade80';
const okHex = '#22c55e';
const grayHex = '#9ca3af';
const cardBgHex = '#1f2937';
const bgGray700Hex = '#374151';

const MAX_RANGE_KM = 500;
const CURRENT_BATTERY_PERCENT = 44;
const estimatedKm = Math.round(MAX_RANGE_KM * (CURRENT_BATTERY_PERCENT / 100));

const autonomyData = [
  { name: 'Battery', value: CURRENT_BATTERY_PERCENT }
];

const historyData = [
  { day: 'Lun', kWh: 16.2 },
  { day: 'Mar', kWh: 15.8 },
  { day: 'Mer', kWh: 17.1 },
  { day: 'Gio', kWh: 14.9 },
  { day: 'Ven', kWh: 16.5 },
  { day: 'Sab', kWh: 18.2 },
  { day: 'Oggi', kWh: 15.1 },
];


const AutonomyGauge = () => (
  <Card className="relative h-full flex flex-col justify-between">
    <h3 className="font-bold text-lg text-white">Autonomia Residua</h3>
    <div className="absolute inset-0 top-8">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
          innerRadius="70%" 
          outerRadius="100%" 
          data={autonomyData}
          startAngle={180} 
          endAngle={0}
          barSize={30}
        >
          <PolarAngleAxis 
            type="number" 
            domain={[0, 100]}
            tick={false}
          />
          
          <RadialBar
            dataKey="value"
            fill={accentHex}
            background={{ fill: bgGray700Hex }}
            cornerRadius={15}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                    flex flex-col items-center justify-center text-center w-full">
      <span className={aColor.accent}>Autonomia Stimata</span>
      
      <p className="text-6xl font-bold text-white my-1">
        {estimatedKm} <span className="text-3xl opacity-75">km</span>
      </p>
      
      <p className={`text-4xl font-bold ${aColor.ok}`}>
        {CURRENT_BATTERY_PERCENT}%
      </p>
    </div>
  </Card>
);


const FakeMapRange = () => (
  <Card className="relative h-full flex flex-col">
    <h3 className="font-bold text-lg text-white mb-2">Range su Mappa</h3>
    <div className="flex-grow rounded-lg overflow-hidden relative 
                    flex items-center justify-center 
                    bg-gray-800"
         style={{
           backgroundImage: `
             linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
           `,
           backgroundSize: '20px 20px'
         }}
    >
      <MapPin size={40} className={aColor.accent} />
      <div className={`absolute w-40 h-40 rounded-full 
                       border-2 ${aColor.accent.replace('text-','border-')} 
                       opacity-40`}
      ></div>
      <div className={`absolute w-40 h-40 rounded-full 
                       border-2 ${aColor.accent.replace('text-','border-')} 
                       opacity-70 animate-ping`}
      ></div>
    </div>
  </Card>
);

const ConsumptionHistory = () => (
  <Card className="h-full flex flex-col">
    <h3 className="font-bold text-lg text-white mb-4">Storico Consumi (7gg)</h3>
    <div className="flex-grow">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart 
          data={historyData}
          margin={{ top: 5, right: 10, left: -25, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorKWh" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={accentHex} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={accentHex} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="day" 
            stroke={grayHex} 
            tickLine={false} 
            axisLine={false}
          />
          <YAxis 
            stroke={grayHex} 
            tickLine={false} 
            axisLine={false} 
            unit="k"
          />
          <Tooltip
            contentStyle={{ 
              backgroundColor: cardBgHex, 
              borderColor: accentHex,
              borderRadius: '0.5rem'
            }}
            labelStyle={{ color: '#e5e7eb' }}
            itemStyle={{ color: accentHex }}
          />
          <Area 
            type="monotone" 
            dataKey="kWh" 
            stroke={accentHex}
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorKWh)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </Card>
);

const TripStatistics = () => (
  <Card className="h-full flex flex-col">
    <h3 className="font-bold text-lg text-white mb-4">Statistiche Viaggio</h3>
    
    <div className="flex-grow flex flex-col justify-center">
      <div className="space-y-4">
        
        <div className="flex items-center">
          <Zap size={32} className={`${aColor.accent} mr-4`} /> 
          <div>
            <span className={aColor.baseTextSecondary}>Consumo Medio</span>
            <p className="text-2xl font-bold text-white">15.2 <span className="text-base opacity-75">kWh/100km</span></p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Gauge size={32} className={`${aColor.accent} mr-4`} />
          <div>
            <span className={aColor.baseTextSecondary}>Velocità Media</span>
            <p className="text-2xl font-bold text-white">58 <span className="text-base opacity-75">km/h</span></p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Clock size={32} className={`${aColor.baseTextSecondary} mr-4`} />
          <div>
            <span className={aColor.baseTextSecondary}>Tempo di Guida</span>
            <p className="text-2xl font-bold text-white">01:42:30</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <BatteryCharging size={32} className={`${aColor.alert} mr-4`} />
          <div>
            <span className={aColor.baseTextSecondary}>Consumo Clima</span>
            <p className="text-2xl font-bold text-white">~ 8% <span className="text-base opacity-75">del totale</span></p>
          </div>
        </div>
        
      </div>
    </div>
  </Card>
);


export default function Autonomy() {
  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      
      <div>
        <BackButton /> 
        <PageTitle title="Autonomia / Consumo" />
      </div>
      
      <div className="mt-2 grid grid-cols-1 lg:grid-cols-3 gap-4 flex-grow lg:grid-rows-2 overflow-hidden">
        
        <div className="lg:col-span-1">
          <AutonomyGauge />
        </div>
        <div className="lg:col-span-2">
          <FakeMapRange />
        </div>
        <div className="lg:col-span-1">
          <TripStatistics />
        </div>
        <div className="lg:col-span-2">
          <ConsumptionHistory />
        </div>
        
      </div>
    </div>
  );
}