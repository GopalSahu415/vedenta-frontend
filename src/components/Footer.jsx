import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030712] border-t border-white/5 pt-16 pb-8 text-gray-400">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">V</div>
              <span className="font-display font-bold text-2xl text-primary">Vedanta Dental</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading the way in advanced dental care in Meerut. We provide expert treatments for a healthy and beautiful smile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-white/10 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-white/10 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-white/10 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><NavLink to="/about" className="text-gray-400 hover:text-secondary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/services" className="text-gray-400 hover:text-secondary transition-colors">Our Services</NavLink></li>
              <li><NavLink to="/gallery" className="text-gray-400 hover:text-secondary transition-colors">Gallery</NavLink></li>
              <li><NavLink to="/testimonials" className="text-gray-400 hover:text-secondary transition-colors">Patient Stories</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-secondary transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-6">Reach Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span>Abulane / Meerut Cantt, Near Cantonment Hospital, Meerut, UP</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="text-secondary shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="text-secondary shrink-0" size={20} />
                <span>info@vedantadental.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6">Working Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <Clock className="text-secondary shrink-0" size={20} />
                <div>
                  <p className="font-medium text-white">Mon - Sat</p>
                  <p className="text-sm">10:00 AM - 08:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 opacity-60">
                <Clock className="text-secondary shrink-0" size={20} />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-sm">Closed / Emergency Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Vedanta Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
