"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Custom High-Fidelity Flat Vector Illustrations
// Modern "Flat Art" style with distinct faces, hair, and clothing.
const SVGIcons = {
    Weddings: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Arch Background */}
            <path d="M20 100 V 50 A 30 30 0 0 1 80 50 V 100" fill="#F5F1E8" opacity="0.3" />

            {/* Groom */}
            <path d="M35 40 A 8 8 0 0 1 35 24 A 8 8 0 0 1 35 40" fill="#C9A86A" /> {/* Face */}
            <path d="M35 24 A 8 8 0 0 1 35 30 L 40 30" stroke="#3D3226" strokeWidth="2" strokeLinecap="round" /> {/* Hair */}
            <path d="M25 100 L 25 50 Q 25 40 35 40 Q 45 40 45 50 L 45 100" fill="#3D3226" /> {/* Suit */}
            <path d="M35 40 L 35 55" stroke="white" strokeWidth="2" /> {/* Shirt */}

            {/* Bride */}
            <path d="M65 42 A 8 8 0 0 1 65 26 A 8 8 0 0 1 65 42" fill="#C9A86A" /> {/* Face */}
            <path d="M65 26 A 9 9 0 0 0 56 35" fill="#3D3226" /> {/* Hair */}
            <path d="M55 100 L 55 50 Q 55 42 65 42 Q 75 42 75 50 L 75 100" fill="#C9A86A" opacity="0.8" /> {/* Dress */}
        </svg>
    ),
    Corporate: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Shapes */}
            <rect x="10" y="20" width="30" height="60" fill="#F5F1E8" opacity="0.3" rx="2" />
            <rect x="60" y="30" width="30" height="50" fill="#F5F1E8" opacity="0.3" rx="2" />

            {/* Professional 1 */}
            <circle cx="35" cy="45" r="7" fill="#C9A86A" /> {/* Head */}
            <path d="M25 100 L 25 65 Q 25 55 35 55 Q 45 55 45 65 L 45 100" fill="#3D3226" /> {/* Body */}

            {/* Professional 2 */}
            <circle cx="65" cy="45" r="7" fill="#C9A86A" /> {/* Head */}
            <path d="M55 100 L 55 65 Q 55 55 65 55 Q 75 55 75 65 L 75 100" fill="#3D3226" opacity="0.8" /> {/* Body */}

            {/* Handshake */}
            <path d="M40 70 L 60 70" stroke="#C9A86A" strokeWidth="3" strokeLinecap="round" />
        </svg>
    ),
    Social: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Person 1 */}
            <circle cx="30" cy="40" r="7" fill="#C9A86A" />
            <path d="M20 100 L 20 60 Q 20 50 30 50 Q 40 50 40 60 L 40 100" fill="#3D3226" />
            <path d="M30 50 L 45 45" stroke="#C9A86A" strokeWidth="2" strokeLinecap="round" /> {/* Arm */}

            {/* Person 2 */}
            <circle cx="70" cy="40" r="7" fill="#C9A86A" />
            <path d="M60 100 L 60 60 Q 60 50 70 50 Q 80 50 80 60 L 80 100" fill="#3D3226" opacity="0.8" />
            <path d="M70 50 L 55 45" stroke="#C9A86A" strokeWidth="2" strokeLinecap="round" /> {/* Arm */}

            {/* Glasses */}
            <path d="M48 40 L 50 45 L 52 40 Z" fill="#C9A86A" />
        </svg>
    ),
    Cultural: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Dancer */}
            <circle cx="50" cy="30" r="8" fill="#C9A86A" /> {/* Head */}
            <path d="M50 30 L 45 25" stroke="#3D3226" strokeWidth="3" strokeLinecap="round" /> {/* Hair Bun */}

            {/* Arms */}
            <path d="M30 40 L 50 45 L 70 40" stroke="#C9A86A" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Dress */}
            <path d="M40 100 L 35 60 Q 35 45 50 45 Q 65 45 65 60 L 60 100" fill="#3D3226" />
            <path d="M35 100 L 65 100 L 50 60 Z" fill="#C9A86A" opacity="0.6" /> {/* Pleats */}
        </svg>
    ),
    Destination: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Traveler */}
            <rect x="42" y="25" width="16" height="4" fill="#3D3226" /> {/* Hat Brim */}
            <rect x="45" y="18" width="10" height="8" fill="#3D3226" /> {/* Hat Top */}
            <circle cx="50" cy="35" r="7" fill="#C9A86A" /> {/* Face */}

            <path d="M40 100 L 40 60 Q 40 50 50 50 Q 60 50 60 60 L 60 100" fill="#3D3226" /> {/* Body */}

            {/* Suitcase */}
            <rect x="65" y="70" width="15" height="20" rx="2" fill="#C9A86A" />
            <path d="M72 70 L 72 65" stroke="#3D3226" strokeWidth="2" />
            <path d="M60 60 L 72 65" stroke="#C9A86A" strokeWidth="2" strokeLinecap="round" /> {/* Arm holding bag */}
        </svg>
    ),
};

const items = [
    {
        title: "Weddings",
        subtitle: "Ceremonial Elegance",
        id: 1,
        image: "/images/wedding.png",
        // icon: SVGIcons.Weddings, // Replaced by image
    },
    {
        title: "Corporate",
        subtitle: "Brand Excellence",
        id: 2,
        icon: SVGIcons.Corporate,
    },
    {
        title: "Social",
        subtitle: "Intimate Gatherings",
        id: 3,
        icon: SVGIcons.Social,
    },
    {
        title: "Cultural",
        subtitle: "Tradition & Heritage",
        id: 4,
        icon: SVGIcons.Cultural,
    },
    {
        title: "Destination",
        subtitle: "Global Reach",
        id: 5,
        icon: SVGIcons.Destination,
    },
];

export default function InfiniteMarquee() {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollerRef.current) return;

        // Duplicate content for seamless loop
        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            if (scrollerRef.current) {
                scrollerRef.current.appendChild(duplicatedItem);
            }
        });
    }, []);

    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-10">
            <div
                ref={scrollerRef}
                className="flex items-center justify-center md:justify-start animate-infinite-scroll"
            >
                {items.map((item, idx) => (
                    <div
                        key={`${item.id}-${idx}`}
                        className="flex-shrink-0 w-[240px] flex flex-col items-center justify-center mx-10 group cursor-pointer"
                    >
                        {/* Illustration Container - No Frame, Just Clean Icon */}
                        <div className={`${item.id === 1 ? 'w-48 h-48' : 'w-32 h-32'} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 relative`}>
                            {item.image ? (
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="200px"
                                    priority
                                    className="object-contain drop-shadow-md"
                                />
                            ) : (
                                item.icon
                            )}
                        </div>

                        {/* Content */}
                        <div className="text-center">
                            <h3 className="font-poppins font-medium text-2xl text-charcoal mb-2 tracking-wide group-hover:text-gold transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="font-poppins text-sm text-charcoal-50 uppercase tracking-widest group-hover:text-charcoal transition-colors duration-300">
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}
