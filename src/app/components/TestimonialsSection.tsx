import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Suryapet",
    content:
      "The team at Eco Solar Enterprises was fantastic! They made the entire process seamless. My electricity bills have reduced by 85% and I'm earning extra income from excess power. Highly recommended!",
    rating: 5,
    image: "👨‍💼",
  },
  {
    name: "Priya Sharma",
    role: "Business Owner, Nalgonda",
    content:
      "Investing in their solar pumpset was the best decision for my farm. The subsidy process was handled so smoothly, and my irrigation costs have dropped dramatically. Professional service from start to finish!",
    rating: 5,
    image: "👩‍💼",
  },
  {
    name: "Arun Reddy",
    role: "Industrial Client, Choutuppal",
    content:
      "Their off-grid system provides reliable 24/7 power for our business. The installation was quick, and ongoing support is exceptional. True renewable energy partners!",
    rating: 5,
    image: "👨‍💼",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
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
              Customer Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their
              energy independence with Eco Solar Enterprises.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden p-8 border border-gray-100 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Footer */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to join our community of energy-independent customers?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:8985203688"
              className="inline-flex items-center justify-center bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Call for Free Consultation
            </a>
            <a
              href="mailto:ecosolarenterprises@gmail.com"
              className="inline-flex items-center justify-center bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Email Your Inquiry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
