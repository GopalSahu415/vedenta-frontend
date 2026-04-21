import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

const MainFlow = () => (
  <>
    <Home />
    <About />
    <Services />
    <Gallery />
    <Testimonials />
    <Appointment />
    <Contact />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<MainFlow />} />
            {/* Fallback for old routes or deep links if needed, but primarily single page now */}
            <Route path="*" element={<MainFlow />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
