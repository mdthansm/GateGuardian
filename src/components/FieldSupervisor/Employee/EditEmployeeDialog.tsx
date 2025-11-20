"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface EditEmployeeDialogProps {
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

const EditEmployeeDialog: React.FC<EditEmployeeDialogProps> = ({ isOpen, onClose, employee }) => {
  const [localName, setLocalName] = useState("");
  const [localContact, setLocalContact] = useState("");
  const [localStatus, setLocalStatus] = useState<"Active" | "Inactive">("Active");

  useEffect(() => {
    if (employee) {
      setLocalName(employee.name);
      setLocalContact(employee.contact);
      setLocalStatus(employee.status);
    }
  }, [employee]);

  if (!isOpen || !employee) return null;

  const handleSave = () => {
    // Hook up to real save logic later
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Edit Employee</h2>
            <p className="text-sm text-gray-500">Update basic details for this employee</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 py-4 space-y-4 text-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
            <input
              type="text"
              value={localContact}
              onChange={(e) => setLocalContact(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={localStatus}
              onChange={(e) => setLocalStatus(e.target.value as "Active" | "Inactive")}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeDialog;
