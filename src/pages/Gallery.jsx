import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import heroImg from '../assets/images/hero.png';
import equipImg from '../assets/images/equipment1.png';

const galleryItems = [
  { id: 1, type: 'clinic', src: heroImg, title: 'Main Clinic Reception' },
  { id: 2, type: 'equipment', src: equipImg, title: 'Modern Dental Chair' },
  { id: 3, type: 'transformation', src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800', title: 'Smile Makeover' },
  { id: 4, type: 'clinic', src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800', title: 'Treatment Room' },
  { id: 5, type: 'equipment', src: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800', title: 'X-Ray Machine' },
  { id: 6, type: 'transformation', src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800', title: 'RCT Result' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  return (
    <div id="gallery" className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Clinic Gallery</h1>
            <p className="text-xl text-slate-500 font-medium">
              Take a look at our modern facility, advanced equipment, and successful transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-slate-50 flex-grow">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
            {['all', 'clinic', 'equipment', 'transformation'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-bold capitalize transition-all text-sm md:text-base ${
                  filter === tab 
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/30' 
                    : 'bg-white text-slate-500 border border-slate-100 hover:border-secondary hover:text-secondary shadow-sm'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-md"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                      <ZoomIn size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-bold text-xl">{item.title}</p>
                    <p className="text-white/70 capitalize text-sm">{item.type}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 p-4 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-primary transition-colors">
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/60 capitalize mt-2">{selectedImage.type}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
