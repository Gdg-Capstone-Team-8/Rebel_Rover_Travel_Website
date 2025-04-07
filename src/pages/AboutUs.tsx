import { Founder } from "@/components/About/Founder";
import { Gallery } from "@/components/About/Gallery";
import { Mission } from "@/components/About/Mission";
import { Statistics } from "@/components/About/Statistics";
import { Title } from "@/components/About/Title";

const AboutUs = () => {
  return (
    <>
     {/* Title component */}
    <Title/>

     {/* Mission, vision, goals  */}
    <Mission/>

    {/* founder */}
    <Founder/>

     {/* Statistics */}
    <Statistics/>

     {/* Gallery */}
    <Gallery/>
</>
  );
};

export default AboutUs;
