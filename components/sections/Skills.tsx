"use client";

import { motion } from "framer-motion";
import { skills, education, languages } from "@/data/portfolio";
import { Code, Database, Layout, TrendingUp, GraduationCap, Languages } from "lucide-react";

const categoryIcons: { [key: string]: any } = {
  "WordPress": Layout,
  "Languages": Code,
  "Frameworks & Tools": Code,
  "Databases": Database,
  "Image Processing": Layout,
  "SEO & Analytics": TrendingUp,
  "Other CMS/Builders": Layout,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.entries(skills).map(([category, items], index) => {
            const Icon = categoryIcons[category] || Code;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education & Certifications</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-600 dark:border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md"
          >
            <div className="flex items-center mb-6">
              <Languages className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900 dark:text-white">{lang.language}</span>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
