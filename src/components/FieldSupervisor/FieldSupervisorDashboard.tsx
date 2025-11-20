"use client";

import React from "react";
import FieldSupervisorLayout from "./FieldSupervisorLayout";
import { UserCircle, LogIn } from 'lucide-react';

const FieldSupervisorDashboard: React.FC = () => {
  return (
    <FieldSupervisorLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Title section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Welcome back, Demo Field Supervisor!
            </h1>
          </div>
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <UserCircle className="w-4 h-4 text-gray-400" />
            <span>Industry Field_supervisor</span>
          </div>
        </div>

        {/* Record Entry / Exit big button */}
        <button className="w-full bg-blue-800 hover:bg-blue-700 text-white rounded-xl py-6 px-6 flex items-center justify-center shadow-sm transition-colors">
          <span className="flex items-center gap-3 text-lg font-semibold">
            <LogIn className="w-6 h-6" />
            Record Entry / Exit
          </span>
        </button>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="text-sm text-gray-500 mb-2">Today&apos;s Entries</div>
            <div className="text-3xl font-semibold text-gray-900">24</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="text-sm text-gray-500 mb-2">Currently On Site</div>
            <div className="text-3xl font-semibold text-gray-900">18</div>
          </div>
        </div>
      </div>
    </FieldSupervisorLayout>
  );
};

export default FieldSupervisorDashboard;