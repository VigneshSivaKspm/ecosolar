import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down 100px
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Mobile Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden fixed bottom-6 right-6 z-50"
      >
        <a
          href="tel:8985203688"
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#059669] to-[#047857] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-7 h-7" />
          
          {/* Pulsing Ring Effect */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75 animate-ping"></span>
        </a>
      </motion.div>

      {/* Desktop Floating Button - Bottom Right Corner */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : 100
        }}
        transition={{ duration: 0.3 }}
        className="hidden lg:block fixed bottom-8 right-8 z-50"
      >
        <div className="relative">
          <a
            href="tel:8985203688"
            className="flex items-center gap-3 bg-gradient-to-r from-[#059669] to-[#047857] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
          >
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <div className="text-left">
              <div className="text-xs text-green-100">Call Now</div>
              <div className="text-sm font-bold">8985203688</div>
            </div>
          </a>

          {/* Pulsing Ring Effect */}
          <span className="absolute inset-0 rounded-full bg-[#059669] opacity-75 animate-ping"></span>
        </div>
      </motion.div>

      {/* Alternative Contact - Desktop Only */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : 100
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="hidden lg:block fixed bottom-28 right-8 z-50"
      >
        <a
          href="tel:9346554750"
          className="flex items-center gap-3 bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <div className="text-left">
            <div className="text-xs text-blue-100">Alternative</div>
            <div className="text-sm font-bold">9346554750</div>
          </div>
        </a>
      </motion.div>
    </>
  );
}
