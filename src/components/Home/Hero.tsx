import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-red-900/60"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Ultimate
            <span className="block text-red-400">Gaming Marketplace</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Buy and sell gaming accounts safely with our secure platform. 
            Trusted by thousands of gamers worldwide.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <Link
              to="/accounts"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Browse Accounts
            </Link>
            <Link
              to="/how-it-works"
              className="px-8 py-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              How It Works
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">10K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">5K+</div>
              <div className="text-gray-300">Accounts Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
              <div className="text-gray-300">Games</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">99%</div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="relative bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose GameMarket?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We provide the safest and most reliable platform for gaming account transactions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Transactions",
                description: "Advanced encryption and escrow system protect every transaction"
              },
              {
                icon: Zap,
                title: "Instant Delivery",
                description: "Get your gaming accounts delivered instantly after purchase"
              },
              {
                icon: Users,
                title: "Verified Sellers",
                description: "All sellers are thoroughly verified for your peace of mind"
              },
              {
                icon: Star,
                title: "24/7 Support",
                description: "Round-the-clock customer support for all your needs"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <feature.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;