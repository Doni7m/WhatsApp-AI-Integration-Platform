import React from 'react';
import { Bot, User } from 'lucide-react';

const RecentChats: React.FC = () => {
  const chats = [
    {
      id: 1,
      name: '+1 234 567 8901',
      lastMessage: 'What are your business hours?',
      time: '5m ago',
      unread: 2,
      aiHandled: true,
    },
    {
      id: 2,
      name: '+1 987 654 3210',
      lastMessage: 'Thanks for the information!',
      time: '15m ago',
      unread: 0,
      aiHandled: true,
    },
    {
      id: 3,
      name: '+44 7911 123456',
      lastMessage: 'I need to speak with a human.',
      time: '1h ago',
      unread: 1,
      aiHandled: false,
    },
    {
      id: 4,
      name: '+61 491 570 156',
      lastMessage: 'Do you offer international shipping?',
      time: '3h ago',
      unread: 0,
      aiHandled: true,
    },
  ];

  return (
    <div className="flow-root">
      <ul role="list" className="-my-5 divide-y divide-gray-200">
        {chats.map((chat) => (
          <li key={chat.id} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  {chat.aiHandled ? (
                    <Bot className="h-4 w-4 text-indigo-500" />
                  ) : (
                    <User className="h-4 w-4 text-gray-500" />
                  )}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{chat.name}</p>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xs text-gray-500">{chat.time}</p>
                {chat.unread > 0 && (
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-100 text-xs font-medium text-emerald-700">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <button className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          View All Chats
        </button>
      </div>
    </div>
  );
};

export default RecentChats;