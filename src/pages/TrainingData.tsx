import React, { useState } from 'react';
import { Upload, PlusCircle, Trash2, MessageSquare } from 'lucide-react';

const TrainingData: React.FC = () => {
  const [activeTab, setActiveTab] = useState('examples');
  const [examples, setExamples] = useState([
    {
      id: 1,
      category: 'product-info',
      question: 'What are your business hours?',
      answer: 'Our business hours are Monday through Friday from 9am to 5pm EST, and Saturday from 10am to 2pm EST. We are closed on Sundays and major holidays.',
    },
    {
      id: 2,
      category: 'support',
      question: 'How do I reset my password?',
      answer: 'To reset your password, please visit our website and click on the "Forgot Password" link on the login page. Follow the instructions sent to your email to create a new password.',
    },
  ]);
  const [newExample, setNewExample] = useState({
    category: 'product-info',
    question: '',
    answer: '',
  });

  const handleAddExample = () => {
    if (newExample.question.trim() === '' || newExample.answer.trim() === '') {
      alert('Please fill in both question and answer fields.');
      return;
    }

    setExamples([
      ...examples,
      {
        id: examples.length + 1,
        ...newExample,
      },
    ]);
    setNewExample({
      category: 'product-info',
      question: '',
      answer: '',
    });
  };

  const handleDeleteExample = (id: number) => {
    setExamples(examples.filter((example) => example.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Training Data</h1>
        <p className="mt-1 text-sm text-gray-500">
          Improve your AI's responses by providing examples of ideal conversations.
        </p>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('examples')}
            className={`${
              activeTab === 'examples'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
          >
            Example Conversations
          </button>
          <button
            onClick={() => setActiveTab('files')}
            className={`${
              activeTab === 'files'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
          >
            Upload Files
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`${
              activeTab === 'history'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
          >
            Chat History Import
          </button>
        </nav>
      </div>

      {activeTab === 'examples' && (
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Add New Example</h2>
              <p className="mt-1 text-sm text-gray-500">
                Create example conversations to train your AI on how to respond.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={newExample.category}
                    onChange={(e) =>
                      setNewExample({ ...newExample, category: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                  >
                    <option value="product-info">Product Information</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Inquiries</option>
                    <option value="returns">Returns & Refunds</option>
                    <option value="general">General Questions</option>
                  </select>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                    Customer Question
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="question"
                      name="question"
                      rows={2}
                      value={newExample.question}
                      onChange={(e) =>
                        setNewExample({ ...newExample, question: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                      placeholder="Enter a sample customer question..."
                    ></textarea>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
                    Ideal Response
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="answer"
                      name="answer"
                      rows={4}
                      value={newExample.answer}
                      onChange={(e) => setNewExample({ ...newExample, answer: e.target.value })}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                      placeholder="Enter your ideal response to this question..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleAddExample}
                  className="inline-flex items-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Example
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Existing Examples</h2>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-0.5 text-sm font-medium text-emerald-800">
                  {examples.length} examples
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {examples.map((example) => (
                  <div key={example.id} className="rounded-lg border border-gray-200 p-4">
                    <div className="flex justify-between">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                        {example.category}
                      </span>
                      <button
                        onClick={() => handleDeleteExample(example.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-start space-x-3">
                      <div className="flex-shrink-0 pt-0.5">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">{example.question}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-start space-x-3">
                      <div className="flex-shrink-0 pt-0.5">
                        <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-emerald-500" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-gray-700">{example.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {examples.length === 0 && (
                  <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                    <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No examples</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Add your first example to start training your AI.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'files' && (
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Upload Training Files</h2>
            <p className="mt-1 text-sm text-gray-500">
              Upload documents containing information to train your AI assistant.
            </p>

            <div className="mt-6">
              <div className="flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-emerald-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 hover:text-emerald-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, DOCX, TXT up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700">Uploaded Files</h3>
              <div className="mt-2 divide-y divide-gray-200 rounded-md border border-gray-200">
                <div className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
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
                    <span className="ml-2 w-0 flex-1 truncate">
                      product_manual.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-emerald-600 hover:text-emerald-500"
                    >
                      Download
                    </a>
                    <button className="ml-4 font-medium text-red-600 hover:text-red-500">
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
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
                    <span className="ml-2 w-0 flex-1 truncate">
                      faq_document.docx
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-emerald-600 hover:text-emerald-500"
                    >
                      Download
                    </a>
                    <button className="ml-4 font-medium text-red-600 hover:text-red-500">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Process Files
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Import Chat History</h2>
            <p className="mt-1 text-sm text-gray-500">
              Import previous WhatsApp conversations to train your AI on real interactions.
            </p>

            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label htmlFor="historyDate" className="block text-sm font-medium text-gray-700">
                    Date Range
                  </label>
                  <div className="mt-1 flex space-x-3">
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    />
                    <span className="self-center text-gray-500">to</span>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Fetch History
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <fieldset>
                  <legend className="text-sm font-medium text-gray-700">Filter by Chat Type</legend>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center">
                      <input
                        id="all-chats"
                        name="chat-type"
                        type="radio"
                        defaultChecked
                        className="h-4 w-4 border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label htmlFor="all-chats" className="ml-3 text-sm text-gray-700">
                        All Chats
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="successful-resolutions"
                        name="chat-type"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label
                        htmlFor="successful-resolutions"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Successful Resolutions Only
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="human-handled"
                        name="chat-type"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label htmlFor="human-handled" className="ml-3 text-sm text-gray-700">
                        Human-Handled Conversations
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="mt-6 rounded-md bg-blue-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-blue-700">
                      Importing real conversations helps your AI learn from actual customer
                      interactions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Preview Selected
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Import Selected
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import { Bot } from 'lucide-react';

export default TrainingData;