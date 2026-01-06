"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Project } from "@/data/portfolio";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 bg-gray-900/80 dark:bg-gray-700/80 hover:bg-gray-900 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            {/* Hero Image */}
            {project.image && (
              <div className="relative h-72 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              {/* Category Badge */}
              {project.category && (
                <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  {project.category}
                </div>
              )}

              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {project.name}
              </h2>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              {project.techStack && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technical Stack
                  </h3>
                  <ul className="space-y-2">
                    {project.techStack.map((tech, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {project.achievements && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features */}
              {project.features && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Projects list (for Custom WordPress Themes) */}
              {project.projects && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Projects
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.projects.map((site, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1.5 rounded-lg"
                      >
                        {site}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Tags */}
              {project.tech && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-1.5 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
