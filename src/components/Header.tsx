import React, { useState } from 'react';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const handlePlanKennismakingClick = () => {
    // Check if we're on the homepage
    if (window.location.pathname === '/') {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to homepage and then scroll to contact form
      navigate('/', { replace: true });
      setTimeout(() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleNavClick = (sectionId: string) => {
    // Close mobile menu when clicking on a nav item
    setIsMenuOpen(false);
    
    // Check if we're on the homepage
    if (window.location.pathname === '/') {
      if (sectionId === 'contact') {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage and then scroll to section
      navigate('/', { replace: true });
      setTimeout(() => {
        if (sectionId === 'contact') {
          document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleMobilePlanKennismakingClick = () => {
    // Close mobile menu first
    setIsMenuOpen(false);
    
    // Then handle the navigation
    if (window.location.pathname === '/') {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { replace: true });
      setTimeout(() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleBranchClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Now clickable to go to homepage top */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/Slim Geregeld Administratie - Volledig logo transparant 1200x628.png" 
              alt="Slim Geregeld Administratie" 
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Branches Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsBranchesOpen(!isBranchesOpen)}
                onMouseEnter={() => setIsBranchesOpen(true)}
              >
                <span>Branches</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isBranchesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                  onMouseLeave={() => setIsBranchesOpen(false)}
                >
                  <Link
                    to="/bouw"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                  >
                    Bouw
                  </Link>
                  <div className="px-4 py-2 text-gray-400 cursor-not-allowed text-sm italic">
                    Andere branches volgen...
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick('pakketten')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Pakketten</button>
            <button onClick={() => handleNavClick('reviews')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Reviews</button>
            <button onClick={() => handleNavClick('over-kyle')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">Over Kyle</button>
            <button onClick={() => handleNavClick('contact')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</button>
            <button onClick={() => handleNavClick('faq')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">FAQ</button>
          </nav>

          {/* Desktop Contact Button - Always visible when menu is closed */}
          <div className="hidden md:block">
            <button 
              onClick={handlePlanKennismakingClick}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Plan een gratis kennismaking
            </button>
          </div>

          {/* Mobile: Contact Button (visible when menu is closed) + Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {!isMenuOpen && (
              <button 
                onClick={handlePlanKennismakingClick}
                className="bg-blue-600 text-white px-3 py-2 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold text-sm shadow-lg"
              >
                Kennismaken
              </button>
            )}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Branches */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setIsBranchesOpen(!isBranchesOpen)}
                >
                  <span>Branches</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isBranchesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isBranchesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link
                      to="/bouw"
                      onClick={handleBranchClick}
                      className="block text-gray-500 hover:text-blue-600 transition-colors py-1 font-medium"
                    >
                      Bouw
                    </Link>
                    <div className="text-gray-400 py-1 text-sm italic">
                      Andere branches volgen...
                    </div>
                  </div>
                )}
              </div>
              
              <button onClick={() => handleNavClick('pakketten')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left">Pakketten</button>
              <button onClick={() => handleNavClick('reviews')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left">Reviews</button>
              <button onClick={() => handleNavClick('over-kyle')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left">Over Kyle</button>
              <button onClick={() => handleNavClick('contact')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left">Contact</button>
              <button onClick={() => handleNavClick('faq')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left">FAQ</button>
              
              {/* Mobile Contact Button - Only visible in open menu */}
              <button 
                onClick={handleMobilePlanKennismakingClick}
                className="bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold text-center shadow-lg mt-4"
              >
                Plan een gratis kennismaking
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;