import React from 'react';

interface AgencySupervisorStatsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  iconBgColor: string;
}

const AgencySupervisorStatsCard: React.FC<AgencySupervisorStatsCardProps> = ({
  title,
  value,
  description,
  icon,
  iconColor,
  iconBgColor,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`${iconBgColor} rounded-full p-3 flex items-center justify-center flex-shrink-0`}>
          <div className={iconColor}>
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AgencySupervisorStatsCard;

