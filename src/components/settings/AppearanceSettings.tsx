'use client';

import React, { useState } from 'react';
import { CustomSelect } from '../ui/custom-select';
import { Button } from '../ui/button';

const AppearanceSettings: React.FC = () => {
  const [themeMode, setThemeMode] = useState('system');
  const [displayDensity, setDisplayDensity] = useState('comfortable');
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);

  const displayDensityOptions = [
    { value: 'compact', label: 'Compact' },
    { value: 'comfortable', label: 'Comfortable' },
    { value: 'spacious', label: 'Spacious' },
  ];

  const handleSaveAppearance = () => {
    // Handle save appearance logic here
    console.log('Appearance settings saved');
  };

  const ToggleSwitch: React.FC<{
    enabled: boolean;
    onChange: (enabled: boolean) => void;
  }> = ({ enabled, onChange }) => {
    return (
      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          enabled ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    );
  };

  const ThemeButton: React.FC<{
    value: string;
    label: string;
    icon: React.ReactNode;
    isSelected: boolean;
    onClick: () => void;
  }> = ({ value, label, icon, isSelected, onClick }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`flex-1 flex items-center justify-center gap-2 h-10 px-4 rounded-md border transition-colors ${
          isSelected
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'
        }`}
      >
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </button>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900">Appearance Settings</h2>
        </div>
        <p className="text-gray-600 text-sm">Customize the look and feel of the application</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Theme Mode */}
        <div className="w-full">
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Theme Mode
          </label>
          <div className="flex gap-3">
            <ThemeButton
              value="light"
              label="Light"
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              }
              isSelected={themeMode === 'light'}
              onClick={() => setThemeMode('light')}
            />
            <ThemeButton
              value="dark"
              label="Dark"
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              }
              isSelected={themeMode === 'dark'}
              onClick={() => setThemeMode('dark')}
            />
            <ThemeButton
              value="system"
              label="System"
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
              isSelected={themeMode === 'system'}
              onClick={() => setThemeMode('system')}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Automatically switches between light and dark based on your system preferences
          </p>
        </div>

        {/* Display Density */}
        <div className="w-full">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Display Density
          </label>
          <CustomSelect
            value={displayDensity}
            onChange={setDisplayDensity}
            options={displayDensityOptions}
            className="w-full"
          />
        </div>

        {/* Collapsed Sidebar by Default */}
        <div className="w-full flex items-center justify-between py-3 border-b border-gray-200">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Collapsed Sidebar by Default
            </label>
            <p className="text-xs text-gray-500">Start with sidebar minimized</p>
          </div>
          <ToggleSwitch enabled={collapsedSidebar} onChange={setCollapsedSidebar} />
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <Button
            onClick={handleSaveAppearance}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4.5L11 2zm3 11H2V3h9v3h3v7z"/>
              <path d="M4 6h8v1H4V6zm0 2h8v1H4V8zm0 2h5v1H4v-1z"/>
            </svg>
            Save Appearance Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettings;

