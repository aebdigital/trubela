'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
        <div className="w-[90vw] mx-auto px-0 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
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
              className="md:hidden p-2 z-[60] relative"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu & Backdrop */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Dimmed Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] md:hidden"
              />

              {/* Mobile Menu Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="md:hidden fixed top-20 left-6 right-6 z-[60] bg-white text-black p-8 rounded-[32px] shadow-2xl"
              >
                <div className="flex flex-col gap-6 items-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-lg tracking-widest hover:text-gray-500 transition-colors py-2 uppercase font-bold font-heading ${isActive(link.href) ? 'text-black' : 'text-gray-400'
                        }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/kontakt"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full bg-black text-white py-5 text-sm tracking-[0.2em] hover:bg-gray-800 transition-all rounded-full text-center mt-4 font-bold shadow-lg shadow-black/10 uppercase"
                  >
                    Kontakt
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
