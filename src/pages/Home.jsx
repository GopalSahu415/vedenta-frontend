import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  Phone, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Clock, 
  CheckCircle, 
  Search,
  PhoneCall,
  ChevronRight
} from 'lucide-react';
import heroImg from '../assets/images/hero_v2.png';

const Home = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-secondary" size={20} />,
      title: "Pain-Free Treatment"
    },
    {
      icon: <Clock className="text-secondary" size={20} />,
      title: "Same Day Appointments"
    },
    {
      icon: <CheckCircle className="text-secondary" size={20} />,
      title: "15+ Years Experience"
    }
  ];

  const servicesPreview = [
    { title: "Root Canal Treatment", desc: "Save your natural tooth with our painless RCT procedure.", icon: "🦷" },
    { title: "Dental Implants", desc: "Restore your smile with natural-looking tooth replacements.", icon: "💎" },
    { title: "Teeth Whitening", desc: "Brighten your smile with our professional whitening service.", icon: "✨" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Dental Clinic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/40"></div>
          {/* Subtle gradient to make text more readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/20 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-[10px] font-bold">2K+</div>
                <span className="text-white text-sm font-medium">Happy Patients Treated</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-6 font-display">
                Your Smile, <br />
                <span className="text-secondary">Our Priority</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
                Advanced Dental Care in Meerut. Experience pain-free treatments with state-of-the-art technology and compassionate care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <a href="#appointment" className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 shadow-xl shadow-secondary/20 transition-all hover:scale-105 group">
                  <span>Book Appointment</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:+919876543210" className="border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 backdrop-blur-sm transition-all hover:bg-white/5">
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Bottom Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 md:px-5 py-2.5 md:py-3 rounded-full">
                    {f.icon}
                    <span className="text-white text-[13px] md:text-sm font-medium">{f.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Floating Card */}
          <div className="lg:col-span-5 hidden lg:flex justify-end relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white p-8 rounded-[32px] shadow-2xl w-80 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 -mr-12 -mt-12 rounded-full"></div>
              
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-secondary/10 p-3 rounded-2xl">
                  <Clock className="text-secondary" size={28} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Open Today</p>
                  <p className="text-white font-bold text-lg">10:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400 text-sm font-medium">Emergency Available</p>
                <a href="tel:+919876543210" className="text-secondary text-2xl font-black block hover:underline tracking-tight">
                  +91 98765 43210
                </a>
              </div>
            </motion.div>
            
            {/* Corner Floating Action Buttons */}
            <div className="absolute -bottom-20 right-0 flex flex-col space-y-4">
              <a href="tel:+919876543210" className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                <PhoneCall size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-[#0a0c10]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Specialized Care</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              We offer a wide range of dental services using state-of-the-art technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesPreview.map((service, i) => (
              <div key={i} className="bg-[#161b22] p-10 rounded-[2.5rem] border border-white/5 hover:border-secondary/30 transition-all group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8">{service.desc}</p>
                <NavLink to="/services" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ChevronRight size={20} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
