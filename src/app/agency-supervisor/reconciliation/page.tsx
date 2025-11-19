import DashboardLayout from '../../../components/rootlayout';

export default function ReconciliationPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reconciliation</h1>
        <p className="text-gray-600">View mismatches & clarifications.</p>
      </div>
    </DashboardLayout>
  );
}

