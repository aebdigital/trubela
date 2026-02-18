'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Service } from '@/data/services';

interface ServiceSidebarProps {
    services: Service[];
}

export default function ServiceSidebar({ services }: ServiceSidebarProps) {
    const pathname = usePathname();
    const currentSlug = pathname.split('/').pop();

    return (
        <div className="lg:w-72 flex-shrink-0">
            <Link
                href="/#sluzby"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-6"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Všetky služby
            </Link>
            <nav className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                {services.map((s) => {
                    const isActive = s.slug === currentSlug;
                    return (
                        <Link
                            key={s.slug}
                            href={`/sluzby/${s.slug}`}
                            className={`relative overflow-hidden rounded-lg h-16 lg:h-20 min-w-[160px] lg:min-w-0 flex items-end p-3 transition-all ${isActive
                                    ? 'border-2 border-white shadow-lg shadow-black/20 ring-1 ring-black/10 scale-105 z-10'
                                    : 'border border-transparent hover:border-gray-200'
                                }`}
                        >
                            <Image
                                src={s.image}
                                alt={s.title}
                                fill
                                className={`object-cover transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-60'
                                    }`}
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-300 ${isActive ? 'bg-black/30' : 'bg-black/60 hover:bg-black/50'
                                    }`}
                            />
                            <span className="relative z-10 text-white text-xs lg:text-sm font-bold tracking-wide whitespace-nowrap lg:whitespace-normal">
                                {s.title}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
