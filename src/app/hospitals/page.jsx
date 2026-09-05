"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Star,
  BadgeCheck,
  ChevronDown,
  SlidersHorizontal,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

const hospitalData = [
  {
    id: "citycare",
    name: "CityCare Hospital",
    isVerified: true,
    rating: 4.7,
    reviewsCount: 88,
    location: "Abuja",
    specialties: ["Emergency Care", "Cardiology", "Pediatrics"],
    hasEmergency: true,
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "centralmed",
    name: "Central Medical Center",
    isVerified: true,
    rating: 4.8,
    reviewsCount: 142,
    location: "Lagos",
    specialties: ["General Medicine", "Surgery", "Pharmacy"],
    hasEmergency: true,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "apexclinic",
    name: "Apex Specialist Clinic",
    isVerified: false,
    rating: 4.5,
    reviewsCount: 39,
    location: "Port Harcourt",
    specialties: ["Pediatrics", "Laboratory", "General Medicine"],
    hasEmergency: false,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400",
  },
];

export default function HospitalsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHospitals = hospitalData.filter(
    (h) =>
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold text-slate-900">
            Find a hospital or clinic
          </h1>
          <p className="text-xs text-slate-500">
            Locate verified healthcare facilities, emergency units, and specialized clinics.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search hospitals, clinics, location, or specialty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
          />
        </div>

        {/* Filters Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200 text-xs font-semibold text-slate-700">
          <span className="flex items-center gap-1 text-teal-700 shrink-0 pr-2">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filters
          </span>
          {["Location", "Specialty", "Emergency services", "Facilities", "Rating"].map(
            (filter) => (
              <button
                key={filter}
                type="button"
                className="flex items-center gap-1 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shrink-0 hover:bg-slate-100 transition-colors"
              >
                {filter}
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
            )
          )}
        </div>

        {/* Hospital Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredHospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Image Header */}
                <div className="w-full h-40 bg-slate-100 relative">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                  {hospital.hasEmergency && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <ShieldAlert className="w-3 h-3" /> 24/7 Emergency
                    </span>
                  )}
                </div>

                <div className="p-4 space-y-2">
                  {/* Name & Verification */}
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-sm font-extrabold text-slate-900">
                      {hospital.name}
                    </h2>
                    {hospital.isVerified && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded shrink-0">
                        <BadgeCheck className="w-3 h-3 text-teal-600" /> Verified
                      </span>
                    )}
                  </div>

                  {/* Rating & Location */}
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 font-bold text-slate-800">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {hospital.rating}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1 font-medium text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {hospital.location}
                    </span>
                  </div>

                  {/* Specialties Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {hospital.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 pt-0">
                <Link
                  href={`/hospitals/${hospital.id}`}
                  className="w-full flex items-center justify-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 py-2.5 rounded-xl transition-colors"
                >
                  View Hospital <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}