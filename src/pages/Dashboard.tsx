import React from 'react';
import { Users, MessageSquare, Clock, BarChart2 } from 'lucide-react';
import StatCard from '../components/StatCard';
import RecentChats from '../components/RecentChats';
import ActivityChart from '../components/ActivityChart';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Active Chats',
      value: '24',
      change: '+12%',
      changeType: 'increase',
      icon: <MessageSquare className="h-6 w-6 text-emerald-500" />,
    },
    {
      title: 'AI Responses',
      value: '2,541',
      change: '+25%',
      changeType: 'increase',
      icon: <Users className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: 'Avg. Response Time',
      value: '2.3s',
      change: '-0.5s',
      changeType: 'decrease',
      icon: <Clock className="h-6 w-6 text-amber-500" />,
    },
    {
      title: 'Training Examples',
      value: '156',
      change: '+23',
      changeType: 'increase',
      icon: <BarChart2 className="h-6 w-6 text-rose-500" />,
    },
  ];

  return (
    <div className="space-y-6 bg-white dark:bg-zinc-950 min-h-screen p-6 rounded-lg">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Overview of your WhatsApp AI integration performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Message Activity
              </h3>
              <div className="mt-2">
                <ActivityChart />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Recent Chats
              </h3>
              <div className="mt-2">
                <RecentChats />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              WhatsApp Connection Status
            </h3>
            <div className="mt-4 flex items-center">
              <div className="h-4 w-4 rounded-full bg-green-500"></div>
              <span className="ml-2 text-sm font-medium text-gray-900">Connected</span>
              <span className="ml-2 text-xs text-gray-500">Last active: 5 minutes ago</span>
            </div>
            <button className="mt-4 inline-flex items-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Check Connection
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              AI Assistant Status
            </h3>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Automation Enabled</span>
                <div className="relative inline-block h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-emerald-500 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                  <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-gray-900">Operating Hours</span>
                <p className="text-sm text-gray-500">9:00 AM - 6:00 PM, Monday - Friday</p>
              </div>
              <button className="mt-4 inline-flex items-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                Configure Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;