import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ivory pt-32 pb-20 md:pb-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px]">
          <h1 className="font-poppins font-semibold text-5xl md:text-[56px] text-charcoal mb-8 leading-[1.1]">
            About Abhima Events
          </h1>
          <p className="font-poppins text-lg md:text-xl text-charcoal leading-relaxed">
            Abhima Events is a bespoke event curation house delivering weddings, traditional ceremonies, corporate gatherings, and private celebrations across India and select global destinations.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px]">
          <p className="font-poppins text-lg text-charcoal leading-relaxed mb-8">
            We believe scale never defines importance. Whether an intimate family function or a large-scale destination event, every celebration is treated with the same responsibility, care, and precision.
          </p>
        </div>
      </section>

      {/* The Abhima Standard */}
      <section className="bg-charcoal py-20 md:py-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px]">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-ivory mb-8">
            The Abhima Standard
          </h2>

          <div className="space-y-6 text-ivory/90">
            <p className="font-poppins text-base md:text-lg leading-relaxed">
              At Abhima Events, excellence is non-negotiable. Every celebration we undertake is guided by a singular standard — one that values discretion over display, precision over excess, and refinement over spectacle.
            </p>
            <p className="font-poppins text-base md:text-lg leading-relaxed">
              Our work unfolds quietly behind the scenes. Planning is meticulous. Execution is disciplined. What remains visible is not effort, but ease.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-ivory/10">
            <p className="font-poppins text-lg text-ivory italic">
              Because true luxury is not seen.
            </p>
            <p className="font-poppins text-lg text-ivory italic">
              It is felt.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Legacy */}
      <section className="bg-ivory py-20 md:py-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px]">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-charcoal mb-8">
            Founder & Abhima Legacy
          </h2>

          <div className="space-y-6">
            <p className="font-poppins text-base md:text-lg text-charcoal leading-relaxed">
              Abhima Events is part of the larger Abhima legacy — a name built on trust, integrity, and long-term vision.
            </p>
            <p className="font-poppins text-base md:text-lg text-charcoal leading-relaxed">
              Founded on the belief that meaningful celebrations deserve thoughtful stewardship, the brand reflects structured execution, cultural understanding, and responsibility-driven leadership.
            </p>
            <p className="font-poppins text-base md:text-lg text-charcoal leading-relaxed">
              The Abhima name is built not on volume, but on trust earned over time.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px]">
          <h3 className="font-poppins font-semibold text-2xl md:text-[28px] text-charcoal mb-6">
            A Note from the Founder
          </h3>

          <blockquote className="border-l-2 border-gold pl-6 py-2">
            <p className="font-poppins text-lg md:text-xl text-charcoal leading-relaxed italic mb-4">
              Every celebration entrusted to us carries meaning.
              Our responsibility is to honour it with care, discipline, and respect for the moment.
            </p>
            <footer className="font-poppins text-base text-charcoal-70">
              — Founder, Abhima Events
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-charcoal mb-12">
            Our Philosophy
          </h2>

          <div className="space-y-4">
            <p className="font-poppins text-2xl text-charcoal">
              Listen Intently.
            </p>
            <p className="font-poppins text-2xl text-charcoal">
              Design Thoughtfully.
            </p>
            <p className="font-poppins text-2xl text-charcoal">
              Execute Impeccably.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-20 md:py-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <Button href="/contact" variant="primary">
            Begin the Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
