'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">About</h2>
        <p className="text-gray-600 text-sm">Application information</p>
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        {/* Version */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Version:</span>
          <span className="text-sm text-gray-900 font-medium">1.0.0</span>
        </div>

        {/* Build Date */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Build Date:</span>
          <span className="text-sm text-gray-900 font-medium">20/11/2025</span>
        </div>

        {/* Environment */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Environment:</span>
          <span className="text-sm text-gray-900 font-medium">Production</span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

