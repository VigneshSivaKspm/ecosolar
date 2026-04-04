import { motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logo from "/logo.png?url";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Technical", href: "#technical" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-lg overflow-hidden transform group-hover:scale-110 transition-transform duration-300 shadow-md">
              <img
                src={logo}
                alt="Eco Solar Enterprises Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-gray-900">Eco Solar</h1>
              <p className="text-xs text-gray-500">Enterprises</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-[#1E40AF] font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:8985203688"
              className="hidden sm:flex items-center gap-2 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <nav className="flex flex-col gap-3 pb-4 pt-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-[#1E40AF] font-medium px-2 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:8985203688"
              className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-center"
            >
              Call: 8985203688
            </a>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
