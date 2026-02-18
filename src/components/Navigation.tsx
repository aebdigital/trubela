'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'DOMOV' },
    { href: '/sluzby/zavesy-a-zaclony', label: 'SLUŽBY' },
    { href: '/referencie', label: 'REFERENCIE' },
    { href: '/#o-nas', label: 'O NÁS' },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
      <div className="w-[95vw] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-white">
            TRUBELA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-white/70 ${isActive(link.href) ? 'text-white font-medium' : 'text-white/90'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-white text-black px-6 py-2.5 text-sm tracking-wide hover:bg-white/90 transition-colors rounded-full font-medium"
            >
              KONTAKT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20 bg-black/80 backdrop-blur-sm -mx-6 px-6 rounded-b-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm tracking-wide text-white/80 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="bg-white text-black px-6 py-3 text-sm tracking-wide hover:bg-white/90 transition-colors rounded-full text-center mt-2 font-medium"
              >
                KONTAKT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
