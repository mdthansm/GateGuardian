'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { CustomSelect } from '../ui/custom-select';
import { Button } from '../ui/button';
import { FileText } from 'lucide-react';

const GeneralSettings: React.FC = () => {
  const [applicationName, setApplicationName] = useState('GateGuardian');
  const [timezone, setTimezone] = useState('Asia/Kolkata');
  const [language, setLanguage] = useState('English');
  const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');
  const [timeFormat, setTimeFormat] = useState('24 Hour');

  const timezoneOptions = [
    { value: 'Asia/Kolkata', label: 'Asia/Kolkata (IST)' },
    { value: 'Asia/Dubai', label: 'Asia/Dubai (GST)' },
    { value: 'UTC', label: 'UTC' },
    { value: 'America/New_York', label: 'America/New York (EST)' },
  ];

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Tamil', label: 'Tamil' },
    { value: 'Telugu', label: 'Telugu' },
  ];

  const dateFormatOptions = [
    { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
    { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
    { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
  ];

  const timeFormatOptions = [
    { value: '24 Hour', label: '24 Hour' },
    { value: '12 Hour', label: '12 Hour' },
  ];

  const handleSave = () => {
    // Handle save logic here
    console.log('General settings saved');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">General Settings</h2>
        <p className="text-gray-600 text-sm">Configure basic application settings</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Application Name - Full Width */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Application Name
          </label>
          <Input
            type="text"
            value={applicationName}
            onChange={(e) => setApplicationName(e.target.value)}
            className="w-full h-9 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
          />
        </div>

        {/* Timezone and Language - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Timezone */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Timezone
            </label>
            <CustomSelect
              value={timezone}
              onChange={setTimezone}
              options={timezoneOptions}
              className="w-full"
            />
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Language
            </label>
            <CustomSelect
              value={language}
              onChange={setLanguage}
              options={languageOptions}
              className="w-full"
            />
          </div>
        </div>

        {/* Date Format and Time Format - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date Format */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Date Format
            </label>
            <CustomSelect
              value={dateFormat}
              onChange={setDateFormat}
              options={dateFormatOptions}
              className="w-full"
            />
          </div>

          {/* Time Format */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Time Format
            </label>
            <CustomSelect
              value={timeFormat}
              onChange={setTimeFormat}
              options={timeFormatOptions}
              className="w-full"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <Button
            onClick={handleSave}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 flex items-center justify-center gap-2 rounded-md"
          >
            <FileText className="w-4 h-4" />
            Save General Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;

