import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "From traditional Telugu weddings to corporate events and spiritual gatherings — explore our curated celebration experiences.",
};

const weddingServices = [
  "Destination weddings",
  "Pelli Choopulu & Nischitartham",
  "Sangeeth & cocktail evenings",
  "Haldi & Mehendi ceremonies",
  "Mangalsnanam & wedding rituals",
  "Receptions & after-parties",
  "Gruhapravesam, Seemantham & Naming Ceremonies",
  "Upanayanam & sacred milestones",
];

const corporateServices = [
  "Leadership conferences",
  "Product launches",
  "Annual meets & award evenings",
  "Dealer meets & executive retreats",
];

const privateServices = [
  "Birthday celebrations (all age groups)",
  "Anniversaries & milestone occasions",
  "Private residence & villa events",
  "Curated themed gatherings",
];

const spiritualServices = [
  "Pujas, homams & vrathams",
  "Temple ceremonies & annadanam",
  "Festival celebrations & spiritual congregations",
];

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-charcoal mb-6 text-center">
            Experiences
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 text-center leading-relaxed">
            Curated celebrations for every meaningful moment.
          </p>
        </div>
      </section>

      {/* Weddings & Ceremonial Celebrations */}
      <section id="weddings" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <div className="mb-8">
            <span className="text-antique-gold text-sm font-semibold tracking-wider uppercase">
              01
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mt-2 mb-4">
              Weddings & Ceremonial Celebrations
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              We curate weddings that honour tradition while embracing understated 
              luxury. Every ritual and celebration is executed with intention and 
              elegance.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weddingServices.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span className="text-antique-gold mt-1">•</span>
                <span className="text-charcoal">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Corporate & Brand Experiences */}
      <section id="corporate" className="py-16 md:py-24 bg-ivory scroll-mt-20">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <div className="mb-8">
            <span className="text-antique-gold text-sm font-semibold tracking-wider uppercase">
              02
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mt-2 mb-4">
              Corporate & Brand Experiences
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Professionally managed events aligned with stature, purpose, and 
              brand clarity.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {corporateServices.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span className="text-antique-gold mt-1">•</span>
                <span className="text-charcoal">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Private & Social Celebrations */}
      <section id="private" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <div className="mb-8">
            <span className="text-antique-gold text-sm font-semibold tracking-wider uppercase">
              03
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mt-2 mb-4">
              Private & Social Celebrations
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Thoughtfully curated celebrations for personal milestones.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {privateServices.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span className="text-antique-gold mt-1">•</span>
                <span className="text-charcoal">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Spiritual & Cultural Assemblies */}
      <section id="spiritual" className="py-16 md:py-24 bg-ivory scroll-mt-20">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <div className="mb-8">
            <span className="text-antique-gold text-sm font-semibold tracking-wider uppercase">
              04
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mt-2 mb-4">
              Spiritual & Cultural Assemblies
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Respectfully executed gatherings honouring faith and tradition.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {spiritualServices.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span className="text-antique-gold mt-1">•</span>
                <span className="text-charcoal">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">
            Ready to Begin?
          </h2>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center px-8 bg-antique-gold text-white font-medium transition-colors hover:bg-charcoal"
          >
            Discuss Your Celebration
          </Link>
        </div>
      </section>
    </>
  );
}
