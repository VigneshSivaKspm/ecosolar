import { motion } from "motion/react";
import { FileText, Gauge, Construction, CheckCircle } from "lucide-react";
import logo from "../../logo.png";

const roadmapSteps = [
  {
    icon: FileText,
    title: "Application Processing",
    description: "We handle all the paperwork and government approvals",
    details: [
      "Submit online application for Surya Ghar/PM Kusum Scheme",
      "Electricity board approval and sanction letter",
      "Technical feasibility assessment",
      "Document verification and processing",
    ],
    timeline: "7-14 Days",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Gauge,
    title: "Net Metering Payments",
    description: "Registration and meter installation coordination",
    details: [
      "Net meter application submission",
      "Bidirectional meter installation coordination",
      "Grid connection approval",
      "Metering charges and security deposit",
    ],
    timeline: "5-10 Days",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Construction,
    title: "Civil Works",
    description: "Site preparation and infrastructure setup",
    details: [
      "Earthing pit excavation (4ft x 4ft x 4ft)",
      "GI earthing rods and copper bonding installation",
      "Cement pillars for mounting structures",
      "Cable routing and conduit installation",
    ],
    timeline: "3-5 Days",
    color: "from-amber-500 to-amber-600",
  },
];

export function CustomerRoadmap() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
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
              What We Need From You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple 3-phase process to get your solar system up and running.
              We'll guide you every step of the way.
            </p>
          </motion.div>
        </div>

        {/* Roadmap Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {roadmapSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connector Line (Desktop) */}
                {index < roadmapSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-gray-300 to-gray-200 -translate-x-1/2 z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 h-full">
                  {/* Header */}
                  <div
                    className={`bg-gradient-to-br ${step.color} p-6 text-white relative`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-2xl font-bold">
                          Phase {index + 1}
                        </div>
                      </div>
                      <div className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {step.timeline}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-gray-600">{step.description}</p>

                    {/* Details List */}
                    <div className="space-y-3 pt-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#059669] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#059669] to-[#047857] rounded-full">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Total Timeline: 15-30 Days
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  From application submission to system activation, the entire
                  process typically takes 15-30 days. Our dedicated team will
                  coordinate with all stakeholders and keep you informed at
                  every stage.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#1E40AF]">100%</div>
                  <div className="text-sm text-gray-600">
                    Documentation Support
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#059669]">Zero</div>
                  <div className="text-sm text-gray-600">Hidden Charges</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#F59E0B]">24/7</div>
                  <div className="text-sm text-gray-600">Customer Support</div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="tel:8985203688"
                  className="inline-flex items-center justify-center bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Start Your Journey Today
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
