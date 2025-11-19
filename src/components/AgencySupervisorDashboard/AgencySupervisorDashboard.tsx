'use client';

import React from 'react';

const AgencySupervisorDashboard: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8 lg:mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Welcome back, Demo Agency Supervisor!
          </h1>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span className="text-sm lg:text-base">Agency Supervisor</span>
          </div>
        </div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
          {/* Upload Daily Report Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer w-full">
            <div className="flex flex-col items-start">
              {/* Upload Icon */}
              <div className="mb-4 flex items-center justify-start">
                <svg className="w-12 h-12 lg:w-14 lg:h-14 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              
              {/* Title */}
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                Upload Daily Report
              </h2>
              
              {/* Description */}
              <p className="text-sm text-gray-600">
                Submit agency attendance records.
              </p>
            </div>
          </div>

          {/* Reconciliation Status Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer w-full">
            <div className="flex flex-col items-start">
              {/* Reconciliation Icon */}
              <div className="mb-4 flex items-center justify-start">
                <svg className="w-12 h-12 lg:w-14 lg:h-14 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              
              {/* Title */}
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                Reconciliation Status
              </h2>
              
              {/* Description */}
              <p className="text-sm text-gray-600">
                View mismatches & clarifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencySupervisorDashboard;

