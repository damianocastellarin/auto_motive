import React, { useState } from 'react';
import { 
  ChevronUp, ChevronDown, ChevronLeft, 
  Fan, Snowflake, Sparkles, Wind,
  Activity, ShieldCheck
} from 'lucide-react';

import { aColor } from '../constants/colors';
import Card from '../components/ui/Card';
import ToggleSwitch from '../components/ui/ToggleSwitch';
import BackButton from '../components/ui/BackButton';
import PageTitle from '../components/ui/PageTitle';

const FAN_SPEED = { MIN: 1, MAX: 5 };
const PROFILES = { DRIVER_1: 'driver1', GUEST: 'guest' };
const SUSPENSION_MODES = { COMFORT: 'comfort', SPORT: 'sport' };
const SEAT_HEAT = {
  LEVELS: ['Off', 'Basso', 'Medio', 'Alto'],
  COLORS: ['bg-gray-700', 'bg-blue-500', 'bg-orange-500', 'bg-red-500'],
};
const MAX_SEAT_HEAT_LEVEL = SEAT_HEAT.LEVELS.length;
const SEAT_VENT = {
  LEVELS: ['Off', 'Bassa', 'Media', 'Alta'],
  COLORS: ['bg-gray-700', 'bg-cyan-500', 'bg-blue-500', 'bg-indigo-500'],
};
const MAX_SEAT_VENT_LEVEL = SEAT_VENT.LEVELS.length;
const AMBIENT_COLORS = [
  { name: 'Ghiaccio', hex: '#3b82f6' }, { name: 'Sole', hex: '#f97316' },
  { name: 'Natura', hex: '#22c55e' }, { name: 'Passione', hex: '#ef4444' },
];

export default function Comfort() {
  const [temp, setTemp] = useState(21);
  const [acOn, setAcOn] = useState(false);
  const [fanSpeed, setFanSpeed] = useState(2);
  const [activeProfile, setActiveProfile] = useState(PROFILES.DRIVER_1);
  const [driverSeatHeat, setDriverSeatHeat] = useState(0); 
  const [passengerSeatHeat, setPassengerSeatHeat] = useState(0);
  const [steeringHeat, setSteeringHeat] = useState(false);
  const [driverSeatVent, setDriverSeatVent] = useState(0);
  const [passengerSeatVent, setPassengerSeatVent] = useState(0);
  const [suspensionMode, setSuspensionMode] = useState(SUSPENSION_MODES.COMFORT);
  const [airPurification, setAirPurification] = useState(false);
  const [autoLights, setAutoLights] = useState(true);
  const [ambientColor, setAmbientColor] = useState(AMBIENT_COLORS[0].hex);

  const handleDriverSeatCycle = (type) => {
    if (type === 'heat') setDriverSeatHeat(c => (c + 1) % MAX_SEAT_HEAT_LEVEL);
    else if (type === 'vent') setDriverSeatVent(c => (c + 1) % MAX_SEAT_VENT_LEVEL);
  };
  const handlePassengerSeatCycle = (type) => {
    if (type === 'heat') setPassengerSeatHeat(c => (c + 1) % MAX_SEAT_HEAT_LEVEL);
    else if (type === 'vent') setPassengerSeatVent(c => (c + 1) % MAX_SEAT_VENT_LEVEL);
  };
  const increaseFan = () => setFanSpeed(s => Math.min(s + 1, FAN_SPEED.MAX));
  const decreaseFan = () => setFanSpeed(s => Math.max(s - 1, FAN_SPEED.MIN));


  return (
    <div className="p-4 lg:p-6 flex flex-col h-full"> 
      
      <div>
        <BackButton /> 
        <PageTitle title="Comfort" />
      </div>
      
      <div className="flex-grow grid grid-cols-2 grid-rows-2 gap-4 lg:gap-6 mt-4">

        <ClimateControls
          temp={temp} setTemp={setTemp}
          fanSpeed={fanSpeed} increaseFan={increaseFan} decreaseFan={decreaseFan}
          acOn={acOn} setAcOn={setAcOn}
        />

        <DriverControls
          driverSeatHeat={driverSeatHeat}
          driverSeatVent={driverSeatVent}
          onDriverCycle={handleDriverSeatCycle}
          steeringHeat={steeringHeat}
          setSteeringHeat={setSteeringHeat}
          suspensionMode={suspensionMode}
          setSuspensionMode={setSuspensionMode}
        />

        <PassengerEnvironment
          passengerSeatHeat={passengerSeatHeat}
          passengerSeatVent={passengerSeatVent}
          onPassengerCycle={handlePassengerSeatCycle}
          ambientColor={ambientColor}
          setAmbientColor={setAmbientColor}
        />

        <GeneralSettings
          activeProfile={activeProfile}
          setActiveProfile={setActiveProfile}
          airPurification={airPurification}
          setAirPurification={setAirPurification}
          autoLights={autoLights}
          setAutoLights={setAutoLights}
        />
      </div>
    </div>
  );
}

