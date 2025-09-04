import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  Globe,
  Zap,
  Shield,
  Heart,
  TrendingUp,
  Calendar,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import News from "../components/News";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { label: "Years of Excellence", value: "15+", icon: Calendar },
    { label: "Happy Customers", value: "10K+", icon: Users },
    { label: "Products Sold", value: "50K+", icon: TrendingUp },
    { label: "Countries Served", value: "25+", icon: Globe },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We constantly push boundaries to bring the latest technology and cutting-edge solutions.",
    },
    {
      icon: Shield,
      title: "Quality",
      description:
        "Every product undergoes rigorous testing to ensure it meets high standards of excellence.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description:
        "Fast shipping, quick support, and streamlined processes for the best experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-28">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              JB - Automation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              Leading provider of innovative complete solutions for modern
              technology, industrial automation, and premium consumer products.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  JB automation is one of the world&apos;s leading providers of
                  innovative complete solutions for packaging machines,
                  industrial automations and robotics. Our dedicated in-house
                  Research & Development Unit and after-sales service team are
                  the backbone of our success.
                </p>
                <p>
                  With strong technical background and technological know-how,
                  we develop, manufacture and sell both individual machines as
                  well as complete packaging lines for food, dairy,
                  pharmaceuticals, and cosmetics. Our highly qualified engineers
                  in Robotics & Automation give customers a competitive edge in
                  meeting market demands.
                </p>
                <p>
                  For the industrial automation sector, we provide pick and
                  place robots and gantry robots for assembly lines in the
                  automobile sector and manufacturing companies, and deliver
                  turnkey industrial automation projects per requirements.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="relative"
            >
              <img
                src="/ceo.png"
                alt="Modern office workspace"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and drive our
              commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the visionaries behind our success and innovation
            </p>
          </motion.div>

          <TeamGrid />
        </div>
      </section>

      {/* Company News (extracted) */}
      <News />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

/* Sub-components (same file for convenience, or split further if preferred) */
function TeamGrid() {
  const team = [
    {
      name: "J Michael Ruban",
      role: "Founder & CEO",
      image:
        "/ceo.png",
      description:
        "Engineering graduate with first-class honors. Expert in business strategy, innovation, and growth development.",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Operations",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Operations specialist with 12+ years experience in supply chain management and customer service excellence.",
    },
    {
      name: "David Chen",
      role: "Technology Director",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Tech visionary leading our digital transformation and e-commerce platform development.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 + index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-blue-600 font-medium mb-4">{member.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MissionVision() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To provide innovative, high-quality technology solutions that
              empower businesses and individuals to achieve their goals while
              maintaining the highest standards of customer service and
              technical excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.8 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl"
          >
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be the global leader in technology solutions, recognized for
              innovation, reliability, and a better future through cutting-edge
              products and exceptional experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3 }}
      className="py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust us for their
          technology needs
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Mail size={20} className="mr-2" />
              Contact Us
            </motion.button>
          </Link>

          <a href="tel:+919561295310">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </motion.button>
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>Mumbai, India</span>
          </div>
          <a href="mailto:info@jbautomation.com" className="flex items-center">
            <Mail size={16} className="mr-2" />
            <span>info@jbautomation.com</span>
          </a>
          <a href="tel:+919561295310" className="flex items-center">
            <Phone size={16} className="mr-2" />
            <span>+91 95612 95310</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
