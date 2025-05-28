import React, { useState } from 'react';
import { Save, Info } from 'lucide-react';

const AIConfiguration: React.FC = () => {
  const [formData, setFormData] = useState({
    responseStyle: 'professional',
    tone: 'friendly',
    languageLevel: 'simple',
    personaName: 'Assistant',
    responseLength: 'medium',
    knowledgeCutoff: '2023-01',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save configuration logic would go here
    alert('AI Configuration saved!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">AI Configuration</h1>
        <p className="mt-1 text-sm text-gray-500">
          Customize how your AI assistant responds to WhatsApp messages.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Response Style & Tone</h2>
            <p className="mt-1 text-sm text-gray-500">
              Define how your AI assistant communicates with your contacts.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="responseStyle" className="block text-sm font-medium text-gray-700">
                  Response Style
                </label>
                <select
                  id="responseStyle"
                  name="responseStyle"
                  value={formData.responseStyle}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                >
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="formal">Formal</option>
                  <option value="informative">Informative</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
                  Tone
                </label>
                <select
                  id="tone"
                  name="tone"
                  value={formData.tone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                >
                  <option value="friendly">Friendly</option>
                  <option value="neutral">Neutral</option>
                  <option value="enthusiastic">Enthusiastic</option>
                  <option value="empathetic">Empathetic</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="languageLevel" className="block text-sm font-medium text-gray-700">
                  Language Complexity
                </label>
                <select
                  id="languageLevel"
                  name="languageLevel"
                  value={formData.languageLevel}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                >
                  <option value="simple">Simple</option>
                  <option value="moderate">Moderate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="responseLength" className="block text-sm font-medium text-gray-700">
                  Response Length
                </label>
                <select
                  id="responseLength"
                  name="responseLength"
                  value={formData.responseLength}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                >
                  <option value="brief">Brief</option>
                  <option value="medium">Medium</option>
                  <option value="detailed">Detailed</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">AI Persona</h2>
            <p className="mt-1 text-sm text-gray-500">
              Customize the identity and personality of your AI assistant.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="personaName" className="block text-sm font-medium text-gray-700">
                  Assistant Name
                </label>
                <input
                  type="text"
                  name="personaName"
                  id="personaName"
                  value={formData.personaName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="knowledgeCutoff" className="block text-sm font-medium text-gray-700">
                  Knowledge Cutoff
                </label>
                <select
                  id="knowledgeCutoff"
                  name="knowledgeCutoff"
                  value={formData.knowledgeCutoff}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                >
                  <option value="2021-01">January 2021</option>
                  <option value="2022-01">January 2022</option>
                  <option value="2023-01">January 2023</option>
                  <option value="2023-06">June 2023</option>
                </select>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="personaPrompt" className="block text-sm font-medium text-gray-700">
                  Persona Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="personaPrompt"
                    name="personaPrompt"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    placeholder="Describe your AI assistant's personality and background..."
                    defaultValue="You are a helpful, professional customer service representative for our company. You provide accurate, concise information and always maintain a friendly, helpful tone."
                  ></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  This description will guide how the AI responds in conversations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Specialized Knowledge</h2>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <Info className="mr-2 h-4 w-4" />
                Learn More
              </button>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Add specific knowledge about your business, products, or services.
            </p>

            <div className="mt-4 flex items-start rounded-md bg-amber-50 p-4">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-amber-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-amber-800">Important Note</h3>
                <p className="mt-2 text-sm text-amber-700">
                  For best results, upload training examples in the Training Data section and use this
                  section only for key facts that should always be available to the AI.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="businessInfo" className="block text-sm font-medium text-gray-700">
                Business Information
              </label>
              <div className="mt-1">
                <textarea
                  id="businessInfo"
                  name="businessInfo"
                  rows={6}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                  placeholder="Add key information about your business, products, services, policies, etc."
                  defaultValue="Business hours: Monday-Friday 9AM-5PM EST
                  Return policy: 30-day returns for unused items
                  Contact email: support@example.com
                  Phone: (555) 123-4567"
                ></textarea>
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
            type="submit"
            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <Save className="mr-2 h-4 w-4" />
            Save Configuration
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIConfiguration;