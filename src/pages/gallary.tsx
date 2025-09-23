
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';


const categories = [
  {
    name: 'Education & Skill Development',
    key: 'education',
    images: [
      'assets/1.jpg',
      'assets/2.jpg',
      'assets/3.jpg',
      'assets/4.jpg',
      'assets/5.jpg',
      'assets/6.jpg',
      'assets/7.jpg',
      'assets/19.jpeg',
      'assets/20.jpeg',
      'assets/21.jpeg',
      'assets/22.jpeg',
      'assets/23.jpeg',
      'assets/25.jpeg',
      'assets/36.jpeg',
      'assets/37.jpeg',
      'assets/38.jpeg',
      'assets/46.jpeg',
      'assets/47.jpeg',
      'assets/48.jpeg',
      'assets/49.jpeg',
      'assets/50.jpeg',
      'assets/51.jpeg',
      'assets/76.jpeg',
      'assets/77.jpeg',
      'assets/78.jpeg',
      'assets/79.jpeg',
      'assets/80.jpeg',
      'assets/81.jpeg',
      'assets/82.jpeg',
      'assets/83.jpeg',
      'assets/84.jpeg',
      'assets/85.jpeg',
      'assets/86.jpeg',
      'assets/92.jpeg',
      'assets/106.jpeg',
      'assets/107.jpeg',
      'assets/108.jpeg',
    ],
  },
  {
    name: 'Healthcare & Medical Support',
    key: 'healthcare',
    images: [
      'assets/93.jpeg',
      'assets/94.jpeg',
      'assets/95.jpeg',
      'assets/96.jpeg',
      'assets/97.jpeg',
      'assets/98.jpeg',
      'assets/99.jpeg',
    ],
  },
  {
    name: 'Child Welfare',
    key: 'women',
    images: [
      'assets/24.jpeg',
      'assets/26.jpeg',
      'assets/27.jpeg',
      'assets/28.jpeg',
      'assets/29.jpeg',
      'assets/30.jpeg',
      'assets/31.jpeg',
      'assets/32.jpeg',
      'assets/33.jpeg',
      'assets/34.jpeg',
      'assets/35.jpeg',
      'assets/39.jpeg',
      'assets/40.jpeg',
      'assets/41.jpeg',
      'assets/42.jpeg',
      'assets/44.jpeg',
      'assets/44.jpeg',
      'assets/52.jpeg',
      'assets/53.jpeg',
      'assets/54.jpeg',
      'assets/55.jpeg',
      'assets/56.jpeg',
      'assets/57.jpeg',
      'assets/58.jpeg',
      'assets/59.jpeg',
      'assets/60.jpeg',
      'assets/71.jpeg',
      'assets/72.jpeg',
      'assets/73.jpeg',
      'assets/74.jpeg',
      'assets/75.jpeg',
      'assets/87.jpeg',
      'assets/88.jpeg',
      'assets/89.jpeg',
      'assets/90.jpeg',
      'assets/91.jpeg',
    ],
  },
  {
    name: 'Environmental Conservation',
    key: 'environment',
    images: [
      'assets/8.jpeg',
      'assets/9.jpeg',
      'assets/10.jpeg',
      'assets/11.jpeg',
      'assets/12.jpeg',
      'assets/109.jpeg',
      'assets/110.jpeg',
      'assets/111.jpeg;',
      'assets/112.jpeg',
      'assets/113.jpeg',
      'assets/114.jpeg',
      'assets/115.jpeg',
      'assets/116.jpeg',
      'assets/117.jpeg',
      'assets/118.jpeg',
      'assets/119.jpeg',
      'assets/120.jpeg',
      'assets/121.jpeg',
      'assets/122.jpeg',
    ],
  },
  {
    name: 'Social Awareness & Reform',
    key: 'social',
    images: [
      'assets/13.jpeg',
      'assets/14.jpeg',
      'assets/15.jpeg',
      'assets/16.jpeg',
      'assets/17.jpeg',
      'assets/18.jpeg',
    ],
  },
  {
    name: 'Health And Fitness Camps',
    key: 'fitness',
    images: [
      'assets/100.jpeg',
      'assets/101.jpeg',
      'assets/102.jpeg',
      'assets/103.jpeg',
      'assets/104.jpeg',
      'assets/105.jpeg',
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
