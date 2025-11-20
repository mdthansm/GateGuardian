"use client";

import React, { useState } from "react";
import { Calendar, TrendingUp, TrendingDown, AlertTriangle, Award, Download, ChevronDown } from "lucide-react";
import EmployeeMasterLayout from "./EmployeeMasterLayout";

interface PayrollEmployee {
  name: string;
  staffId: string;
  workingDays: number;
  present: number;
  absent: number;
  dailyWage: number;
  totalWage: number;
  disciplinary: number;
  status: string;
}

const PayrollPage: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState("November 2024");
  const [filterMonth, setFilterMonth] = useState("November 2024");

  const payrollData: PayrollEmployee[] = [
    {
      name: "AACHL",
      staffId: "PGS0185896",
      workingDays: 26,
      present: 23,
      absent: 3,
      dailyWage: 650,
      totalWage: 18550,
      disciplinary: 88,
      status: "88%",
    },
    {
      name: "RAJESH KUMAR SINGH",
      staffId: "PGS0185878",
      workingDays: 26,
      present: 23,
      absent: 3,
      dailyWage: 820,
      totalWage: 18860,
      disciplinary: 88,
      status: "88%",
    },
    {
      name: "AMIT PATEL",
      staffId: "PGS0185875",
      workingDays: 26,
      present: 23,
      absent: 3,
      dailyWage: 830,
      totalWage: 19090,
      disciplinary: 88,
      status: "88%",
    },
    {
      name: "SURESH YADAV",
      staffId: "PGS0185880",
      workingDays: 26,
      present: 24,
      absent: 2,
      dailyWage: 1150,
      totalWage: 27600,
      disciplinary: 92,
      status: "92%",
    },
    {
      name: "VIJAY SINGH",
      staffId: "PGS0185885",
      workingDays: 26,
      present: 24,
      absent: 2,
      dailyWage: 810,
      totalWage: 19440,
      disciplinary: 92,
      status: "92%",
    },
    {
      name: "PRAKASH SHARMA",
      staffId: "PGS0185880",
      workingDays: 26,
      present: 25,
      absent: 1,
      dailyWage: 840,
      totalWage: 21000,
      disciplinary: 96,
      status: "96%",
    },
    {
      name: "DEEPAK VERMA",
      staffId: "PGS0185895",
      workingDays: 26,
      present: 24,
      absent: 2,
      dailyWage: 825,
      totalWage: 19800,
      disciplinary: 92,
      status: "92%",
    },
  ];

  const totalEmployees = payrollData.length;
  const totalPayroll = payrollData.reduce((sum, emp) => sum + emp.totalWage, 0);
  const avgAttendance = (payrollData.reduce((sum, emp) => sum + emp.present, 0) / payrollData.length).toFixed(1);
  const totalAbsences = payrollData.reduce((sum, emp) => sum + emp.absent, 0);
  const incidents = 0;
  const disciplinaryActions = 0;
  const totalPresentDays = payrollData.reduce((sum, emp) => sum + emp.present, 0);
  const totalAbsentDays = payrollData.reduce((sum, emp) => sum + emp.absent, 0);

  return (
    <EmployeeMasterLayout>
      {/* Payroll Period */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex items-center justify-center">
        <Calendar className="w-5 h-5 text-gray-600 mr-2" />
        <span className="text-gray-700 font-medium">Payroll Period: 21 Nov 2024 - 20 Dec 2024</span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <span>Total Employees</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalEmployees}</div>
          <div className="text-xs text-gray-500 mt-1">Active employees</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <span>Total Payroll</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">₹{totalPayroll.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">This period</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span>Avg Attendance</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{avgAttendance} days</div>
          <div className="text-xs text-gray-500 mt-1">Out of 26 working days</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <TrendingDown className="w-4 h-4 text-red-600" />
            <span>Total Absences</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalAbsences}</div>
          <div className="text-xs text-gray-500 mt-1">Total absent days</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <AlertTriangle className="w-4 h-4 text-orange-600" />
            <span>Incidents</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{incidents}</div>
          <div className="text-xs text-gray-500 mt-1">This period</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <Award className="w-4 h-4 text-purple-600" />
            <span>Disciplinary Actions</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{disciplinaryActions}</div>
          <div className="text-xs text-gray-500 mt-1">This period</div>
        </div>
      </div>

      {/* Payroll Details Header */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Employee Payroll Details</h3>
            <p className="text-sm text-gray-500">Wage breakdown for all active employees</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={filterMonth}
              onChange={(e) => setFilterMonth(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            >
              <option>November 2024</option>
              <option>October 2024</option>
              <option>September 2024</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Employee Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Staff ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Working Days</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Present</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Absent</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Daily Wage</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Total Wage</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Disciplinary</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payrollData.map((employee, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{employee.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{employee.staffId}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{employee.workingDays}</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">{employee.present}</td>
                  <td className="px-6 py-4 text-sm text-red-600 font-medium">{employee.absent}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹{employee.dailyWage}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">₹{employee.totalWage.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{employee.disciplinary}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        employee.disciplinary >= 95
                          ? "bg-green-100 text-green-700"
                          : employee.disciplinary >= 90
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals Footer */}
        <div className="border-t-2 border-gray-300 bg-gray-50 px-6 py-4">
          <div className="flex justify-end gap-12 text-sm">
            <div>
              <span className="text-gray-600">Total Employees:</span>
              <span className="ml-2 font-bold text-gray-900">{totalEmployees}</span>
            </div>
            <div>
              <span className="text-gray-600">Total Present Days:</span>
              <span className="ml-2 font-bold text-green-600">{totalPresentDays}</span>
            </div>
            <div>
              <span className="text-gray-600">Total Absent Days:</span>
              <span className="ml-2 font-bold text-red-600">{totalAbsentDays}</span>
            </div>
            <div>
              <span className="text-gray-600 text-base">Total Payroll:</span>
              <span className="ml-2 font-bold text-gray-900 text-lg">₹{totalPayroll.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </EmployeeMasterLayout>
  );
};

export default PayrollPage;