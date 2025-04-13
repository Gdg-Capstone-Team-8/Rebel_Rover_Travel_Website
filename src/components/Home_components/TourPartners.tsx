import katana from "/assets/Katana.svg";
import travava from "/assets/travava.svg";
import bigui from "/assets/bigui.svg";
import booking from "/assets/Booking.com.svg";
import jakmaen from "/assets/Jakmaen.svg";

const TourPartners = () => {
  const partners = [
    {
      name: "Katana",
      imageUrl: katana,
      className: "w-32",
    },
    {
      name: "Travava",
      imageUrl: travava,
      className: "w-32",
    },
    {
      name: "Bigui",
      imageUrl: bigui,
      className: "w-24",
    },
    {
      name: "Booking.com",
      imageUrl: booking,
      className: "w-36",
    },
    {
      name: "Jakmaen",
      imageUrl: jakmaen,
      className: "w-32",
    },
  ];

  return (
    <div className="w-full px-4 py-20">
      {/* Text Section */}
      <div className="mx-auto mt-140 max-w-5xl text-center sm:mt-20 lg:mt-24">
        <h2 className="mb-3 text-4xl font-bold">Our Tour Partners</h2>
        <p className="mx-auto mb-16 max-w-xl text-lg text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>

      {/* Logos Section */}
      <div className="marquee mx-auto grid max-w-5xl grid-cols-2 justify-items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="marquee-content flex items-center justify-center"
          >
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
