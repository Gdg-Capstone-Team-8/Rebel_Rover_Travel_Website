// src/pages/Home.tsx
import HeroSection from '../components/HeroSection.tsx';
import ScrollCards from '../components/FeaturedDestinations.tsx';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScrollCards />
      {/* Other page content */}
    </main>
  );
}

/*const Home = () => {
  return <div className="">HomePage</div>;
};

export default Home;*/
