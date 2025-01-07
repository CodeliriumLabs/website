'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siGithub, siLinkedin, siX, siInstagram, siFacebook } from 'simple-icons';
import { SmartToyIcon }from '@mui/icons-material/SmartToy';
import { IosShare } from '@mui/icons-material';
import Image from 'next/image';

const SvgIcon = ({ path, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path} />
  </svg>
);

const ServiceCard = ({ icon, title, description, percentage }) => {
  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        initial={{ 
          boxShadow: "inset 0 0 0 0 rgba(236, 72, 153, 0)", 
          opacity: 0 
        }}
        whileHover={{ 
          boxShadow: "inset 0 0 0 3px rgba(236, 72, 153, 1)", 
          opacity: 1 
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="flex justify-between items-center mb-4">
        <span className="text-4xl" style={{ fontFamily: "'Noto Color Emoji', sans-serif" }}>{icon}</span>
        <span className="text-2xl font-bold text-pink-500">{percentage}%</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <motion.a 
        href="#" 
        className="inline-block mt-4 text-pink-500 hover:text-pink-400"
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        READ MORE →
      </motion.a>
    </motion.div>
  );
};

const ContactForm = () => {
  return (
    <motion.form 
      className="bg-gray-800 p-6 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-pink-500">Contact Us</h3>
      {['Name', 'Email', 'Subject'].map((field, index) => (
        <motion.div 
          key={field} 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <input type={field === 'Email' ? 'email' : 'text'} placeholder={field} className="w-full bg-gray-700 rounded p-2 text-white" />
        </motion.div>
      ))}
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <textarea placeholder="Comment" rows="4" className="w-full bg-gray-700 rounded p-2 text-white"></textarea>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
      >
        Send Message →
      </motion.button>
    </motion.form>
  );
};


const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { icon: '🤖', title: 'AI-Powered Solutions', description: 'We harness the power of Artificial Intelligence to create intelligent apps that automate tasks, provide personalized experiences, and deliver data-driven insights.', percentage: 69 },
    { icon: '📱', title: 'iOS and Android App Development', description: 'We craft sleek, high-performance iOS and Android apps tailored to your business needs, ensuring a seamless user experience on every device.', percentage: 45 },
   // { icon: '🤖', title: 'Android App Development', description: 'Our Android apps are designed to deliver top-notch performance and a user-friendly interface, ensuring your brand stands out in the crowded mobile market.', percentage: 33 },
    { icon: '🖥️', title: 'Custom Website Solutions', description: 'From responsive designs to robust backends, we build websites that are not only visually appealing but also scalable and secure.', percentage: 59 },
    { icon: '🎨', title: 'Full Design Services', description: 'We take your ideas and transform them into fully realized apps and websites, handling every aspect of design and development along the way.', percentage: 77 },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative">
      {/* Animated stars background - now outside of any section */}
      <div className="fixed inset-0 z-0">
        {[...Array(300)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content wrapper - all sections go here */}
      <div className="relative z-10">
        {/* Hero section */}
        <section id="home" className="min-h-screen relative">
          <div className="container mx-auto px-6 py-24 flex items-center min-h-screen">
            
            <div className="w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-7xl font-bold mb-2">CODELIRIUM</h1>
                <h1 className="text-7xl font-bold mb-2">LABS</h1>
                <h2 className="text-3xl text-pink-500 mb-4">Software Development</h2>
                <p className="mb-8 max-w-md">
                  Where innovation meets code. We create cutting-edge software solutions
                  tailored to your unique needs.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
                >
                  Hire Us
                </motion.button>
              </motion.div>
            </div>
            <motion.div 
              className="w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8,  }}
            >
              <Image 
  src='/logotransparent.png' 
  alt="Codelirium Labs Logo" 
  width={500} 
  height={500} 
  className="max-w-full h-auto" 
  priority
/>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="absolute top-0 right-0 p-6 z-20">
            <ul className="flex space-x-6">
            {['HOME', 'SERVICES', 'CONTACT', 'PRIVACY'].map((item) => (
            <li key={item}>
    <a 
      onClick={(e) => {
        e.preventDefault();
        if (item === 'PRIVACY') {
          window.location.href = '/privacy-policy';
        } else {
          scrollToSection(item.toLowerCase());
        }
      }}
      className="hover:text-pink-500 transition-colors cursor-pointer"
    >
      {item}
    </a>
  </li>
))}
            </ul>
          </nav>

          {/* Social media icons */}
          <div className="absolute bottom-6 left-6 flex space-x-4 z-20">
            {[siGithub, siLinkedin, siX, siInstagram, siFacebook].map((icon, index) => (
              <a key={index} href="#" className="text-white hover:text-pink-500 transition-colors">
                <SvgIcon path={icon.path} />
              </a>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen py-20 relative">
          {/* Colored overlay for services section */}
          <div className="absolute inset-0 bg-purple-900 opacity-10 z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              We design and develop services for customers of all sizes, specializing in creating
              stylish, modern websites, web services and online stores.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative">
          {/* Colored overlay for contact section */}
          <div className="absolute inset-0 bg-slate-500 opacity-10 z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              Get in touch
            </motion.h2>
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75 }}
              >
                <p className="mb-8">
                  Feel free to get in touch with us. We always open to discussing new
                  projects, creative ideas or opportunities to be part of your visions.
                </p>
                <span className="text-3xl" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  {[
                    { icon: "📍", text: "1209 Mountain Road PL NE STE N, Albuquerque, United States Of America NM 87110" },
                    { icon: siLinkedin.path, text: "info@codeliriumlabs.com" },
                   // { icon: siX.path, text: "+044 966 9696 636" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <SvgIcon path={item.icon} size={24} className="text-pink-500 mr-4" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </span>
              </motion.div>
              <div className="md:w-1/2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;