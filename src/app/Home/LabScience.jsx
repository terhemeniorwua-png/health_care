import Link from "next/link";
import { TestTube2, Building2 } from "lucide-react";

export default function LaboratorySection() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Get your tests done with ease
            </h2>
            <p className="mt-3 font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Book laboratory tests from trusted providers and choose between visiting a laboratory or requesting home sample collection where available.
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/lab-tests"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm text-white bg-teal-600 hover:bg-teal-700 px-5 py-3 rounded-md transition-colors shadow-sm"
            >
              <TestTube2 className="w-4 h-4" />
              <span>Browse Lab Tests</span>
            </Link>

            <Link
              href="/hospitals"
              className="inline-flex items-center justify-center gap-2 font-body font-medium text-sm text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-5 py-3 rounded-md transition-colors shadow-sm"
            >
              <Building2 className="w-4 h-4 text-teal-600" />
              <span>Find a Laboratory</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}