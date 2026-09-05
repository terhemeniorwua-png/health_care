import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-12 text-center shadow-sm max-w-4xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Take control of your healthcare.
          </h2>
          <p className="mt-4 font-body text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Find care, manage appointments, order healthcare products, and keep your health information organized in one place.
          </p>
          <div className="mt-8">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center font-body font-semibold text-sm text-white bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-md transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}