import React, { useState } from 'react';
import { QrCode, CheckCircle2, RefreshCw } from 'lucide-react';

const WhatsAppConnect: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  
  const handleConnect = () => {
    setConnectionStatus('connecting');
    // In a real app, this would initiate the WhatsApp connection process
    setTimeout(() => {
      setConnectionStatus('connected');
    }, 3000);
  };

  const handleDisconnect = () => {
    setConnectionStatus('disconnected');
  };

  const handleRefresh = () => {
    setConnectionStatus('connecting');
    // In a real app, this would refresh the QR code
    setTimeout(() => {
      setConnectionStatus('connecting');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Connect WhatsApp</h1>
        <p className="mt-1 text-sm text-gray-500">
          Link your WhatsApp account to enable AI-powered automated responses.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">Connection Status</h2>
              <div className="flex items-center space-x-2">
                {connectionStatus === 'connected' ? (
                  <>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-green-700">Connected</span>
                  </>
                ) : connectionStatus === 'connecting' ? (
                  <>
                    <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                    <span className="text-sm font-medium text-amber-700">Waiting for scan...</span>
                  </>
                ) : (
                  <>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <span className="text-sm font-medium text-gray-500">Disconnected</span>
                  </>
                )}
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  To connect your WhatsApp account, please follow these steps:
                </p>
                <ol className="list-decimal space-y-2 pl-5 text-sm text-gray-600">
                  <li>Open WhatsApp on your phone</li>
                  <li>Tap Menu or Settings and select WhatsApp Web</li>
                  <li>Point your phone to this screen to scan the QR code</li>
                </ol>
              </div>

              {connectionStatus === 'connected' ? (
                <button
                  onClick={handleDisconnect}
                  className="inline-flex items-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Disconnect
                </button>
              ) : (
                <button
                  onClick={handleConnect}
                  className="inline-flex items-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Connect WhatsApp
                </button>
              )}
            </div>

            <div className="flex flex-col items-center justify-center space-y-4">
              {connectionStatus === 'connected' ? (
                <div className="flex flex-col items-center space-y-3 p-8">
                  <CheckCircle2 className="h-20 w-20 text-green-500" />
                  <p className="text-center text-lg font-medium text-gray-900">
                    WhatsApp Successfully Connected
                  </p>
                  <p className="text-center text-sm text-gray-500">
                    Your WhatsApp account is now linked and ready to use with AI responses.
                  </p>
                </div>
              ) : (
                <div className="relative">
                  <div className="flex h-64 w-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                    {connectionStatus === 'connecting' ? (
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <QrCode className="h-48 w-48 text-gray-900" />
                      </div>
                    ) : (
                      <div className="text-center">
                        <QrCode className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500">
                          Click "Connect WhatsApp" to generate QR code
                        </p>
                      </div>
                    )}
                  </div>
                  {connectionStatus === 'connecting' && (
                    <button
                      onClick={handleRefresh}
                      className="absolute top-2 right-2 rounded-full bg-white p-1 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <RefreshCw className="h-5 w-5 text-gray-500" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">Connection History</h2>
          <div className="mt-4 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
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
                        Phone
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        Today, 10:30 AM
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600">
                        Connected
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        2h 15m
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        iPhone 13
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        Yesterday, 3:45 PM
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-red-600">
                        Disconnected
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        5h 30m
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        iPhone 13
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppConnect;