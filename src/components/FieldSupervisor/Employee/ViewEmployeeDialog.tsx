"use client";

import React from "react";
import { X } from "lucide-react";

interface ViewEmployeeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  employee: {
    srNo: number;
    gatePass: string;
    pgsId: string;
    name: string;
    sex: string;
    rank: string;
    doj: string;
    contact: string;
    bloodGroup: string;
    status: "Active" | "Inactive";
  } | null;
}

const ViewEmployeeDialog: React.FC<ViewEmployeeDialogProps> = ({ isOpen, onClose, employee }) => {
  if (!isOpen || !employee) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Employee Details</h2>
            <p className="text-sm text-gray-500">View full information for this employee</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 py-4 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Name</span>
            <span className="font-medium text-gray-900">{employee.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">PGS ID</span>
            <span className="font-medium text-gray-900">{employee.pgsId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Gate Pass</span>
            <span className="font-medium text-gray-900">{employee.gatePass}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Rank</span>
            <span className="font-medium text-gray-900">{employee.rank}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Date of Joining</span>
            <span className="font-medium text-gray-900">{employee.doj}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Contact</span>
            <span className="font-medium text-gray-900">{employee.contact}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Blood Group</span>
            <span className="font-medium text-gray-900">{employee.bloodGroup}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              employee.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}>
              {employee.status}
            </span>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeDialog;
