import Image from 'next/image';
import ContactMap from '@/components/ContactMap';
import CTASection from '@/components/CTASection';

export default function KontaktPage() {
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
        <div className="relative z-10 w-[95vw] mx-auto px-6 lg:px-8 mt-20">
          <p className="text-sm tracking-widest text-gray-300 mb-4">KONTAKT</p>
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
        <div className="w-[95vw] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-8">Kontaktné údaje</h2>

              <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Sub-Column: Address, Phone, Email */}
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
                      <a href="tel:+421905204946" className="text-gray-600 hover:text-black transition-colors">
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
                      <a href="mailto:TRUBELA@TRUBELA.SK" className="text-gray-600 hover:text-black transition-colors">
                        TRUBELA@TRUBELA.SK
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Sub-Column: Business Info, Hours */}
                <div className="space-y-8">
                  {/* Business Info */}
                  <div>
                    <p className="font-heading font-bold mb-4">Fakturačné údaje</p>
                    <p className="text-gray-600">Trubela s. r. o.</p>
                    <p className="text-gray-600">IČO: 53723147</p>
                    <p className="text-gray-600">DIČ: 2121529047</p>
                    <p className="text-gray-600">IČ DPH: SK2121529047</p>
                  </div>

                  {/* Opening Hours */}
                  <div>
                    <p className="font-heading font-bold mb-4">Otváracie hodiny</p>
                    <div className="space-y-2 text-gray-600">
                      <div>
                        <span className="font-medium">Pondelok - Piatok</span>
                      </div>
                      <div className="mb-3">8:00 - 12:00 &nbsp; 13:00 - 17:00</div>

                      <div>
                        <span className="font-medium">Sobota, Nedeľa</span>
                      </div>
                      <div className="mb-3">Zatvorené</div>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 italic">
                      Pred návštevou je nutné si dohodnúť termín.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Component */}
              <ContactMap />
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-8">Napíšte nám</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Meno *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors bg-transparent"
                      placeholder="Vaše meno"
                    />
                  </div>
                  <div>
                    <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2">
                      Priezvisko *
                    </label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors bg-transparent"
                      placeholder="Vaše priezvisko"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors bg-transparent"
                    placeholder="vas@email.sk"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefón
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors bg-transparent"
                    placeholder="+421 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Typ služby
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors bg-transparent"
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
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Správa *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
                    placeholder="Popíšte Vašu požiadavku..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="gdpr"
                    name="gdpr"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="gdpr" className="text-sm text-gray-600">
                    Súhlasím so spracovaním osobných údajov za účelom vybavenia mojej požiadavky. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-black text-white px-10 py-4 text-sm tracking-wide hover:bg-gray-800 transition-colors rounded-full"
                >
                  ODOSLAŤ SPRÁVU
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
