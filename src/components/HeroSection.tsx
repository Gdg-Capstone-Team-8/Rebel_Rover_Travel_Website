import heroImage from '../assets/homeimage.jpg';

export default function HeroSection() {
  return (
    <section className="relative">
    {/* Navbar Spacer - matches exact navbar height */}
    <div className="h-[80px]"></div>

    {/* Hero Content Container */}
    <div className="relative h-[60vh] md:h-[80vh] w-full">
      {/* Full-height Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Travel destinations"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/30 flex flex-col">
        {/* Text Content - Left Aligned */}
        <div className="flex-1 flex flex-col items-start justify-center pl-8 md:pl-16 lg:pl-24 pt-12">
          <h1 className="text-3xl font-bold text-white mb-2 md:text-5xl md:mb-3 text-left">
            Book Your Next Adventure Right Here
          </h1>
          <p className="text-white text-sm md:text-base max-w-md text-left">
          Explore the world with what you love beautiful and natural beauty.
          </p>
        </div>

        {/* Search Box - Left Aligned with Rounded Elements */}
        <div className="w-full flex justify-start pl-8 md:pl-16 lg:pl-24 pb-12">
          <div className="w-full max-w-[500px] h-[50px] bg-white bg-opacity-90 rounded-full shadow-md flex items-center px-4 gap-2">
            {/* Location */}
            <div className="flex-1">
              <select className="w-full bg-transparent text-gray-800 text-xs focus:outline-none py-2">
                <option>Location</option>
                <option>Bali</option>
                <option>Paris</option>
                <option>Tokyo</option>
              </select>
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-gray-300"></div>

            {/* Date */}
            <div className="flex-1">
              <input 
                type="date" 
                className="w-full bg-transparent text-gray-800 text-xs focus:outline-none py-2" 
              />
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-gray-300"></div>

            {/* People */}
            <div className="flex-1">
              <select className="w-full bg-transparent text-gray-800 text-xs focus:outline-none py-2">
                <option>People</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-4 rounded-full transition-colors">
              Search
            </button>
            
          </div>
    
        </div>
        
      </div>
      <p className="text-xs text-gray-500 mt-1 w-full max-w-[500px] text-center">
              Popular Places: Bali, Istanbul, Rome, Paris
            </p>
    </section>
  );
}