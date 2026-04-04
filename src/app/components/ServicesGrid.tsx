import { motion } from "motion/react";
import { Grid3X3, BatteryCharging, Shield, Droplets } from "lucide-react";
import logo from "../../logo.png";

const services = [
  {
    icon: Grid3X3,
    title: "On-Grid Solar Systems",
    description:
      "Connect to the grid and enjoy net metering benefits. Save up to 90% on electricity bills.",
    features: [
      "🏠 Residential (Home & Domestic)",
      "🏭 Industrial & Commercial Projects",
      "Surya Ghar Yojana Compatible",
      "PM Kusum Scheme Eligible",
      "Net Metering Integration",
      "Up to ₹78,000 Govt Subsidy",
    ],
    color: "from-[#1E40AF] to-[#1E3A8A]",
  },
  {
    icon: BatteryCharging,
    title: "Off-Grid Solar Systems",
    description:
      "Complete energy independence with battery backup. Perfect for remote locations and backup power.",
    features: [
      "Household Battery Setups",
      "Business Energy Solutions",
      "24/7 Power Supply",
      "Advanced Battery Storage",
      "No Grid Dependency",
      "Emergency Power Backup",
    ],
    color: "from-[#059669] to-[#047857]",
  },
  {
    icon: Shield,
    title: "Solar Fencing Solutions",
    description:
      "Advanced security for agricultural and commercial properties with eco-friendly electric fencing.",
    features: [
      "🚜 Agricultural Land Protection",
      "🏢 Commercial Office Security",
      "🏠 Residential Perimeter Fencing",
      "Wildlife & Livestock Protection",
      "Low Maintenance System",
      "Cost-Effective 24/7 Security",
    ],
    color: "from-[#F59E0B] to-[#D97706]",
  },
  {
    icon: Droplets,
    title: "Solar Pumpsets",
    description:
      "Efficient irrigation solutions for farms. Reduce operational costs and increase agricultural productivity.",
    features: [
      "🌾 Agricultural Irrigation",
      "💰 90% Cost Reduction",
      "🏠 Household Water Supply",
      "🚜 Farm Water Management",
      "Government Subsidy Available",
      "Long-Term Savings Guarantee",
    ],
    color: "from-[#0891B2] to-[#0E7490]",
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
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
              Comprehensive Solar Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored solar energy systems for every need - from residential
              rooftops to large-scale commercial installations.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Icon Header */}
                  <div
                    className={`bg-gradient-to-br ${service.color} p-6 text-white`}
                  >
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-[#059669] rounded-full mt-1.5 flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href="tel:8985203688"
                      className="w-full mt-4 inline-block bg-gray-50 hover:bg-gray-100 text-gray-900 py-3 rounded-lg transition-all duration-300 border border-gray-200 group-hover:border-[#059669] group-hover:text-[#059669] text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6 text-lg font-medium">
            Not sure which service is right for you? Our experts will guide you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:8985203688"
              className="inline-flex items-center justify-center bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
            >
              Schedule Free Site Survey
            </a>
            <a
              href="tel:9346554750"
              className="inline-flex items-center justify-center bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
            >
              Get Expert Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
