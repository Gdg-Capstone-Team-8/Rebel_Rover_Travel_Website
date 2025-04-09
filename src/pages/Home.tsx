import HeroSection from '../components/HeroSection.tsx';
import ScrollCards from '../components/FeaturedDestinations.tsx';
import TestimonialSection from '@/components/Home_components/Testimonial.tsx';
import TourPartners from '@/components/Home_components/TourPartners.tsx';
import WhyChooseUs from '@/components/Home_components/WhyChooseUs.tsx';


 const Home = () => {
  return (
    <main>
      <HeroSection />
      <ScrollCards />
      <WhyChooseUs />
      <div className="bg-white py-30"> 
        <TourPartners />
      </div>
      <div className="bg-white py-1 -mt-40"> 
        <TestimonialSection />
      </div>
      {/* Other page content */}
    </main>
  );

}

export default Home;