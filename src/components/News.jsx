import React from 'react';
import { motion } from 'framer-motion';

export function News() {
  const news = [
    {
      date: 'Apr 23-25, 2015',
      title: 'International Tech Expo - Mumbai',
      description:
        'Visit us at the International Technology Exhibition at Stall no A 45 in Bombay Exhibition Center, Mumbai, India',
      image:
        'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      date: 'Apr 08, 2015',
      title: 'Shifted to New Premises',
      description:
        'To cater to customer demands on a large scale, our factory has shifted to a new location for more effective operations.',
      image:
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2 }}
      className="py-16 bg-white min-h-screen mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Company News</h2>
          <p className="text-gray-600 text-lg">
            Stay updated with our latest developments and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default News;
