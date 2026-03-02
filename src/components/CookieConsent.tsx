'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        essential: true,
        statistical: true,
        marketing: true
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        } else {
            setPreferences(JSON.parse(consent));
        }

        // Listen for custom event to open settings from footer
        const handleOpenSettings = () => {
            setShowSettings(true);
            setIsVisible(true);
        };

        window.addEventListener('openCookieSettings', handleOpenSettings);
        return () => window.removeEventListener('openCookieSettings', handleOpenSettings);
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = { essential: true, statistical: true, marketing: true };
        setPreferences(allAccepted);
        localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
        setIsVisible(false);
        setShowSettings(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem('cookie-consent', JSON.stringify(preferences));
        setIsVisible(false);
        setShowSettings(false);
    };

    const togglePreference = (key: keyof typeof preferences) => {
        if (key === 'essential') return; // Cannot toggle essential
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 z-[9999] md:left-auto md:max-w-md"
                >
                    <div className="bg-white text-black p-8 rounded-3xl shadow-2xl border border-gray-100">
                        {!showSettings ? (
                            <>
                                <h3 className="text-xl font-bold mb-4 font-heading">Súhlas so súbormi cookies</h3>
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                    Používame cookies, aby sme vám poskytli najlepší zážitok na našom webe. Kliknutím na „Prijať všetko" súhlasíte s ich používaním. Svoje predvoľby môžete kedykoľvek zmeniť.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={handleAcceptAll}
                                        className="w-full bg-black text-white py-4 rounded-full text-sm font-bold tracking-wider hover:bg-gray-800 transition-colors uppercase"
                                    >
                                        Prijať všetko
                                    </button>
                                    <button
                                        onClick={() => setShowSettings(true)}
                                        className="w-full bg-gray-100 text-black py-4 rounded-full text-sm font-bold tracking-wider hover:bg-gray-200 transition-colors uppercase"
                                    >
                                        Nastavenia
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className="text-xl font-bold mb-4 font-heading">Nastavenia cookies</h3>
                                <div className="space-y-6 mb-8">
                                    {/* Essential */}
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="font-bold text-sm">Nevyhnutné cookies</p>
                                            <p className="text-xs text-gray-500">Potrebné pre fungovanie webu (vždy zapnuté)</p>
                                        </div>
                                        <div className="relative w-12 h-6 bg-black rounded-full transition-colors cursor-not-allowed opacity-50">
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" />
                                        </div>
                                    </div>

                                    {/* Statistical */}
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="font-bold text-sm">Štatistické cookies</p>
                                            <p className="text-xs text-gray-500">Pomáhajú nám zlepšovať web anonymným zberom údajov</p>
                                        </div>
                                        <button
                                            onClick={() => togglePreference('statistical')}
                                            className={`relative w-12 h-6 rounded-full transition-colors ${preferences.statistical ? 'bg-black' : 'bg-gray-200'}`}
                                        >
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.statistical ? 'translate-x-7' : 'translate-x-1'}`} />
                                        </button>
                                    </div>

                                    {/* Marketing */}
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="font-bold text-sm">Marketingové cookies</p>
                                            <p className="text-xs text-gray-500">Umožňujú nám zobrazovať relevantnejšie ponuky</p>
                                        </div>
                                        <button
                                            onClick={() => togglePreference('marketing')}
                                            className={`relative w-12 h-6 rounded-full transition-colors ${preferences.marketing ? 'bg-black' : 'bg-gray-200'}`}
                                        >
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.marketing ? 'translate-x-7' : 'translate-x-1'}`} />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={handleSavePreferences}
                                        className="w-full bg-black text-white py-4 rounded-full text-sm font-bold tracking-wider hover:bg-gray-800 transition-colors uppercase"
                                    >
                                        Uložiť nastavenia
                                    </button>
                                    <button
                                        onClick={() => setShowSettings(false)}
                                        className="w-full text-gray-500 text-xs hover:text-black transition-colors underline"
                                    >
                                        Späť na základný súhlas
                                    </button>
                                </div>
                            </>
                        )}
                        <div className="mt-4 text-center">
                            <Link
                                href="/ochrana-osobnych-udajov"
                                className="text-[10px] text-gray-400 hover:text-black underline transition-colors"
                                onClick={() => setIsVisible(false)}
                            >
                                Viac informácií o ochrane osobných údajov
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
