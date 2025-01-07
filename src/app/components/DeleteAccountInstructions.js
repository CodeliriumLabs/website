'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const DeleteAccountInstructions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-pink-500">How to Delete Your Account</h1>
          
          <motion.div 
            className="mb-8 p-4 border border-red-500/50 rounded-lg bg-red-900/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <h2 className="text-lg font-semibold text-red-400">Warning</h2>
            </div>
            <p className="text-gray-300">
              Account deletion is permanent and cannot be undone. All your data will be permanently removed from our systems.
            </p>
          </motion.div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Account Deletion Steps</h2>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <p className="text-lg">Log in to your Crew Hive account using your preferred authentication method</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <p className="text-lg">Locate and click the drawer menu in the top right corner of the screen</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <p className="text-lg">Navigate to your Profile section</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <p className="text-lg">Scroll to the bottom of the profile page where you&apos;ll find the &quot;Delete Account&quot; button</p>
                  </div>
                </motion.div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">What Will Be Deleted</h2>
              <p className="mb-4">The following data will be permanently removed:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Login information and credentials</li>
                <li>Personal information (name, sex, position)</li>
                <li>Profile description and about section</li>
                <li>Profile pictures</li>
                <li>All thread posts and comments</li>
                <li>Company reviews</li>
                <li>Added WiFi spots</li>
                <li>Any other associated account data</li>
              </ul>
            </section>

            <section className="bg-gray-800/50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">Need Help?</h2>
              <p className="mb-4">
                If you&apos;re experiencing any issues with account deletion or have questions before proceeding, please contact our support team at{' '}
                <a href="mailto:support@crewhive.com" className="text-pink-500 hover:text-pink-400">
                  support@crewhive.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeleteAccountInstructions;