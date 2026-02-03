import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end event execution — from concept design to on-ground operations. We manage every element so you can remain fully present.",
};

const services = [
  {
    title: "Bespoke Event Concept & Experience Design",
    description:
      "Custom-crafted event concepts that reflect your vision, values, and the significance of your celebration.",
  },
  {
    title: "Venue & Destination Curation",
    description:
      "Hand-picked venues and destinations selected for their character, logistics, and alignment with your event vision.",
  },
  {
    title: "Décor, Styling & Production",
    description:
      "Thoughtful design execution that balances tradition with contemporary elegance — never ostentatious, always intentional.",
  },
  {
    title: "Artist & Entertainment Management",
    description:
      "Curated entertainment experiences, from classical performances to contemporary artists, managed end-to-end.",
  },
  {
    title: "Hospitality, Travel & Guest Experience",
    description:
      "Seamless guest management including accommodations, transport, and personalized hospitality for every attendee.",
  },
  {
    title: "Sound, Lighting & Visual Production",
    description:
      "Technical excellence that enhances atmosphere without overwhelming — precision-engineered for every moment.",
  },
  {
    title: "On-Ground Event Direction & Operations",
    description:
      "Meticulous coordination and real-time management ensuring flawless execution from start to finish.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-charcoal mb-6 text-center">
            Services
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 text-center leading-relaxed">
            End-to-end execution. Every detail managed.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <p className="text-xl text-charcoal text-center leading-relaxed">
            We manage every element behind the scenes so you can remain fully 
            present in the moment.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="border-b border-charcoal/10 pb-12 last:border-0"
              >
                <div className="flex gap-6">
                  {/* Number */}
                  <span className="text-antique-gold text-sm font-semibold pt-1">
                    0{index + 1}
                  </span>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">
                      {service.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 md:py-24 bg-charcoal text-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
            Celebrations of every scale, curated with the same unwavering standard.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">
            Let's Plan Together
          </h2>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center px-8 bg-antique-gold text-white font-medium transition-colors hover:bg-charcoal"
          >
            Begin Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