const ClimateControls = ({ temp, setTemp, fanSpeed, increaseFan, decreaseFan, acOn, setAcOn }) => (
  <Card className="flex flex-col">
    <h3 className="font-bold text-lg text-white mb-2">Clima</h3>
    <div className="flex-grow flex items-center justify-around">
      <TempButton icon={<ChevronDown size={28} />} onClick={() => setTemp(t => t - 1)} />
      <p className={`text-6xl font-bold ${aColor.accent}`}>{temp}°</p>
      <TempButton icon={<ChevronUp size={28} />} onClick={() => setTemp(t => t + 1)} />
    </div>
    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-700">
      <button 
        onClick={() => setAcOn(a => !a)}
        className={`p-3 rounded-full text-white transition-colors ${
          acOn ? 'bg-green-400' : 'bg-gray-700'
        }`}
      > <Snowflake size={24} /> </button>
      <FanControl 
        speed={fanSpeed} 
        onIncrease={increaseFan} 
        onDecrease={decreaseFan} 
      />
    </div>
  </Card>
);

const DriverControls = ({ 
  driverSeatHeat, driverSeatVent, onDriverCycle,
  steeringHeat, setSteeringHeat,
  suspensionMode, setSuspensionMode
}) => (
  <Card className="flex flex-col">
    <h3 className="font-bold text-lg text-white mb-2">Guidatore e Veicolo</h3>
    <div className="flex-grow flex flex-col justify-between space-y-3">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-gray-400 mb-1">Sedile Guidatore</h4>
        <SettingCycler
          label="Riscaldamento" icon={<Sparkles size={16} />}
          level={driverSeatHeat} levels={SEAT_HEAT.LEVELS} colors={SEAT_HEAT.COLORS}
          onCycle={() => onDriverCycle('heat')}
        />
        <SettingCycler
          label="Ventilazione" icon={<Wind size={16} />}
          level={driverSeatVent} levels={SEAT_VENT.LEVELS} colors={SEAT_VENT.COLORS}
          onCycle={() => onDriverCycle('vent')}
        />
      </div>
      <SuspensionSelector
        activeMode={suspensionMode}
        onModeSelect={setSuspensionMode}
      />
      <div className="pt-3 border-t border-gray-700">
        <ToggleSwitch
          label="Volante Riscaldato"
          enabled={steeringHeat}
          setEnabled={setSteeringHeat}
        />
      </div>
    </div>
  </Card>
);

const PassengerEnvironment = ({
  passengerSeatHeat, passengerSeatVent, onPassengerCycle,
  ambientColor, setAmbientColor
}) => (
  <Card className="flex flex-col">
    <h3 className="font-bold text-lg text-white mb-2">Passeggero e Ambiente</h3>
    <div className="flex-grow flex flex-col justify-between space-y-3">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-gray-400 mb-1">Sedile Passeggero</h4>
        <SettingCycler
          label="Riscaldamento" icon={<Sparkles size={16} />}
          level={passengerSeatHeat} levels={SEAT_HEAT.LEVELS} colors={SEAT_HEAT.COLORS}
          onCycle={() => onPassengerCycle('heat')}
        />
        <SettingCycler
          label="Ventilazione" icon={<Wind size={16} />}
          level={passengerSeatVent} levels={SEAT_VENT.LEVELS} colors={SEAT_VENT.COLORS}
          onCycle={() => onPassengerCycle('vent')}
        />
      </div>
      <AmbientLightControl 
        activeColor={ambientColor}
        onColorSelect={setAmbientColor}
      />
    </div>
  </Card>
);

