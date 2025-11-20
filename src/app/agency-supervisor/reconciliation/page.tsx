'use client';

import DashboardLayout from '../../../components/rootlayout';
import ReconciliationStatsCards from '../../../components/AgencySupervisorStatsCard/ReconciliationStatsCards';
import DiscrepancyDetailsTable from '../../../components/AgencySupervisorStatsCard/DiscrepancyDetailsTable';
import { Filter } from 'lucide-react';

export default function ReconciliationPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 lg:mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reconciliation</h1>
            <p className="text-gray-600 text-sm lg:text-base">Compare industry and agency reports</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium text-gray-700 self-start sm:self-auto">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Stats Cards Grid */}
        <ReconciliationStatsCards />

        {/* Discrepancy Details Table */}
        <DiscrepancyDetailsTable />
      </div>
    </DashboardLayout>
  );
}

