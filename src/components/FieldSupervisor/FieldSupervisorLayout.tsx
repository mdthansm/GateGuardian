"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LayoutDashboard, LogIn, Users, UserCircle, TrendingUp, Briefcase, DollarSign, Phone, ListTodo, Settings, Shield, LogOut, Menu } from 'lucide-react';

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-left transition-colors ${
      active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
    }`}
  >
    <span className={active ? "text-blue-600" : "text-gray-500"}>{icon}</span>
    <span>{label}</span>
  </button>
);

interface FieldSupervisorLayoutProps {
  children: React.ReactNode;
}

const FieldSupervisorLayout: React.FC<FieldSupervisorLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    { label: "Dashboard", path: "/field-supervisor", icon: <LayoutDashboard className="w-5 h-5" /> },
    { label: "Entry/Exit", path: "/entry-exit", icon: <LogIn className="w-5 h-5" /> },
    { label: "Supervisor", path: "/supervisor", icon: <UserCircle className="w-5 h-5" /> },
    { label: "Employees", path: "/field-supervisor/employees", icon: <Users className="w-5 h-5" /> },
    { label: "Performance", path: "/field-supervisor/performance", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Additional Duties", path: "/field-supervisor/additional-duties", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Payroll", path: "/field-supervisor/payroll", icon: <DollarSign className="w-5 h-5" /> },
    { label: "Call Register", path: "/field-supervisor/call-register", icon: <Phone className="w-5 h-5" /> },
    { label: "Tasks", path: "/field-supervisor/tasks", icon: <ListTodo className="w-5 h-5" /> },
    { label: "Settings", path: "/field-supervisor/settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col">
        <div className="px-6 py-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg">GateGuardian</div>
              <div className="text-xs text-gray-500">Security Mgmt</div>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 py-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
            Navigation
          </div>
          <div className="space-y-1">
            {items.map((item) => (
              <NavItem
                key={item.path}
                label={item.label}
                active={pathname === item.path}
                onClick={() => router.push(item.path)}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                className="lg:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">GateGuardian</div>
                  <div className="text-xs text-gray-500">Security Management</div>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Switch Role</span>
            </button>
          </div>
        </header>

        <main className="px-4 lg:px-8 py-6">{children}</main>
      </div>
    </div>
  );
};

export default FieldSupervisorLayout;