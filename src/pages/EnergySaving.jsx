import React, { useState } from 'react';
import { aColor } from '../constants/colors';
import Card from '../components/ui/Card';
import PageTitle from '../components/ui/PageTitle';
import BackButton from '../components/ui/BackButton';
import { Leaf, Zap, Wind, Gauge, Snowflake, Mountain, Flag, Settings } from 'lucide-react'; 

export default function EnergySaving() {
  const [mode, setMode] = useState('eco');
  
  const modeDetails = {
    eco: { 
      label: 'Eco', 
      icon: Leaf, 
      description: 'Massimizza l\'efficienza, riduce la risposta dell\'acceleratore e ottimizza il clima.' 
    },
    normal: { 
      label: 'Normal', 
      icon: Zap, 
      description: 'Equilibrio standard tra performance ed efficienza per la guida quotidiana.' 
    },
    comfort: { 
      label: 'Comfort', 
      icon: Wind, 
      description: 'Privilegia la fluidità di guida, sospensioni più morbide e impostazioni del clima.' 
    },
    sport: { 
      label: 'Sport', 
      icon: Gauge, 
      description: 'Risposta dell\'acceleratore massima, sterzo più rigido e performance elevate.' 
    },
    snow: { 
      label: 'Neve', 
      icon: Snowflake, 
      description: 'Trazione ottimizzata e accelerazione dolce per superfici scivolose.' 
    },
    offroad: { 
      label: 'Off-Road', 
      icon: Mountain, 
      description: 'Regola trazione, ABS e sospensioni per terreni sconnessi.' 
    },
    track: { 
      label: 'Pista', 
      icon: Flag, 
      description: 'Performance massime, aiuti alla guida disattivati e sospensioni rigide.' 
    },
    custom: { 
      label: 'Custom', 
      icon: Settings, 
      description: 'Configura la tua combinazione preferita di sterzo, motore e sospensioni.' 
    }
  };
  
  const selectedModeDetails = modeDetails[mode];

  const ModeButton = ({ id, label, icon: Icon }) => {
    const isActive = mode === id;
    const baseClasses = "p-4 rounded-lg text-center font-semibold transition-all duration-200 transform active:scale-95 flex flex-col items-center justify-center text-base border-2";
    const activeClasses = `${aColor.accent.replace('text-','bg-')} text-white ${aColor.accent.replace('text-','border-')} shadow-lg ${aColor.accent.replace('text-','shadow-')}/30`;
    const inactiveClasses = `${aColor.bgCard} ${aColor.baseText} border-gray-700 hover:bg-gray-700 hover:border-gray-600`;

    return (
      <button
        onClick={() => setMode(id)}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <Icon className="mb-1" size={24} />
        {label}
      </button>
    );
  };

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      
      <div>
        <BackButton />
        <PageTitle title="Energy Saving" />
      </div>
      
      <div className="flex-grow lg:flex lg:gap-6 mt-4 overflow-hidden">
        
        <div className="lg:w-3/5 h-full">
          <Card className="mb-4 lg:mb-0 lg:h-full lg:flex lg:flex-col">
            <h3 className="text-lg font-semibold text-white mb-3">Modalità Guida</h3>
            
            <div className="grid grid-cols-4 gap-4 lg:flex-grow lg:grid-rows-2">
              <ModeButton id="eco" label={modeDetails.eco.label} icon={modeDetails.eco.icon} />
              <ModeButton id="normal" label={modeDetails.normal.label} icon={modeDetails.normal.icon} />
              <ModeButton id="comfort" label={modeDetails.comfort.label} icon={modeDetails.comfort.icon} />
              <ModeButton id="sport" label={modeDetails.sport.label} icon={modeDetails.sport.icon} />
              <ModeButton id="snow" label={modeDetails.snow.label} icon={modeDetails.snow.icon} />
              <ModeButton id="offroad" label={modeDetails.offroad.label} icon={modeDetails.offroad.icon} />
              <ModeButton id="track" label={modeDetails.track.label} icon={modeDetails.track.icon} />
              <ModeButton id="custom" label={modeDetails.custom.label} icon={modeDetails.custom.icon} />
            </div>
          </Card>
        </div>

        <div className="lg:w-2/5 h-full lg:flex lg:flex-col lg:gap-6">
          
          <Card className="mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold text-white mb-3">Modalità Selezionata</h3>
            <div className="text-center lg:text-left">
              <selectedModeDetails.icon size={48} className={`mb-2 ${aColor.accent} mx-auto lg:mx-0`} />
              <h4 className={`font-semibold text-2xl ${aColor.accent}`}>{selectedModeDetails.label}</h4>
              <p className={`${aColor.baseTextSecondary} mt-1`}>{selectedModeDetails.description}</p>
            </div>
          </Card>
          
          <Card className="lg:flex-grow flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-3">Suggerimenti</h3>
            
            <div className="flex-grow flex flex-col justify-center space-y-2">
              <p className={aColor.baseText}>Mantieni un'accelerazione costante.</p>
              <p className={aColor.baseText}>Riduci l'uso del clima se non necessario.</p>
              <p className={aColor.baseText}>Controlla la pressione pneumatici.</p>
            </div>
          </Card>
        </div>
        
      </div>
    </div>
  );
}