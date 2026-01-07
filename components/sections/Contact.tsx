"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {/* Email */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors">
                  <Mail className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Email</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-all">{personalInfo.email}</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">LinkedIn</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Connect with me</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group sm:col-span-2 lg:col-span-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gray-900 dark:group-hover:bg-gray-600 transition-colors">
                  <Github className="h-7 w-7 sm:h-8 sm:w-8 text-gray-900 dark:text-gray-200 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">GitHub</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Check out my work</p>
              </div>
            </motion.a>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl text-base sm:text-lg"
            >
              <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Send me an email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
