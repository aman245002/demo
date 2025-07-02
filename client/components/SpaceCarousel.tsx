import { useState, useEffect } from "react";

const SpaceCarousel = () => {
  const spaceImages = [
    {
      url: "https://images.pexels.com/photos/32732569/pexels-photo-32732569.png",
      alt: "Stunning image of the Lagoon Nebula showcasing cosmic beauty and celestial wonders",
    },
    {
      url: "https://images.pexels.com/photos/17817368/pexels-photo-17817368.jpeg",
      alt: "Long exposure shot of the Milky Way with captivating light trails",
    },
    {
      url: "https://images.pexels.com/photos/586061/pexels-photo-586061.png",
      alt: "Rocket launch into dramatic evening sky",
    },
    {
      url: "https://images.pexels.com/photos/23793/rocket-launch-space-discovery.jpg",
      alt: "Spacecraft docked at the ISS above Earth",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === spaceImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [spaceImages.length]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {spaceImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {spaceImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaceCarousel;
