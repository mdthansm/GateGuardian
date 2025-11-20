'use client';

import React, { useState } from 'react';
import { CustomSelect } from '../ui/custom-select';
import { Button } from '../ui/button';
import { Palette, Sun, Moon, Monitor, Save } from 'lucide-react';

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
        <div className={isSelected ? 'text-white' : 'text-gray-700'}>
          {icon}
        </div>
        <span className="text-sm font-medium">{label}</span>
      </button>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Palette className="w-5 h-5 text-gray-700" />
          <h2 className="text-2xl font-bold text-gray-900">Appearance Settings</h2>
        </div>
        <p className="text-gray-600 text-sm">Customize the look and feel of the application</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Theme Mode */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Theme Mode
          </label>
          <div className="flex gap-3">
            <ThemeButton
              value="light"
              label="Light"
              icon={<Sun className="w-4 h-4" />}
              isSelected={themeMode === 'light'}
              onClick={() => setThemeMode('light')}
            />
            <ThemeButton
              value="dark"
              label="Dark"
              icon={<Moon className="w-4 h-4" />}
              isSelected={themeMode === 'dark'}
              onClick={() => setThemeMode('dark')}
            />
            <ThemeButton
              value="system"
              label="System"
              icon={<Monitor className="w-4 h-4" />}
              isSelected={themeMode === 'system'}
              onClick={() => setThemeMode('system')}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Automatically switches between light and dark based on your system preferences
          </p>
        </div>

        {/* Display Density */}
        <div>
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
        <div className="flex items-center justify-between py-3">
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 flex items-center justify-center gap-2 rounded-md"
          >
            <Save className="w-4 h-4" />
            Save Appearance Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettings;

