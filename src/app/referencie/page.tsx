'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import CTASection from '@/components/CTASection';
import Lightbox from '@/components/Lightbox';

const categories = [
  { id: 'all', label: 'Všetko' },
  { id: 'interiery', label: 'Celé interiéry' },
  { id: 'calunenie', label: 'Čalúnenie' },
  { id: 'zavesy', label: 'Závesy' },
  { id: 'starozitnosti', label: 'Starožitnosti' },
];

const galleryItems = [
  // Celé interiéry
  { src: '/cele%20interiery/4594bddd-0124-405d-9eff-70209bee1ddf%202.JPG', category: 'interiery', title: 'Celé interiéry' },
  { src: '/cele%20interiery/5c2520f2-2ca1-4abe-8a23-ca14793fc4d2%202.JPG', category: 'interiery', title: 'Celé interiéry' },
  { src: '/cele%20interiery/6c168d2d-48dc-4c1a-b0c3-9b0a94985c1e%202.JPG', category: 'interiery', title: 'Celé interiéry' },
  { src: '/cele%20interiery/b621a02e-1784-4826-8d16-7725cbf70f48%202.JPG', category: 'interiery', title: 'Celé interiéry' },
  { src: '/cele%20interiery/d7a863b9-79dd-497d-9d2b-474fb48e4c99%202.JPG', category: 'interiery', title: 'Celé interiéry' },

  // Čalúnenie
  { src: '/calunenie/0664491b-8de2-4ee2-813d-409257d0fb1c%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/0abc1475-d3f5-4327-9c07-921fac684654%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/221b8929-aa63-42b8-8e60-c07370d0ba77%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/26381794-65ca-4c20-8f7c-bb0b3fb2c90c%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/28a6c55e-1c6a-4a7f-a266-2229494f5547%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/3d7fa982-9f3b-41cc-b91c-1f41963d6567%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/3f588546-0ce4-4324-a405-69e475d361d6%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/63ba7750-dd3e-4ea7-b928-a6cc981d9add%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/726b7c62-9430-4a7b-a728-f149aafd768d%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/7e989e7d-a5a0-4f82-8c63-5ffa2e92dab3%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/82aa2bd6-c87c-46da-829a-4fc4a7092015%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/8673abc6-0fb8-40a0-8d81-419407b18449%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/a310bc01-16b9-407e-aabd-fc7a981091f9%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/a7da8eda-cd56-42c0-899f-0c3e5a1a07ab%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/aac6f508-8e12-493c-8b7c-e4efe0a2329b%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/b01c4ab3-d190-4fa9-982b-ec7a39fb8211%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/c5d330b4-dbc9-4bbf-87d5-46f786c8ffd3%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/da8a9213-5bbf-495c-b471-32f95baf70d7%203.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/e3d6a51c-9223-4df8-ac28-a754d0fb9258%202.JPG', category: 'calunenie', title: 'Čalúnenie' },
  { src: '/calunenie/ff52b579-eee6-43f0-96de-6fcb4b03d38f.JPG', category: 'calunenie', title: 'Čalúnenie' },

  // Závesy
  { src: '/zavesy/28890c48-de6d-480a-be53-1df4c5aee952%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/3e734b39-3013-42a3-8c93-e63c29fd96d8%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/4c5f8924-df25-462f-8732-e936566b2f37%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/607a90a6-24ed-4bf5-9c04-8704c4ded30f%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/6176079a-d8be-4548-9574-f6c285860622%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/6c06048b-971f-487a-8969-042036bac0fe%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/9abd12c0-7d5d-4441-8298-790a6b3b3aa2%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/afa5e545-fad4-420d-8070-5c1e1b709acc%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/b538f232-e1ee-48dc-b3d7-0aa548ac8344%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/c0c23610-4771-4218-865c-b70e25b42a8b%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/c2ef44ab-18a1-4555-b4c3-80dea41aa855%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/ca02fabc-599d-46a2-a1a2-02cfdbac4e73%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/d5e6cabe-8435-4044-a4c9-b48afcc907b3%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/dc8957d2-72a9-4c46-ba97-25fa2b1c2398%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/ec81613e-6bd4-4ae0-8e5d-2588e25fbbd9%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/f7352a2d-27df-4f30-9431-9985f0b3bf8e%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/f7cb84ad-799b-401d-b95d-c304d15fe009%202.JPG', category: 'zavesy', title: 'Závesy' },
  { src: '/zavesy/fda65aa2-2d7b-4248-bc6e-90d06753ae1e.JPG', category: 'zavesy', title: 'Závesy' },

  // Starožitnosti
  { src: '/Starozitnosti/00102679-d74e-4608-be1d-5a48266217c4%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/06b802f8-aece-47e1-8723-3b8953809b9b%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/0fd5c4db-093f-46aa-9bde-0dd0945d5d85%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/14579f01-9a7c-4409-b0bc-ee0a8f69d8e9%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/165465b9-3a2b-4f02-b49c-7b8c3c086dbf%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/1ac1926d-1e0b-4ce3-b1e0-434bbe34a5dd%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/1ac46e72-1fc3-4c4a-9ee5-64bfb6c3bf9d%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/288dc3cc-1cf2-4026-b799-691e1a17f3c2%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/2d45eb69-8370-40d5-850d-4e1e8cf39b70%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/313ad564-1b64-4f84-be95-cd6843dc049b%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/3bab8f42-f3a7-49e1-b3f4-eb8fc68dfd40%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/4a401900-9920-4c51-9d15-868b8e321850%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/54fce626-1fb0-4a4c-b6e4-90663d997296%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/591601c1-ebd3-402b-b88e-c6eae09cdc0c%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/6d497c87-a02a-4234-9f20-69c8ee7d5204%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/7d4e906a-1947-49a1-bb30-7866d9591491%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/8adef009-efd2-4e64-9fca-fdd4805b3208%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/8de378e8-ca25-4c8b-b08b-61458f700592%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/953ba947-5400-4e35-bd71-da35a13e86bb%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/a032b5a6-10c9-4728-a906-3c16da5287c1%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/a035e55c-d6f3-4524-b049-46617b42bca3%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/a1b2ff3d-100f-4f06-ba91-f3d91b992a80%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/c4c44bcb-43f3-4bf5-9549-7df80c6e9921%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/c76c8228-6848-4139-8863-c7a6f1ead5c8%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/e3ffdb76-2538-4af5-9f4f-49dc2d02344e%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/eee4d321-484e-4825-ad81-8e4328c2e5da%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
  { src: '/Starozitnosti/f9b5e52d-5e45-4072-8fc8-faed05bd5998%202.JPG', category: 'starozitnosti', title: 'Starožitnosti' },
];

export default function ReferenciePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const columns = useMemo(() => {
    const cols: typeof filteredItems[] = [[], [], [], []];
    filteredItems.forEach((item, i) => {
      cols[i % 4].push(item);
    });
    return cols;
  }, [filteredItems]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0">
          <Image
            src="/servicecards/zavesy%20a%20zaclony.jpg"
            alt="Referencie"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 w-[90vw] mx-auto px-0 lg:px-8">
          <p className="text-sm tracking-widest text-gray-300 mb-4">REFERENCIE</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
            Naša Práca Hovorí Za Nás
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl">
            Prehliadnite si našu kolekciu realizovaných projektov. Od elegantných závesov po unikátne čalúnenie - každý kus je vytvorený s láskou k remeslu.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="w-[90vw] mx-auto px-0 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 text-sm tracking-wide transition-colors rounded-full ${activeCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="w-[90vw] mx-auto px-0 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {col.map((item) => {
                  const flatIndex = filteredItems.indexOf(item);
                  return (
                    <div
                      key={item.src}
                      className="group relative overflow-hidden bg-gray-100 cursor-pointer"
                      onClick={() => setLightboxIndex(flatIndex)}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={800}
                        height={600}
                        className="w-full h-auto group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-heading font-bold">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredItems.map(item => item.src)}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
    </>
  );
}
