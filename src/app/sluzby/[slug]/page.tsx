import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import CTASection from '@/components/CTASection';
import ServiceSidebar from '@/components/ServiceSidebar';
import AnimatedServiceContent from '@/components/AnimatedServiceContent';
import ServiceGallery from '@/components/ServiceGallery';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const service = services.find((s) => s.slug === slug);
    if (!service) return {};
    return {
      title: `${service.title} | TRUBELA`,
      description: service.description,
    };
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 w-[90vw] mx-auto px-0 lg:px-8 pb-12">
          <p className="text-sm tracking-widest text-gray-300 mb-3 uppercase">SLUŽBY</p>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content with sidebar */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-[90vw] mx-auto px-0 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <ServiceSidebar services={services} />

            <AnimatedServiceContent>
              <div className="w-full">
                <p className="text-sm tracking-widest text-gray-400 mb-4 uppercase">
                  {service.description}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg italic mb-8">
                  Profesionálne riešenie pre váš domov.
                </p>
                <div className="prose prose-lg text-gray-600">
                  <p className="leading-relaxed">
                    {service.detail}
                  </p>
                </div>

                {/* Mini Gallery */}
                {service.gallery && service.gallery.length > 0 && (
                  <ServiceGallery images={service.gallery} title={service.title} />
                )}
              </div>
            </AnimatedServiceContent>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
