import { motion } from "motion/react";
import { Sun, Zap, Home, ArrowRight, TrendingUp } from "lucide-react";
import logo from "../../logo.png";

const steps = [
  {
    icon: Sun,
    title: "Sunlight Absorption",
    description:
      "Solar panels capture photons from sunlight using N-Type Bi-facial cells",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Zap,
    title: "DC Power Generation",
    description:
      "Photovoltaic cells convert sunlight into Direct Current (DC) electricity",
    color: "from-yellow-400 to-amber-500",
  },
  {
    icon: Zap,
    title: "Inverter Conversion",
    description:
      "Smart inverter converts DC power to Alternating Current (AC) for home use",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Home,
    title: "Home Consumption",
    description:
      "Clean AC power flows to your appliances, reducing grid dependency",
    color: "from-green-400 to-green-600",
  },
  {
    icon: TrendingUp,
    title: "Net Metering",
    description:
      "Excess power feeds back to the grid, earning you credits on your electricity bill",
    color: "from-emerald-400 to-teal-600",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
    >
      {/* Logo Watermark Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-around overflow-hidden">
        <img src={logo} alt="" className="w-64 h-64 object-contain" />
        <img src={logo} alt="" className="w-64 h-64 object-contain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How Solar Energy Powers Your Home
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the journey from sunlight to savings - a simple
              5-step energy transformation process.
            </p>
          </motion.div>
        </div>

        {/* Desktop View - Horizontal Stepper */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-blue-200 to-green-200"></div>

            <div className="relative grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* Step Number */}
                    <div className="flex flex-col items-center">
                      {/* Icon Circle */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`relative z-10 w-32 h-32 rounded-full bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center mb-4`}
                      >
                        <Icon className="w-12 h-12 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-sm font-bold text-gray-900">
                          {index + 1}
                        </div>
                      </motion.div>

                      {/* Arrow */}
                      {index < steps.length - 1 && (
                        <div className="absolute top-16 -right-8 z-20">
                          <ArrowRight className="w-8 h-8 text-gray-400" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - Vertical Stepper */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex gap-4"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div
                    className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold text-gray-900">
                      {index + 1}
                    </div>
                  </div>

                  {/* Vertical Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-10 top-20 w-0.5 h-full bg-gradient-to-b from-gray-300 to-gray-200"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expert team will guide you through every step - from site
              assessment to installation and activation. Get started today!
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="tel:8985203688"
                className="inline-flex items-center justify-center bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Call 8985203688
              </a>
              <a
                href="tel:9346554750"
                className="inline-flex items-center justify-center bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Call 9346554750
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
