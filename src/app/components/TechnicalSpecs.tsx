import { motion } from "motion/react";
import { PanelTop, Cpu, ShieldCheck, Cable } from "lucide-react";

const technicalSpecs = [
  {
    icon: PanelTop,
    title: "Premium Solar Panels",
    subtitle: "N-Type Bi-facial Technology",
    items: [
      { brand: "Tata Solar", efficiency: "22.5% Efficiency" },
      { brand: "Luminous", efficiency: "21.8% Efficiency" },
      { brand: "Adani Solar", efficiency: "22.1% Efficiency" },
      { brand: "Waaree", efficiency: "21.9% Efficiency" },
      { brand: "Premier Solar", efficiency: "22.0% Efficiency" },
    ],
    color: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    icon: Cpu,
    title: "Advanced Inverters",
    subtitle: "On-Grid High Efficiency Systems",
    items: [
      { brand: "Smart MPPT Technology", efficiency: "98% Efficiency" },
      { brand: "Real-time Monitoring", efficiency: "WiFi/App Enabled" },
      { brand: "Grid Synchronization", efficiency: "Auto-Sync" },
      { brand: "Surge Protection", efficiency: "Built-in Safety" },
      { brand: "25 Year Warranty", efficiency: "Extended Coverage" },
    ],
    color: "bg-gradient-to-br from-green-50 to-green-100",
  },
  {
    icon: ShieldCheck,
    title: "Safety Equipment",
    subtitle: "Complete Protection Systems",
    items: [
      { brand: "ACDB/DCDB Boxes", efficiency: "Weather-Proof" },
      { brand: "Lightning Arrestors", efficiency: "Surge Protection" },
      { brand: "Earthing Rods", efficiency: "Premium Copper" },
      { brand: "MCB Protection", efficiency: "Auto Cut-off" },
      { brand: "Fire Safety", efficiency: "Heat Resistant" },
    ],
    color: "bg-gradient-to-br from-amber-50 to-amber-100",
  },
  {
    icon: Cable,
    title: "Specialized Cabling",
    subtitle: "UV Resistant & Weather-Proof",
    items: [
      { brand: "AC Solar Cables", efficiency: "Tinned Copper" },
      { brand: "DC Solar Cables", efficiency: "Double Insulated" },
      { brand: "Grounding Cables", efficiency: "Corrosion Free" },
      { brand: "MC4 Connectors", efficiency: "Waterproof IP67" },
      { brand: "Cable Management", efficiency: "Professional Grade" },
    ],
    color: "bg-gradient-to-br from-slate-50 to-slate-100",
  },
];

export function TechnicalSpecs() {
  return (
    <section
      id="technical"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Logo Watermark Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-around overflow-hidden">
        <img src="/logo.png" alt="" className="w-64 h-64 object-contain" />
        <img src="/logo.png" alt="" className="w-64 h-64 object-contain" />
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
              Premium Components & Advanced Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use industry-leading, BIS Certified, and MNRE Approved
              components from trusted manufacturers to ensure maximum
              performance, reliability, and longevity for your investment.
            </p>
          </motion.div>
        </div>

        {/* Technical Specs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {technicalSpecs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`h-full ${spec.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200`}
                >
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#1E40AF]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {spec.title}
                    </h3>
                    <p className="text-sm text-gray-600">{spec.subtitle}</p>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-3">
                    {spec.items.map((item) => (
                      <li
                        key={item.brand}
                        className="flex items-start justify-between gap-2 text-sm"
                      >
                        <span className="text-gray-700 font-medium flex items-center gap-2">
                          <span className="inline-block w-1.5 h-1.5 bg-[#059669] rounded-full flex-shrink-0"></span>
                          {item.brand}
                        </span>
                        <span className="text-gray-500 text-xs whitespace-nowrap">
                          {item.efficiency}
                        </span>
                      </li>
                    ))}
                  </ul>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#1E40AF] to-[#059669] text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-3">
              All Components Come With Comprehensive Warranties
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              25-year performance warranty on panels, 10-year product warranty
              on inverters, and lifetime support from our expert team.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                <span>BIS Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                <span>MNRE Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                <span>IEC Standards</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
