import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  ChevronRight, 
  Search, 
  Sparkles, 
  Smile, 
  CircleDot, 
  Layers,
  HeartPulse
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const services = [
  {
    icon: <CircleDot className="text-primary" size={32} />,
    title: "Root Canal Treatment (RCT)",
    description: "Advanced pain-free RCT to save your natural teeth using modern rotatory endodontics.",
    color: "bg-blue-50"
  },
  {
    icon: <Search className="text-secondary" size={32} />,
    title: "Dental Implants",
    description: "Permanent and natural-looking tooth replacement solution for missing teeth.",
    color: "bg-teal-50"
  },
  {
    icon: <Sparkles className="text-amber-500" size={32} />,
    title: "Teeth Whitening",
    description: "Professional whitening treatments to brighten your smile instantly by several shades.",
    color: "bg-amber-50"
  },
  {
    icon: <Layers className="text-purple-500" size={32} />,
    title: "Braces & Orthodontics",
    description: "Traditional and clear aligners to straighten teeth and improve your bite and smile.",
    color: "bg-purple-50"
  },
  {
    icon: <HeartPulse className="text-rose-500" size={32} />,
    title: "Tooth Extraction",
    description: "Safe and painless removal of damaged or wisdom teeth using minimally invasive techniques.",
    color: "bg-rose-50"
  },
  {
    icon: <ShieldCheck className="text-emerald-500" size={32} />,
    title: "Dental Cleaning",
    description: "Professional scaling and polishing to remove plaque and prevent gum diseases.",
    color: "bg-emerald-50"
  },
  {
    icon: <Smile className="text-indigo-500" size={32} />,
    title: "Crowns & Caps",
    description: "High-quality ceramic and zirconia crowns to restore and strengthen damaged teeth.",
    color: "bg-indigo-50"
  },
  {
    icon: <Layers className="text-sky-500" size={32} />,
    title: "Cosmetic Dentistry",
    description: "Smile makeovers, veneers, and aesthetic bonding to enhance your natural appearance.",
    color: "bg-sky-50"
  }
];

const Services = () => {
  return (
    <div id="services" className="flex flex-col">
      {/* Header */}
      <section className="py-24 bg-[#0a0c10] border-b border-white/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Dental Services</h1>
            <p className="text-xl text-gray-400">
              We provide comprehensive dental care for all ages using the latest technology 
              and a patient-first approach.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#161b22] p-8 rounded-3xl border border-white/5 hover:border-secondary/30 transition-all shadow-sm hover:shadow-md group"
              >
                <div className="mb-6 p-4 bg-white/5 inline-block rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <NavLink 
                  to="/appointment" 
                  className="flex items-center space-x-2 text-white font-bold hover:text-secondary transition-colors"
                >
                  <span>Book Consult</span>
                  <ChevronRight size={18} />
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/More Info Banner */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Our Care?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Modern Technology</h4>
                    <p className="text-gray-400">Digital X-rays and precise diagnostic tools for better accuracy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Patient Comfort</h4>
                    <p className="text-gray-400">Sedation options and a gentle touch for a pain-free experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Transparent Pricing</h4>
                    <p className="text-gray-400">No hidden costs. Detailed treatment plans before we start.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 md:p-10 rounded-3xl backdrop-blur-md border border-white/10 text-center">
                <h3 className="text-3xl font-bold mb-6">Need a Specialized Treatment?</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Dr. Vedant Kansal specializes in various complex dental procedures. 
                  Contact us for a detailed consultation regarding your specific needs.
                </p>
                <NavLink to="/contact" className="btn-primary w-full inline-block text-lg">
                    Contact Us Today
                </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
