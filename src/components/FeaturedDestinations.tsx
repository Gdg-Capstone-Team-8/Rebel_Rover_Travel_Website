import { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import baliImage from '../assets/bali.jpg';
import parisImage from '../assets/paris.jpg';
import queenstownImage from '../assets/queenstown.jpg';
import seoulImage from '../assets/southkorea.jpg';
import phillipines from '../assets/phillipines.jpg';

const destinations = [
  {
    id: '1',
    name: "Bali, Indonesia",
    image: baliImage,
    highlight: "Island Paradise",
    description: "Bali is a tropical paradise known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is home to religious sites like the cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur, and Nusa Dua are popular resort towns."
  },
  {
    id: '2',
    name: "Paris, France", 
    image: parisImage,
    highlight: "Romantic City",
    description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy, and culture. Its picturesque 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
  },
  {
    id: '3',
    name: "Queenstown, NZ",
    image: queenstownImage,
    highlight: "Adventure Capital",
    description: "Queenstown, on New Zealand's South Island, is set against the dramatic Southern Alps and renowned for its adventure sports. It's also a base for exploring the region's vineyards and historic mining towns. There's bungee jumping off Kawarau Gorge Suspension Bridge and jet-boating on the Shotover and Dart rivers. Nearby, ski resorts include The Remarkables and Coronet Peak."
  },
  {
    id: '4',
    name: "Seoul, South Korea",
    image: seoulImage,
    highlight: "K-Pop Culture", 
    description: "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways, and pop culture meet Buddhist temples, palaces, and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine trees."
  },
  {
    id: '5',
    name: "Philippines",
    image: phillipines,
    highlight: "Beautiful forest",
    description: "The Philippines is an archipelagic country in Southeast Asia known for its stunning beaches, biodiverse marine life, and lush rainforests. The country boasts over 7,000 islands, each offering unique experiences from the chocolate hills of Bohol to the underground river in Palawan. The Philippines is also famous for its vibrant festivals, delicious cuisine, and warm hospitality."
  }
];

export default function ScrollCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centeredId, setCenteredId] = useState(destinations[0].id);
  const [selectedDestination, setSelectedDestination] = useState<null | typeof destinations[0]>(null);

  const scrollToCard = (id: string) => {
    const container = containerRef.current;
    if (!container) return;
    
    const card = container.querySelector(`[data-id="${id}"]`) as HTMLElement;
    if (card) {
      const containerWidth = container.offsetWidth;
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      
      container.scrollTo({
        left: cardLeft - (containerWidth / 2) + (cardWidth / 2),
        behavior: 'smooth'
      });
    }
  };

  const showPrevious = () => {
    const currentIndex = destinations.findIndex(d => d.id === centeredId);
    const prevIndex = (currentIndex - 1 + destinations.length) % destinations.length;
    scrollToCard(destinations[prevIndex].id);
  };

  const showNext = () => {
    const currentIndex = destinations.findIndex(d => d.id === centeredId);
    const nextIndex = (currentIndex + 1) % destinations.length;
    scrollToCard(destinations[nextIndex].id);
  };

  const handleExplore = (destination: typeof destinations[0]) => {
    setSelectedDestination(destination);
  };

  const closeDescription = () => {
    setSelectedDestination(null);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      
      let closestCardId = centeredId;
      let minDistance = Infinity;

      container.childNodes.forEach(node => {
        const card = node as HTMLElement;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        
        // Only consider cards that are at least 40% visible
        const isVisible = (
          cardRect.right > containerRect.left + (containerRect.width * 0.4) && 
          cardRect.left < containerRect.right - (containerRect.width * 0.4)
        );

        if (isVisible && distance < minDistance) {
          minDistance = distance;
          closestCardId = card.dataset.id || centeredId;
        }
      });

      if (closestCardId !== centeredId) {
        setCenteredId(closestCardId);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [centeredId]);

  return (
    <div className="max-w-7xl mx-auto p-8 relative">
      {/* Description Modal */}
      {selectedDestination && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Transparent container with the destination content */}
    <div 
      className="relative bg-transparent rounded-xl max-w-2xl w-full"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      {/* Destination image with transparent backdrop */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={selectedDestination.image}
          alt={selectedDestination.name}
          className="w-full h-auto max-h-[70vh] object-cover"
        />
        
        {/* Details overlay with semi-transparent background */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedDestination.name}</h3>
                <p className="text-gray-700">{selectedDestination.highlight}</p>
              </div>
              <button 
                onClick={closeDescription}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">{selectedDestination.description}</p>
            
            <button 
              onClick={closeDescription}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    
    {/* Clickable transparent overlay to close */}
    <div 
      className="absolute inset-0 bg-transparent"
      onClick={closeDescription}
    />
  </div>
)}

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={showPrevious}
          className="p-2 rounded-lg bg-white shadow hover:bg-gray-100 transition-colors"
          aria-label="Previous destination"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Explore Destinations</h2>
          <button className="text-blue-600 hover:text-blue-800 flex items-center justify-center mx-auto transition-colors">
            View all <ArrowRight className="ml-1 w-4 h-4" />
          </button>
          <p className="text-sm text-gray-500 mt-1">Explore the world with what you love beautiful natural beauty</p>
        </div>
        
        <button 
          onClick={showNext}
          className="p-2 rounded-lg bg-white shadow hover:bg-gray-100 transition-colors"
          aria-label="Next destination"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Cards Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-4 pb-6 scroll-snap-x px-[calc(50%-6rem)]"
        style={{ 
          scrollSnapType: 'x mandatory',
          scrollPadding: '0 calc(50% - 20rem)'
        }}
      >
        {destinations.map(destination => (
          <div
            key={destination.id}
            data-id={destination.id}
            className={`flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
              centeredId === destination.id ? 'scale-100 bg-white' : 'scale-95 bg-gray-50'
            }`}
            style={{ scrollSnapAlign: 'center' }}
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            
            <div className={`p-5 transition-opacity duration-300 ${
              centeredId === destination.id ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}>
              <h3 className="text-xl font-bold">{destination.name}</h3>
              <p className="text-gray-600 mt-2">{destination.highlight}</p>
              <button 
                onClick={() => handleExplore(destination)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}