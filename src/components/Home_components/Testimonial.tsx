import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Testimonial from '@/models/Testimonial';


const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sara Jay",
    role: "Traveller",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Before we define any approach, we need to define the brands overall goal. We then need to dive."
  },
  {
    id: 2,
    name: "Cristian Daniel",
    role: "Traveller",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Before we define any approach, we need to define the brands overall goal. We then need to dive."
  },
  {
    id: 3,
    name: "Kausar Hasan",
    role: "Traveller",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Before we define any approach, we need to define the brands overall goal. We then need to dive."
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Traveller",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Before we define any approach, we need to define the brands overall goal. We then need to dive."
  },
  {
    id: 5,
    name: "Michael Ross",
    role: "Traveller",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Before we define any approach, we need to define the brands overall goal. We then need to dive."
  },
  {
    id: 6,
    name: "Sophia Lee",
    role: "Traveller",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Before we define any approach, we need to define the brands overall goal. We then need to dive."
  }
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * cardsToShow,
    currentIndex * cardsToShow + cardsToShow
  );

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-sm font-medium tracking-wider text-gray-500 mb-2">TESTIMONIAL</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">What our clients say</h3>
            <p className="text-gray-500 text-base sm:text-lg max-w-md">
              Create a visual identity for your company and an overall brand.
            </p>
          </div>
          {/* Arrows */}
          <div className="flex gap-2 mt-4 lg:mt-0">
            <button
              onClick={prevSlide}
              className="bg-white rounded-lg p-3 shadow hover:bg-gray-100"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white rounded-lg p-3 shadow hover:bg-gray-100"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-300">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition duration-300 h-full"
            >
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow"
                />
              </div>
              <h4 className="text-lg font-semibold text-center text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-gray-500 text-center mb-3">{testimonial.role}</p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 text-center">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
