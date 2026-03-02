import Image from 'next/image';

export default function CTASection() {
    return (
        <section className="relative py-24">
            <div className="absolute inset-0">
                <Image
                    src="/images/gallery/gallery-15.jpg"
                    alt="Showroom"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>
            <div className="relative z-10 w-[90vw] mx-auto px-4 lg:px-8 text-center">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Navštívte Náš Showroom
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Príďte si pozrieť naše vzorky materiálov a prebrať Vaše požiadavky osobne s našimi odborníkmi.
                </p>
                <a
                    href="tel:+421905204946"
                    className="inline-block bg-white text-black px-10 py-4 text-sm tracking-wide hover:bg-gray-100 transition-colors rounded-full font-medium"
                >
                    ZAVOLAJTE NÁM
                </a>
            </div>
        </section>
    );
}
