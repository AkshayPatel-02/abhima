import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abhima Events is a bespoke event curation house delivering weddings, traditional ceremonies, corporate gatherings, and private celebrations across India.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-charcoal mb-6 text-center">
            About Abhima
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 text-center leading-relaxed">
            Bespoke event curation rooted in legacy, trust, and cultural precision.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <div className="space-y-6">
            <p className="text-lg text-charcoal leading-relaxed">
              Abhima Events is a bespoke event curation house delivering weddings, 
              traditional ceremonies, corporate gatherings, and private celebrations 
              across India and select global destinations.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              We believe scale never defines importance. Whether an intimate family 
              function or a large-scale destination event, every celebration is 
              treated with the same responsibility, care, and precision.
            </p>
          </div>
        </div>
      </section>

      {/* The Abhima Standard */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-8">
            The Abhima Standard
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-charcoal leading-relaxed">
              At Abhima Events, excellence is non-negotiable. Every celebration we 
              undertake is guided by a singular standard — one that values discretion 
              over display, precision over excess, and refinement over spectacle.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Our work unfolds quietly behind the scenes. Planning is meticulous. 
              Execution is disciplined. What remains visible is not effort, but ease.
            </p>
            <p className="text-xl text-charcoal font-medium italic mt-8">
              Because true luxury is not seen.
              <br />
              It is felt.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Legacy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-8">
            Founder & Abhima Legacy
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-charcoal leading-relaxed">
              Abhima Events is part of the larger Abhima legacy — a name built on 
              trust, integrity, and long-term vision.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Founded on the belief that meaningful celebrations deserve thoughtful 
              stewardship, the brand reflects structured execution, cultural 
              understanding, and responsibility-driven leadership.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              The Abhima name is built not on volume, but on trust earned over time.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-16 md:py-24 bg-charcoal text-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <p className="text-antique-gold text-sm font-semibold tracking-[0.15em] uppercase mb-6">
            A Note from the Founder
          </p>
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-6 italic">
            "Every celebration entrusted to us carries meaning.
            <br />
            Our responsibility is to honour it with care, discipline, and respect 
            for the moment."
          </blockquote>
          <p className="text-ivory/70">
            — Founder, Abhima Events
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-12">
            Our Philosophy
          </h2>
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-semibold text-charcoal">
              Listen Intently.
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-charcoal">
              Design Thoughtfully.
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-charcoal">
              Execute Impeccably.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">
            Begin Your Journey
          </h2>
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center px-8 bg-antique-gold text-white font-medium transition-colors hover:bg-charcoal"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
