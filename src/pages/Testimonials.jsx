import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Phone, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Root Canal Treatment",
    content: "I was terrified of getting a root canal, but Dr. Vedant made it completely painless. The clinic is so modern and the staff is incredibly caring. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Rahul Gupta",
    role: "Dental Implants",
    content: "After losing a tooth in an accident, I thought I would never smile confidently again. Dr. Kansal placed an implant that looks and feels completely natural. Life changing experience!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Anita Verma",
    role: "Teeth Whitening",
    content: "Got my teeth whitened before my daughters wedding. The results were amazing - my smile was brighter than ever! Thank you Vedanta Dental for making me feel beautiful.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Suman Verma",
    role: "Wisdom Tooth Extraction",
    content: "I had a wisdom tooth extraction last week. I was worried about the recovery, but Dr. Vedant's technique was so gentle that I had minimal swelling.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Vikram Chaudhary",
    role: "Dental Implants",
    content: "Excellent experience with my dental implants. The process was smooth and the new tooth looks and feels completely natural. Thank you Doctor!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Neha Gupta",
    role: "Pediatric Dentistry",
    content: "Great clinic for children too. My son was comfortable and didn't cry during his filling. Dr. Kansal has a very gentle way with kids.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-slate-50 min-h-screen text-slate-600">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-white border-b border-slate-100">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-secondary uppercase bg-secondary/10 rounded-full"
          >
            Testimonials
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900"
          >
            What Our Patients Say
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto font-medium"
          >
            We take pride in providing exceptional dental care. Read about the 
            experiences of those who have trusted us with their smiles.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-100 p-8 rounded-[2rem] flex flex-col relative group hover:border-secondary/30 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {/* Quote Badge */}
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mb-6">
                  <Quote className="text-secondary w-6 h-6 rotate-180" />
                </div>
                
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-secondary fill-secondary" size={18} />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow italic">
                  "{testimonial.content}"
                </p>

                {/* Divider Line */}
                <div className="w-full h-px bg-slate-100 mb-8"></div>

                {/* Patient Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-secondary/50 transition-colors">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <span className="text-secondary text-sm font-semibold">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Contact CTA Section */}
      <section className="pb-24 px-4 bg-slate-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -ml-32 -mb-32"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Ready to start your own transformation?</h2>
              <p className="text-slate-300 text-xl mb-12 leading-relaxed font-medium">
                Join our community of satisfied patients and experience world-class 
                dental care in a modern, caring environment.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="tel:+919876543210" 
                  className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-secondary/20"
                >
                  <Phone size={22} />
                  Book Now
                </a>
                <a 
                  href="https://wa.me/919876543210" 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all backdrop-blur-md"
                >
                  <MessageCircle size={22} />
                  Chat With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
