"use client";

import { motion } from "framer-motion";
import { workExperience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full" />

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4 flex-wrap">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.role}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{job.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
