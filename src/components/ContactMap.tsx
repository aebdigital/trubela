'use client';

import { useState } from 'react';

export default function ContactMap() {
    const [isInteractive, setIsInteractive] = useState(false);

    return (
        <div
            className="relative aspect-video w-full bg-gray-200 overflow-hidden mt-12 rounded-lg"
            onClick={() => setIsInteractive(true)}
            onMouseLeave={() => setIsInteractive(false)}
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.8636372878!2d17.18889!3d48.12889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c88a78d60f83b%3A0x8701ca37d7a2fe4b!2sTRUBELA!5e0!3m2!1ssk!2ssk!4v1700000000000!5m2!1ssk!2ssk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`w-full h-full transition-opacity duration-300 ${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`}
            />

            {!isInteractive && (
                <div className="absolute inset-0 bg-transparent flex items-center justify-center group cursor-pointer z-10">
                    <div className="bg-white/90 backdrop-blur-sm text-black px-6 py-3 rounded-full font-medium shadow-lg transition-transform transform group-hover:scale-105 border border-gray-200">
                        Kliknite pre interakciu s mapou
                    </div>
                </div>
            )}
        </div>
    );
}
