import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, CheckCircle2 } from 'lucide-react';
import doctorImg from '../assets/images/doctor.png';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '10+', icon: <Award className="text-primary" /> },
    { label: 'Happy Patients', value: '5K+', icon: <Users className="text-primary" /> },
    { label: 'Success Treatments', value: '12K+', icon: <Shield className="text-primary" /> },
  ];

  const highlights = [
    "State-of-the-art Dental Technology",
    "Expertise in Cosmetic Dentistry",
    "Patient-Centered Approach",
    "Strict Sterilization Protocols",
    "Comfortable & Pain-Free Experience",
    "Affordable Care for Everyone"
  ];

  return (
    <div id="about" className="flex flex-col">
      {/* Intro Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">About Vedanta Dental Clinic</h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Serving Meerut with excellence since 2014. We are committed to providing the highest quality 
              dental care in a relaxing and professional environment.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src={doctorImg} 
                  alt="Dr. Vedant Kansal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-secondary p-5 md:p-8 rounded-2xl text-white shadow-xl z-20">
                <p className="text-xl md:text-3xl font-bold">Dr. Vedant Kansal</p>
                <p className="text-secondary-light text-sm md:text-base font-medium opacity-90">BDS, Cosmetic Dentist</p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 font-display">Meet Our Lead Dentist</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Dr. Vedant Kansal is a renowned dentist in Meerut, known for his clinical excellence and 
                warm patient rapport. With a focus on Cosmetic and Aesthetic dentistry, he has helped 
                thousands of patients regain their confidence through perfect smiles.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Kansal believes that dental care should be accessible, painless, and tailored to each 
                individual's needs. He continuously updates his skills with the latest advancements in 
                dentistry to provide world-class treatment to his patients.
              </p>
              
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-700">
                    <CheckCircle2 className="text-secondary" size={20} />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white p-6 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-display">Our Mission</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              To provide affordable, high-quality, and comprehensive dental care using advanced technology 
              while maintaining the highest standards of hygiene and patient comfort.
            </p>
          </div>
          <div className="bg-white p-6 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-secondary font-display">Our Vision</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              To be the most trusted dental care provider in Meerut, recognized for clinical excellence, 
              innovation, and contributing to the overall health and well-being of our community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
