import React from 'react';
import { MessageCircle, ArrowRight, Hammer, HardHat, Truck, Calculator, Clock, DollarSign, Heart, CheckCircle, Star, Bot, Users, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BouwLanding = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/31621311043', '_blank');
  };

  const handlePlanKennismakingClick = () => {
    // Navigate to homepage and scroll to contact form
    navigate('/', { replace: true });
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handlePackageClick = (packageType: string) => {
    // Navigate to homepage with package selection
    navigate('/', { replace: true });
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
        
        // Set the package in the URL parameter temporarily
        const url = new URL(window.location.href);
        url.searchParams.set('package', packageType);
        window.history.pushState({}, '', url.toString());
        
        // Trigger a custom event to notify the contact form
        window.dispatchEvent(new CustomEvent('packageSelected', { detail: packageType }));
      }
    }, 100);
  };

  const handleGoogleReviewsClick = () => {
    window.open('https://www.google.com/maps/place/Slim+Geregeld+Administratie/@52.1615328,2.640828,583026m/data=!3m1!1e3!4m18!1m9!3m8!1s0x6e2416ab86cbb037:0xbe819561033f9841!2sSlim+Geregeld+Administratie!8m2!3d52.1909763!4d5.2795551!9m1!1b1!16s%2Fg%2F11xgj0kk8j!3m7!1s0x6e2416ab86cbb037:0xbe819561033f9841!8m2!3d52.1909763!4d5.2795551!9m1!1b1!16s%2Fg%2F11xgj0kk8j?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const bouwFeatures = [
    "Materiaalkosten en gereedschap optimaal aftrekken",
    "Projectfacturen en offertes via WhatsApp maken",
    "Werkbonnen en uitgaven direct verwerken", 
    "BTW-berekening speciaal voor bouwprojecten",
    "Persoonlijk contact met Kyle (specialist bouwadministratie)",
    "24/7 AI-ondersteuning via Slim chatbot",
    "Brandstofkosten en reiskosten correct verwerken",
    "Gereedschapsafschrijving en werkkleding aftrekken"
  ];

  const bouwTestimonials = [
    {
      name: "Marimin / andries",
      role: "Timmerman",
      text: "Prima, lekker makkelijk zo",
      rating: 5,
      avatar: "/Andries Google.png"
    },
    {
      name: "Jan B.",
      role: "Aannemer & Verbouwingen",
      text: "Eindelijk iemand die begrijpt hoe de bouw werkt. Alle materiaalkosten netjes verwerkt en nooit meer stress over BTW.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const packages = [
    {
      name: "Alleen Slim",
      description: "Perfect voor bouwprofessionals die zelf hun administratie doen",
      price: "€75",
      period: "/maand",
      trialText: "30 dagen gratis",
      icon: Bot,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      packageType: "alleen-slim",
      features: [
        "Toegang tot Slim WhatsApp-chatbot",
        "Facturen en offertes opmaken",
        "24/7 vragen beantwoorden over bouwkosten",
        "Klanten beheer",
        "Materiaalkosten herkenning"
      ],
      buttonText: "Start gratis proef",
      buttonStyle: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50",
      cardStyle: "bg-white border border-gray-200 hover:shadow-lg"
    },
    {
      name: "Volledige Service",
      description: "Voor ZZP'ers en eenmanszaken in de bouw",
      originalPrice: "€125",
      price: "€95",
      period: "/maand",
      trialText: "30 dagen gratis",
      popular: true,
      icon: Star,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      packageType: "volledige-service",
      features: [
        "Toegang tot Slim WhatsApp-chatbot",
        "Facturen en offertes opmaken",
        "24/7 vragen beantwoorden",
        "Klanten beheer",
        "BTW-aangifte voor bouwsector",
        "Jaarrekening",
        "Persoonlijk contact met Kyle",
        "Bouwspecifieke aftrekposten optimalisatie"
      ],
      buttonText: "Start gratis proef",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
      cardStyle: "bg-white border-2 border-orange-600 hover:shadow-xl"
    },
    {
      name: "Maatwerk",
      description: "Voor BV's, VOF's en grotere bouwbedrijven",
      price: "Op maat",
      period: "",
      subPrice: "Prijs op aanvraag",
      trialText: "30 dagen gratis",
      icon: Users,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      packageType: "maatwerk",
      features: [
        "Persoonlijk intakegesprek",
        "Aangepaste service voor bouwsector",
        "Complexe projectadministraties",
        "Meerdere entiteiten",
        "Strategisch advies voor groei",
        "Onderaannemers administratie"
      ],
      buttonText: "Vraag gratis advies",
      buttonStyle: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50",
      cardStyle: "bg-white border border-gray-200 hover:shadow-lg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="lg:pr-8">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                🔨 Speciaal voor de bouwsector
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Bouwadministratie die{' '}
                <span className="text-orange-600">écht werkt</span>
              </h1>
              
              <div className="text-xl md:text-2xl font-normal text-gray-600 mb-6 leading-relaxed">
                – geen gedoe, gewoon <span className="text-blue-600 font-bold">Slim Geregeld.</span>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Als bouwprofessional heb je geen tijd voor ingewikkelde administratie. Wij regelen je boekhouding, 
                zodat jij kunt focussen op wat je het beste kunt: bouwen en klussen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button 
                  onClick={handlePlanKennismakingClick}
                  className="bg-blue-600 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Start 30 dagen gratis</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat met Kyle</span>
                </button>
              </div>
            </div>

            {/* Right Column - Kyle's Photo */}
            <div className="lg:pl-4">
              <div className="relative">
                {/* Kyle Profile Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
                  <img 
                    src="/IMG_4370 (2).jpg" 
                    alt="Kyle - Specialist bouwadministratie" 
                    className="w-full h-96 object-cover rounded-xl"
                  />
                  
                  {/* Kyle is beschikbaar badge */}
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

      {/* Bouw-specifieke problemen */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Herken je deze uitdagingen in de bouw?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als bouwprofessional loop je tegen specifieke administratieve uitdagingen aan. 
              Wij begrijpen de bouwsector en helpen je hiermee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Hammer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Materiaalkosten bijhouden</h3>
              <p className="text-gray-700 leading-relaxed">
                Hout, cement, gereedschap - alle materiaalkosten correct verwerken en optimaal aftrekken 
                voor maximale belastingvoordelen.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 p-4 rounded-2xl w-fit mx-auto mb-6">
                <HardHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Projectadministratie</h3>
              <p className="text-gray-700 leading-relaxed">
                Per project overzicht houden van kosten en opbrengsten. Duidelijke facturen 
                en offertes voor je klanten.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-600 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Werkkosten & Reizen</h3>
              <p className="text-gray-700 leading-relaxed">
                Brandstofkosten, gereedschapsafschrijving en werkkleding - alles wat je 
                kunt aftrekken wordt optimaal benut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom kiezen voor Slim Geregeld */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Waarom kiezen bouwprofessionals voor Slim Geregeld?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">8 uur</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meer tijd voor klussen</h3>
              <p className="text-gray-700 leading-relaxed">
                Gemiddeld 8 uur per maand minder administratie. Die tijd kun je besteden 
                aan meer projecten en het uitbreiden van je bedrijf.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white hover:shadow-lg transition-shadow">
              <div className="bg-green-600 p-4 rounded-2xl w-fit mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">€€€</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Maximale aftrekposten</h3>
              <p className="text-gray-700 leading-relaxed">
                Wij kennen alle aftrekposten in de bouw. Van gereedschap tot werkkleding - 
                je haalt er vaak meer uit dan onze kosten.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Geen stress meer</h3>
              <p className="text-gray-700 leading-relaxed">
                BTW-aangiftes, belastingaangifte, deadlines - wij regelen alles op tijd 
                zodat jij je kunt focussen op je vak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat kan Slim voor bouwers doen */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="h-4 w-4 mr-2" />
                Uniek voor de bouwsector!
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Wat maakt Slim Geregeld uniek voor bouwprofessionals?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Bot className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">🤖</span> Wij zijn de enige boekhoudservice in Nederland met een 
                    WhatsApp chatbot speciaal afgestemd op de bouwsector.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg mt-1">
                    <Hammer className="h-5 w-5 text-orange-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">🔨</span> Speciaal ontwikkeld voor de bouwsector - 
                    wij begrijpen jouw specifieke administratieve behoeften.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">📲</span> Via WhatsApp kun je direct bonnetjes doorsturen 
                    en facturen laten maken - ook vanaf de bouwplaats.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Wat kan Slim voor bouwprofessionals doen?</h3>
              <ul className="space-y-4">
                {bouwFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pakketten voor bouw */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Kies het pakket dat bij je bouwbedrijf past
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Van alleen onze AI-chatbot tot volledige administratieve ondersteuning - we hebben voor elke bouwprofessional de juiste oplossing. Nu de Volledige Service zelfs met{' '}
              <span className="relative inline-block">
                introductiekorting van €125 p/m naar €95 p/m.
                <svg 
                  className="absolute -bottom-1 left-0 w-full h-2" 
                  viewBox="0 0 100 6" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M2,3 L98,3" 
                    stroke="#ef4444" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path 
                    d="M2,4 L98,4" 
                    stroke="#ef4444" 
                    strokeWidth="1" 
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </p>
            
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-semibold">
              Alle pakketten komen met een 30 dagen gratis proefperiode - geheel vrijblijvend!
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start relative">
            {packages.map((pkg, index) => (
              <div key={index} className={`rounded-2xl p-8 transition-all duration-200 relative ${pkg.cardStyle} ${pkg.popular ? 'transform scale-105' : ''}`}>
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Meest Populair voor Bouw
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${pkg.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <pkg.icon className={`h-8 w-8 ${pkg.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="mb-2">
                    {/* Show crossed out original price */}
                    {pkg.originalPrice && (
                      <div className="text-lg text-gray-500 mb-1 font-medium relative inline-block">
                        {pkg.originalPrice}{pkg.period}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-0.5 bg-red-500"></div>
                        </div>
                      </div>
                    )}
                    <div>
                      <span className="text-4xl font-bold text-gray-900">
                        {pkg.price}
                      </span>
                      {pkg.period && (
                        <span className="text-gray-600 text-lg">
                          {pkg.period}
                        </span>
                      )}
                    </div>
                  </div>
                  {pkg.subPrice && (
                    <div className="text-sm text-gray-500 mb-2">
                      {pkg.subPrice}
                    </div>
                  )}
                  <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {pkg.trialText}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button 
                  onClick={() => handlePackageClick(pkg.packageType)}
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${pkg.buttonStyle} flex items-center justify-center space-x-2`}
                >
                  <span>{pkg.buttonText}</span>
                  {pkg.buttonText.includes('Start') && <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials voor bouw */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Wat bouwprofessionals zeggen over Slim Geregeld
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
                <p className="text-gray-600 text-sm sm:text-base">
                  Bouwprofessionals uit heel Nederland beoordelen ons met 5 sterren.
                </p>
              </div>
            </div>
          </div>

          {/* Google Reviews Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {bouwTestimonials.map((testimonial, index) => (
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
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-6">
              Sluit je aan bij bouwprofessionals die meer tijd overhouden voor hun projecten
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

      {/* WhatsApp Screenshot Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - WhatsApp Screenshot */}
            <div className="lg:pr-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Zo werkt het in de praktijk:</h4>
                  <p className="text-gray-600 text-sm">Factuur maken via WhatsApp</p>
                </div>
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img 
                    src="/SGA Foto 4 (1).jpg" 
                    alt="WhatsApp chat met Slim - factuur maken" 
                    className="w-full h-[28rem] object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Direct vanaf de bouwplaats
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">📱</span> Stuur een foto van je bon via WhatsApp en Slim verwerkt het direct in je administratie.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Calculator className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">🧮</span> Maak facturen en offertes direct via WhatsApp - ook tijdens je pauze op de bouwplaats.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg mt-1">
                    <Phone className="h-5 w-5 text-orange-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">📞</span> Heb je een vraag? Kyle is altijd bereikbaar voor persoonlijk advies over je bouwadministratie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Klaar voor administratie die écht werkt?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Stop met administratieve stress en focus op wat je het beste kunt: bouwen en klussen. 
            Wij regelen de rest, zodat jij kunt groeien.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handlePlanKennismakingClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center"
            >
              <span>Start 30 dagen gratis</span>
              <ArrowRight className="h-6 w-6" />
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Chat met Kyle</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BouwLanding;