import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section id="sluzby" className="py-20 lg:py-32 bg-white">
      <div className="w-[95vw] mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm tracking-widest text-gray-500 mb-4">SLUŽBY</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Ako vám vieme pomôcť?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/sluzby/${service.slug}`}
              className="group relative aspect-[4/3] overflow-hidden bg-gray-100 block"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
