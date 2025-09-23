
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';


const categories = [
  {
    name: 'Education & Skill Development',
    key: 'education',
    images: [
      'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758609867/IMG-20250923-WA0015_zl341s.jpg',
      'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758609867/IMG-20250923-WA0020_ealqxe.jpg',
      'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758609867/IMG-20250923-WA0019_bpzbi6.jpg',
     'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758609867/IMG-20250923-WA0016_t1bkuf.jpg',
     'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758609867/IMG-20250923-WA0021_iorvma.jpg',
     'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302671/WhatsApp_Image_2025-05-28_at_3.41.57_PM_1_luqvsr.jpg' ,
     'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302672/WhatsApp_Image_2025-05-28_at_3.41.33_PM_3_klek5n.jpg',
     'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302671/WhatsApp_Image_2025-05-28_at_3.41.33_PM_ewimfm.jpg',

    ],
  },
  {
    name: 'Healthcare & Medical Support',
    key: 'healthcare',
    images: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    name: 'Women & Child Welfare',
    key: 'women',
    images: [
      'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302669/WhatsApp_Image_2025-05-28_at_3.42.44_PM_3_wok5zm.jpg',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    name: 'Environmental Conservation',
    key: 'environment',
    images: [
      'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302660/WhatsApp_Image_2025-05-28_at_3.40.25_PM_2_vvwiwp.jpg',
      'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302662/WhatsApp_Image_2025-05-28_at_3.40.26_PM_y4xtxe.jpg',
      'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302664/WhatsApp_Image_2025-05-28_at_3.40.25_PM_b1rr5a.jpg',
      'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302664/WhatsApp_Image_2025-05-28_at_3.40.25_PM_1_v4loqr.jpg',
      'https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302668/WhatsApp_Image_2025-05-28_at_3.40.26_PM_1_oaze3r.jpg',
    ],
  },
  {
    name: 'Social Awareness & Reform',
    key: 'social',
    images: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    name: 'Health And Fitness Camps',
    key: 'fitness',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    ],
  },
];


const Gallery: React.FC = () => {
  const location = useLocation();
  const getCategoryFromQuery = () => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    return categories.some((c) => c.key === cat) ? cat : categories[0].key;
  };
  const [selected, setSelected] = useState(getCategoryFromQuery());

  useEffect(() => {
    setSelected(getCategoryFromQuery());
    // eslint-disable-next-line
  }, [location.search]);

  const current = categories.find((cat) => cat.key === selected);

  return (
    <>
  <Header />
  {/* Translucent black strip under navbar */}
  <div className="w-full h-20 bg-black/40 backdrop-blur-sm z-40 relative" />
      <section className="min-h-screen bg-background py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">Gallery</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelected(cat.key)}
            className={`px-5 py-2 rounded-full font-medium border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${selected === cat.key ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary/30 hover:bg-primary/10'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {current?.images.map((src, idx) => (
            <div
              key={idx}
              className="mb-6 break-inside-avoid rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={src}
                alt={`${current.name} ${idx + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default Gallery;
