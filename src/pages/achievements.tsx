import React from 'react';
import Header from '@/components/Header';

interface Achievement {
  title: string;
  date: string;
  description: string;
  details?: string;
}

const achievements: Achievement[] = [
  {
    title: 'Private School Admissions for Underprivileged Children',
    date: 'May 2025',
    description:
      'We successfully admitted many underprivileged children to private schools and are proudly supporting all their educational expenses.',
    details:
      'Our NGO is dedicated to providing quality education and skill development to underprivileged children, helping them build a brighter future. We believe every child deserves the best opportunities, and we are committed to making this a reality for as many as possible.',
  },
  // Add more achievements here in the same format
];

const Achievements: React.FC = () => {
  return (
    <>
  <Header />
  {/* Translucent black strip under navbar */}
  <div className="w-full h-20 bg-black/40 backdrop-blur-sm z-40 relative" />
      <section className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">Our Achievements</h2>
        <div className="flex flex-col gap-8">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl shadow-md border border-accent/20 p-6 md:p-8 transition hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-accent mb-1 md:mb-0">{ach.title}</h3>
                <span className="text-sm text-primary/80 font-medium md:ml-4">{ach.date}</span>
              </div>
              <p className="text-lg text-foreground mb-2">{ach.description}</p>
              {ach.details && (
                <p className="text-base text-muted-foreground">{ach.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default Achievements;
