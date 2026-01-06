"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ProjectModal from "../ui/ProjectModal";
import { Project } from "@/data/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5); // Add small threshold
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Initial check
    checkScrollPosition();

    // Listen to scroll events
    container.addEventListener("scroll", checkScrollPosition);

    // Listen to window resize
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // Check position after scroll animation
      setTimeout(() => {
        checkScrollPosition();
      }, 300);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Key Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Highlighting my most impactful work
          </p>
        </motion.div>

        {/* Horizontal Scrollable Container */}
        <div className="relative -mr-4 sm:-mr-6 lg:-mr-12">
          <div
            ref={scrollContainerRef}
            className="flex gap-12 overflow-x-auto pb-4 pl-4 snap-x snap-mandatory scrollbar-hide"
          >
            {projects.map((project, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer group relative flex-shrink-0 w-[340px] sm:w-[380px] h-[580px] snap-start"
                >
                  {/* Image Section */}
                  {project.image && (
                    <div className="relative h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.name}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <button className="absolute bottom-6 right-6 w-9 h-9 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons - Below carousel on the right */}
          <div className="flex justify-end gap-2 mt-4 pr-4 sm:pr-6 lg:pr-8">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 transition-all ${
                canScrollLeft
                  ? "opacity-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 transition-all ${
                canScrollRight
                  ? "opacity-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
