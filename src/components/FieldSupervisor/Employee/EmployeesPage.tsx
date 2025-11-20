"use client";

import React, { useState } from "react";
import { Search, Filter, Download, Upload, Eye, Edit, Trash2 } from "lucide-react";
import EmployeeMasterLayout from "./EmployeeMasterLayout";
import AddEmployeeDialog from "./AddEmployeeDialog";
import ViewEmployeeDialog from "./ViewEmployeeDialog";
import EditEmployeeDialog from "./EditEmployeeDialog";


interface Employee {
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
}

const EmployeesPage: React.FC = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const employees: Employee[] = [
    {
      srNo: 1,
      gatePass: "22081942",
      pgsId: "PGS0185896",
      name: "AACHL",
      sex: "F",
      rank: "C-SG",
      doj: "10/01/2022",
      contact: "8564823496",
      bloodGroup: "A+",
      status: "Active",
    },
    {
      srNo: 13,
      gatePass: "22088736",
      pgsId: "PGS0183881",
      name: "GANGAGAGAR PARASRAM MAHAJAN",
      sex: "F",
      rank: "C-SG",
      doj: "12/03/2022",
      contact: "9607826044",
      bloodGroup: "O+",
      status: "Inactive",
    },
    {
      srNo: 15,
      gatePass: "22088745",
      pgsId: "PGS0185878",
      name: "RAJESH KUMAR SINGH",
      sex: "M",
      rank: "C-SG",
      doj: "01/05/2022",
      contact: "9876543210",
      bloodGroup: "B+",
      status: "Active",
    },
    {
      srNo: 18,
      gatePass: "22088758",
      pgsId: "PGS0185875",
      name: "AMIT PATEL",
      sex: "M",
      rank: "C-SG",
      doj: "15/06/2022",
      contact: "9765432109",
      bloodGroup: "AB+",
      status: "Active",
    },
    {
      srNo: 20,
      gatePass: "22088755",
      pgsId: "PGS0185888",
      name: "SURESH YADAV",
      sex: "M",
      rank: "C-S-SP",
      doj: "01/08/2022",
      contact: "9654321088",
      bloodGroup: "O+",
      status: "Active",
    },
    {
      srNo: 22,
      gatePass: "22088768",
      pgsId: "PGS0185885",
      name: "VIJAY SINGH",
      sex: "M",
      rank: "C-SG",
      doj: "20/09/2022",
      contact: "9543210987",
      bloodGroup: "A+",
      status: "Active",
    },
    {
      srNo: 25,
      gatePass: "22088765",
      pgsId: "PGS0185898",
      name: "PRAKASH SHARMA",
      sex: "M",
      rank: "C-SG",
      doj: "05/10/2022",
      contact: "9432109876",
      bloodGroup: "B+",
      status: "Active",
    },
  ];

  return (
    <>
      <EmployeeMasterLayout onAddEmployee={() => setShowAddDialog(true)}>
        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, PGS ID, gate pass, or staff ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
              <option>All Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex gap-3 mt-3">
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
              <option>All Ex-Servicemen</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
              <option>All Abilities</option>
              <option>Differently Abled</option>
              <option>Not Differently Abled</option>
            </select>
            <div className="flex-1"></div>
            <button className="p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
              <Upload className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
              <Download className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Employee Records Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Employee Records</h3>
            <p className="text-sm text-gray-500">Showing {employees.length} of {employees.length} employees</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Sr No</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Gate Pass</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">PGS ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Sex</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">DOJ</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Blood Group</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {employees.map((employee) => (
                  <tr key={employee.srNo} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{employee.srNo}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{employee.gatePass}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{employee.pgsId}</td>
                    <td className="px-6 py-4 text-sm text-blue-600 font-medium">{employee.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{employee.sex}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{employee.rank}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{employee.doj}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{employee.contact}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-300">
                        {employee.bloodGroup}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          employee.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1.5 text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => {
                            setSelectedEmployee(employee);
                            setShowViewDialog(true);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-gray-600 hover:text-green-600 transition-colors"
                          onClick={() => {
                            setSelectedEmployee(employee);
                            setShowEditDialog(true);
                          }}
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </EmployeeMasterLayout>

      {/* Add Employee Dialog */}
      <AddEmployeeDialog isOpen={showAddDialog} onClose={() => setShowAddDialog(false)} />

      {/* View Employee Dialog */}
      <ViewEmployeeDialog
        isOpen={showViewDialog}
        employee={selectedEmployee}
        onClose={() => setShowViewDialog(false)}
      />

      {/* Edit Employee Dialog */}
      <EditEmployeeDialog
        isOpen={showEditDialog}
        employee={selectedEmployee}
        onClose={() => setShowEditDialog(false)}
      />
    </>
  );
};

export default EmployeesPage;