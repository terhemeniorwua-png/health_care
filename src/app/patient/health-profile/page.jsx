"use client";

import Link from "next/link";
import {
  User,
  Phone,
  Mail,
  Heart,
  AlertCircle,
  Pill,
  ShieldAlert,
  ChevronLeft,
  Edit,
  Activity,
  Calendar,
} from "lucide-react";

export default function HealthProfilePage() {
  const profile = {
    personal: {
      name: "John Doe",
      dob: "May 14, 1992 (34 Yrs)",
      gender: "Male",
      phone: "+234 801 234 5678",
      email: "john.doe@example.com",
    },
    emergency: {
      name: "Jane Doe",
      relationship: "Spouse",
      phone: "+234 802 987 6543",
    },
    health: {
      allergies: ["Penicillin", "Peanuts", "Sulfa Drugs"],
      medications: ["Amlodipine 5mg (Daily)", "Multivitamins"],
      relevantInfo: "Diagnosed with mild essential hypertension in 2024. Non-smoker.",
      bloodGroup: "O Positive (O+)",
      genotype: "AA",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/patient/dashboard"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              Health Profile
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified clinical identity, emergency contacts, and vital medical traits.
            </p>
          </div>
          <Link
            href="/patient/profile"
            className="inline-flex items-center justify-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition-colors shadow-sm shrink-0"
          >
            <Edit className="w-3.5 h-3.5" /> Edit Profile
          </Link>
        </div>

        {/* 1. Personal Information Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <User className="w-4 h-4 text-teal-600" /> Personal Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Full Name</span>
              <p className="font-extrabold text-slate-900 mt-0.5">{profile.personal.name}</p>
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Date of Birth</span>
              <p className="font-extrabold text-slate-900 mt-0.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> {profile.personal.dob}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Gender</span>
              <p className="font-extrabold text-slate-900 mt-0.5">{profile.personal.gender}</p>
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Phone Number</span>
              <p className="font-extrabold text-slate-900 mt-0.5 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> {profile.personal.phone}
              </p>
            </div>

            <div className="sm:col-span-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Email Address</span>
              <p className="font-extrabold text-slate-900 mt-0.5 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> {profile.personal.email}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Emergency Contact Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <ShieldAlert className="w-4 h-4 text-rose-600" /> Emergency Contact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs bg-rose-50/50 p-4 rounded-xl border border-rose-100">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Contact Name</span>
              <p className="font-extrabold text-slate-900 mt-0.5">{profile.emergency.name}</p>
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Relationship</span>
              <p className="font-extrabold text-slate-900 mt-0.5">{profile.emergency.relationship}</p>
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Phone Number</span>
              <p className="font-extrabold text-rose-700 mt-0.5 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> {profile.emergency.phone}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Health Information Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Heart className="w-4 h-4 text-teal-600" /> Health & Clinical Summary
          </h2>

          {/* Blood Group & Genotype Badges */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-teal-50 border border-teal-200">
              <span className="text-[10px] font-bold text-teal-800 uppercase">Blood Group</span>
              <p className="text-base font-black text-teal-900 mt-0.5">{profile.health.bloodGroup}</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Genotype</span>
              <p className="text-base font-black text-slate-900 mt-0.5">{profile.health.genotype}</p>
            </div>
          </div>

          {/* Allergies */}
          <div className="space-y-1.5 text-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-rose-500" /> Known Allergies
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {profile.health.allergies.map((allergy, idx) => (
                <span
                  key={idx}
                  className="font-extrabold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-lg text-[11px]"
                >
                  {allergy}
                </span>
              ))}
            </div>
          </div>

          {/* Active Medications */}
          <div className="space-y-1.5 text-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
              <Pill className="w-3.5 h-3.5 text-amber-500" /> Current Medications
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {profile.health.medications.map((med, idx) => (
                <span
                  key={idx}
                  className="font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg text-[11px]"
                >
                  {med}
                </span>
              ))}
            </div>
          </div>

          {/* Relevant Medical Information */}
          <div className="space-y-1 text-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase">
              Relevant Medical Information & Notes
            </span>
            <p className="text-slate-700 font-medium leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
              {profile.health.relevantInfo}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}