'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactMap from '@/components/ContactMap';
import CTASection from '@/components/CTASection';
import { sendContactEmail } from './actions';
import { motion, AnimatePresence } from 'framer-motion';

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Vyskytla sa neočakávaná chyba. Skúste to prosím neskôr.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Nepodarilo sa spojiť so serverom.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/servicecards/tieniaca-technika.jpg"
            alt="Kontakt background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-[90vw] mx-auto px-4 lg:px-8 mt-20">
          <p className="text-sm tracking-widest text-gray-300 mb-4 uppercase">Kontakt</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
            Spojte Sa S Nami
          </h1>
          <p className="mt-6 text-gray-200 max-w-2xl text-lg">
            Radi Vám pomôžeme s Vašimi projektmi. Kontaktujte nás telefonicky, emailom alebo nás navštívte v našom showroome.
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-16 bg-white">
        <div className="w-[90vw] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-8">Kontaktné údaje</h2>

              <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Sub-Column */}
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold mb-1">Adresa</p>
                      <p className="text-gray-600">Podzáhradná 9</p>
                      <p className="text-gray-600">Podunajské Biskupice</p>
                      <p className="text-gray-600">821 07 Bratislava</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold mb-1">Telefón</p>
                      <a href="tel:+421905204946" className="text-gray-600 hover:text-black transition-colors font-medium">
                        0905 204 946
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold mb-1">Email</p>
                      <a href="mailto:TRUBELA@TRUBELA.SK" className="text-gray-600 hover:text-black transition-colors font-medium">
                        TRUBELA@TRUBELA.SK
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Sub-Column */}
                <div className="space-y-8">
                  {/* Business Info */}
                  <div>
                    <p className="font-heading font-bold mb-4">Fakturačné údaje</p>
                    <div className="text-gray-600 space-y-1">
                      <p className="font-medium text-black">Trubela s. r. o.</p>
                      <p>IČO: 53723147</p>
                      <p>DIČ: 2121529047</p>
                      <p>IČ DPH: SK2121529047</p>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div>
                    <p className="font-heading font-bold mb-4">Otváracie hodiny</p>
                    <div className="space-y-3 text-gray-600">
                      <div>
                        <span className="font-medium text-black">Pondelok - Piatok</span>
                        <p>8:00 - 12:00 &nbsp; 13:00 - 17:00</p>
                      </div>
                      <div>
                        <span className="font-medium text-black">Sobota, Nedeľa</span>
                        <p>Zatvorené</p>
                      </div>
                    </div>
                    <p className="mt-6 text-sm text-gray-400 italic bg-gray-50 p-4 border-l-2 border-black rounded-r-lg">
                      Pred návštevou je nutné si dohodnúť termín telefonicky alebo emailom.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Component */}
              <div className="mt-12 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-gray-100 h-[400px]">
                <ContactMap />
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form-container">
              <h2 className="font-heading text-2xl font-bold mb-8">Napíšte nám</h2>

              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-100 p-10 rounded-3xl text-center"
                  >
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Správa bola odoslaná!</h3>
                    <p className="text-green-700 mb-8">Ďakujeme za Váš záujem. Čoskoro Vás budeme kontaktovať.</p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="text-green-800 font-bold underline hover:no-underline transition-all"
                    >
                      Poslať ďalšiu správu
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                          Meno *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          disabled={isSubmitting}
                          className="w-full border border-gray-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50 disabled:opacity-50"
                          placeholder="Vaše meno"
                        />
                      </div>
                      <div>
                        <label htmlFor="surname" className="block text-sm font-bold text-gray-700 mb-2">
                          Priezvisko *
                        </label>
                        <input
                          type="text"
                          id="surname"
                          name="surname"
                          required
                          disabled={isSubmitting}
                          className="w-full border border-gray-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50 disabled:opacity-50"
                          placeholder="Vaše priezvisko"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          disabled={isSubmitting}
                          className="w-full border border-gray-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50 disabled:opacity-50"
                          placeholder="vas@email.sk"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                          Telefón
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          disabled={isSubmitting}
                          className="w-full border border-gray-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50 disabled:opacity-50"
                          placeholder="+421 XXX XXX XXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                        Typ služby
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          disabled={isSubmitting}
                          className="w-full border border-gray-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50 appearance-none disabled:opacity-50"
                        >
                          <option value="">Vyberte službu</option>
                          <option value="zavesy">Závesy a záclony</option>
                          <option value="garnize">Garníže a závesné systémy</option>
                          <option value="tieniaca">Tieniaca technika</option>
                          <option value="calunenie">Čalúnenie</option>
                          <option value="starozitnosti">Starožitnosti</option>
                          <option value="tapety">Tapety</option>
                          <option value="ine">Iné</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                        Správa *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        disabled={isSubmitting}
                        className="w-full border border-gray-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50 resize-none disabled:opacity-50"
                        placeholder="Popíšte Vašu požiadavku..."
                      />
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div className="pt-1">
                        <input
                          type="checkbox"
                          id="gdpr"
                          name="gdpr"
                          required
                          disabled={isSubmitting}
                          className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                        />
                      </div>
                      <label htmlFor="gdpr" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                        Súhlasím so spracovaním <a href="/ochrana-osobnych-udajov" className="underline hover:text-black transition-colors" target="_blank">osobných údajov</a> za účelom vybavenia mojej požiadavky. *
                      </label>
                    </div>

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-700 text-sm flex gap-3"
                      >
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errorMessage}
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full sm:w-auto bg-black text-white px-12 py-5 text-sm font-bold tracking-widest hover:bg-gray-800 transition-all rounded-full overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className={`transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                        ODOSLAŤ SPRÁVU
                      </span>
                      {isSubmitting && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
