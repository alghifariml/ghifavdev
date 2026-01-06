import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Name & Copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">{personalInfo.name}</h3>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="flex space-x-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
