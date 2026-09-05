
"use client";

import Link from "next/link";
import {
  ChevronLeft,
  BadgeCheck,
  Star,
  MapPin,
  Phone,
  Clock,
  CalendarCheck,
  Stethoscope,
  Building,
  MessageSquare,
  UserCheck,
} from "lucide-react";

export default function HospitalProfilePage() {
  const hospital = {
    id: "citycare",
    name: "CityCare Hospital",
    isVerified: true,
    rating: 4.7,
    reviewsCount: 88,
    location:
      "Plot 102, Ahmadu Bello Way, Central Business District, Abuja",
    phone: "+234 901 234 5678",
    openingHours: "Open 24/7 (Emergency & Outpatient)",

    services: [
      "Emergency Care",
      "General Medicine",
      "Cardiology",
      "Pediatrics",
      "Surgery",
      "Laboratory",
      "Pharmacy",
    ],

    doctors: [
      {
        id: "doc-1",
        name: "Dr. Sarah Aliyu",
        specialty: "Consultant Cardiologist",
        experience: "12 yrs exp",
      },
      {
        id: "doc-2",
        name: "Dr. Emmanuel Okonkwo",
        specialty: "Chief Pediatrician",
        experience: "15 yrs exp",
      },
      {
        id: "doc-3",
        name: "Dr. Amina Yusuf",
        specialty: "General Surgeon",
        experience: "9 yrs exp",
      },
    ],

    facilities: [
      "Parking",
      "Pharmacy",
      "Laboratory",
      "Emergency unit",
    ],

    reviews: [
      {
        id: "rev-1",
        patientName: "Bisi A.",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Extremely prompt emergency response. The nursing staff was gentle and professional throughout my stay.",
      },
      {
        id: "rev-2",
        patientName: "Chidi N.",
        rating: 4,
        date: "1 month ago",
        comment:
          "Modern facilities and clean labs. The waiting time at the cardiology unit was minimal.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Navigation Breadcrumb */}
        <Link
          href="/hospitals"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Hospitals
        </Link>

        {/* Profile Header Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold text-slate-900">
                  {hospital.name}
                </h1>

                {hospital.isVerified && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">
                    <BadgeCheck className="w-3.5 h-3.5 text-teal-600" />
                    Verified Healthcare Facility
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 font-bold text-xs text-amber-600">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />

                <span>{hospital.rating}</span>

                <span className="text-slate-400 font-normal">
                  ({hospital.reviewsCount} patient reviews)
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 shrink-0">

              <a
                href={`tel:${hospital.phone}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Contact
              </a>

              <button
                type="button"
                onClick={() =>
                  alert(`Booking appointment at ${hospital.name}`)
                }
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                Book Appointment
              </button>

            </div>
          </div>

          {/* Quick Contact & Hours Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>{hospital.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{hospital.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{hospital.openingHours}</span>
            </div>

          </div>
        </div>

        {/* Services & Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Services */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">

            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Stethoscope className="w-4 h-4 text-teal-600" />
              Medical Services
            </h2>

            <div className="flex flex-wrap gap-2 pt-1">
              {hospital.services.map((service) => (
                <span
                  key={service}
                  className="text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-100 px-3 py-1.5 rounded-lg"
                >
                  {service}
                </span>
              ))}
            </div>

          </div>

          {/* Facilities */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">

            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Building className="w-4 h-4 text-teal-600" />
              On-site Facilities
            </h2>

            <div className="flex flex-wrap gap-2 pt-1">
              {hospital.facilities.map((facility) => (
                <span
                  key={facility}
                  className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg"
                >
                  {facility}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Doctors Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">

          <h2 className="text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-teal-600" />
            Attending Specialists & Doctors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {hospital.doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1"
              >
                <h3 className="font-extrabold text-xs text-slate-900">
                  {doctor.name}
                </h3>

                <p className="text-[11px] font-medium text-teal-700">
                  {doctor.specialty}
                </p>

                <p className="text-[10px] text-slate-400 pt-1">
                  {doctor.experience}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">

          <h2 className="text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-teal-600" />
            Patient Reviews
          </h2>

          <div className="space-y-3 divide-y divide-slate-100">
            {hospital.reviews.map((review) => (
              <div
                key={review.id}
                className="pt-3 first:pt-0 space-y-1"
              >

                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">
                    {review.patientName}
                  </span>

                  <span className="text-[10px] text-slate-400">
                    {review.date}
                  </span>
                </div>

                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-3 h-3 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  "{review.comment}"
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
