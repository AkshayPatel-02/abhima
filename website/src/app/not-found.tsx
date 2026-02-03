import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-ivory">
      <div className="mx-auto max-w-[600px] px-6 md:px-10 text-center">
        <p className="text-antique-gold text-sm font-semibold tracking-[0.15em] uppercase mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-charcoal mb-6">
          Page Not Found
        </h1>
        <p className="text-lg text-charcoal/70 leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center px-8 bg-antique-gold text-white font-medium transition-colors hover:bg-charcoal"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center px-8 border border-charcoal text-charcoal font-medium transition-colors hover:bg-charcoal hover:text-ivory"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
