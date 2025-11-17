import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BatteryCharging, 
  Leaf, 
  Wrench,
  Wind
} from 'lucide-react';
import { aColor } from '../../constants/colors';

export default function AppFooter() {
  
  const TabLink = ({ to, label, icon: Icon }) => {
    return (
      <NavLink
        to={to}
        end={to === '/'} 
        className={({ isActive }) => 
          `flex flex-col items-center justify-center w-full pt-2 pb-1 focus:outline-none transition-colors duration-200 ${
            isActive ? aColor.accent : aColor.baseTextSecondary
          }`
        }
      >
        <Icon size={24} />
        <span className="text-xs mt-1">{label}</span>
      </NavLink>
    );
  };

  return (
    <nav className={`${aColor.bgHeaderFooter} shadow-inner sticky bottom-0 z-10`}>
      <div className="flex justify-around">
        {/* 4. Usiamo TabLink con i percorsi (prop 'to') */}
        <TabLink to="/" label="Home" icon={LayoutDashboard} />
        <TabLink to="/autonomy" label="Autonomia" icon={BatteryCharging} />
        <TabLink to="/energy" label="Eco" icon={Leaf} />
        <TabLink to="/comfort" label="Comfort" icon={Wind} />
        <TabLink to="/service" label="Service" icon={Wrench} />
      </div>
    </nav>
  );
}