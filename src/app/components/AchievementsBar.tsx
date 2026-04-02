import { motion } from "motion/react";
import { Users, Award, Zap, MapPin } from "lucide-react";

const achievements = [
  {
    icon: Users,
    stat: "5000+",
    label: "Happy Customers",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Award,
    stat: "ISO 9001:2015",
    label: "Certified Excellence",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Zap,
    stat: "5+ Years",
    label: "Industry Experience",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    stat: "3 Branches",
    label: "Across Telangana",
    color: "from-purple-500 to-purple-600",
  },
];

export function AchievementsBar() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`bg-gradient-to-br ${achievement.color} p-4 rounded-xl shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {achievement.stat}
                </h3>
                <p className="text-gray-300 text-sm lg:text-base">
                  {achievement.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
