"use client";

import React, { useState } from "react";
import FieldSupervisorLayout from "./FieldSupervisorLayout";
import { Search, Grid3x3, List, X, QrCode, Clock, CheckCircle, XCircle } from "lucide-react";

interface Employee {
  id: string;
  name: string;
  staffId: string;
  status: "On Duty" | "Off Duty" | "Not Marked";
  shift: string;
  post: string;
  rank: string;
  department: string;
  inTime?: string;
  outTime?: string;
}

const SupervisorControl: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isGridView, setIsGridView] = useState(true);
  const [showQRModal, setShowQRModal] = useState(false);

  const employees: Employee[] = [
    {
      id: "A",
      name: "AACHL",
      staffId: "ST001",
      status: "On Duty",
      shift: "Shift A",
      post: "Main gate",
      rank: "Supervisor",
      department: "SecureGuard Services",
      inTime: "08:00",
    },
    {
      id: "AK",
      name: "AKHILESH KUMAR",
      staffId: "ST002",
      status: "Off Duty",
      shift: "Shift B",
      post: "Loading",
      rank: "Guard",
      department: "SecureGuard Services",
      outTime: "16:00",
    },
    {
      id: "AN",
      name: "AMAR NATH SINGH",
      staffId: "ST003",
      status: "Not Marked",
      shift: "Shift C",
      post: "CCR Gate",
      rank: "Guard",
      department: "SecureGuard Services",
    },
    {
      id: "AS",
      name: "ANKIT SINGH",
      staffId: "ST004",
      status: "On Duty",
      shift: "Shift A",
      post: "Cast Bar",
      rank: "Guard",
      department: "SecureGuard Services",
      inTime: "08:00",
    },
    {
      id: "AK",
      name: "ANUJ KUMAR",
      staffId: "ST005",
      status: "Off Duty",
      shift: "Shift G",
      post: "Tower post",
      rank: "Senior Guard",
      department: "Elite Security",
    },
    {
      id: "AK",
      name: "ARVINDRA KUMAR",
      staffId: "ST006",
      status: "Not Marked",
      shift: "Shift B",
      post: "Main gate",
      rank: "Guard",
      department: "Elite Security",
    },
  ];

  const totalStaff = employees.length;
  const onDutyCount = employees.filter((e) => e.status === "On Duty").length;
  const offDutyCount = employees.filter((e) => e.status === "Off Duty").length;
  const notMarkedCount = employees.filter((e) => e.status === "Not Marked").length;

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Duty":
        return "bg-green-500 text-white";
      case "Off Duty":
        return "bg-gray-500 text-white";
      case "Not Marked":
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <FieldSupervisorLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Supervisor Control</h1>
            <p className="text-sm text-gray-500">Manage all staff entries and monitor status</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Current Time</div>
            <div className="text-2xl font-bold text-gray-900">{currentTime}</div>
          </div>
        </div>

        {/* Scan QR Button */}
        <button
          onClick={() => setShowQRModal(true)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-3 mb-6"
        >
          <QrCode className="w-6 h-6" />
          Scan QR Code to Record Entry
        </button>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
            <div className="text-4xl font-bold text-gray-900 mb-1">{totalStaff}</div>
            <div className="text-sm text-gray-600">Total Staff</div>
          </div>
          <div className="bg-white border-2 border-green-500 rounded-xl p-5">
            <div className="text-4xl font-bold text-green-600 mb-1">{onDutyCount}</div>
            <div className="text-sm text-gray-600">On Duty</div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
            <div className="text-4xl font-bold text-gray-900 mb-1">{offDutyCount}</div>
            <div className="text-sm text-gray-600">Off Duty</div>
          </div>
          <div className="bg-white border-2 border-orange-400 rounded-xl p-5">
            <div className="text-4xl font-bold text-orange-600 mb-1">{notMarkedCount}</div>
            <div className="text-sm text-gray-600">Not Marked</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or staff ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-700">
              <option>All Status</option>
              <option>On Duty</option>
              <option>Off Duty</option>
              <option>Not Marked</option>
            </select>
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-700">
              <option>All Shifts</option>
              <option>Shift A</option>
              <option>Shift B</option>
              <option>Shift C</option>
            </select>
            <button
              onClick={() => setIsGridView(true)}
              className={`p-3 rounded-lg transition-all ${
                isGridView ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-3 rounded-lg transition-all ${
                !isGridView ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Employee Cards/List */}
        {isGridView ? (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employees.map((employee, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-600">{employee.id}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.staffId}</div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(employee.status)}`}>
                    {employee.status}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rank</span>
                    <span className="font-semibold text-gray-900">{employee.rank}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shift</span>
                    <span className="font-semibold text-gray-900">{employee.shift}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Post</span>
                    <span className="font-semibold text-gray-900">{employee.post}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Agency</span>
                    <span className="font-semibold text-gray-900">{employee.department}</span>
                  </div>
                </div>

                {/* Time Status */}
                {employee.inTime && (
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-3">
                    <CheckCircle className="w-4 h-4" />
                    <span>IN: {employee.inTime}</span>
                  </div>
                )}
                {employee.outTime && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <XCircle className="w-4 h-4" />
                    <span>OUT: {employee.outTime}</span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className={`py-2 rounded-lg text-sm font-semibold transition-all ${
                      employee.status === "Off Duty" || employee.status === "Not Marked"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Mark IN
                  </button>
                  <button
                    className={`py-2 rounded-lg text-sm font-semibold transition-all ${
                      employee.status === "On Duty"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : employee.status === "Not Marked"
                        ? "bg-blue-200 hover:bg-blue-300 text-blue-700"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Mark OUT
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
            {employees.map((employee, index) => (
              <div key={index} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-blue-600">{employee.id}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-gray-900">{employee.name}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(employee.status)}`}>
                        {employee.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{employee.staffId}</span>
                      <span>•</span>
                      <span>{employee.rank}</span>
                      <span>•</span>
                      <span>{employee.post}</span>
                      <span>•</span>
                      <span>{employee.shift}</span>
                    </div>
                    {(employee.inTime || employee.outTime) && (
                      <div className="flex items-center gap-4 mt-1">
                        {employee.inTime && (
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            <span>IN: {employee.inTime}</span>
                          </div>
                        )}
                        {employee.outTime && (
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <XCircle className="w-4 h-4" />
                            <span>OUT: {employee.outTime}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                      employee.status === "Off Duty" || employee.status === "Not Marked"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Mark IN
                  </button>
                  <button
                    className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                      employee.status === "On Duty"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : employee.status === "Not Marked"
                        ? "bg-blue-200 hover:bg-blue-300 text-blue-700"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Mark OUT
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* QR Scanner Modal */}
        {showQRModal && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Scan QR Code</h2>
                <button
                  onClick={() => setShowQRModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* QR Scanner Area */}
              <div className="bg-gray-100 rounded-lg p-12 flex flex-col items-center justify-center mb-6">
                <div className="text-gray-400 mb-4">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm-2 14h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm-6 14h8v-8h-8v8zm2-6h4v4h-4v-4z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-center mb-2">Camera view will appear here</p>
                <p className="text-sm text-gray-500 text-center">Point camera at staff QR code</p>
              </div>

              {/* Demo Button */}
              <button
                onClick={() => setShowQRModal(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Simulate QR Scan (Demo)
              </button>
            </div>
          </div>
        )}
      </div>
    </FieldSupervisorLayout>
  );
};

export default SupervisorControl;