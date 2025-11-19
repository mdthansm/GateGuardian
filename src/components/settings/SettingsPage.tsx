'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { Input } from '../ui/input';
import { CustomSelect } from '../ui/custom-select';
import { Button } from '../ui/button';
import ProfileSettings from './ProfileSettings';
import NotificationsSettings from './NotificationsSettings';
import SecuritySettings from './SecuritySettings';
import AppearanceSettings from './AppearanceSettings';
import SystemSettings from './SystemSettings';

const SettingsPage: React.FC = () => {
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
    console.log('Settings saved');
  };

  return (
    <div className="w-full  mx-auto p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        </div>
        <p className="text-gray-600 text-sm ml-9">
          Manage your application preferences and configuration
        </p>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full bg-gray-100 rounded-lg p-1 mb-6 h-auto flex items-center justify-start">
          <TabsTrigger
            value="general"
            className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm text-gray-500 bg-transparent border-0 rounded-md px-4 py-2 text-sm font-medium flex-1"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm text-gray-500 bg-transparent border-0 rounded-md px-4 py-2 text-sm font-medium flex-1"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm text-gray-500 bg-transparent border-0 rounded-md px-4 py-2 text-sm font-medium flex-1"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm text-gray-500 bg-transparent border-0 rounded-md px-4 py-2 text-sm font-medium flex-1"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            value="appearance"
            className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm text-gray-500 bg-transparent border-0 rounded-md px-4 py-2 text-sm font-medium flex-1"
          >
            Appearance
          </TabsTrigger>
          <TabsTrigger
            value="system"
            className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm text-gray-500 bg-transparent border-0 rounded-md px-4 py-2 text-sm font-medium flex-1"
          >
            System
          </TabsTrigger>
        </TabsList>

        {/* General Tab Content */}
        <TabsContent value="general" className="mt-0">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">General Settings</h2>
              <p className="text-gray-600 text-sm">Configure basic application settings</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Application Name */}
              <div className="w-full">
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

              {/* Timezone */}
              <div className="w-full">
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
              <div className="w-full">
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

              {/* Date Format */}
              <div className="w-full">
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
              <div className="w-full">
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

              {/* Save Button */}
              <div className="pt-4">
                <Button
                  onClick={handleSave}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4.5L11 2zm3 11H2V3h9v3h3v7z"/>
                    <path d="M4 6h8v1H4V6zm0 2h8v1H4V8zm0 2h5v1H4v-1z"/>
                  </svg>
                  Save General Settings
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Profile Tab Content */}
        <TabsContent value="profile" className="mt-0">
          <ProfileSettings />
        </TabsContent>
        {/* Notifications Tab Content */}
        <TabsContent value="notifications" className="mt-0">
          <NotificationsSettings />
        </TabsContent>
        {/* Security Tab Content */}
        <TabsContent value="security" className="mt-0">
          <SecuritySettings />
        </TabsContent>
        {/* Appearance Tab Content */}
        <TabsContent value="appearance" className="mt-0">
          <AppearanceSettings />
        </TabsContent>
        {/* System Tab Content */}
        <TabsContent value="system" className="mt-0">
          <SystemSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;

