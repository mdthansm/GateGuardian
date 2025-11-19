'use client';

import React, { useState } from 'react';
import { CustomSelect } from '../ui/custom-select';
import { Button } from '../ui/button';

const SystemSettings: React.FC = () => {
  const [automaticBackup, setAutomaticBackup] = useState(true);
  const [backupFrequency, setBackupFrequency] = useState('daily');
  const [dataRetentionPeriod, setDataRetentionPeriod] = useState('1year');

  const backupFrequencyOptions = [
    { value: 'hourly', label: 'Hourly' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
  ];

  const dataRetentionOptions = [
    { value: '30days', label: '30 days' },
    { value: '90days', label: '90 days' },
    { value: '6months', label: '6 months' },
    { value: '1year', label: '1 year' },
    { value: '2years', label: '2 years' },
  ];

  const handleSaveSystem = () => {
    // Handle save system logic here
    console.log('System settings saved');
  };

  const handleExportData = () => {
    // Handle export data logic here
    console.log('Exporting data...');
  };

  const handleImportData = () => {
    // Handle import data logic here
    console.log('Importing data...');
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

  return (
    <div className="space-y-6">
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
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
          </div>
          <p className="text-gray-600 text-sm">Manage system-level configuration</p>
        </div>

      {/* Backup & Data Management Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Backup & Data Management</h3>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Automatic Backup */}
          <div className="w-full flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-900 mb-1">
                Automatic Backup
              </label>
              <p className="text-xs text-gray-500">Enable automatic data backups</p>
            </div>
            <ToggleSwitch enabled={automaticBackup} onChange={setAutomaticBackup} />
          </div>

          {/* Backup Frequency */}
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Backup Frequency
            </label>
            <CustomSelect
              value={backupFrequency}
              onChange={setBackupFrequency}
              options={backupFrequencyOptions}
              className="w-full"
            />
          </div>

          {/* Data Retention Period */}
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Data Retention Period (days)
            </label>
            <CustomSelect
              value={dataRetentionPeriod}
              onChange={setDataRetentionPeriod}
              options={dataRetentionOptions}
              className="w-full"
            />
          </div>

          {/* Data Import/Export */}
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Data Import/Export
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              <Button
                onClick={handleExportData}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium h-10 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Export Data
              </Button>
              <Button
                onClick={handleImportData}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium h-10 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                Import Data
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              Export all your data or import from a backup file
            </p>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <Button
              onClick={handleSaveSystem}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4.5L11 2zm3 11H2V3h9v3h3v7z"/>
                <path d="M4 6h8v1H4V6zm0 2h8v1H4V8zm0 2h5v1H4v-1z"/>
              </svg>
              Save System Settings
            </Button>
          </div>
        </div>
      </div>
      </div>

      {/* About Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">About</h3>
        <p className="text-gray-600 text-sm mb-6">Application information</p>

        <div className="space-y-4">
          {/* Version */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-900">Version:</span>
            <span className="text-sm text-gray-900">1.0.0</span>
          </div>

          {/* Build Date */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-900">Build Date:</span>
            <span className="text-sm text-gray-900">19/11/2025</span>
          </div>

          {/* Environment */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-900">Environment:</span>
            <span className="text-sm text-gray-900">Production</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;

