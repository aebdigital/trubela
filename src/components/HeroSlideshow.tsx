'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const heroImages = [
  '/servicecards/zavesy%20a%20zaclony.jpg',
  '/servicecards/tieniaca-technika.jpg',
  '/servicecards/starozitnosti.jpg',
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className="absolute inset-0 w-full h-[120%] -top-[10%]"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <Image
              src={src}
              alt="Trubela interiér"
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-[95vw] mx-auto px-6 lg:px-8 pt-20">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white max-w-4xl leading-tight mb-6">
          TVORÍME DOMOV PODĽA VAŠICH PREDSTÁV
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl text-shadow-sm">
          Profesionálne čalúnnické a dekoratérske služby s tradíciou a skúsenosťami od roku 1994.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/#sluzby"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('sluzby')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-black px-8 py-4 rounded-full font-medium tracking-wide hover:bg-gray-100 transition-colors"
          >
            NAŠE SLUŽBY
          </Link>
          <Link
            href="/referencie"
            className="border border-white text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/10 transition-colors"
          >
            REFERENCIE
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 rounded-full transition-all duration-500 ${index === current ? 'w-10 bg-white' : 'w-4 bg-white/40'
              }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
