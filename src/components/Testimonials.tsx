import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const Testimonials = () => {
  const handleGoogleReviewsClick = () => {
    window.open('https://www.google.com/maps/place/Slim+Geregeld+Administratie/@52.1615328,2.640828,583026m/data=!3m1!1e3!4m18!1m9!3m8!1s0x6e2416ab86cbb037:0xbe819561033f9841!2sSlim+Geregeld+Administratie!8m2!3d52.1909763!4d5.2795551!9m1!1b1!16s%2Fg%2F11xgj0kk8j!3m7!1s0x6e2416ab86cbb037:0xbe819561033f9841!8m2!3d52.1909763!4d5.2795551!9m1!1b1!16s%2Fg%2F11xgj0kk8j?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const handleSerenaReviewClick = () => {
    window.open('https://maps.app.goo.gl/mWxn26yeQ85gMNfh6', '_blank');
  };

  const handleAndriesReviewClick = () => {
    window.open('https://maps.app.goo.gl/cz2LpkpYzyJQTiyg6', '_blank');
  };

  const handlePlanKennismakingClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "byserenaarendzen / Serena Arendzen",
      role: "Fotograaf",
      text: "Ik ben altijd een grote kluns geweest als het aankomt op mijn administratie. Rekeningen, deadlines, formulieren… het was altijd een rommeltje. Sinds ik gebruik maak van Slim Geregeld is dat volledig veranderd. Alles is ...",
      rating: 5,
      avatar: "/IMG_4113.PNG",
      hasFullReview: true,
      onReadMore: handleSerenaReviewClick
    },
    {
      name: "Marimin / andries",
      role: "Timmerman", 
      text: "Prima, lekker makkelijk zo",
      rating: 5,
      avatar: "/Andries Google.png",
      hasFullReview: true,
      onReadMore: handleAndriesReviewClick
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Wat ondernemers zeggen over Slim Geregeld
          </h2>
          
          {/* Google Reviews Header */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-xl font-semibold text-gray-900">Google</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-3xl font-bold text-gray-900">5.0 / 5.0</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base whitespace-nowrap">
                We zijn er trots op dat ondernemers uit alle branches ons telkens weer met 5 sterren beoordelen.
              </p>
            </div>
          </div>
        </div>

        {/* Google Reviews Cards - Only 2 reviews */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              {/* Review Header */}
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {testimonial.text}
              </p>

              {/* Read Full Review Button */}
              {testimonial.hasFullReview && (
                <button
                  onClick={testimonial.onReadMore}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 transition-colors"
                >
                  <span>Lees volledige review</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <p className="text-lg text-gray-700 mb-6">
            Sluit je aan bij ondernemers die meer tijd overhouden voor hun passie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGoogleReviewsClick}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Bekijk alle Google Reviews</span>
            </button>
            <button 
              onClick={handlePlanKennismakingClick}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Plan een gratis kennismaking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;