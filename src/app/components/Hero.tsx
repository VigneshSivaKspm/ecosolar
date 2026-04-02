import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay for better text readability - stronger on left/center */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Decorative Accent Overlays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#059669] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Join the Green Revolution & Harness the Unlimited Power of the
                Sun
              </h1>
              <p className="text-lg sm:text-xl text-white/90">
                Leading provider of solar solutions for Residential, Industrial,
                and Commercial sectors.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:8985203688"
                className="inline-flex items-center justify-center bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl transition-all duration-300"
              >
                Explore Solutions
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#059669]" />
                <span className="text-sm text-white/90">
                  25+ Year Panel Warranty
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#059669]" />
                <span className="text-sm text-white/90">
                  ISO 9001:2015 Certified
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#059669]" />
                <span className="text-sm text-white/90">
                  Expert Installation
                </span>
              </div>
            </div>
          </motion.div>

          {/* Subsidy Card - Right Column on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-lg lg:max-w-none lg:sticky lg:top-24"
          >
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-black/50 transition-all duration-300">
              <div className="grid grid-cols-3 gap-4 items-center">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-full shadow-lg">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <div className="col-span-2">
                  <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
                    Central Govt Subsidy
                  </p>
                  <p className="text-3xl font-bold text-[#F59E0B] mb-1">
                    ₹78,000/-
                  </p>
                  <p className="text-xs text-white/70">
                    Eligible for residential
                  </p>
                </div>
              </div>

              {/* Button & Info */}
              <a
                href="tel:8985203688"
                className="block w-full mt-6 bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#047857] hover:to-[#065F46] text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold text-sm text-center"
              >
                Check Eligibility Now
              </a>

              <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5 text-xs text-white/70">
                <p className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-[#F59E0B] rounded-full"></span>
                  Surya Ghar Yojana Partner
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-[#F59E0B] rounded-full"></span>
                  PM Kusum Scheme Certified
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Managing Partner Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-blue-200">
            <span className="font-semibold">Eco Solar Enterprises</span> |
            Managing Partner: P. Ratnakar
          </p>
        </motion.div>
      </div>
    </section>
  );
}
