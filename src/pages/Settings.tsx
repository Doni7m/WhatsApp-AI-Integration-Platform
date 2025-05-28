import React, { useState } from 'react';
import { Save } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  const [generalSettings, setGeneralSettings] = useState({
    operatingHours: true,
    startTime: '09:00',
    endTime: '18:00',
    timezone: 'America/New_York',
    weekdays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    autoReplyOutsideHours: true,
    outOfHoursMessage: 'Thank you for your message. Our team is currently offline and will respond during our operating hours: Monday-Friday, 9am-6pm EST.',
  });

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setGeneralSettings(prev => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setGeneralSettings(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleWeekdayToggle = (day: string) => {
    setGeneralSettings(prev => {
      const updatedWeekdays = prev.weekdays.includes(day)
        ? prev.weekdays.filter(d => d !== day)
        : [...prev.weekdays, day];
      
      return { ...prev, weekdays: updatedWeekdays };
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Configure your WhatsApp AI integration preferences.
        </p>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('general')}
            className={`${
              activeTab === 'general'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`${
              activeTab === 'notifications'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
          >
            Notifications
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`${
              activeTab === 'security'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
          >
            Security
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`${
              activeTab === 'api'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
          >
            API Keys
          </button>
        </nav>
      </div>

      {activeTab === 'general' && (
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Operating Hours</h2>
              <p className="mt-1 text-sm text-gray-500">
                Set when your AI assistant should be active.
              </p>

              <div className="mt-6 space-y-6">
                <div className="flex items-center">
                  <input
                    id="operatingHours"
                    name="operatingHours"
                    type="checkbox"
                    checked={generalSettings.operatingHours}
                    onChange={handleGeneralChange}
                    className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="operatingHours" className="ml-3 text-sm font-medium text-gray-700">
                    Enable operating hours
                  </label>
                </div>

                {generalSettings.operatingHours && (
                  <>
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
                          Start Time
                        </label>
                        <div className="mt-1">
                          <input
                            type="time"
                            name="startTime"
                            id="startTime"
                            value={generalSettings.startTime}
                            onChange={handleGeneralChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
                          End Time
                        </label>
                        <div className="mt-1">
                          <input
                            type="time"
                            name="endTime"
                            id="endTime"
                            value={generalSettings.endTime}
                            onChange={handleGeneralChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                          Timezone
                        </label>
                        <select
                          id="timezone"
                          name="timezone"
                          value={generalSettings.timezone}
                          onChange={handleGeneralChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                        >
                          <option value="America/New_York">Eastern Time (ET)</option>
                          <option value="America/Chicago">Central Time (CT)</option>
                          <option value="America/Denver">Mountain Time (MT)</option>
                          <option value="America/Los_Angeles">Pacific Time (PT)</option>
                          <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                          <option value="Europe/Paris">Central European Time (CET)</option>
                          <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                        </select>
                      </div>
                    </div>

                    <fieldset>
                      <legend className="text-sm font-medium text-gray-700">Active Days</legend>
                      <div className="mt-2 flex flex-wrap gap-3">
                        {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
                          <div key={day} className="flex items-center">
                            <input
                              id={day}
                              name="weekdays"
                              type="checkbox"
                              checked={generalSettings.weekdays.includes(day)}
                              onChange={() => handleWeekdayToggle(day)}
                              className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            <label htmlFor={day} className="ml-2 text-sm text-gray-700 capitalize">
                              {day}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>

                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="autoReplyOutsideHours"
                          name="autoReplyOutsideHours"
                          type="checkbox"
                          checked={generalSettings.autoReplyOutsideHours}
                          onChange={handleGeneralChange}
                          className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <label htmlFor="autoReplyOutsideHours" className="ml-3 text-sm font-medium text-gray-700">
                          Auto-reply outside operating hours
                        </label>
                      </div>

                      {generalSettings.autoReplyOutsideHours && (
                        <div className="mt-2">
                          <label htmlFor="outOfHoursMessage" className="block text-sm font-medium text-gray-700">
                            Out of Hours Message
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="outOfHoursMessage"
                              name="outOfHoursMessage"
                              rows={3}
                              value={generalSettings.outOfHoursMessage}
                              onChange={handleGeneralChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                            ></textarea>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Message Handling</h2>
              <p className="mt-1 text-sm text-gray-500">
                Configure how messages are processed and handled.
              </p>

              <div className="mt-6 space-y-6">
                <div className="flex items-center">
                  <input
                    id="autoReply"
                    name="autoReply"
                    type="checkbox"
                    defaultChecked={true}
                    className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="autoReply" className="ml-3 text-sm font-medium text-gray-700">
                    Enable AI automated responses
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="humanFallback"
                    name="humanFallback"
                    type="checkbox"
                    defaultChecked={true}
                    className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="humanFallback" className="ml-3 text-sm font-medium text-gray-700">
                    Allow AI to escalate to human agent when needed
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="saveConversations"
                    name="saveConversations"
                    type="checkbox"
                    defaultChecked={true}
                    className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="saveConversations" className="ml-3 text-sm font-medium text-gray-700">
                    Save conversations for training and analytics
                  </label>
                </div>

                <div>
                  <label htmlFor="maxResponseTime" className="block text-sm font-medium text-gray-700">
                    Maximum AI Response Time (seconds)
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="maxResponseTime"
                      id="maxResponseTime"
                      defaultValue="5"
                      min="1"
                      max="30"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    If the AI takes longer than this to respond, the conversation will be queued
                    for human review.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="button"
              className="ml-3 inline-flex items-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </button>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Notification Preferences</h2>
            <p className="mt-1 text-sm text-gray-500">
              Configure when and how you receive notifications.
            </p>

            <div className="mt-6 space-y-6">
              <fieldset>
                <legend className="text-sm font-medium text-gray-900">Email Notifications</legend>
                <div className="mt-2 space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="emailNewChats"
                        name="emailNewChats"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="emailNewChats" className="font-medium text-gray-700">
                        New chat started
                      </label>
                      <p className="text-gray-500">
                        Get notified when a new conversation begins.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="emailEscalated"
                        name="emailEscalated"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="emailEscalated" className="font-medium text-gray-700">
                        Escalated conversations
                      </label>
                      <p className="text-gray-500">
                        Get notified when AI cannot handle a conversation and needs human intervention.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="emailSummary"
                        name="emailSummary"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="emailSummary" className="font-medium text-gray-700">
                        Daily summaries
                      </label>
                      <p className="text-gray-500">
                        Receive a daily digest of AI conversation activity.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-medium text-gray-900">Push Notifications</legend>
                <div className="mt-2 space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="pushAll"
                        name="pushAll"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="pushAll" className="font-medium text-gray-700">
                        All messages
                      </label>
                      <p className="text-gray-500">
                        Get push notifications for all incoming messages.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="pushUrgent"
                        name="pushUrgent"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="pushUrgent" className="font-medium text-gray-700">
                        Urgent issues only
                      </label>
                      <p className="text-gray-500">
                        Only receive notifications for conversations flagged as urgent.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div>
                <label htmlFor="notificationEmail" className="block text-sm font-medium text-gray-700">
                  Notification Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="notificationEmail"
                    id="notificationEmail"
                    defaultValue="admin@example.com"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'security' && (
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage access control and security features.
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                <div className="mt-2 flex items-center">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                    <span className="text-xs font-medium leading-none text-red-800">Off</span>
                  </span>
                  <span className="ml-2 text-sm text-gray-500">Two-factor authentication is not enabled</span>
                  <button
                    type="button"
                    className="ml-3 rounded-md border border-gray-300 bg-white py-1 px-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Enable
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Session Management</h3>
                <div className="mt-2">
                  <button
                    type="button"
                    className="rounded-md border border-gray-300 bg-white py-1 px-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Sign out all other sessions
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  This will sign you out from all devices except this one.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Access Logs</h3>
                <div className="mt-2 max-h-40 overflow-y-auto rounded border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          Time
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          IP Address
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">
                          Today, 10:23 AM
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">
                          192.168.1.1
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">
                          Login successful
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">
                          Yesterday, 4:12 PM
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">
                          192.168.1.1
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">
                          Settings updated
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">
                          Yesterday, 9:41 AM
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">
                          192.168.1.1
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">
                          Login successful
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'api' && (
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">API Keys</h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage integration keys for OpenAI and WhatsApp services.
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="openaiApiKey" className="block text-sm font-medium text-gray-700">
                  OpenAI API Key
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="password"
                    name="openaiApiKey"
                    id="openaiApiKey"
                    className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    defaultValue="sk-••••••••••••••••••••••••••••••••"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Your OpenAI API key is stored securely and used for generating AI responses.
                </p>
              </div>

              <div>
                <label htmlFor="whatsappApiKey" className="block text-sm font-medium text-gray-700">
                  WhatsApp Business API Key
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="password"
                    name="whatsappApiKey"
                    id="whatsappApiKey"
                    className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    defaultValue="wa_••••••••••••••••••••••••••••••••"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Required for WhatsApp Business API integration.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Webhook URL</h3>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    readOnly
                    className="block w-full rounded-md border-gray-300 bg-gray-50 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    defaultValue="https://your-app.com/api/whatsapp-webhook"
                  />
                  <button
                    type="button"
                    className="ml-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Copy
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Configure this URL in your WhatsApp Business API account to receive messages.
                </p>
              </div>

              <div className="rounded-md bg-yellow-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Important</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        Never share your API keys. If you suspect your keys have been compromised,
                        regenerate them immediately.
                      </p>
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

export default Settings;