const GeneralSettings = ({
  activeProfile, setActiveProfile,
  airPurification, setAirPurification,
  autoLights, setAutoLights
}) => (
  <Card className="flex flex-col">
    <h3 className="font-bold text-lg text-white mb-2">Generali</h3>
    <div className="flex-grow flex flex-col justify-between space-y-3">
      <ProfileSelector 
        activeProfile={activeProfile} 
        setActiveProfile={setActiveProfile} 
      />
      <div className="pt-3 border-t border-gray-700 space-y-3">
        <ToggleSwitch
          label="Purificazione Aria"
          enabled={airPurification}
          setEnabled={setAirPurification}
          icon={<ShieldCheck size={20} className="mr-2" />}
        />
        <ToggleSwitch 
          label="Luci Automatiche" 
          enabled={autoLights} 
          setEnabled={setAutoLights} 
        />
      </div>
    </div>
  </Card>
);

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

const ProfileSelector = ({ activeProfile, setActiveProfile }) => (
  <div>
    <h4 className="text-sm font-semibold text-gray-400 mb-1">Profilo Attivo</h4>
    <div className="flex space-x-2">
      <SegmentedButton
        label="Guidatore 1"
        isActive={activeProfile === PROFILES.DRIVER_1}
        onClick={() => setActiveProfile(PROFILES.DRIVER_1)}
      />
      <SegmentedButton
        label="Ospite"
        isActive={activeProfile === PROFILES.GUEST}
        onClick={() => setActiveProfile(PROFILES.GUEST)}
      />
    </div>
  </div>
);

const SuspensionSelector = ({ activeMode, onModeSelect }) => (
  <div>
    <h4 className="text-sm font-semibold text-gray-400 mb-1">Sospensioni</h4>
    <div className="flex space-x-2">
      <SegmentedButton
        label="Comfort" icon={<Activity size={16} />}
        isActive={activeMode === SUSPENSION_MODES.COMFORT}
        onClick={() => onModeSelect(SUSPENSION_MODES.COMFORT)}
      />
      <SegmentedButton
        label="Sport" icon={<Activity size={16} />}
        isActive={activeMode === SUSPENSION_MODES.SPORT}
        onClick={() => onModeSelect(SUSPENSION_MODES.SPORT)}
      />
    </div>
  </div>
);

const SegmentedButton = ({ label, icon, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex-1 py-1.5 px-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center space-x-2 ${
      isActive ? 'bg-green-400 text-white' : 'bg-gray-700 text-gray-300' // Colore verde
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const AmbientLightControl = ({ activeColor, onColorSelect }) => (
  <div>
    <h4 className="text-sm font-semibold text-gray-400 mb-1">Luci Ambiente</h4>
    <div className="flex items-center justify-between space-x-2">
      {AMBIENT_COLORS.map(color => (
        <button
          key={color.hex}
          title={color.name}
          onClick={() => onColorSelect(color.hex)}
          className={`w-full h-8 rounded-md transition-all ${
            activeColor === color.hex 
              ? 'ring-2 ring-offset-2 ring-offset-gray-800 ring-white' 
              : 'opacity-70 hover:opacity-100'
          }`}
          style={{ backgroundColor: color.hex }}
        />
      ))}
    </div>
  </div>
);

const TempButton = ({ icon, onClick }) => (
  <button onClick={onClick} className="p-3 bg-gray-700 rounded-full text-white">
    {icon}
  </button>
);

const FanControl = ({ speed, onIncrease, onDecrease }) => (
  <div className="flex items-center space-x-3">
    <FanButton icon={<ChevronDown size={20} />} onClick={onDecrease} disabled={speed === FAN_SPEED.MIN} />
    <div className="text-center w-8">
      <Fan size={24} className={`${aColor.baseTextSecondary} mx-auto`} />
      <span className={`text-lg font-bold ${aColor.baseText}`}>{speed}</span>
    </div>
    <FanButton icon={<ChevronUp size={20} />} onClick={onIncrease} disabled={speed === FAN_SPEED.MAX} />
  </div>
);

const FanButton = ({ icon, onClick, disabled = false }) => (
  <button 
    onClick={onClick} 
    className="p-2 bg-gray-700 rounded-full text-white disabled:opacity-30"
    disabled={disabled}
  > {icon} </button>
);