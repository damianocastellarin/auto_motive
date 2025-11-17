import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { aColor } from '../../constants/colors';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate('/')} 
      className={`flex items-center ${aColor.baseTextSecondary} ${aColor.accentHover} mb-4`}
    >
      <ChevronLeft size={20} />
      <span className="ml-1">Dashboard</span>
    </button>
  );
}