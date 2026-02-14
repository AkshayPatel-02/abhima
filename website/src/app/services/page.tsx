import Button from "@/components/ui/Button";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ivory pt-32 pb-20 md:pb-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px]">
          <h1 className="font-poppins font-semibold text-5xl md:text-[56px] text-charcoal mb-8 leading-[1.1]">
            Services
          </h1>
          <p className="font-poppins text-lg md:text-xl text-charcoal leading-relaxed">
            We manage every element behind the scenes so you can remain fully present in the moment.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[900px]">
          <div className="space-y-6">
            {[
              'Bespoke event concept & experience design',
              'Venue & destination curation',
              'Décor, styling & production',
              'Artist & entertainment management',
              'Hospitality, travel & guest experience',
              'Sound, lighting & visual production',
              'On-ground event direction & operations'
            ].map((service) => (
              <div key={service} className="flex items-start gap-4 py-4 border-b border-charcoal-10 last:border-b-0">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2"></span>
                <p className="font-poppins text-lg md:text-xl text-charcoal">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <p className="font-poppins text-lg md:text-xl text-charcoal-70 italic">
            Celebrations of every scale, curated with the same unwavering standard.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-20 md:py-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <Button href="/contact" variant="primary">
            Discuss Your Event
          </Button>
        </div>
      </section>
    </>
  );
}
