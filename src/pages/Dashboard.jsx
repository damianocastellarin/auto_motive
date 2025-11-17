import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BatteryCharging, 
  Leaf, 
  Wrench, 
  User, 
  Activity, 
  MapPin, 
  Clock, 
  Wind,
  Settings,
  CircleAlert
} from 'lucide-react';

const aColor = {
  accent: 'text-green-400',
  accentHover: 'hover:text-green-300',
  comfort: 'text-blue-400',
  alert: 'text-orange-500',
  error: 'text-red-500',
  ok: 'text-green-500',
  baseText: 'text-gray-200',
  baseTextSecondary: 'text-gray-400',
  bgBase: 'bg-gray-900',
  bgCard: 'bg-gray-800',
  bgHeaderFooter: 'bg-gray-800'
};

function Card({ children, className = '' }) {
  return (
    <div className={`${aColor.bgCard} rounded-xl shadow-lg p-3 ${className}`}>
      {children}
    </div>
  );
}

function PageTitle({ title, children }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className={`text-xl font-bold ${aColor.baseText}`}>{title}</h1>
      {children}
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  
  const DashboardWidget = ({ title, icon: Icon, targetPage, colorClass = aColor.accent }) => {
    return (
      <button
        onClick={() => navigate(targetPage)}
        className={`${aColor.bgCard} rounded-xl shadow-lg p-3 flex flex-col items-center justify-center 
                  lg:flex-row lg:justify-start lg:items-center lg:p-3 lg:h-full 
                  transform transition-transform duration-200 hover:scale-105 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 
                  ${colorClass.replace('text-', 'focus:ring-')}`}
      >
        <Icon size={50} className={`mb-1.5 lg:mb-0 lg:mr-3 ${colorClass}`} />
        <span className={`font-semibold text-center lg:text-left text-lg ${aColor.baseText}`}>{title}</span>
      </button>
    );
  };

  return (
    <div className="p-4 lg:p-0 lg:h-full">
      <div className="lg:flex lg:space-x-4 lg:h-full lg:p-4">

        <div className="lg:w-1/3 lg:flex lg:flex-col lg:space-y-4">
          
          <Card className="mb-4 py-3 lg:flex-grow lg:flex lg:flex-col lg:justify-center">
            <div className="flex justify-between items-center mb-4">
                <span className={`text-6xl font-bold ${aColor.baseText}`}>Stato Veicolo</span>
                <BatteryCharging size={80} className={aColor.ok} />
            </div>
            <div className="flex justify-between items-center lg:flex-col lg:items-start lg:space-y-4">
              <div>
                <span className={aColor.baseTextSecondary}>Autonomia Stimata</span>
                <p className="text-3xl font-bold text-white lg:text-5xl">420 <span className="text-xl lg:text-2xl">km</span></p>
              </div>
              <div className="text-right lg:text-left">
                <span className={aColor.baseTextSecondary}>Batteria</span>
                <p className={`text-xl font-bold ${aColor.ok} lg:text-3xl`}>85%</p>
              </div>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-1.5 mt-4 lg:mt-8">
              <div className={`${aColor.ok.replace('text-','bg-')} h-1.5 rounded-full`} style={{ width: '85%' }}></div>
            </div>
          </Card>
          
          <Card className="hidden lg:block">
            <h3 className={`text-lg font-bold ${aColor.baseText} mb-2`}>Service & Alert</h3>
            <div className="flex items-center text-sm mb-1">
                <CircleAlert size={18} className={aColor.alert} />
                <span className={`ml-2 ${aColor.alert}`}>Pneumatico Dx (bassa pressione)</span>
            </div>
             <div className="flex items-center text-sm">
                <Wrench size={18} className={aColor.ok} />
                <span className={`ml-2 ${aColor.baseText}`}>Tagliando: Tra 15.000 km</span>
            </div>
          </Card>
        </div>

        <div className="lg:w-2/3 lg:flex lg:flex-col">
          <PageTitle title="Accesso Rapido" />
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3 flex-grow lg:grid-rows-3">
            <DashboardWidget title="Autonomia" icon={BatteryCharging} targetPage="autonomy" colorClass={aColor.accent} />
            <DashboardWidget title="Energy" icon={Leaf} targetPage="energy" colorClass={aColor.accent} />
            <DashboardWidget title="Service" icon={Wrench} targetPage="service" colorClass={aColor.alert} />
            <DashboardWidget title="Comfort" icon={Wind} targetPage="comfort" colorClass={aColor.comfort} />
            <DashboardWidget title="Profilo" icon={User} targetPage="profile" colorClass={aColor.baseTextSecondary} />
            <DashboardWidget title="Diagnostica" icon={Activity} targetPage="diagnostics" colorClass={aColor.alert} />
            <DashboardWidget title="Telemetria" icon={MapPin} targetPage="telemetry" colorClass={aColor.baseTextSecondary} />
            <DashboardWidget title="Intertime" icon={Clock} targetPage="intertime" colorClass={aColor.baseTextSecondary} />
            <DashboardWidget title="Impostazioni" icon={Settings} targetPage="settings" colorClass={aColor.baseTextSecondary} />
          </div>
        </div>
      </div>
    </div>
  );
}