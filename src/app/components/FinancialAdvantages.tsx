import { motion } from "motion/react";
import {
  Percent,
  Calculator,
  Leaf,
  TrendingUp,
  Banknote,
  Shield,
} from "lucide-react";

const advantages = [
  {
    icon: Percent,
    title: "Government Subsidy",
    description:
      "Get up to ₹78,000/- subsidy under Surya Ghar Yojana and PM Kusum Scheme for eligible customers",
    stats: "₹78,000",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Banknote,
    title: "Flexible Financing",
    description:
      "Easy EMI options and bank loans with minimal documentation and quick approval without down payment",
    stats: "Easy Terms",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Calculator,
    title: "Quick ROI",
    description:
      "Fast return on investment. Your system pays for itself through significant savings and efficiency",
    stats: "Proven",
    color: "from-green-500 to-green-700",
  },
  {
    icon: TrendingUp,
    title: "Income Generation",
    description:
      "Earn money by selling excess power back to the grid through net metering benefits and credits",
    stats: "Passive Income",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description:
      "Reduce your carbon footprint and contribute to a cleaner, sustainable future for generations",
    stats: "Go Green",
    color: "from-green-600 to-lime-600",
  },
  {
    icon: Shield,
    title: "Energy Independence",
    description:
      "Protection from rising electricity costs with long-term energy security and full independence",
    stats: "Protected",
    color: "from-indigo-500 to-purple-600",
  },
];

export function FinancialAdvantages() {
  return (
    <section
      id="benefits"
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
              Financial & Environmental Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solar energy isn't just good for the planet - it's great for your
              wallet. Discover the compelling advantages.
            </p>
          </motion.div>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Icon Header */}
                  <div
                    className={`bg-gradient-to-br ${advantage.color} p-6 text-white relative overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                    </div>

                    <div className="relative">
                      <Icon className="w-10 h-10 mb-3" />
                      <div className="text-3xl font-bold mb-1">
                        {advantage.stats}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ROI Calculator CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-[#1E40AF] via-[#059669] to-[#0891B2] text-white rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-y-32 -translate-x-32"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-y-32 translate-x-32"></div>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Calculate Your Savings</h3>
                <p className="text-blue-100 text-lg">
                  See exactly how much you can save with our free ROI
                  calculator. Get a personalized estimate based on your
                  electricity consumption.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="tel:8985203688"
                    className="inline-flex items-center justify-center bg-white text-[#1E40AF] hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
                  >
                    Calculate ROI Now
                  </a>
                  <a
                    href="mailto:ecosolarenterprises@gmail.com"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Email Us
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white mb-3">
                    Why Choose Solar?
                  </h4>
                  <div className="flex items-start gap-3 pb-3 border-b border-white/20">
                    <span className="text-[#F59E0B] text-lg">✓</span>
                    <span className="text-blue-100">
                      Significant long-term savings on your electricity bills
                    </span>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b border-white/20">
                    <span className="text-[#F59E0B] text-lg">✓</span>
                    <span className="text-blue-100">
                      Flexible payment options and financing solutions
                    </span>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b border-white/20">
                    <span className="text-[#F59E0B] text-lg">✓</span>
                    <span className="text-blue-100">
                      Government subsidies and incentives for eligible customers
                    </span>
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <span className="text-[#F59E0B] text-lg">✓</span>
                    <span className="text-blue-100">
                      25+ year warranty and lifetime support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
