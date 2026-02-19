'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Lightbox from './Lightbox';

interface ServiceGalleryProps {
  images: string[];
  title: string;
}

export default function ServiceGallery({ images, title }: ServiceGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mt-12">
        <p className="text-sm tracking-widest text-gray-400 mb-4">REFERENCIE</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden bg-gray-200 group cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={src}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
          <Link
            href="/referencie"
            className="relative aspect-square overflow-hidden bg-black flex items-center justify-center group hover:bg-gray-900 transition-colors"
          >
            <div className="text-center px-3">
              <p className="text-white font-heading text-sm lg:text-base font-bold mb-1">VIAC REFERENCII</p>
              <svg className="w-5 h-5 text-white mx-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
    </>
  );
}
