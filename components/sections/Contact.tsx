"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors">
                  <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 break-all">{personalInfo.email}</p>
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
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Connect with me</p>
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
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-900 dark:group-hover:bg-gray-600 transition-colors">
                  <Github className="h-8 w-8 text-gray-900 dark:text-gray-200 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">GitHub</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Check out my work</p>
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
              className="inline-flex items-center px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl text-lg"
            >
              <Send className="h-5 w-5 mr-2" />
              Send me an email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
