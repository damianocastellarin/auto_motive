import React from 'react';
import { aColor } from '../../constants/colors';

export default function Card({ children, className = '' }) {
  return (
    <div className={`${aColor.bgCard} rounded-xl shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
}