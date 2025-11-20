'use client';

import React, { useState } from 'react';
import { CustomSelect } from '../ui/custom-select';
import { Button } from '../ui/button';
import { Database, Download, Upload, Save } from 'lucide-react';

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
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Database className="w-5 h-5 text-gray-700" />
          <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
        </div>
        <p className="text-gray-600 text-sm">Manage system-level configuration</p>
      </div>

      {/* Backup & Data Management Section */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Backup & Data Management</h3>

        <div className="space-y-6">
          {/* Automatic Backup */}
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-900 mb-1">
                Automatic Backup
              </label>
              <p className="text-xs text-gray-500">Enable automatic data backups</p>
            </div>
            <ToggleSwitch enabled={automaticBackup} onChange={setAutomaticBackup} />
          </div>

          {/* Backup Frequency */}
          <div>
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
          <div>
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
        </div>
      </div>

      {/* Data Import/Export Section */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Data Import/Export</h3>
        <p className="text-xs text-gray-500 mb-4">
          Export all your data or import from a backup file
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Button
            onClick={handleExportData}
            variant="outline"
            className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium h-10 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export Data
          </Button>
          <Button
            onClick={handleImportData}
            variant="outline"
            className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium h-10 flex items-center justify-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Import Data
          </Button>
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-4">
        <Button
          onClick={handleSaveSystem}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 flex items-center justify-center gap-2 rounded-md"
        >
          <Save className="w-4 h-4" />
          Save System Settings
        </Button>
      </div>
    </div>
  );
};

export default SystemSettings;

