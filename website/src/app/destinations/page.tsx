import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "From Hyderabad to international locations — hand-picked destinations curated for seamless celebration experiences across India and beyond.",
};

const primaryDestinations = [
  { name: "Hyderabad", region: "Telangana" },
  { name: "Chennai", region: "Tamil Nadu" },
  { name: "New Delhi", region: "Delhi NCR" },
  { name: "Goa", region: "Goa" },
  { name: "Jaipur", region: "Rajasthan" },
  { name: "Udaipur", region: "Rajasthan" },
  { name: "Kerala", region: "Kerala" },
  { name: "Bangalore", region: "Karnataka" },
  { name: "Mumbai", region: "Maharashtra" },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-charcoal mb-6 text-center">
            Destinations
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 text-center leading-relaxed">
            From Hyderabad to the world. Wherever your celebration takes you.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <p className="text-xl text-charcoal text-center leading-relaxed">
            Hand-picked locations curated for seamless destination celebrations 
            across India.
          </p>
        </div>
      </section>

      {/* Primary Destinations Grid */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {primaryDestinations.map((destination) => (
              <div
                key={destination.name}
                className="group p-8 bg-white border border-charcoal/10 text-center transition-colors hover:border-antique-gold"
              >
                <h3 className="text-2xl font-semibold text-charcoal mb-2 group-hover:text-antique-gold transition-colors">
                  {destination.name}
                </h3>
                <p className="text-sm text-charcoal/50">{destination.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-8">
            Regional Coverage
          </h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
            <span className="text-lg text-charcoal">
              Across Telangana & Andhra Pradesh
            </span>
            <span className="hidden md:block text-antique-gold">|</span>
            <span className="text-lg text-charcoal">
              Across India
            </span>
          </div>
        </div>
      </section>

      {/* International */}
      <section className="py-16 md:py-24 bg-charcoal text-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <p className="text-antique-gold text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            Beyond Borders
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            International Destinations
          </h2>
          <p className="text-lg text-ivory/70 leading-relaxed">
            International destinations curated upon request. From intimate 
            destination weddings to global corporate retreats — we bring the 
            Abhima standard wherever your celebration takes you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">
            Curious About Your Destination?
          </h2>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center px-8 bg-antique-gold text-white font-medium transition-colors hover:bg-charcoal"
          >
            Let's Explore Together
          </Link>
        </div>
      </section>
    </>
  );
}
