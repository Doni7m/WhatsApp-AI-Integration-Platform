import React from 'react';
import { LayoutDashboard, MessageSquare, Settings, Sliders, BookOpen, BarChart3 } from 'lucide-react';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'whatsapp', name: 'WhatsApp Connect', icon: <MessageSquare size={20} /> },
    { id: 'ai-config', name: 'AI Configuration', icon: <Sliders size={20} /> },
    { id: 'training', name: 'Training Data', icon: <BookOpen size={20} /> },
    { id: 'monitoring', name: 'Chat Monitoring', icon: <BarChart3 size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-full flex-col border-r border-gray-200 bg-white">
      <div className="flex flex-shrink-0 items-center px-4 py-5">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-8 w-8 text-emerald-500" />
          <span className="text-xl font-bold text-gray-900">WhatsAI</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-2 py-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activePage === item.id
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <div className={`mr-3 ${activePage === item.id ? 'text-emerald-500' : 'text-gray-400'}`}>
                {item.icon}
              </div>
              {item.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
        <div className="flex w-full items-center">
          <div className="h-9 w-9 rounded-full bg-gray-300"></div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">User Name</p>
            <p className="text-xs text-gray-500">user@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;