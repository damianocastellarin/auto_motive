import React from 'react';
import { aColor } from '../../constants/colors';

export default function PageTitle({ title, children }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className={`text-2xl font-bold ${aColor.baseText}`}>{title}</h1>
      {children}
    </div>
  );
}