import Button from "@/components/ui/Button";

export default function DestinationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ivory pt-32 pb-20 md:pb-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1200px]">
          <h1 className="font-poppins font-semibold text-5xl md:text-[56px] text-charcoal mb-8 leading-[1.1]">
            Destinations We Serve
          </h1>
        </div>
      </section>

      {/* Major Cities */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Hyderabad',
              'Chennai',
              'New Delhi',
              'Goa',
              'Jaipur',
              'Udaipur',
              'Kerala',
              'Bangalore',
              'Mumbai'
            ].map((city) => (
              <div
                key={city}
                className="border border-charcoal-10 rounded-[4px] p-6 text-center hover:border-gold transition-colors duration-200"
              >
                <p className="font-poppins font-medium text-xl text-charcoal">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-charcoal mb-8">
            Across Telangana & Andhra Pradesh
          </h2>
          <p className="font-poppins text-lg text-charcoal-70 leading-relaxed">
            Hand-picked locations curated for seamless destination celebrations across India.
          </p>
        </div>
      </section>

      {/* International */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <p className="font-poppins text-lg text-charcoal italic">
            International destinations curated upon request.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-20 md:py-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-charcoal mb-6">
            Plan Your Destination Event
          </h2>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
