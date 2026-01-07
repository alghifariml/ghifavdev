"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 sm:pt-20 px-4"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6 sm:mb-8">
              {personalInfo.title}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed px-2"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-8 sm:mb-12"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 dark:bg-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Get in Touch
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 dark:bg-gray-700 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <a
              href="#experience"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
            >
              <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
