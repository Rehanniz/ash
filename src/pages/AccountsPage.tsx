import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Star, Shield, Clock } from 'lucide-react';

const AccountsPage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const accounts = [
    {
      id: 1,
      game: 'League of Legends',
      rank: 'Gold II',
      level: 156,
      champions: 89,
      price: 125,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      verified: true,
      rating: 4.9
    },
    {
      id: 2,
      game: 'Counter-Strike 2',
      rank: 'Legendary Eagle',
      level: 78,
      skins: 45,
      price: 340,
      image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg',
      verified: true,
      rating: 4.8
    },
    {
      id: 3,
      game: 'Valorant',
      rank: 'Immortal 1',
      level: 234,
      agents: 18,
      price: 280,
      image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg',
      verified: true,
      rating: 4.9
    },
    {
      id: 4,
      game: 'World of Warcraft',
      level: 80,
      class: 'Paladin',
      gear: 'Mythic Raid',
      price: 450,
      image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg',
      verified: false,
      rating: 4.6
    }
  ];

  const games = [
    'All Games',
    'League of Legends',
    'Counter-Strike 2',
    'Valorant',
    'World of Warcraft',
    'Fortnite',
    'Apex Legends'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Gaming Accounts
            </h1>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <Filter className="w-4 h-4" />
              <span className="text-gray-700 dark:text-gray-300">Filters</span>
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Game
                </label>
                <select
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500"
                >
                  {games.map((game) => (
                    <option key={game} value={game.toLowerCase().replace(' ', '-')}>
                      {game}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500"
                >
                  <option value="all">All Prices</option>
                  <option value="0-50">$0 - $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200+">$200+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500">
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Accounts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accounts.map((account, index) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={account.image}
                    alt={account.game}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {account.verified && (
                      <div className="bg-green-600 text-white px-2 py-1 rounded-full flex items-center space-x-1">
                        <Shield className="w-3 h-3" />
                        <span className="text-xs">Verified</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg">
                    <span className="text-sm font-semibold">{account.game}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {account.rank || `Level ${account.level}`}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {account.rating}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {account.level && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Level:</span>
                        <span className="text-gray-900 dark:text-white">{account.level}</span>
                      </div>
                    )}
                    {account.champions && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Champions:</span>
                        <span className="text-gray-900 dark:text-white">{account.champions}</span>
                      </div>
                    )}
                    {account.skins && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Skins:</span>
                        <span className="text-gray-900 dark:text-white">{account.skins}</span>
                      </div>
                    )}
                    {account.agents && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Agents:</span>
                        <span className="text-gray-900 dark:text-white">{account.agents}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-red-600">
                      ${account.price}
                    </div>
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300">
                      View Details
                    </button>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Instant delivery</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-2 rounded-lg ${
                    page === 1
                      ? 'bg-red-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                Next
              </button>
            </nav>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccountsPage;