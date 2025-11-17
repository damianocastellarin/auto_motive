import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CircleAlert, 
  CheckCircle,
  AlertTriangle,
  Thermometer,
  Battery,
  Settings,
  List,
  ScanSearch,
  ChevronRight,
  Droplet,
  Puzzle,
  Target
} from 'lucide-react';
import { aColor } from '../constants/colors';
import Card from '../components/ui/Card';
import PageTitle from '../components/ui/PageTitle';
import BackButton from '../components/ui/BackButton';

const SystemStatusItem = ({ icon: Icon, label, status, color }) => (
  <li className="flex justify-between items-center py-2">
    <div className="flex items-center">
      <Icon size={18} className={`${color} mr-3`} />
      <span className={aColor.baseText}>{label}</span>
    </div>
    <span className={`font-semibold text-sm ${color}`}>{status}</span>
  </li>
);

const VitalItem = ({ label, value, valueColor = 'text-white' }) => (
  <li className="flex justify-between items-center py-1.5">
    <span className={`${aColor.baseText} text-sm`}>{label}</span>
    <span className={`font-semibold text-sm ${valueColor}`}>{value}</span>
  </li>
);

const ActionItem = ({ icon: Icon, label, onClick, isNav = false }) => (
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
    {isNav && <ChevronRight size={20} className="text-gray-400" />}
  </button>
);

export default function Diagnostics() {
  const navigate = useNavigate();

  const handleAction = (action) => {
    alert(`${action} (simulata)`);
  };

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      
      <div>
        <BackButton />
        <PageTitle title="Diagnostica" />
      </div>
      
      <div className="mt-4 flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 overflow-hidden lg:grid-rows-2">

        <Card className="h-full flex flex-col items-center justify-center text-center p-6 bg-orange-500/10 border border-orange-500/30">
          <AlertTriangle size={60} className={aColor.alert} />
          <h3 className={`text-2xl font-bold mt-4 ${aColor.alert}`}>
            Alert Attivo
          </h3>
          <p className="text-lg text-white mt-2">Pressione Bassa</p>
          <p className={aColor.baseTextSecondary}>Pneumatico Anteriore Dx (2.1 bar)</p>
        </Card>

        <Card className="h-full flex flex-col p-4">
          <h3 className="font-bold text-lg text-white mb-1">Stato Sistemi</h3>
          <ul className="divide-y divide-gray-700">
            <SystemStatusItem 
              icon={Settings} 
              label="Powertrain" 
              status="OK"
              color={aColor.ok}
            />
            <SystemStatusItem 
              icon={Battery} 
              label="Sistema Batteria" 
              status="OK"
              color={aColor.ok}
            />
            <SystemStatusItem 
              icon={CircleAlert}
              label="Pressione Pneumatici" 
              status="ERRORE"
              color={aColor.alert}
            />
             <SystemStatusItem 
              icon={CheckCircle} 
              label="Freni e Trazione" 
              status="OK"
              color={aColor.ok}
            />
             <SystemStatusItem 
              icon={CheckCircle} 
              label="Software e Connettività" 
              status="OK"
              color={aColor.ok}
            />
          </ul>
        </Card>

        <Card className="h-full flex flex-col p-4">
          <h3 className="font-bold text-lg text-white mb-2">Vitals Veicolo</h3>
          <ul className="divide-y divide-gray-700">
            <VitalItem 
              label="Pressione Pneumatici"
              value="Anomalia Rilevata"
              valueColor={aColor.alert}
            />
            <VitalItem 
              label="Temperature Esercizio"
              value="Ottimali"
              valueColor={aColor.ok}
            />
            <VitalItem 
              label="Tensione Batteria 12V"
              value="14.4 V (Stabile)"
              valueColor={aColor.ok}
            />
            <VitalItem 
              label="Usura Pastiglie Freni"
              value="85% Residua"
              valueColor={aColor.ok}
            />
            <VitalItem 
              label="Livello Liquido Refrigerante"
              value="OK"
              valueColor={aColor.ok}
            />
            <VitalItem 
              label="Livello Liquido Freni"
              value="OK"
              valueColor={aColor.ok}
            />
          </ul>
        </Card>

        <Card className="h-full flex flex-col p-4">
          <h3 className="font-bold text-lg text-white mb-2">Azioni Diagnostica</h3>
          <div className="space-y-2">
            <ActionItem 
              icon={ScanSearch} 
              label="Esegui Scansione Completa" 
              onClick={() => handleAction('Scansione')} 
            />
            <ActionItem 
              icon={List} 
              label="Storico Errori" 
              onClick={() => navigate('/service')}
              isNav={true}
            />
            <ActionItem 
              icon={Puzzle} 
              label="Test Componenti" 
              onClick={() => handleAction('Test Componenti')}
            />
            <ActionItem 
              icon={Target} 
              label="Calibra Sensori" 
              onClick={() => handleAction('Calibrazione Sensori')}
            />
          </div>
        </Card>
        
      </div>
    </div>
  );
}