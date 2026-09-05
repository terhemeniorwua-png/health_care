"use client";

import Link from "next/link";
import {
  ChevronLeft,
  FlaskConical,
  Info,
  ClipboardList,
  Star,
  MapPin,
  Building2,
  CalendarCheck,
} from "lucide-react";

export default function LabTestDetailsPage({ params }) {
  // Mock Data for Full Blood Count
  const testDetails = {
    id: params?.id || "fbc",
    name: "Full Blood Count",
    price: 8000,
    whatItChecks:
      "A Full Blood Count (FBC) measures red blood cells, white blood cells, hemoglobin, and platelets. It is used to evaluate overall health, detect infections, check for anemia, and screen for various blood disorders.",
    preparation:
      "Follow the laboratory's preparation instructions before your appointment. Generally, no special fasting is required unless instructed by your physician.",
    laboratories: [
      {
        id: "lab-1",
        name: "Synlab Nigeria (Lekki Branch)",
        location: "Admiralty Way, Lekki Phase 1, Lagos",
        rating: 4.8,
        reviewsCount: 124,
        price: 8000,
        availability: "Walk-in & Home Collection",
      },
      {
        id: "lab-2",
        name: "MeCure Healthcare Ltd",
        location: "Oshodi Industrial Estate, Lagos",
        rating: 4.6,
        reviewsCount: 98,
        price: 7500,
        availability: "Walk-in Only",
      },
      {
        id: "lab-3",
        name: "Union Diagnostics",
        location: "Ikeja GRA, Lagos",
        rating: 4.5,
        reviewsCount: 62,
        price: 8500,
        availability: "Walk-in & Home Collection",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/lab-tests"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Lab Tests
        </Link>

        {/* Test Header Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-900">
                {testDetails.name}
              </h1>
              <p className="text-xs text-slate-500">Diagnostic Laboratory Panel</p>
            </div>
          </div>

          <div className="bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100 sm:text-right">
            <span className="text-[10px] font-bold text-slate-400 uppercase">
              Starting Price
            </span>
            <div className="text-xl font-black text-teal-700">
              ₦{testDetails.price.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* What the test checks */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Info className="w-4 h-4 text-teal-600" /> What the test checks
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {testDetails.whatItChecks}
            </p>
          </div>

          {/* Preparation Instructions */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <ClipboardList className="w-4 h-4 text-amber-500" /> Preparation
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {testDetails.preparation}
            </p>
          </div>

        </div>

        {/* Available Laboratories Table / List */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-3">
            Available Laboratories
          </h2>

          <div className="space-y-4 divide-y divide-slate-100">
            {testDetails.laboratories.map((lab) => (
              <div
                key={lab.id}
                className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Lab Details */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-teal-600" />
                    <h3 className="text-xs font-extrabold text-slate-900">
                      {lab.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lab.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] pt-1">
                    <span className="flex items-center gap-1 font-bold text-amber-600">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {lab.rating} ({lab.reviewsCount})
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                      {lab.availability}
                    </span>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                  <span className="text-sm font-extrabold text-slate-900">
                    ₦{lab.price.toLocaleString()}
                  </span>
                  <button
                    type="button"
                    onClick={() => alert(`Booking appointment at ${lab.name}`)}
                    className="flex items-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" /> Book Test
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}