import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    reset();
  };

  return (
    <div id="contact" className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Contact Us</h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Have questions or need to reach us? We're here to help. 
              Find our location, check clinic hours, or send us a message.
            </p>
          </div>
        </div>
      </section>

      {/* Info & Form */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Get In Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110 shadow-sm">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-900">Our Location</h4>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        Abulane / Meerut Cantt<br />
                        Near Cantonment Hospital<br />
                        Meerut, Uttar Pradesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shrink-0 transition-transform hover:scale-110 shadow-sm">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-900">Call Us</h4>
                      <p className="text-slate-600 text-lg">+91 98765 43210</p>
                      <p className="text-slate-600 text-lg">+91 121 234567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-500 shrink-0 transition-transform hover:scale-110 shadow-sm">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-900">Email Address</h4>
                      <p className="text-slate-600 text-lg">info@vedantadental.com</p>
                      <p className="text-slate-600 text-lg">appointments@vedantadental.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Clinic Hours</h2>
                <div className="bg-white p-8 rounded-3xl space-y-4 border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                    <span className="font-semibold text-lg text-slate-700">Monday - Saturday</span>
                    <span className="text-secondary font-black">10:00 AM - 08:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span className="font-medium text-lg">Sunday</span>
                    <span className="font-bold underline decoration-rose-500/50">Emergency Only</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 lg:p-12 rounded-[40px] shadow-xl border border-slate-100/50"
            >
              <h3 className="text-3xl font-bold mb-8 text-slate-900">Send a Message</h3>
              
              {isSubmitSuccessful ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center"
                >
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-emerald-200">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-900 mb-2">Message Sent!</h4>
                  <p className="text-emerald-700 text-lg mb-8">Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => reset()}
                    className="text-emerald-900 font-bold underline hover:no-underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                      <input 
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border outline-none transition-all focus:ring-4 focus:ring-secondary/10 text-slate-900 font-medium ${errors.name ? 'border-rose-500' : 'border-slate-200 focus:border-secondary'}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-rose-500 text-sm ml-1 font-medium">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                      <input 
                        {...register("phone", { required: "Phone is required" })}
                        className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border outline-none transition-all focus:ring-4 focus:ring-secondary/10 text-slate-900 font-medium ${errors.phone ? 'border-rose-500' : 'border-slate-200 focus:border-secondary'}`}
                        placeholder="+91 00000 00000"
                      />
                      {errors.phone && <p className="text-rose-500 text-sm ml-1 font-medium">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Email (Optional)</label>
                    <input 
                      {...register("email")}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none transition-all focus:ring-4 focus:ring-secondary/10 focus:border-secondary text-slate-900 font-medium"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Your Message</label>
                    <textarea 
                      {...register("message", { required: "Message is required" })}
                      rows="4"
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border outline-none transition-all focus:ring-4 focus:ring-secondary/10 text-slate-900 font-medium ${errors.message ? 'border-rose-500' : 'border-slate-200 focus:border-secondary'}`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="text-rose-500 text-sm ml-1 font-medium">{errors.message.message}</p>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary-dark text-white py-5 text-xl font-bold rounded-2xl flex items-center justify-center space-x-3 disabled:opacity-70 transition-all shadow-xl shadow-secondary/20"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200">
        <iframe 
          title="Vedanta Dental Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13968.272186411516!2d77.702741541812!3d28.988118074911765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c644efdfcf243%3A0xe5a3c2677732d8!2sAbu%20Lane%2C%20Meerut%20Cantt%2C%20Meerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1650371234567!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
