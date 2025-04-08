import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Icon1 from '../../assets/best_service-icon.svg';
import Icon2 from '../../assets/dollar_sign_Icon.svg';
import Icon3 from '../../assets/tropy_icon.svg';

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

const backgroundImages = [
  'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const services: ServiceCard[] = [
  {
    icon: Icon1,
    title: "Best Service",
    description: "Our service is reliable and convenient, our service is quality.",
  },
  {
    icon: Icon2,
    title: "Price Guarantee",
    description: "We guarantee the best prices on all our listed accommodations.",
  },
  {
    icon: Icon3,
    title: "Handpicked Hotels",
    description: "Only the finest, top-rated hotels picked by our experts.",
  }
];

const WhyChooseUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <div className="relative h-screen overflow-visible">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: index === currentIndex ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10" />

      {/* Header Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-5xl font-bold drop-shadow-lg mb-4">Why Choose Us?</h2>
        <p className="text-xl drop-shadow-md">Our services have been trusted by world travelers.</p>
      </div>

      {/* Cards Section */}
      <div className="relative z-30 -mt-30 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/80 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 rounded-2xl shadow-xl p-6 flex flex-col items-start"
            >
              <div className="bg-black rounded-full p-3 mb-4 shadow-md">
                <img src={service.icon} alt={service.title} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <button className="text-cyan-700 font-medium hover:underline flex items-center group">
                Learn more
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white text-cyan-600 rounded-full p-2 shadow-md transition disabled:opacity-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white text-cyan-600 rounded-full p-2 shadow-md transition disabled:opacity-50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhyChooseUs;
