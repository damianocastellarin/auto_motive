import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sun, 
  Moon, 
  Gauge, 
  Clock12,
  Volume2,
  Bell,
  Navigation,
  Car,
  Lock,
  Download,
  RotateCcw,
  Info,
  ChevronRight
} from 'lucide-react';
import { aColor } from '../constants/colors';
import Card from '../components/ui/Card';
import PageTitle from '../components/ui/PageTitle';
import BackButton from '../components/ui/BackButton';
import ToggleSwitch from '../components/ui/ToggleSwitch';

const SettingCycler = ({ label, icon, level, levels, colors, onCycle }) => (
  <div className="flex items-center justify-between">
    <span className={`flex items-center ${aColor.baseText} text-sm`}>
      {icon && <span className="mr-2 opacity-70">{icon}</span>}
      {label}
    </span>
    <button
      onClick={onCycle}
      className={`py-1 px-2.5 rounded-md font-semibold text-sm text-white transition-colors ${colors[level]}`}
    >
      {levels[level]}
    </button>
  </div>
);

const SegmentedButton = ({ label, icon, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex-1 py-1.5 px-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center space-x-2 ${
      isActive ? 'bg-green-400 text-white' : 'bg-gray-700 text-gray-300'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
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

export default function Settings() {
  const navigate = useNavigate();

  const [brightness, setBrightness] = useState(0);
  const [units, setUnits] = useState('km');
  const [clock24, setClock24] = useState(true);
  
  const [mediaVolume, setMediaVolume] = useState(1);
  const [alertVolume, setAlertVolume] = useState(1);
  const [vessSound, setVessSound] = useState(true);
  
  const [startMode, setStartMode] = useState('comfort');
  const [autoLock, setAutoLock] = useState(true);

  const brightnessLevels = {
    LEVELS: ['Auto', 'Manuale'],
    COLORS: ['bg-gray-700', 'bg-green-400'],
  };
  const volumeLevels = {
    LEVELS: ['Basso', 'Medio', 'Alto'],
    COLORS: ['bg-gray-700', 'bg-green-400', 'bg-orange-500'],
  };

  const handleAction = (action) => alert(`${action} (simulata)`);

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      
      <div>
        <BackButton />
        <PageTitle title="Impostazioni" />
      </div>
      
      <div className="mt-4 flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 overflow-hidden lg:grid-rows-2">

        <Card className="h-full flex flex-col p-4">
          <h3 className="font-bold text-lg text-white mb-2">Display</h3>
          <div className="flex-grow flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <SettingCycler
                label="Luminosità" icon={<Sun size={16} />}
                level={brightness}
                levels={brightnessLevels.LEVELS}
                colors={brightnessLevels.COLORS}
                onCycle={() => setBrightness(b => (b + 1) % 2)}
              />
              <ToggleSwitch
                label="Formato 24 Ore"
                icon={<Clock12 size={16} className="mr-2" />}
                enabled={clock24}
                setEnabled={setClock24}
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-1">Unità di Misura</h4>
              <div className="flex space-x-2">
                <SegmentedButton
                  label="Metrico (km, °C)"
                  isActive={units === 'km'}
                  onClick={() => setUnits('km')}
                />
                <SegmentedButton
                  label="Imperiale (mi, °F)"
                  isActive={units === 'mi'}
                  onClick={() => setUnits('mi')}
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="h-full flex flex-col p-4">
          <h3 className="font-bold text-lg text-white mb-2">Audio e Suoni</h3>
          <div className="flex-grow flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <SettingCycler
                label="Volume Media" icon={<Volume2 size={16} />}
                level={mediaVolume}
                levels={volumeLevels.LEVELS}
                colors={volumeLevels.COLORS}
                onCycle={() => setMediaVolume(v => (v + 1) % 3)}
              />
              <SettingCycler
                label="Volume Avvisi" icon={<Bell size={16} />}
                level={alertVolume}
                levels={volumeLevels.LEVELS}
                colors={volumeLevels.COLORS}
                onCycle={() => setAlertVolume(v => (v + 1) % 3)}
              />
            </div>
            <div className="pt-3 border-t border-gray-700">
              <ToggleSwitch
                label="Suono Pedoni (VESS)"
                icon={<Navigation size={16} className="mr-2" />}
                enabled={vessSound}
                setEnabled={setVessSound}
              />
            </div>
          </div>
        </Card>

        <Card className="h-full flex flex-col p-4">
          <h3 className="font-bold text-lg text-white mb-2">Veicolo</h3>
          <div className="flex-grow flex flex-col justify-between space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-1">Modalità Avvio Predefinita</h4>
              <div className="flex space-x-2">
                <SegmentedButton
                  label="Comfort"
                  isActive={startMode === 'comfort'}
                  onClick={() => setStartMode('comfort')}
                />
                <SegmentedButton
                  label="Sport"
                  isActive={startMode === 'sport'}
                  onClick={() => setStartMode('sport')}
                />
              </div>
            </div>
            
            <div className="pt-3 border-t border-gray-700 space-y-3">
              <ToggleSwitch
                label="Chiusura Automatica Portiere"
                icon={<Lock size={16} className="mr-2" />}
                enabled={autoLock}
                setEnabled={setAutoLock}
              />
            </div>
          </div>
        </Card>

        <Card className="h-full flex flex-col p-4">
          <h3 className="font-bold text-lg text-white mb-2">Sistema</h3>
          <div className="flex-grow flex flex-col justify-between">
            <div className="p-2 bg-gray-700/50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className={`${aColor.baseText} text-sm`}>Versione Software</span>
                <span className="font-semibold text-white text-sm">v3.5.1-2025</span>
              </div>
              <p className="text-xs text-green-400 mt-1">Il software è aggiornato.</p>
            </div>

            <div className="space-y-2 mt-3">
              <ActionItem 
                icon={Download} 
                label="Verifica Aggiornamenti" 
                onClick={() => handleAction('Verifica Aggiornamenti')} 
              />
            </div>

            <button 
              onClick={() => handleAction('Reset di Fabbrica')}
              className={`w-full flex justify-center items-center text-left 
                          p-2 bg-red-600/80 rounded-lg 
                          hover:bg-red-600 transition-colors
                          font-semibold text-white mt-3`}
            >
              <RotateCcw size={18} className="mr-2" />
              <span className="text-sm">Reset di Fabbrica</span>
            </button>
          </div>
        </Card>
        
      </div>
    </div>
  );
}