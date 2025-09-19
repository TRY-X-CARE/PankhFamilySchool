
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';


const categories = [
  {
    name: 'Education & Skill Development',
    key: 'education',
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
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
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    name: 'Environmental Conservation',
    key: 'environment',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
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
