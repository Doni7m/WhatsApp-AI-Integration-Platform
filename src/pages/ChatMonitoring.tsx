import React, { useState } from 'react';
import { Users, RefreshCw, ChevronDown, ChevronUp, UserCheck, MessageSquareText, Bot } from 'lucide-react';

const ChatMonitoring: React.FC = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [expandedChat, setExpandedChat] = useState<number | null>(null);

  const toggleExpandChat = (id: number) => {
    setExpandedChat(expandedChat === id ? null : id);
  };

  const chats = [
    {
      id: 1,
      contact: '+1 234 567 8901',
      lastMessage: 'I need to know about your return policy',
      status: 'active',
      lastActive: '2 minutes ago',
      aiHandled: true,
      unread: 2,
    },
    {
      id: 2,
      contact: '+1 987 654 3210',
      lastMessage: 'When will my order be shipped?',
      status: 'active',
      lastActive: '5 minutes ago',
      aiHandled: true,
      unread: 0,
    },
    {
      id: 3,
      contact: '+44 7911 123456',
      lastMessage: 'I need to speak with a human agent please',
      status: 'needs-attention',
      lastActive: '10 minutes ago',
      aiHandled: false,
      unread: 3,
    },
    {
      id: 4,
      contact: '+61 491 570 156',
      lastMessage: 'Thank you for the information',
      status: 'inactive',
      lastActive: '1 hour ago',
      aiHandled: true,
      unread: 0,
    },
  ];

  const chatMessages = [
    {
      id: 1,
      chatId: 1,
      sender: 'user',
      message: 'Hello, I purchased a product from your store last week.',
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      chatId: 1,
      sender: 'bot',
      message: 'Hello! Thank you for reaching out. I\'d be happy to assist you with your recent purchase. Could you please provide more details about your order or the specific product you purchased?',
      timestamp: '10:31 AM',
    },
    {
      id: 3,
      chatId: 1,
      sender: 'user',
      message: 'I bought a wireless headphone and it\'s not working properly. I want to return it.',
      timestamp: '10:32 AM',
    },
    {
      id: 4,
      chatId: 1,
      sender: 'bot',
      message: 'I\'m sorry to hear that your wireless headphones aren\'t working properly. We have a 30-day return policy for all electronics. You can return the item to any of our store locations or request a prepaid shipping label through our website. Would you like me to guide you through the online return process?',
      timestamp: '10:33 AM',
    },
    {
      id: 5,
      chatId: 1,
      sender: 'user',
      message: 'I need to know about your return policy',
      timestamp: '10:35 AM',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Chat Monitoring</h1>
        <p className="mt-1 text-sm text-gray-500">
          Monitor and manage ongoing WhatsApp conversations.
        </p>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('live')}
            className={`${
              activeTab === 'live'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
          >
            Live Chats
          </button>
          <button
            onClick={() => setActiveTab('archived')}
            className={`${
              activeTab === 'archived'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
          >
            Archived
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`${
              activeTab === 'analytics'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
          >
            Analytics
          </button>
        </nav>
      </div>

      {activeTab === 'live' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Active Chats</h2>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <RefreshCw className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-3">
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 pr-10 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                      placeholder="Search chats..."
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flow-root">
                  <ul role="list" className="-my-5 divide-y divide-gray-200">
                    {chats.map((chat) => (
                      <li
                        key={chat.id}
                        className={`py-4 cursor-pointer ${
                          selectedChat === chat.id ? 'bg-gray-50' : ''
                        }`}
                        onClick={() => setSelectedChat(chat.id)}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                              <Users className="h-4 w-4 text-gray-500" />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900">
                              {chat.contact}
                            </p>
                            <p className="truncate text-sm text-gray-500">{chat.lastMessage}</p>
                          </div>
                          <div>
                            {chat.status === 'needs-attention' ? (
                              <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                                Attention
                              </span>
                            ) : chat.status === 'active' ? (
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                Active
                              </span>
                            ) : (
                              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                Inactive
                              </span>
                            )}
                            {chat.unread > 0 && (
                              <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-medium text-emerald-700">
                                {chat.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedChat ? (
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <Users className="h-6 w-6 text-gray-500" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {chats.find((c) => c.id === selectedChat)?.contact}
                        </p>
                        <p className="text-xs text-gray-500">
                          Last active: {chats.find((c) => c.id === selectedChat)?.lastActive}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                      >
                        <UserCheck className="mr-2 h-4 w-4 text-gray-500" />
                        Take Over
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-emerald-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                      >
                        <MessageSquareText className="mr-2 h-4 w-4" />
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {chatMessages
                      .filter((msg) => msg.chatId === selectedChat)
                      .map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.sender === 'user' ? 'justify-start' : 'justify-end'
                          }`}
                        >
                          <div
                            className={`rounded-lg px-4 py-2 max-w-xs sm:max-w-md ${
                              message.sender === 'user'
                                ? 'bg-gray-100 text-gray-900'
                                : 'bg-emerald-100 text-emerald-900'
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                            <p
                              className={`text-xs mt-1 ${
                                message.sender === 'user'
                                  ? 'text-gray-500'
                                  : 'text-emerald-700'
                              }`}
                            >
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 p-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-emerald-500" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="relative">
                        <textarea
                          rows={3}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                          placeholder="Type a message..."
                        ></textarea>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            className="inline-flex items-center rounded-full border border-transparent bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                          >
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center rounded-full border border-transparent bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                          >
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <div>
                  <MessageSquareText className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No chat selected</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Select a chat from the list to view the conversation.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'archived' && (
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Archived Conversations</h2>
            <p className="mt-1 text-sm text-gray-500">
              View past conversations that have been archived.
            </p>

            <div className="mt-6 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Duration
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Handler
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[1, 2, 3, 4, 5].map((chat) => (
                        <tr key={chat}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            +1 234 567 {8900 + chat}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {`${chat} day${chat > 1 ? 's' : ''} ago`}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {`${chat * 5}m ${chat * 10}s`}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {chat % 2 === 0 ? (
                              <div className="flex items-center">
                                <Bot className="mr-1 h-4 w-4 text-emerald-500" />
                                <span>AI Assistant</span>
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <User className="mr-1 h-4 w-4 text-indigo-500" />
                                <span>Human Agent</span>
                              </div>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {chat % 3 === 0 ? (
                              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                Escalated
                              </span>
                            ) : (
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                Resolved
                              </span>
                            )}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <button
                              onClick={() => toggleExpandChat(chat)}
                              className="text-emerald-600 hover:text-emerald-900"
                            >
                              {expandedChat === chat ? (
                                <ChevronUp className="h-5 w-5" />
                              ) : (
                                <ChevronDown className="h-5 w-5" />
                              )}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">Total Conversations</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">1,284</dd>
              <dd className="mt-2 flex items-center text-sm text-green-600">
                <svg
                  className="mr-1 h-5 w-5 flex-shrink-0 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>12% increase</span>
              </dd>
            </div>

            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">AI Handled Rate</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">78%</dd>
              <dd className="mt-2 flex items-center text-sm text-green-600">
                <svg
                  className="mr-1 h-5 w-5 flex-shrink-0 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>15% increase</span>
              </dd>
            </div>

            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">Avg. Response Time</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">2.4s</dd>
              <dd className="mt-2 flex items-center text-sm text-green-600">
                <svg
                  className="mr-1 h-5 w-5 flex-shrink-0 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>0.5s decrease</span>
              </dd>
            </div>

            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">Customer Satisfaction</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">92%</dd>
              <dd className="mt-2 flex items-center text-sm text-green-600">
                <svg
                  className="mr-1 h-5 w-5 flex-shrink-0 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>4% increase</span>
              </dd>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Conversation Volume by Time
                </h3>
                <div className="mt-6 h-64 rounded-lg bg-gray-50 p-4">
                  {/* This would be a real chart in a production app */}
                  <div className="h-full flex items-end justify-between">
                    <div className="w-8 bg-emerald-500 rounded-t" style={{ height: '30%' }}></div>
                    <div className="w-8 bg-emerald-500 rounded-t" style={{ height: '45%' }}></div>
                    <div className="w-8 bg-emerald-500 rounded-t" style={{ height: '60%' }}></div>
                    <div className="w-8 bg-emerald-500 rounded-t" style={{ height: '80%' }}></div>
                    <div className="w-8 bg-emerald-500 rounded-t" style={{ height: '65%' }}></div>
                    <div className="w-8 bg-emerald-500 rounded-t" style={{ height: '50%' }}></div>
                    <div className="w-8 bg-emerald-500 rounded-t" style={{ height: '35%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Common Topics
                </h3>
                <div className="mt-6 h-64">
                  {/* This would be a real chart in a production app */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">Product Information</div>
                        <div className="text-sm text-gray-500">35%</div>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">Order Status</div>
                        <div className="text-sm text-gray-500">25%</div>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">Returns & Refunds</div>
                        <div className="text-sm text-gray-500">20%</div>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">Technical Support</div>
                        <div className="text-sm text-gray-500">15%</div>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">Other</div>
                        <div className="text-sm text-gray-500">5%</div>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import { User } from 'lucide-react';

export default ChatMonitoring;