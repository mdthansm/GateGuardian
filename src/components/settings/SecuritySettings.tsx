'use client';

import React, { useState } from 'react';
import { CustomSelect } from '../ui/custom-select';
import { Button } from '../ui/button';

const SecuritySettings: React.FC = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [passwordExpiry, setPasswordExpiry] = useState('90');

  const sessionTimeoutOptions = [
    { value: '15', label: '15 minutes' },
    { value: '30', label: '30 minutes' },
    { value: '60', label: '60 minutes' },
    { value: '120', label: '120 minutes' },
  ];

  const passwordExpiryOptions = [
    { value: '30', label: '30 days' },
    { value: '60', label: '60 days' },
    { value: '90', label: '90 days' },
    { value: '180', label: '180 days' },
  ];

  const handleSaveSecurity = () => {
    // Handle save security logic here
    console.log('Security settings saved');
  };

  const handleRevokeSession = () => {
    // Handle revoke session logic here
    console.log('Session revoked');
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
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900">Security Settings</h2>
        </div>
        <p className="text-gray-600 text-sm">Manage security and privacy settings</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Two-Factor Authentication */}
        <div className="w-full flex items-center justify-between py-3 border-b border-gray-200">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Two-Factor Authentication
            </label>
            <p className="text-xs text-gray-500">Add an extra layer of security</p>
          </div>
          <ToggleSwitch enabled={twoFactorAuth} onChange={setTwoFactorAuth} />
        </div>

        {/* Session Timeout */}
        <div className="w-full">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Session Timeout (minutes)
          </label>
          <CustomSelect
            value={sessionTimeout}
            onChange={setSessionTimeout}
            options={sessionTimeoutOptions}
            className="w-full"
          />
        </div>

        {/* Password Expiry */}
        <div className="w-full">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Password Expiry (days)
          </label>
          <CustomSelect
            value={passwordExpiry}
            onChange={setPasswordExpiry}
            options={passwordExpiryOptions}
            className="w-full"
          />
        </div>

        {/* Active Sessions */}
        <div className="w-full pt-2">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Active Sessions</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Current Device</p>
                <p className="text-xs text-gray-500">Last active: Just now</p>
              </div>
              <Button
                onClick={handleRevokeSession}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 font-medium h-8 px-4 text-sm"
              >
                Revoke
              </Button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <Button
            onClick={handleSaveSecurity}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4.5L11 2zm3 11H2V3h9v3h3v7z"/>
              <path d="M4 6h8v1H4V6zm0 2h8v1H4V8zm0 2h5v1H4v-1z"/>
            </svg>
            Save Security Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;

