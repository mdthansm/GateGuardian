'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

interface RoleCardPropsWithClick extends RoleCardProps {
  onClick?: () => void;
}

const RoleCard: React.FC<RoleCardPropsWithClick> = ({ icon, title, description, buttonText, onClick }) => {
  return (
    <div className="group relative bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl cursor-pointer">
      <div className="mb-4 flex items-center justify-center h-16 w-16">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 grow">{description}</p>
      <button 
        onClick={onClick}
        className="w-full py-2.5 px-4 bg-gray-100 hover:bg-blue-600 text-gray-800 hover:text-white rounded-md transition-colors duration-200 text-sm font-medium"
      >
        {buttonText}
      </button>
    </div>
  );
};

const RoleSelection: React.FC = () => {
  const router = useRouter();
  
  // Update this path to your logo image in the public folder
  const logoPath = '/logo.png'; // Change this to your logo file name (e.g., '/vedanta-logo.png')

  const handleRoleClick = (role: string) => {
    if (role === 'Guard') {
      router.push('/dashboard');
    }
    // Add other role routes here as needed
  };

  const roles = [
    {
      icon: (
        <svg className="w-14 h-14 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Guard',
      description: 'View assigned schedule',
      buttonText: 'Continue as Guard',
    },
    {
      icon: (
        <svg className="w-14 h-14 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <path d="M20 9a2 2 0 11-4 0 2 2 0 014 0zM4 9a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Agency Supervisor',
      description: 'Upload reports & respond to queries',
      buttonText: 'Continue as Agency Supervisor',
    },
    {
      icon: (
        <svg className="w-14 h-14 text-blue-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      title: 'Field Supervisor',
      description: 'Record entry/exit at gate',
      buttonText: 'Continue as Field Supervisor',
    },
    {
      icon: (
        <svg className="w-14 h-14 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Industry Verifier',
      description: 'Verify daily reports & resolve issues',
      buttonText: 'Continue as Industry Verifier',
    },
    {
      icon: (
        <svg className="w-14 h-14 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
          <path fillRule="evenodd" d="M20.25 10.332l-7.5-5-7.5 5v10.418a.75.75 0 00.75.75h13.5a.75.75 0 00.75-.75V10.332zM18.75 12.75h-2.25v-2.25h2.25v2.25zm-2.25-3.75h-2.25v-2.25h2.25v2.25zm-2.25 3.75h-2.25v-2.25h2.25v2.25zm-2.25-3.75h-2.25v-2.25h2.25v2.25z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Super Admin',
      description: 'Full system access & monthly approval',
      buttonText: 'Continue as Super Admin',
    },
    {
      icon: (
        <svg className="w-14 h-14 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      title: 'Auditor',
      description: 'Read-only audit access',
      buttonText: 'Continue as Auditor',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4">
      {/* Logo Section */}
      <div className="mb-6">
        <div className="text-center">
          <Image
            src={logoPath}
            alt="vedanta transforming for good"
            width={200}
            height={60}
            className="mx-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome to GateGuardian
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-1">
            Industrial Security Management Platform
          </p>
          <p className="text-sm md:text-base text-gray-600 mt-6">
            Select your role to continue (Demo Mode)
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <RoleCard
              key={index}
              icon={role.icon}
              title={role.title}
              description={role.description}
              buttonText={role.buttonText}
              onClick={() => handleRoleClick(role.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;

