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
  HeartPulse,
  Phone,
  ArrowRight,
  Clock
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const services = [
  {
    icon: <CircleDot className="text-primary" size={32} />,
    title: "Root Canal Treatment (RCT)",
    description: "Advanced pain-free RCT to save your natural teeth using modern rotatory endodontics.",
    features: ["Painless Procedure", "Rotatory Endodontics", "Single Visit Options"]
  },
  {
    icon: <Search className="text-secondary" size={32} />,
    title: "Dental Implants",
    description: "Permanent and natural-looking tooth replacement solution for missing teeth.",
    features: ["Natural Feel", "High Success Rate", "Lifetime Warranty"]
  },
  {
    icon: <Sparkles className="text-amber-500" size={32} />,
    title: "Teeth Whitening",
    description: "Professional whitening treatments to brighten your smile instantly by several shades.",
    features: ["Instant Results", "Safe for Enamel", "Long Lasting"]
  },
  {
    icon: <Layers className="text-purple-500" size={32} />,
    title: "Braces & Orthodontics",
    description: "Traditional and clear aligners to straighten teeth and improve your bite and smile.",
    features: ["Clear Aligners", "Invisible Options", "Self-Ligating Braces"]
  },
  {
    icon: <HeartPulse className="text-rose-500" size={32} />,
    title: "Tooth Extraction",
    description: "Safe and painless removal of damaged or wisdom teeth using minimally invasive techniques.",
    features: ["Minimally Invasive", "Quick Recovery", "Expert Care"]
  },
  {
    icon: <ShieldCheck className="text-emerald-500" size={32} />,
    title: "Dental Cleaning",
    description: "Professional scaling and polishing to remove plaque and prevent gum diseases.",
    features: ["Plaque Removal", "Gum Health", "Stain Removal"]
  },
  {
    icon: <Smile className="text-indigo-500" size={32} />,
    title: "Crowns & Caps",
    description: "High-quality ceramic and zirconia crowns to restore and strengthen damaged teeth.",
    features: ["Zirconia Crowns", "Metal Free", "Durable Options"]
  },
  {
    icon: <Layers className="text-sky-500" size={32} />,
    title: "Cosmetic Dentistry",
    description: "Smile makeovers, veneers, and aesthetic bonding to enhance your natural appearance.",
    features: ["Smile Makeover", "Veneers", "Bonding"]
  }
];

const Services = () => {
  return (
    <div id="services" className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Our Dental Services</h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Comprehensive dental care for your entire family. We combine advanced 
              technology with compassionate care to ensure the best results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 -mr-12 -mt-12 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center font-display">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 text-center">{service.description}</p>
                  
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-slate-500 text-sm font-medium">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <NavLink 
                    to="/contact" 
                    className="w-full flex items-center justify-center space-x-2 border-2 border-slate-100 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white transition-all text-slate-600 font-bold py-4 rounded-2xl"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight size={18} />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-20 -mb-20 blur-2xl"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to transform your smile?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <NavLink 
              to="/appointment" 
              className="px-10 py-5 bg-white text-primary font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
            >
              Book an Appointment
            </NavLink>
            <a 
              href="tel:+919876543210" 
              className="px-10 py-5 border-2 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center space-x-3"
            >
              <Phone size={24} />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
