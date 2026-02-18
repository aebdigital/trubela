import Image from 'next/image';
import Link from 'next/link';
import ServicesSection from '@/components/ServicesSection';
import HeroSlideshow from '@/components/HeroSlideshow';
import CTASection from '@/components/CTASection';

const process = [
  {
    number: '01.',
    title: 'Konzultácia',
    description: 'Počas návštevy našej pobočky zistíme Vaše požiadavky a ukážeme Vám možnosti z našich vzoriek v showroome.',
  },
  {
    number: '02.',
    title: 'Dizajn',
    description: 'Zameranie u Vás a návrh riešení s priestorom na pripomienky.',
  },
  {
    number: '03.',
    title: 'Inštalácia do domu',
    description: 'Dekoratérske kúsky Vám budú dodané priamo do domácnosti a nainštalované.',
  },
];

const galleryImages = [
  '/images/gallery/gallery-7.jpg',
  '/images/gallery/gallery-8.jpg',
  '/images/gallery/gallery-9.jpg',
  '/images/gallery/gallery-10.jpg',
  '/images/gallery/gallery-11.jpg',
  '/images/gallery/gallery-12.jpg',
];

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      <ServicesSection />

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="w-[95vw] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-sm tracking-widest text-gray-500 mb-4">POSTUP</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl">
                Profesionálna Konzultácia A Vytvorenie Dizajnu Na Mieru
              </h2>
            </div>
            <Link
              href="/kontakt"
              className="self-start bg-black text-white px-8 py-4 text-sm tracking-wide hover:bg-gray-800 transition-colors rounded-full"
            >
              KONTAKT
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            {process.map((step, index) => (
              <div key={index} className="border-t border-gray-300 pt-8">
                <p className="text-sm text-gray-500 mb-4">{step.number}</p>
                <h3 className="font-heading text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="w-[95vw] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm tracking-widest text-gray-400 mb-4">REFERENCIE</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl">
              Od Konceptu K Nádhernému Výsledku V Našej Výnimočnej Zbierke
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden">
                <Image
                  src={image}
                  alt={`Galéria ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/referencie"
              className="inline-block border border-white px-8 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition-colors rounded-full"
            >
              ZOBRAZIŤ REFERENCIE
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-20 lg:py-32 bg-white">
        <div className="w-[95vw] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <p className="text-sm tracking-widest text-gray-500 mb-4">O NÁS</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
                V čom sme iní?
              </h2>
            </div>
            <div className="text-gray-600 leading-relaxed space-y-6">
              <p>
                Čalúnnik-dekoratér je povolanie o cite pre farby, proporcie a nápady v interiéroch. Ako každé remeslo, aj remeslo čalúnnika- dekoratéra spočíva v zbieraní skúseností. Tých máme za množstvo odpracovaných rokov neúrekom.
              </p>
              <p>
                Našou najväčšou radosťou a odmenou je, keď sa k nám znova vracajú stáli zákazníci, a navyše prinášajú so sebou aj nových a zaujímavých ľudí. Stane sa, že majú aj neobvyklé požiadavky, ale tie nás posúvajú ďalej a nikdy neodradila.
              </p>
              <p>
                Remeslo je predsa o sústavnom vzdelávaní a účení, aby sme neustrnuli na jednom mieste.
              </p>
            </div>
          </div>

          <div className="mt-16 relative aspect-[21/9] overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="O nás"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />


    </>
  );
}
