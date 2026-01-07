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

    // Prevent vertical scroll on touch devices (especially Safari)
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = Math.abs(currentY - startY);

      // If vertical movement is detected, prevent it
      if (deltaY > 5) {
        e.preventDefault();
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4">
            Key Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Highlighting my most impactful work
          </p>
        </motion.div>

        {/* Horizontal Scrollable Container */}
        <div className="relative -mr-4 sm:-mr-6 lg:-mr-12">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 lg:gap-12 overflow-x-auto pb-4 pl-4 snap-x snap-mandatory scrollbar-hide"
            style={{ touchAction: 'pan-x' }}
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
                  className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group relative shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] h-[480px] sm:h-[540px] lg:h-[580px] snap-start shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Image Section */}
                  {project.image && (
                    <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 overflow-hidden">
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
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 pr-8">
                      {project.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <button className="absolute bottom-4 sm:bottom-5 lg:bottom-6 right-4 sm:right-5 lg:right-6 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
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
