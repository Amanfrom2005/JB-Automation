import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Product Understanding",
      description: "We will understand your business need & will provide you best solutions that will keep you ahead. Our solutions will enhance your productivity to next level.",
      image: "/service/img1.png",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Unmatched Support",
      description: "Our customer support team are available at multiple locations to help at the time of any urgent support requirement.",
      image: "/service/img2.png",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 3,
      title: "Market Study",
      description: "Automation is need of hours. Many of business fail behind since they not use automation for cost effectiveness & improvement in quality. We will provide you solutions to suite your needs.",
      image: "/service/img3.png",
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 4,
      title: "Customer Satisfaction",
      description: "Customer Satisfaction is our main goal. We will support our customers by all means & all possible ways. You can reach us by Mail, Phone or by sending letter to US for any need.",
      image: "/service/img4.png",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"
          />
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Services are essential part of business relation. We at <span className="font-semibold text-blue-600">JB Automation</span> offer variety of services to suite you need.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                className="group cursor-pointer"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex lg:items-center h-full`}
                >
                  {/* Image Section */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <div className="aspect-w-16 aspect-h-12 lg:aspect-none lg:h-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    </div>
                    
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Professional Implementation</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>24/7 Support Available</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our automation solutions can help streamline your operations and boost productivity.
              </p>
              <Link to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r hover:gap-1 from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-1000 ease-in-out"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;