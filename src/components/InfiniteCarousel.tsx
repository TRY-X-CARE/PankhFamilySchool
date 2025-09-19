import React from "react";

const carouselImages = [
  "https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302672/WhatsApp_Image_2025-05-28_at_3.41.33_PM_3_klek5n.jpg",
  "https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302671/WhatsApp_Image_2025-05-28_at_3.42.43_PM_xmwfmj.jpg",
  "https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302671/WhatsApp_Image_2025-05-28_at_3.41.33_PM_ewimfm.jpg",
  "https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302671/WhatsApp_Image_2025-05-28_at_3.41.57_PM_1_luqvsr.jpg",
  "https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302669/WhatsApp_Image_2025-05-28_at_3.42.43_PM_1_rfytz8.jpg",
  "https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302669/WhatsApp_Image_2025-05-28_at_3.42.44_PM_3_wok5zm.jpg",
];

const InfiniteCarousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-6 bg-background">
      <div className="relative">
  <div className="flex gap-5 animate-infinite-scroll whitespace-nowrap min-w-max">
          {carouselImages.concat(carouselImages).map((src, idx) => (
            <div
              key={idx}
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-xl overflow-hidden shadow bg-white"
            >
              <img
                src={src}
                alt={`carousel-img-${idx}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfiniteCarousel;
