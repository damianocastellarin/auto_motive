import React from 'react';
import { Wifi } from 'lucide-react';
import { aColor } from '../../constants/colors';

export default function AppHeader() {
  return (
    <header className={`${aColor.bgHeaderFooter} p-4 shadow-md sticky top-0 z-10`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">FuturaDrive</h1>
        <div className={`flex items-center ${aColor.ok}`}>
          <span className="mr-2 text-sm">Connesso</span>
          <Wifi size={20} />
        </div>
      </div>
    </header>
  );
}
