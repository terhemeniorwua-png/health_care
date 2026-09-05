"use client";

import Link from "next/link";
import {
  FlaskConical,
  Calendar,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";

const labResultsList = [
  {
    id: "LAB-9042",
    testName: "Full Blood Count",
    date: "September 4, 2026",
    laboratory: "CityLab Laboratory",
    status: "Available",
  },
  {
    id: "LAB-8812",
    testName: "Lipid Profile & Cholesterol",
    date: "August 28, 2026",
    laboratory: "Synlab Diagnostic Centre",
    status: "Available",
  },
  {
    id: "LAB-7701",
    testName: "Fasting Blood Glucose",
    date: "August 12, 2026",
    laboratory: "CityLab Laboratory",
    status: "Available",
  },
];

export default function MyLabResultsPage() {
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
              My Lab Results
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Access and download verified laboratory diagnostic reports.
            </p>
          </div>
          <Link
            href="/lab-tests"
            className="inline-flex items-center justify-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition-colors shadow-sm shrink-0"
          >
            <FlaskConical className="w-3.5 h-3.5" /> Book New Lab Test
          </Link>
        </div>

        {/* Lab Results Stream */}
        <div className="space-y-4">
          {labResultsList.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {result.status}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {result.id}
                  </span>
                </div>

                <div>
                  <h2 className="text-base font-extrabold text-slate-900">
                    {result.testName}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" /> {result.date}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-teal-700">
                      <Building2 className="w-3.5 h-3.5" /> {result.laboratory}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0 shrink-0">
                <Link
                  href={`/patient/lab-results/${result.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" /> View Result
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}