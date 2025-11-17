import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { aColor } from '../constants/colors';

export default function FullScreenNotFound() {
  const navigate = useNavigate();
  const futuristicFont = { fontFamily: '"Orbitron", sans-serif' };

  return (
    <div className={`
          flex flex-col items-center justify-center 
          h-screen w-screen p-6 text-center 
          ${aColor.bgBase} relative overflow-hidden`}
    >
      
      <div 
        className="absolute inset-0 flex items-center justify-center z-0 
                   opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <span 
          className="text-gray-700 font-black" 
          style={{ fontSize: '25rem', ...futuristicFont }} 
        >
          404
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        <div className={`p-5 rounded-full ${aColor.bgCard} 
                        border-2 ${aColor.alert.replace('text-','border-')} 
                        shadow-xl`}
        >
          <AlertTriangle size={48} className={aColor.alert} />
        </div>

        
        <h1 
          className={`mt-8 text-3xl font-bold ${aColor.baseText} sm:text-4xl`}
          style={futuristicFont}
        >
          404: PAGE NOT FOUND
        </h1>
        
        <p className={`mt-4 max-w-xl text-lg ${aColor.baseTextSecondary}`}>
          Il sistema ha tentato di stabilire un collegamento con un quadrante 
          di telemetria che non risponde. La rotta dati è corrotta o inesistente.
        </p>

        <button
          onClick={() => navigate('/')}
          className={`
            group
            mt-12 py-3 px-12 rounded-lg
            font-semibold text-lg
            
            text-white
            border-2 border-white
            bg-transparent
            
            transition-all duration-300 ease-in-out
            
            hover:${aColor.accent}
            hover:border-green-400
            hover:shadow-xl hover:shadow-green-400/20
            
            focus:outline-none focus:ring-4 focus:ring-offset-2 
            focus:ring-offset-gray-900 focus:ring-white
          `}
          style={futuristicFont}
        >
          <span className="relative z-10">
            RITORNA ALLA DASHBOARD
          </span>
        </button>
      </div>
      
    </div>
  );
}