import { motion } from "motion/react";
import { MapPin, Phone, Mail, Award } from "lucide-react";
import logo from "/logo.png?url";

const branches = [
  {
    city: "Suryapet",
    address: "H.No. 1-6-141/29/6/E1/3, Sriram Nagar, Suryapet - 508213",
    landmark: "Main Branch Office",
    postal: "508213",
  },
  {
    city: "Nalgonda",
    address:
      "H.No. 7-9-31, Sriram Nagar Colony, Phase 2, Rd.No.8, Nalgonda - 508001",
    landmark: "Regional Office",
    postal: "508001",
  },
  {
    city: "Choutuppal",
    address:
      "H.No. 3-35, Krishna Nagar Colony, Road No.3, Back side of LIC Office, Choutuppal - 508215",
    landmark: "Service Center",
    postal: "508215",
  },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Primary Contact",
    value: "+91 8985203688",
    href: "tel:+918985203688",
  },
  {
    icon: Phone,
    label: "Secondary Contact",
    value: "+91 9346554750",
    href: "tel:+919346554750",
  },
  {
    icon: Phone,
    label: "Support Line",
    value: "+91 7569993688",
    href: "tel:+917569993688",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "ecosolarenterprises@gmail.com",
    href: "mailto:ecosolarenterprises@gmail.com",
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Brand & Contact */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 pb-12 border-b border-gray-700">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img
                  src={logo}
                  alt="Eco Solar Enterprises Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Eco Solar Enterprises</h3>
                <p className="text-sm text-gray-400">
                  Powering a Sustainable Future
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Leading provider of premium solar solutions across Telangana. ISO
              9001:2015 certified with over 5+ years of excellence in renewable
              energy.
            </p>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 w-fit">
              <Award className="w-5 h-5 text-[#F59E0B]" />
              <span className="text-sm">ISO 9001:2015 Certified</span>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-2">Managing Partners</p>
              <p className="text-lg font-semibold text-white">
                P. Ratnakar & K. Karunakar
              </p>
            </div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-all duration-300 border border-white/10 hover:border-[#059669] group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#059669] to-[#047857] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">
                        {contact.label}
                      </p>
                      <p className="font-semibold text-white">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Branch Locations */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h4 className="text-2xl font-bold mb-2">Our Locations</h4>
            <p className="text-gray-400">
              Visit us at any of our branch offices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#1E40AF] transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-bold text-white">
                      {branch.city}
                    </h5>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {branch.address}
                    </p>
                    <p className="text-xs text-gray-400 italic">
                      {branch.landmark}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Eco Solar Enterprises. All
              rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="hover:text-[#059669] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-[#059669] transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-[#059669] transition-colors duration-300"
              >
                Warranty Information
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-[#1E40AF] via-[#059669] to-[#F59E0B]"></div>
    </footer>
  );
}
