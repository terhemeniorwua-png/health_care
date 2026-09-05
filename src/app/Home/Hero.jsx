"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Stethoscope, ShieldPlus } from "lucide-react";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Search handler logic
  };

  return (
    <section className="relative w-full bg-slate-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Headline */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
          Healthcare made simpler.
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-lg sm:text-xl font-body text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Find trusted doctors, medicines, laboratories, hospitals, and healthcare services — all in one place.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mt-8 max-w-2xl mx-auto">
          <div className="relative flex items-center bg-white rounded-lg shadow-sm border border-slate-200 focus-within:border-teal-600 focus-within:ring-2 focus-within:ring-teal-600/20 transition-all">
            <div className="pl-4 text-slate-400 pointer-events-none">
              <Search className="w-5 h-5" />
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search doctors, medicines, hospitals or services..."
              className="w-full py-3.5 pl-3 pr-28 text-sm font-body text-slate-900 placeholder-slate-400 bg-transparent outline-none"
            />

            <button
              type="submit"
              className="absolute right-2 font-body font-semibold text-xs sm:text-sm text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-md transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/doctors"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body font-semibold text-sm text-white bg-teal-600 hover:bg-teal-700 px-5 py-3 rounded-md transition-colors shadow-sm"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Find a Doctor</span>
          </Link>

          <Link
            href="/health-services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body font-medium text-sm text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-5 py-3 rounded-md transition-colors shadow-sm"
          >
            <ShieldPlus className="w-4 h-4 text-teal-600" />
            <span>Explore Healthcare Services</span>
          </Link>
        </div>

      </div>
    </section>
  );
}