import katana from '../../assets/Katana.svg';
import travava from '../../assets/travava.svg';
import bigui from '../../assets/bigui.svg';
import booking from '../../assets/Booking.com.svg';
import jakmaen from '../../assets/Jakmaen.svg';

const TourPartners = () => {
  const partners = [
    {
      name: 'Katana',
      imageUrl: katana, 
      className: 'w-32'
    },
    {
      name: 'Travava',
      imageUrl: travava, 
      className: 'w-32'
    },
    {
      name: 'Bigui',
      imageUrl: bigui, 
      className: 'w-24'
    },
    {
      name: 'Booking.com',
      imageUrl: booking, 
      className: 'w-36'
    },
    {
      name: 'Jakmaen',
      imageUrl: jakmaen, 
      className: 'w-32'
    }
  ];

  return (
    <div className="w-full py-20 px-4">
      {/* Text Section */}
      <div className="max-w-5xl mx-auto text-center mt-140 sm:mt-20 lg:mt-24">
        <h2 className="text-4xl font-bold mb-3">Our Tour Partners</h2>
        <p className="text-gray-500 text-lg mb-16 max-w-xl mx-auto">
          There are many variations of passages of Lorem Ipsum available, but 
          the majority have suffered alteration.
        </p>
      </div>

      {/* Logos Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center">
            <img 
              src={partner.imageUrl} 
              alt={partner.name}
              className={`${partner.className} object-contain`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPartners;