import React, { ReactNode } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white p-6 shadow transition-all duration-300 hover:shadow-md">
      <div className="flex items-center">
        <div className="flex-shrink-0 rounded-md bg-gray-50 p-3">{icon}</div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd>
              <div className="text-lg font-medium text-gray-900">{value}</div>
            </dd>
          </dl>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <div
          className={`flex items-center text-sm ${
            changeType === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {changeType === 'increase' ? (
            <ArrowUpRight className="h-4 w-4 flex-shrink-0" />
          ) : (
            <ArrowDownRight className="h-4 w-4 flex-shrink-0" />
          )}
          <span className="ml-1 font-medium">{change}</span>
        </div>
        <span className="ml-2 text-sm text-gray-500">from last week</span>
      </div>
    </div>
  );
};

export default StatCard;