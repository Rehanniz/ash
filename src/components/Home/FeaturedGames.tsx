import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedGames: React.FC = () => {
  const featuredGames = [
    {
      id: 1,
      name: "League of Legends",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      accountsAvailable: 150,
      startingPrice: 25
    },
    {
      id: 2,
      name: "Counter-Strike 2",
      image: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg",
      accountsAvailable: 89,
      startingPrice: 45
    },
    {
      id: 3,
      name: "Valorant",
      image: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg",
      accountsAvailable: 76,
      startingPrice: 35
    },
    {
      id: 4,
      name: "World of Warcraft",
      image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg",
      accountsAvailable: 45,
      startingPrice: 120
    },
    {
      id: 5,
      name: "Fortnite",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
      accountsAvailable: 203,
      startingPrice: 15
    },
    {
      id: 6,
      name: "Apex Legends",
      image: "https://images.pexels.com/photos/1047973/pexels-photo-1047973.jpeg",
      accountsAvailable: 67,
      startingPrice: 30
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Games
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover accounts for the most popular games
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link to={`/game/${game.id}`}>
                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{game.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 dark:text-gray-400">
                        {game.accountsAvailable} accounts available
                      </span>
                      <span className="text-red-600 font-semibold">
                        From ${game.startingPrice}
                      </span>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                      View Accounts
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/games"
            className="inline-block px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
          >
            View All Games
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedGames;