import React from 'react';
import { Outlet } from 'react-router-dom';
import { aColor } from './constants/colors';

import AppHeader from './components/layout/AppHeader';
import AppFooter from './components/layout/AppFooter';

export default function App() {

  return (
    <div className={`flex flex-col h-screen ${aColor.bgBase} font-sans`}>
      <AppHeader />
      <main className="flex-grow overflow-hidden">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}