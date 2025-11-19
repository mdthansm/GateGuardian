'use client';

import React from 'react';

const GuardDashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, Demo Guard!
        </h1>
        <div className="flex items-center gap-2 text-gray-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-sm">Guard</span>
        </div>
      </div>

      {/* Information Card */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Welcome, Demo Guard
        </h2>
        <p className="text-gray-600 mb-6">
          Your schedule and duties for today
        </p>

        <div className="space-y-4">
          {/* Assigned Post */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Assigned Post:</span>
            <span className="text-gray-900 font-semibold">Main Gate</span>
          </div>

          {/* Shift */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Shift:</span>
            <span className="text-gray-900 font-semibold">Morning (6 AM - 2 PM)</span>
          </div>

          {/* Status */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Status:</span>
            <span className="text-green-600 font-semibold">On Duty</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuardDashboard;

