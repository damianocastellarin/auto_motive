import React from 'react';
import { aColor } from '../../constants/colors';

export default function ToggleSwitch({ label, enabled, setEnabled }) {
  return (
    <div className="flex items-center justify-between">
      <span className={aColor.baseText}>{label}</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none ${
          enabled ? 'bg-green-500' : 'bg-gray-600'
        }`}
      >
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}
