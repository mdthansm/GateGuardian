'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';

const NotificationsSettings: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [systemUpdates, setSystemUpdates] = useState(true);
  const [activityReports, setActivityReports] = useState(false);

  const handleSaveNotifications = () => {
    // Handle save notifications logic here
    console.log('Notifications saved');
  };

  const ToggleSwitch: React.FC<{
    enabled: boolean;
    onChange: (enabled: boolean) => void;
    label: string;
    description?: string;
  }> = ({ enabled, onChange, label, description }) => {
    return (
      <div className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            {label}
          </label>
          {description && (
            <p className="text-xs text-gray-500">{description}</p>
          )}
        </div>
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
      </div>
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
        </div>
        <p className="text-gray-600 text-sm">Manage your notification settings and preferences</p>
      </div>

      {/* Notification Settings */}
      <div className="space-y-4">
        {/* Email Notifications */}
        <ToggleSwitch
          enabled={emailNotifications}
          onChange={setEmailNotifications}
          label="Email Notifications"
          description="Receive notifications via email"
        />

        {/* Push Notifications */}
        <ToggleSwitch
          enabled={pushNotifications}
          onChange={setPushNotifications}
          label="Push Notifications"
          description="Receive push notifications on your device"
        />

        {/* SMS Notifications */}
        <ToggleSwitch
          enabled={smsNotifications}
          onChange={setSmsNotifications}
          label="SMS Notifications"
          description="Receive notifications via SMS"
        />

        {/* Security Alerts */}
        <ToggleSwitch
          enabled={securityAlerts}
          onChange={setSecurityAlerts}
          label="Security Alerts"
          description="Get notified about security-related events"
        />

        {/* System Updates */}
        <ToggleSwitch
          enabled={systemUpdates}
          onChange={setSystemUpdates}
          label="System Updates"
          description="Receive notifications about system updates"
        />

        {/* Activity Reports */}
        <ToggleSwitch
          enabled={activityReports}
          onChange={setActivityReports}
          label="Activity Reports"
          description="Receive periodic activity reports"
        />
      </div>

      {/* Save Button */}
      <div className="pt-6 mt-6 border-t border-gray-200">
        <Button
          onClick={handleSaveNotifications}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 flex items-center justify-center gap-2"
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          Save Notification Settings
        </Button>
      </div>
    </div>
  );
};

export default NotificationsSettings;

