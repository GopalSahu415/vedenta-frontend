import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import axios from 'axios';

const Appointment = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    try {
      setErrorMsg('');
      // Using the real API endpoint
      const response = await axios.post('http://localhost:5000/api/appointments', data);
      
      console.log('API Response:', response.data);
      // await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for UX if needed
    } catch (err) {
      console.error('Booking Error:', err);
      setErrorMsg('Something went wrong. Please call us directly at +91 98765 43210.');
      throw err; // Re-throw to prevent isSubmitSuccessful being true
    }
  };

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", 
    "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
  ];

  return (
    <div id="appointment" className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Book Your Appointment</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Take the first step towards a healthier, brighter smile. 
            Fill in the details below and we'll confirm your visit.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {isSubmitSuccessful ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-12 lg:p-20 rounded-[40px] shadow-2xl text-center border-t-8 border-secondary border border-slate-100"
              >
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-lg shadow-secondary/20">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Request Received!</h2>
                <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                  Thank you for choosing Vedanta Dental Clinic. Dr. Vedant Kansal's team will contact you shortly 
                  on your phone number to confirm your final appointment time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => reset()}
                    className="bg-secondary text-white font-bold px-10 py-4 rounded-2xl flex items-center justify-center space-x-2 shadow-lg hover:bg-secondary-dark transition-all"
                  >
                    <span>Book Another</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
                {/* Side Info */}
                <div className="lg:col-span-4 bg-gradient-to-br from-secondary to-[#0f766e] p-8 md:p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12 blur-xl"></div>
                  
                  <h3 className="text-2xl font-display font-bold mb-8 relative z-10">Why Book Online?</h3>
                  <ul className="space-y-6 relative z-10">
                    {[
                      { icon: <Clock size={20} />, text: "Instant request processing" },
                      { icon: <Calendar size={20} />, text: "Pick your preferred date & time" },
                      { icon: <CheckCircle size={20} />, text: "Priority confirmation" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-4 group">
                        <div className="bg-white/15 backdrop-blur-lg border border-white/20 p-2.5 rounded-xl shrink-0 transition-transform group-hover:scale-110">
                          {item.icon}
                        </div>
                        <p className="font-semibold text-white/95">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-20 pt-10 border-t border-white/10 relative z-10">
                    <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-4">Need immediate help?</p>
                    <a href="tel:+919876543210" className="text-2xl font-display font-bold hover:text-white/80 transition-colors flex items-center space-x-2">
                       <Phone size={24} className="text-white/80" />
                       <span>+91 98765 43210</span>
                    </a>
                  </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-8 p-6 md:p-12 bg-white">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                          <User size={16} />
                          <span>Full Name</span>
                        </label>
                        <input 
                          {...register("name", { required: "Name is required" })}
                          className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border outline-none transition-all focus:ring-4 focus:ring-secondary/10 text-slate-900 font-medium ${errors.name ? 'border-rose-500' : 'border-slate-200 focus:border-secondary'}`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-rose-500 text-sm font-medium">{errors.name.message}</p>}
                      </div>
 
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                          <Phone size={16} />
                          <span>Phone Number</span>
                        </label>
                        <input 
                          {...register("phone", { required: "Phone number is required" })}
                          className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border outline-none transition-all focus:ring-4 focus:ring-secondary/10 text-slate-900 font-medium ${errors.phone ? 'border-rose-500' : 'border-slate-200 focus:border-secondary'}`}
                          placeholder="+91 00000 00000"
                        />
                        {errors.phone && <p className="text-rose-500 text-sm font-medium">{errors.phone.message}</p>}
                      </div>
                    </div>
 
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                          <Calendar size={16} />
                          <span>Preferred Date</span>
                        </label>
                        <input 
                          type="date"
                          {...register("date", { required: "Date is required" })}
                          className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border outline-none transition-all focus:ring-4 focus:ring-secondary/10 text-slate-900 font-medium ${errors.date ? 'border-rose-500' : 'border-slate-200 focus:border-secondary'}`}
                        />
                        {errors.date && <p className="text-rose-500 text-sm font-medium">{errors.date.message}</p>}
                      </div>
 
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                          <Clock size={16} />
                          <span>Preferred Time</span>
                        </label>
                        <div className="relative">
                          <select 
                            {...register("time", { required: "Time is required" })}
                            className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border outline-none transition-all focus:ring-4 focus:ring-secondary/10 text-slate-900 appearance-none font-medium ${errors.time ? 'border-rose-500' : 'border-slate-200 focus:border-secondary'}`}
                          >
                            <option value="">Select a Slot</option>
                            {timeSlots.map(slot => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </select>
                        </div>
                        {errors.time && <p className="text-rose-500 text-sm font-medium">{errors.time.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                        <MessageSquare size={16} />
                        <span>Nature of Problem</span>
                      </label>
                       <textarea 
                        {...register("problem", { required: "Please specify your problem" })}
                        rows="3"
                        className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border outline-none transition-all focus:ring-4 focus:ring-secondary/10 text-slate-900 font-medium ${errors.problem ? 'border-rose-500' : 'border-slate-200 focus:border-secondary'}`}
                        placeholder="E.g. Toothache, RCT, Teeth Whitening..."
                      ></textarea>
                      {errors.problem && <p className="text-rose-500 text-sm font-medium">{errors.problem.message}</p>}
                    </div>

                    {errorMsg && (
                      <div className="bg-rose-50 text-rose-600 p-4 rounded-xl text-center font-bold border border-rose-100">
                        {errorMsg}
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-secondary to-[#0f766e] text-white py-5 text-xl font-bold rounded-2xl flex items-center justify-center space-x-3 disabled:opacity-70 transition-all shadow-xl shadow-secondary/20 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Submit Booking Request</span>
                          <ArrowRight size={22} />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-slate-400 text-sm font-medium">
                      *By submitting, you agree to receive a confirmation call from our team.
                    </p>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal icon for Send that wasn't imported from lucide-react in previous step but used here
const Send = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default Appointment;
