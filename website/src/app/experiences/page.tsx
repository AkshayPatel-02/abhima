import Button from "@/components/ui/Button";

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ivory pt-32 pb-20 md:pb-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1200px]">
          <h1 className="font-poppins font-semibold text-5xl md:text-[56px] text-charcoal mb-8 leading-[1.1]">
            Signature Experiences
          </h1>
        </div>
      </section>

      {/* Weddings & Ceremonial Celebrations */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1200px]">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-charcoal mb-6">
            Weddings & Ceremonial Celebrations
          </h2>
          <p className="font-poppins text-lg text-charcoal-70 mb-12 max-w-[800px]">
            We curate weddings that honour tradition while embracing understated luxury. Every ritual and celebration is executed with intention and elegance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-[900px]">
            {[
              'Destination weddings',
              'Pelli Choopulu & Nischitartham',
              'Sangeeth & cocktail evenings',
              'Haldi & Mehendi ceremonies',
              'Mangalsnanam & wedding rituals',
              'Receptions & after-parties',
              'Gruhapravesam, Seemantham & Naming Ceremonies',
              'Upanayanam & sacred milestones'
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2"></span>
                <p className="font-poppins text-base text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate & Brand Experiences */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1200px]">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-charcoal mb-6">
            Corporate & Brand Experiences
          </h2>
          <p className="font-poppins text-lg text-charcoal-70 mb-12 max-w-[800px]">
            Professionally managed events aligned with stature, purpose, and brand clarity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-[900px]">
            {[
              'Leadership conferences',
              'Product launches',
              'Annual meets & award evenings',
              'Dealer meets & executive retreats'
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2"></span>
                <p className="font-poppins text-base text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private & Social Celebrations */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1200px]">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-charcoal mb-6">
            Private & Social Celebrations
          </h2>
          <p className="font-poppins text-lg text-charcoal-70 mb-12 max-w-[800px]">
            Thoughtfully curated celebrations for personal milestones.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-[900px]">
            {[
              'Birthday celebrations (all age groups)',
              'Anniversaries & milestone occasions',
              'Private residence & villa events',
              'Curated themed gatherings'
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2"></span>
                <p className="font-poppins text-base text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual & Cultural Assemblies */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1200px]">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-charcoal mb-6">
            Spiritual & Cultural Assemblies
          </h2>
          <p className="font-poppins text-lg text-charcoal-70 mb-12 max-w-[800px]">
            Respectfully executed gatherings honouring faith and tradition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-[900px]">
            {[
              'Pujas, homams & vrathams',
              'Temple ceremonies & annadanam',
              'Festival celebrations & spiritual congregations'
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2"></span>
                <p className="font-poppins text-base text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-20 md:py-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-charcoal mb-6">
            Begin Planning Your Celebration
          </h2>
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
