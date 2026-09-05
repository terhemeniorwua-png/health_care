"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Stethoscope,
  Pill,
  FlaskConical,
  ImageIcon,
  FileText,
  Syringe,
  Calendar,
  Download,
  Filter,
} from "lucide-react";

const categories = [
  { name: "Consultations", icon: Stethoscope, count: 12 },
  { name: "Prescriptions", icon: Pill, count: 8 },
  { name: "Lab Results", icon: FlaskConical, count: 5 },
  { name: "Imaging", icon: ImageIcon, count: 3 },
  { name: "Documents", icon: FileText, count: 4 },
  { name: "Vaccinations", icon: Syringe, count: 6 },
];

const timelineData = [
  {
    month: "September 2026",
    events: [
      {
        type: "Consultation",
        title: "Cardiology Follow-up",
        subtitle: "Dr. Sarah Williams • City Medical Center",
        date: "Sep 5, 2026",
        icon: Stethoscope,
        tagColor: "bg-teal-50 text-teal-700 border-teal-200",
      },
      {
        type: "Lab Result",
        title: "Full Blood Count & Lipid Profile",
        subtitle: "CityLab Laboratory",
        date: "Sep 4, 2026",
        icon: FlaskConical,
        tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      },
      {
        type: "Prescription",
        title: "Amlodipine 5mg (30 Days)",
        subtitle: "Prescribed by Dr. Sarah Williams",
        date: "Sep 4, 2026",
        icon: Pill,
        tagColor: "bg-amber-50 text-amber-700 border-amber-200",
      },
    ],
  },
  {
    month: "August 2026",
    events: [
      {
        type: "Medical Document",
        title: "Annual Fitness & Medical Clearance Certificate",
        subtitle: "St. Nicholas Hospital",
        date: "Aug 18, 2026",
        icon: FileText,
        tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      },
    ],
  },
];

export default function MyHealthRecordsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              My Health Records
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Unified digital repository for all clinical encounters, tests, and prescriptions.
            </p>
          </div>
          <button
            type="button"
            onClick={() => alert("Exporting all records...")}
            className="inline-flex items-center gap-1.5 font-bold text-xs text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 px-4 py-2.5 rounded-xl transition-colors shadow-sm shrink-0"
          >
            <Download className="w-3.5 h-3.5" /> Download All
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() =>
                  setSelectedCategory(isSelected ? "All" : cat.name)
                }
                className={`p-3 rounded-2xl border text-left transition-all shadow-sm flex flex-col justify-between ${
                  isSelected
                    ? "bg-teal-600 text-white border-teal-600 shadow-teal-100"
                    : "bg-white border-slate-200 hover:border-teal-300 text-slate-900"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`p-2 rounded-xl ${
                      isSelected ? "bg-teal-500/30 text-white" : "bg-teal-50 text-teal-700"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${
                      isSelected
                        ? "bg-teal-700 text-teal-100"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </div>
                <p className="text-xs font-bold leading-tight">{cat.name}</p>
              </button>
            );
          })}
        </div>

        {/* Timeline Records Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-600" /> Chronological Timeline
            </h2>
            {selectedCategory !== "All" && (
              <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                Filter: {selectedCategory}
              </span>
            )}
          </div>

          <div className="space-y-8">
            {timelineData.map((group) => (
              <div key={group.month} className="space-y-4">
                
                {/* Timeline Month Header */}
                <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 text-xs font-extrabold px-3 py-1 rounded-lg">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {group.month}
                </div>

                {/* Tree Structure Timeline Items */}
                <div className="relative pl-6 space-y-3 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {group.events.map((event, idx) => {
                    const EventIcon = event.icon;
                    return (
                      <div
                        key={idx}
                        className="relative group bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-xl p-3.5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        {/* Tree Branch Connector Node */}
                        <div className="absolute -left-6 top-4 w-3.5 h-0.5 bg-slate-300"></div>
                        <div className="absolute -left-[1.65rem] top-3.5 w-2.5 h-2.5 rounded-full bg-teal-600 border-2 border-white shadow-sm"></div>

                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-white border border-slate-200 text-teal-700 shrink-0 mt-0.5">
                            <EventIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xs font-extrabold text-slate-900">
                                {event.title}
                              </h3>
                              <span
                                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${event.tagColor}`}
                              >
                                {event.type}
                              </span>
                            </div>
                            <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                              {event.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs border-t sm:border-t-0 border-slate-200 pt-2 sm:pt-0">
                          <span className="text-[11px] font-bold text-slate-400">
                            {event.date}
                          </span>
                          <button
                            type="button"
                            className="text-xs font-bold text-teal-700 hover:text-teal-900 underline underline-offset-2"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}