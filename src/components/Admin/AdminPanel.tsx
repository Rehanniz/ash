import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShoppingBag, 
  MessageCircle, 
  Settings, 
  BarChart3, 
  Shield,
  Globe,
  DollarSign,
  TrendingUp
} from 'lucide-react';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Users', value: '12,543', change: '+12%', icon: Users },
    { label: 'Active Listings', value: '1,247', change: '+8%', icon: ShoppingBag },
    { label: 'Monthly Revenue', value: '$45,210', change: '+23%', icon: DollarSign },
    { label: 'Support Tickets', value: '89', change: '-15%', icon: MessageCircle },
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'products', name: 'Products', icon: ShoppingBag },
    { id: 'support', name: 'Support', icon: MessageCircle },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Admin Panel
          </h1>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Admin Navigation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex space-x-8 px-6" aria-label="Tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    System Overview
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Recent Activity
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          New user registration: john@example.com
                        </li>
                        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          Account listed: League of Legends Gold II
                        </li>
                        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                          Support ticket opened: Account recovery
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        System Status
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Server Status
                          </span>
                          <span className="flex items-center text-green-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Online
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Payment Gateway
                          </span>
                          <span className="flex items-center text-green-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Active
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Live Chat
                          </span>
                          <span className="flex items-center text-green-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'users' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      User Management
                    </h2>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                      Export Users
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th className="px-6 py-3">User</th>
                          <th className="px-6 py-3">Email</th>
                          <th className="px-6 py-3">Status</th>
                          <th className="px-6 py-3">Joined</th>
                          <th className="px-6 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                            John Doe
                          </td>
                          <td className="px-6 py-4">john@example.com</td>
                          <td className="px-6 py-4">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4">2024-01-15</td>
                          <td className="px-6 py-4">
                            <button className="text-red-600 hover:underline">
                              Manage
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Site Settings
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                        <Globe className="w-5 h-5 mr-2" />
                        Site Mode
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="siteMode"
                            value="direct"
                            className="form-radio text-red-600"
                            defaultChecked
                          />
                          <span className="ml-2 text-gray-700 dark:text-gray-300">
                            Direct Selling Mode
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="siteMode"
                            value="marketplace"
                            className="form-radio text-red-600"
                          />
                          <span className="ml-2 text-gray-700 dark:text-gray-300">
                            Marketplace Mode
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Security Settings
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-center justify-between">
                          <span className="text-gray-700 dark:text-gray-300">
                            Require 2FA for sellers
                          </span>
                          <input
                            type="checkbox"
                            className="form-checkbox text-red-600"
                            defaultChecked
                          />
                        </label>
                        <label className="flex items-center justify-between">
                          <span className="text-gray-700 dark:text-gray-300">
                            Enable escrow system
                          </span>
                          <input
                            type="checkbox"
                            className="form-checkbox text-red-600"
                            defaultChecked
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;