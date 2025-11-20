'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FileText, User } from 'lucide-react';

const ProfileInformation: React.FC = () => {
  const [fullName, setFullName] = useState('Demo Agency Supervisor');
  const [email, setEmail] = useState('agency_supervisor@gateguardian.demo');
  const [phoneNumber, setPhoneNumber] = useState('+91 1234567890');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdateProfile = () => {
    // Handle update profile logic here
    console.log('Profile updated');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <User className="w-5 h-5 text-gray-700" />
          <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
        </div>
        <p className="text-gray-600 text-sm">Update your personal information</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Full Name - Full Width */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name
          </label>
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full h-9 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
          />
        </div>

        {/* Email Address - Full Width */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-9 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
          />
        </div>

        {/* Phone Number - Full Width */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number
          </label>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full h-9 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
          />
        </div>

        {/* Current Password - Full Width */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Current Password
          </label>
          <Input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
            className="w-full h-9 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
          />
        </div>

        {/* New Password & Confirm Password - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* New Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              New Password
            </label>
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full h-9 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Confirm Password
            </label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full h-9 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
            />
          </div>
        </div>

        {/* Update Profile Button */}
        <div className="pt-4">
          <Button
            onClick={handleUpdateProfile}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 flex items-center justify-center gap-2 rounded-md"
          >
            <FileText className="w-4 h-4" />
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;

