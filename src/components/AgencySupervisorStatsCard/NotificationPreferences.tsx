'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { FileText, Bell } from 'lucide-react';

const NotificationPreferences: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [dailyReportNotifications, setDailyReportNotifications] = useState(true);
  const [taskReminders, setTaskReminders] = useState(true);
  const [incidentAlerts, setIncidentAlerts] = useState(true);

  const handleSaveNotifications = () => {
    // Handle save notifications logic here
    console.log('Notification preferences saved');
  };

  const ToggleSwitch: React.FC<{
    enabled: boolean;
    onChange: (enabled: boolean) => void;
    label: string;
    description: string;
  }> = ({ enabled, onChange, label, description }) => {
    return (
      <div className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            {label}
          </label>
          <p className="text-xs text-gray-500">{description}</p>
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
          <Bell className="w-5 h-5 text-gray-700" />
          <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
        </div>
        <p className="text-gray-600 text-sm">Manage how you receive notifications</p>
      </div>

      {/* Notification Options */}
      <div className="space-y-0">
        {/* Email Notifications */}
        <ToggleSwitch
          enabled={emailNotifications}
          onChange={setEmailNotifications}
          label="Email Notifications"
          description="Receive notifications via email"
        />

        {/* SMS Notifications */}
        <ToggleSwitch
          enabled={smsNotifications}
          onChange={setSmsNotifications}
          label="SMS Notifications"
          description="Receive notifications via SMS"
        />

        {/* Push Notifications */}
        <ToggleSwitch
          enabled={pushNotifications}
          onChange={setPushNotifications}
          label="Push Notifications"
          description="Receive push notifications"
        />
      </div>

      {/* Specific Notifications Section */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Specific Notifications</h3>
        <div className="space-y-0">
          {/* Daily Report Notifications */}
          <ToggleSwitch
            enabled={dailyReportNotifications}
            onChange={setDailyReportNotifications}
            label="Daily Report Notifications"
            description="Get notified about daily reports"
          />

          {/* Task Reminders */}
          <ToggleSwitch
            enabled={taskReminders}
            onChange={setTaskReminders}
            label="Task Reminders"
            description="Receive reminders for pending tasks"
          />

          {/* Incident Alerts */}
          <ToggleSwitch
            enabled={incidentAlerts}
            onChange={setIncidentAlerts}
            label="Incident Alerts"
            description="Get alerted about security incidents"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-6 mt-6">
        <Button
          onClick={handleSaveNotifications}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 flex items-center justify-center gap-2 rounded-md"
        >
          <FileText className="w-4 h-4" />
          Save Notification Settings
        </Button>
      </div>
    </div>
  );
};

export default NotificationPreferences;

