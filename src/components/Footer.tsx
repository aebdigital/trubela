'use client';

import Link from 'next/link';

export default function Footer() {
  const openCookieSettings = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('openCookieSettings'));
  };

  return (
    <footer className="bg-black text-white">
      <div className="w-[90vw] mx-auto px-0 lg:px-8 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8">Kontakt</h2>
            <div className="space-y-4 text-gray-300">
              <p className="font-medium text-white">Trubela s. r. o.</p>
              <div>
                <p>Podzáhradná 9</p>
                <p>Podunajské Biskupice</p>
                <p>821 07 Bratislava</p>
              </div>
              <div className="pt-4 text-sm opacity-60">
                <p>IČO: 53723147</p>
                <p>DIČ: 2121529047</p>
                <p>IČ DPH: SK2121529047</p>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
                <Link href="/ochrana-osobnych-udajov" className="underline hover:text-white transition-colors text-sm">
                  Ochrana osobných údajov
                </Link>
                <button
                  onClick={openCookieSettings}
                  className="underline hover:text-white transition-colors text-sm text-left"
                >
                  Cookies
                </button>
              </div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end md:items-start text-center">
            <a
              href="tel:+421905204946"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-full font-medium"
            >
              0905 204 946
            </a>
            <a
              href="mailto:TRUBELA@TRUBELA.SK"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-full font-medium"
            >
              TRUBELA@TRUBELA.SK
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; Copyright Trubela s. r. o. {new Date().getFullYear()} &bull; Všetky práva vyhradené</p>
          <p>
            Tvorba webu - <a href="https://aebdigital.sk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">AEB Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
