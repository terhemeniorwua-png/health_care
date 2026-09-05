"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  Calendar,
  Stethoscope,
  Pill,
  FlaskConical,
  FileText,
  ChevronLeft,
  Download,
  Clock,
  CheckCircle2,
} from "lucide-react";

const medicalEvents = [
  {
    type: "Consultation",
    title: "Cardiology Review",
    doctor: "Dr. Sarah Williams",
    date: "September 5, 2026",
    summary: "Routine checkup for morning headaches and elevated blood pressure. Recommended low-sodium diet.",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    type: "Lab Result",
    title: "Full Blood Count & Lipid Profile",
    facility: "CityLab Laboratory",
    date: "September 4, 2026",
    summary: "All blood counts within standard physiological thresholds. Cholesterol slightly elevated.",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    type: "Prescription",
    title: "Amlodipine 5mg & CoQ10",
    doctor: "Dr. Sarah Williams",
    date: "September 5, 2026",
    summary: "Issued 30-day course for blood pressure management.",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    type: "Consultation",
    title: "General Pediatric Consultation",
    doctor: "Dr. Emmanuel Okonkwo",
    date: "August 20, 2026",
    summary: "Mild fever and cough assessment for family dependent.",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
  },
];

export default function MedicalHistoryPage() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = medicalEvents.filter((event) => {
    if (filter === "All") return true;
    return event.type === filter;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/patient/dashboard"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              Full Medical History
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Comprehensive chronological timeline of consultations, lab results, and prescriptions.
            </p>
          </div>
          <button
            type="button"
            onClick={() => alert("Exporting full medical record PDF...")}
            className="inline-flex items-center justify-center gap-1.5 font-bold text-xs text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 px-4 py-2.5 rounded-xl transition-colors shadow-sm shrink-0"
          >
            <Download className="w-3.5 h-3.5" /> Export Health Records
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
          {["All", "Consultation", "Lab Result", "Prescription"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilter(type)}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-colors shrink-0 ${
                filter === type
                  ? "bg-teal-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {type}s
            </button>
          ))}
        </div>

        {/* Chronological Timeline */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {filteredEvents.map((event, idx) => (
              <div key={idx} className="relative space-y-2">
                
                {/* Timeline Point Dot */}
                <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow">
                  <Activity className="w-3 h-3" />
                </div>

                {/* Event Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-extrabold text-slate-900">
                      {event.title}
                    </h2>
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${event.badgeColor}`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {event.date}
                  </span>
                </div>

                {/* Practitioner or Facility */}
                <p className="text-xs font-semibold text-teal-700">
                  {event.doctor || event.facility}
                </p>

                {/* Event Notes */}
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {event.summary}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}