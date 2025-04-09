import HeroSection from "@/components/Home_components/HeroSection.tsx";
import ScrollCards from "@/components/Home_components/FeaturedDestinations";
import TestimonialSection from "@/components/Home_components/Testimonial.tsx";
import TourPartners from "@/components/Home_components/TourPartners.tsx";
import WhyChooseUs from "@/components/Home_components/WhyChooseUs.tsx";

const Home = () => {
  return (
    <main>
      <div className="mb-20">
        <HeroSection />
        <ScrollCards />
      </div>
      <WhyChooseUs />
      <div className="bg-white py-30">
        <TourPartners />
      </div>
      <div className="-mt-40 bg-white py-1">
        <TestimonialSection />
      </div>
      {/* Other page content */}
    </main>
  );
};

export default Home;
