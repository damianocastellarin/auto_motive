import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle,
  XCircle,
  Wrench, 
  CalendarCheck, 
  Droplet, 
  ClipboardCheck,
  Settings,
  Info,
  Battery,
  Disc3
} from 'lucide-react';
import { aColor } from '../constants/colors';
import Card from '../components/ui/Card';
import PageTitle from '../components/ui/PageTitle';
import BackButton from '../components/ui/BackButton';

const ServiceItem = ({ 
  icon: Icon, 
  label, 
  value, 
  valueColor = aColor.baseText, 
  iconColor = aColor.baseTextSecondary 
}) => (
  <li className="flex items-center justify-between py-1.5">
    <div className="flex items-center">
      <Icon size={20} className={`${iconColor} mr-3`} />
      <span className={aColor.baseText}>{label}</span>
    </div>
    <span className={`font-semibold ${valueColor}`}>{value}</span>
  </li>
);

const HistoryItem = ({ title, date, status }) => (
  <li className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
    <div className="flex items-center">
      <ClipboardCheck size={20} className={`${aColor.accent} mr-3`} />
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </div>
    <span className="text-sm text-gray-300">{status}</span>
  </li>
);

export default function Service() {
  
  const currentStatus = 'warning';
  
  const statusConfig = {
    ok: {
      icon: ShieldCheck,
      color: aColor.ok,
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      title: 'Stato Veicolo: OK',
      message: 'Nessun intervento richiesto.'
    },
    warning: {
      icon: AlertTriangle,
      color: aColor.alert,
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      title: 'Stato Veicolo: ATTENZIONE',
      message: '1 intervento richiesto.'
    },
    error: {
      icon: XCircle,
      color: aColor.error,
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      title: 'Stato Veicolo: CRITICO',
      message: 'Intervento immediato richiesto.'
    }
  };
  
  const activeStatus = statusConfig[currentStatus];

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      
      <div>
        <BackButton />
        <PageTitle title="Service e Manutenzione" />
      </div>
      
      <div className="mt-4 flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 overflow-hidden lg:grid-rows-2">

        <div className="lg:col-span-1">
          <Card className="h-full flex flex-col items-center justify-center text-center p-6">
            <div className={`w-20 h-20 rounded-full ${activeStatus.bgColor} 
                             flex items-center justify-center 
                             mx-auto border-2 ${activeStatus.borderColor}`}>
              <activeStatus.icon size={48} className={activeStatus.color} />
            </div>
            <h3 className={`text-2xl font-bold mt-4 ${activeStatus.color}`}>
              {activeStatus.title}
            </h3>
            <p className={aColor.baseTextSecondary}>{activeStatus.message}</p>
            <p className="text-sm text-gray-500 mt-2">Ultimo check: Oggi</p>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="h-full flex flex-col p-6">
            <h3 className="font-bold text-lg text-white mb-2">Prossime Scadenze</h3>
            <ul className="divide-y divide-gray-700">
              <ServiceItem 
                icon={Wrench} 
                label="Tagliando" 
                value="Tra 1.500 km"
                valueColor={aColor.alert}
                iconColor={aColor.alert}
              />
              <ServiceItem 
                icon={CalendarCheck} 
                label="Revisione" 
                value="Giu 2026" 
              />
              <ServiceItem 
                icon={Disc3}
                label="Stato Freni" 
                value="85% (OK)"
                valueColor={aColor.ok}
                iconColor={aColor.ok}
              />
              <ServiceItem 
                icon={Droplet} 
                label="Livello Fluidi" 
                value="OK"
                valueColor={aColor.ok}
                iconColor={aColor.ok}
              />
            </ul>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="h-full flex flex-col p-6">
            <h3 className="font-bold text-lg text-white mb-2">Garanzia e Sistema</h3>
            <ul className="divide-y divide-gray-700">
              <ServiceItem 
                icon={ShieldCheck} 
                label="Garanzia Veicolo" 
                value="Attiva (Scad. 2028)"
                valueColor={aColor.ok}
                iconColor={aColor.ok}
              />
              <ServiceItem 
                icon={Battery}
                label="Garanzia Batteria" 
                value="Attiva (Scad. 2030)"
                valueColor={aColor.ok}
                iconColor={aColor.ok}
              />
              <ServiceItem 
                icon={Info} 
                label="Richiami Ufficiali" 
                value="Nessuno"
                valueColor={aColor.ok}
                iconColor={aColor.ok}
              />
              <ServiceItem 
                icon={Settings} 
                label="Versione Software" 
                value="v3.5.1-2025" 
              />
            </ul>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <Card className="h-full flex flex-col p-6">
            <h3 className="font-bold text-lg text-white mb-2">Storico Interventi</h3>
            
            <div className="flex-grow overflow-y-auto -mx-6 px-6">
              <ul className="divide-y divide-gray-700">
                <HistoryItem 
                  title="Tagliando Annuale" 
                  date="15 Mag 2025" 
                  status="Completato"
                />
                <HistoryItem 
                  title="Sostituzione Filtro Aria" 
                  date="15 Mag 2025" 
                  status="Completato"
                />
                <HistoryItem 
                  title="Controllo Pressione" 
                  date="02 Feb 2025" 
                  status="Completato"
                />
                <HistoryItem 
                  title="Aggiornamento Software" 
                  date="10 Gen 2025" 
                  status="Eseguito"
                />
                <HistoryItem 
                  title="Tagliando Base" 
                  date="14 Mag 2024" 
                  status="Completato"
                />
                <HistoryItem 
                  title="Check Garanzia" 
                  date="14 Mag 2024" 
                  status="Completato"
                />
                <HistoryItem 
                  title="Sostituzione Pastiglie Freni" 
                  date="05 Gen 2024" 
                  status="Completato"
                />
                <HistoryItem 
                  title="Controllo Batteria 12V" 
                  date="05 Gen 2024" 
                  status="Completato"
                />
              </ul>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}