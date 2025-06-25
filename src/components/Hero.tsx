import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/31621311043', '_blank');
  };

  const handleStartFreeClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Nooit meer wakker liggen van je{' '}
              <span className="text-blue-600">boekhouding</span>
            </h1>
            
            <div className="text-xl md:text-2xl font-normal text-gray-600 mb-6 leading-relaxed">
              – vanaf nu is administratie <span className="text-blue-600 font-bold">Slim Geregeld.</span>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Slim Geregeld Administratie combineert persoonlijke aandacht met slimme AI, 
              zodat jij kunt focussen op ondernemen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleStartFreeClick}
                className="bg-blue-600 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Start 30 dagen gratis</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-white text-blue-600 border-2 border-blue-600 px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat met Kyle</span>
              </button>
            </div>
          </div>

          {/* Right Column - Kyle's Photo */}
          <div className="lg:pl-4">
            <div className="relative">
              {/* Main Kyle Photo - Clean and simple */}
              <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
                <img 
                  src="/IMG_4370 (2).jpg" 
                  alt="Kyle" 
                  className="w-full h-96 object-cover rounded-xl"
                />
                
                {/* Kyle is beschikbaar badge - positioned bottom right */}
                <div className="absolute bottom-3 right-3 bg-white rounded-full shadow-lg px-3 py-1.5 flex items-center space-x-2 border border-gray-100">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-medium text-sm">Kyle is beschikbaar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;