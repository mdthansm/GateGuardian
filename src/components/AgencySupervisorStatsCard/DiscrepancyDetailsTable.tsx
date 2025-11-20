'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Button } from '../ui/button';
import { MessageSquare, Check } from 'lucide-react';

interface DiscrepancyRow {
  id: string;
  date: string;
  staffName: string;
  staffId: string;
  type: 'Time Mismatch' | 'Missing Entry' | 'Duplicate Entry';
  industryTime: string;
  agencyTime: string;
  difference: string;
  status: 'open' | 'resolved';
}

const DiscrepancyDetailsTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const discrepancies: DiscrepancyRow[] = [
    {
      id: '1',
      date: '2025-11-13',
      staffName: 'Rajesh Kumar',
      staffId: 'GRD007',
      type: 'Time Mismatch',
      industryTime: '08:05',
      agencyTime: '08:15',
      difference: '10 min',
      status: 'open',
    },
    {
      id: '2',
      date: '2025-11-13',
      staffName: 'Amit Singh',
      staffId: 'GRD012',
      type: 'Missing Entry',
      industryTime: '14:30',
      agencyTime: '-',
      difference: 'Missing',
      status: 'open',
    },
    {
      id: '3',
      date: '2025-11-12',
      staffName: 'Suresh Patel',
      staffId: 'GRD003',
      type: 'Duplicate Entry',
      industryTime: '09:00',
      agencyTime: '09:00, 09:05',
      difference: 'Duplicate',
      status: 'resolved',
    },
  ];

  const getTypeBadgeClass = (type: string) => {
    switch (type) {
      case 'Time Mismatch':
        return 'bg-orange-100 text-orange-600';
      case 'Missing Entry':
        return 'bg-red-100 text-red-600';
      case 'Duplicate Entry':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const filteredDiscrepancies = discrepancies.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'open') return item.status === 'open';
    if (activeTab === 'resolved') return item.status === 'resolved';
    return true;
  });

  return (
    <div className="mt-8 lg:mt-10">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Discrepancy Details
        </h2>
        <p className="text-gray-600 text-sm lg:text-base">
          Side-by-side comparison of industry vs agency data
        </p>
      </div>

      {/* Tabs Section */}
      <div className="mb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-gray-100 p-1 rounded-lg w-fit">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-blue-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm min-w-[80px] px-4"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="open" 
              className="data-[state=active]:bg-blue-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm min-w-[100px] px-4"
            >
              Open (2)
            </TabsTrigger>
            <TabsTrigger 
              value="resolved" 
              className="data-[state=active]:bg-blue-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm min-w-[120px] px-4"
            >
              Resolved (1)
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent bg-gray-50">
                <TableHead className="text-gray-700 font-medium py-3 px-4">Date</TableHead>
                <TableHead className="text-gray-700 font-medium py-3 px-4">Staff</TableHead>
                <TableHead className="text-gray-700 font-medium py-3 px-4">Type</TableHead>
                <TableHead className="text-gray-700 font-medium py-3 px-4">Industry Time</TableHead>
                <TableHead className="text-gray-700 font-medium py-3 px-4">Agency Time</TableHead>
                <TableHead className="text-gray-700 font-medium py-3 px-4">Difference</TableHead>
                <TableHead className="text-gray-700 font-medium py-3 px-4">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDiscrepancies.map((row) => (
                <TableRow key={row.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <TableCell className="text-gray-900 py-4 px-4">{row.date}</TableCell>
                  <TableCell className="py-4 px-4">
                    <div>
                      <div className="font-semibold text-gray-900">{row.staffName}</div>
                      <div className="text-sm text-gray-500">{row.staffId}</div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${getTypeBadgeClass(row.type)}`}>
                      {row.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-900 py-4 px-4">{row.industryTime}</TableCell>
                  <TableCell className="text-gray-900 py-4 px-4">{row.agencyTime}</TableCell>
                  <TableCell className="text-orange-600 font-medium py-4 px-4">{row.difference}</TableCell>
                  <TableCell className="py-4 px-4">
                    {row.status === 'resolved' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                        <Check className="w-3.5 h-3.5" />
                        Resolved
                      </span>
                    ) : (
                      <div className="flex items-center gap-2 flex-wrap">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 text-xs border-gray-200 text-gray-700 hover:bg-gray-50 bg-white"
                        >
                          <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                          Comment
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          className="h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white border-0"
                        >
                          Resolve
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DiscrepancyDetailsTable;

