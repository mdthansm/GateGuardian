"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import FieldSupervisorLayout from "../FieldSupervisorLayout";
import { Plus } from "lucide-react";

interface EmployeeMasterLayoutProps {
  children: React.ReactNode;
  onAddEmployee?: () => void;
}

const EmployeeMasterLayout: React.FC<EmployeeMasterLayoutProps> = ({ children, onAddEmployee }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isEmployees = pathname === "/field-supervisor/employees";
  const isPayroll = pathname === "/field-supervisor/payroll";

  return (
    <FieldSupervisorLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Employee Master</h1>
            <p className="text-sm text-gray-500">Manage all employee records, history, and disciplinary actions</p>
          </div>
          {onAddEmployee && (
            <button
              onClick={onAddEmployee}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-lg transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Employee
            </button>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="text-sm text-gray-600 mb-1">Total Employees</div>
            <div className="text-3xl font-bold text-gray-900">8</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="text-sm text-gray-600 mb-1">Active</div>
            <div className="text-3xl font-bold text-green-600">7</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="text-sm text-gray-600 mb-1">Inactive</div>
            <div className="text-3xl font-bold text-red-600">1</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="text-sm text-gray-600 mb-1">Total Service Years</div>
            <div className="text-3xl font-bold text-gray-900">16</div>
          </div>
        </div>

        {/* Diversity Metrics */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Diversity Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Men</div>
              <div className="text-2xl font-bold text-blue-600">6</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Women</div>
              <div className="text-2xl font-bold text-pink-600">2</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Transgender</div>
              <div className="text-2xl font-bold text-purple-600">0</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Ex Servicemen</div>
              <div className="text-2xl font-bold text-orange-600">2</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Differently Abled</div>
              <div className="text-2xl font-bold text-teal-600">1</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200 mb-6">
          <div className="flex gap-8">
            <button
              onClick={() => router.push("/field-supervisor/employees")}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                isEmployees
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Employees
            </button>
            <button
              onClick={() => router.push("/field-supervisor/payroll")}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                isPayroll
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Payroll
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>{children}</div>
      </div>
    </FieldSupervisorLayout>
  );
};

export default EmployeeMasterLayout;