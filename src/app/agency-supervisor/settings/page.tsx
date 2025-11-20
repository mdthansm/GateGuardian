'use client';

import DashboardLayout from '../../../components/rootlayout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../components/ui/tabs';
import GeneralSettings from '../../../components/AgencySupervisorStatsCard/GeneralSettings';
import ProfileInformation from '../../../components/AgencySupervisorStatsCard/ProfileInformation';
import NotificationPreferences from '../../../components/AgencySupervisorStatsCard/NotificationPreferences';
import SecuritySettings from '../../../components/AgencySupervisorStatsCard/SecuritySettings';
import AppearanceSettings from '../../../components/AgencySupervisorStatsCard/AppearanceSettings';
import SystemSettings from '../../../components/AgencySupervisorStatsCard/SystemSettings';
import AboutSection from '../../../components/AgencySupervisorStatsCard/AboutSection';
import { Settings } from 'lucide-react';

export default function AgencySupervisorSettingsPage() {
  return (
    <DashboardLayout>
      <div className="w-full max-w-7xl mx-auto p-6 lg:p-8">
        {/* Header Section */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Settings className="w-6 h-6 text-gray-700" />
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          </div>
          <p className="text-gray-600 text-sm lg:text-base ml-9">
            Manage your application preferences and configuration
          </p>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="bg-gray-100 p-1 rounded-lg w-fit mb-6">
            <TabsTrigger
              value="general"
              className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm min-w-[100px] px-4"
            >
              General
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm min-w-[100px] px-4"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm min-w-[120px] px-4"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm min-w-[100px] px-4"
            >
              Security
            </TabsTrigger>
            <TabsTrigger
              value="appearance"
              className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm min-w-[110px] px-4"
            >
              Appearance
            </TabsTrigger>
            <TabsTrigger
              value="system"
              className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm min-w-[100px] px-4"
            >
              System
            </TabsTrigger>
          </TabsList>

          {/* General Tab Content */}
          <TabsContent value="general" className="mt-0">
            <GeneralSettings />
          </TabsContent>

          {/* Profile Tab Content */}
          <TabsContent value="profile" className="mt-0">
            <ProfileInformation />
          </TabsContent>

          {/* Notifications Tab Content */}
          <TabsContent value="notifications" className="mt-0">
            <NotificationPreferences />
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
            <AboutSection />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

