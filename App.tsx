import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import { WhatsappLogo } from './components/ui/WhatsappLogo';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto/:id" element={<ProjectDetails />} />
        </Routes>

        <Footer />

        {/* Sticky Whatsapp Button */}
        <a 
          href="https://wa.me/5543991621344?text=Quero%20solicitar%20meu%20site"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Falar no WhatsApp"
        >
          <WhatsappLogo className="w-8 h-8 fill-current" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap text-sm">
            Solicitar Site
          </span>
        </a>
      </div>
    </Router>
  );
};

export default App;