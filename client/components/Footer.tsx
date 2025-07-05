import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/logo.jpg"
                  alt="CGU Space Club Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-bold text-xl">
                CGU Space Club
              </span>
            </div>

            <p className="text-white/70 mb-4 max-w-md">
              Exploring the cosmos, pushing boundaries, and inspiring the next
              generation of space explorers at C.V. Raman Global University.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61572395409583"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-white/60 hover:text-brand-orange cursor-pointer transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/cgu.spaceclub?igsh=bjhpYjhna3Joc2Yx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-white/60 hover:text-brand-red cursor-pointer transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/cguspace-club/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-white/60 hover:text-brand-orange cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-white/70">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">spacesystems@cgu-odisha.ac.in</span>
              </li>
              <li className="flex items-center text-white/70">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 8908828802, 9798376027</span>
              </li>
              <li>
                <Link
                  to="/sponsorship"
                  className="text-brand-orange hover:text-brand-light-orange transition-colors font-medium"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CGU Space Club. All rights reserved.
              Reaching for the stars.
            </div>

            {/* <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Code of Conduct
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
