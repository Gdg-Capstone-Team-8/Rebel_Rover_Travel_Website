import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Icon1 from "../../assets/best_service-icon.svg";
import Icon2 from "../../assets/dollar_sign_Icon.svg";
import Icon3 from "../../assets/tropy_icon.svg";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

const backgroundImages = [
  "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const services: ServiceCard[] = [
  {
    icon: Icon1,
    title: "Best Service",
    description:
      "Our service is reliable and convenient, our service is quality.",
  },
  {
    icon: Icon2,
    title: "Price Guarantee",
    description:
      "We guarantee the best prices on all our listed accommodations.",
  },
  {
    icon: Icon3,
    title: "Handpicked Hotels",
    description: "Only the finest, top-rated hotels picked by our experts.",
  },
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
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1,
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
              index === currentIndex
                ? "scale-100 opacity-100"
                : "scale-110 opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: index === currentIndex ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 to-black/70" />

      {/* Header Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h2 className="mb-4 text-5xl font-bold drop-shadow-lg">
          Why Choose Us?
        </h2>
        <p className="text-xl drop-shadow-md">
          Our services have been trusted by world travelers.
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative z-30 -mt-30 px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex transform flex-col items-start rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/90"
            >
              <div className="mb-4 rounded-full bg-black p-3 shadow-md">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-10 w-10"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mb-4 text-gray-700">{service.description}</p>
              <button className="group flex items-center font-medium text-black cursor-pointer hover:underline">
                Learn more
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">
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
        className="absolute top-1/2 left-4 z-40 -translate-y-1/2 rounded-full bg-white/90 p-2 text-cyan-600 shadow-md transition hover:bg-white disabled:opacity-50"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute top-1/2 right-4 z-40 -translate-y-1/2 rounded-full bg-white/90 p-2 text-cyan-600 shadow-md transition hover:bg-white disabled:opacity-50"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default WhyChooseUs;
