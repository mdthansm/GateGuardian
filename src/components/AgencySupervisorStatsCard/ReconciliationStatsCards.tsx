'use client';

import React from 'react';
import AgencySupervisorStatsCard from './AgencySupervisorStatsCard';
import { AlertTriangle, X, Check } from 'lucide-react';

const ReconciliationStatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {/* Total Discrepancies Card */}
      <AgencySupervisorStatsCard
        title="Total Discrepancies"
        value="3"
        description="Today's mismatches"
        icon={<AlertTriangle className="w-6 h-6 fill-current" />}
        iconColor="text-yellow-600"
        iconBgColor="bg-yellow-100"
      />

      {/* Open Issues Card */}
      <AgencySupervisorStatsCard
        title="Open Issues"
        value="2"
        description="Awaiting resolution"
        icon={<X className="w-5 h-5" />}
        iconColor="text-white"
        iconBgColor="bg-red-500"
      />

      {/* Resolved Today Card */}
      <AgencySupervisorStatsCard
        title="Resolved Today"
        value="1"
        description="Great progress!"
        icon={<Check className="w-5 h-5" />}
        iconColor="text-white"
        iconBgColor="bg-green-500"
      />
    </div>
  );
};

export default ReconciliationStatsCards;

