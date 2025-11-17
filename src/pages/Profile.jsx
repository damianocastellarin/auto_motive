import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  CarFront, 
  Settings, 
  Gauge, 
  Zap, 
  Clock,
  SlidersHorizontal,
  LogOut,
  ChevronRight,
  Hash,
  TrendingUp,
  Wrench,
  Activity,
  Leaf,
  BatteryCharging,
  ArrowRightLeft,
  Palette,
  RectangleVertical
} from 'lucide-react';
import { aColor } from '../constants/colors';
import Card from '../components/ui/Card';
import PageTitle from '../components/ui/PageTitle';
import BackButton from '../components/ui/BackButton';

const InfoItem = ({ icon: Icon, label, value }) => (
  <li className="flex justify-between items-center py-1.5">
    <div className="flex items-center">
      <Icon size={18} className="text-gray-400 mr-3" />
      <span className={`${aColor.baseText} text-sm`}>{label}</span>
    </div>
    <span className="font-semibold text-white text-sm">{value}</span>
  </li>
);

const GridStatItem = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <Icon size={24} className={`${aColor.accent} mb-1`} />
    <p className="text-lg font-bold text-white">{value}</p>
    <span className={`${aColor.baseTextSecondary} text-xs uppercase`}>{label}</span>
  </div>
);

const ActionItem = ({ icon: Icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex justify-between items-center text-left 
                p-2 bg-gray-700 rounded-lg 
                hover:bg-gray-600 transition-colors`}
  >
    <div className="flex items-center">
      <Icon size={20} className={`${aColor.accent} mr-3`} />
      <span className="font-semibold text-white text-sm">{label}</span>
    </div>
    <ChevronRight size={20} className="text-gray-400" />
  </button>
);

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logout (simulato)');
  };

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      
      <div>
        <BackButton />
        <PageTitle title="Profilo Guidatore" />
      </div>
      
      <div className="mt-4 flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 overflow-hidden lg:grid-rows-2">

        <Card className="h-full flex flex-col items-center justify-center text-center p-4">
          <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-600 mb-3">
            <User size={48} className={aColor.baseText} />
          </div>
          <h3 className="text-xl font-bold text-white">Guidatore 1</h3>
          <p className={`${aColor.baseTextSecondary} text-sm`}>Profilo Principale</p>
          <button 
            className="mt-3 py-1 px-3 bg-gray-700 text-white
                       font-semibold rounded-lg hover:bg-gray-600 transition-colors text-sm"
          >
            Modifica
          </button>
        </Card>

        <Card className="h-full flex flex-col p-4">
          <h3 className="font-bold text-lg text-white mb-1">Il Mio Veicolo</h3>
          <ul className="divide-y divide-gray-700">
            <InfoItem icon={CarFront} label="Modello" value="Hyperion EV" />
            <InfoItem icon={Palette} label="Colore" value="Nero Assoluto" />
            <InfoItem icon={RectangleVertical} label="Targa" value="AA 123 BB" />
            <InfoItem icon={Hash} label="VIN" value="...WXYZ789" />
            <InfoItem icon={Settings} label="Software" value="v3.5.1-2025" />
          </ul>
        </Card>

        <Card className="h-full flex flex-col p-4">
          <h3 className="font-bold text-lg text-white mb-2">Statistiche Totali</h3>
          <div className="flex-grow grid grid-cols-2 grid-rows-3 gap-2">
            <GridStatItem 
              icon={Gauge} 
              label="Distanza" 
              value="42.150 km" 
            />
            <GridStatItem 
              icon={Zap} 
              label="Consumo Medio" 
              value="16.8 kWh" 
            />
            <GridStatItem 
              icon={TrendingUp} 
              label="Velocità Media" 
              value="58 km/h" 
            />
            <GridStatItem 
              icon={ArrowRightLeft}
              label="Efficienza" 
              value="98%" 
            />
          </div>
        </Card>

        <Card className="h-full flex flex-col p-4">
          <h3 className="font-bold text-lg text-white mb-2">Impostazioni e Account</h3>
          <div className="flex-grow flex flex-col justify-between">
            
            <div className="space-y-2">
              <ActionItem 
                icon={SlidersHorizontal} 
                label="Preferenze Comfort" 
                onClick={() => navigate('/comfort')} 
              />
              <ActionItem 
                icon={Wrench} 
                label="Stato Service" 
                onClick={() => navigate('/service')} 
              />
              <ActionItem 
                icon={Activity} 
                label="Diagnostica Veicolo" 
                onClick={() => navigate('/diagnostics')} 
              />
              <ActionItem 
                icon={Leaf} 
                label="Statistiche Energia" 
                onClick={() => navigate('/energy')} 
              />
            </div>

            <button 
              onClick={handleLogout}
              className={`w-full flex justify-center items-center text-left 
                          p-2 bg-red-600/80 rounded-lg 
                          hover:bg-red-600 transition-colors
                          font-semibold text-white mt-3`}
            >
              <LogOut size={18} className="mr-2" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </Card>
        
      </div>
    </div>
  );
}