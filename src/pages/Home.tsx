import Navbar from "../components/Navbar"; 
import WhyChooseUs from "../components/Home_components/WhyChooseUs";
import TestimonialSection from "../components/Home_components/Testimonial"; 
import TourPartners from "../components/Home_components/TourPartners"; 

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <WhyChooseUs />
      <div className="bg-white py-30"> 
        <TourPartners />
      </div>
      <div className="bg-white py-1 -mt-40"> 
        <TestimonialSection />
      </div>
    </div>
  );
};

export default Home;