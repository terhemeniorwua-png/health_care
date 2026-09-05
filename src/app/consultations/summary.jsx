"use client";

import Link from "next/link";
import {
  FileCheck2,
  User,
  Calendar,
  Clock,
  Stethoscope,
  Pill,
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function ConsultationSummaryPage() {
  const summary = {
    id: "CS-88204",
    date: "September 5, 2026",
    duration: "18 minutes",
    doctor: {
      name: "Dr. Sarah Williams",
      title: "Consultant Cardiologist",
      facility: "CityCare Hospital, Abuja",
    },
    diagnosis: "Primary Mild Hypertension & Mild Fatigue",
    notes:
      "Patient reported occasional morning headaches and elevated fatigue levels. Vital signs were stable during virtual review. Recommended lifestyle modifications, low-sodium dietary intake, and daily monitoring of blood pressure.",
    prescriptions: [
      {
        name: "Amlodipine 5mg Tablets",
        dosage: "1 tablet daily in the morning",
        duration: "30 days",
      },
      {
        name: "CoQ10 100mg Supplements",
        dosage: "1 capsule daily after food",
        duration: "30 days",
      },
    ],
    followUp: "2 weeks (Sept 19, 2026)",
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Header Banner */}
        <div className="bg-emerald-700 rounded-2xl p-6 text-white shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider bg-emerald-800 text-emerald-100 px-3 py-1 rounded-full border border-emerald-600">
              <CheckCircle2 className="w-3.5 h-3.5" /> Consultation Complete
            </span>
            <span className="text-xs font-semibold text-emerald-200">
              Ref: {summary.id}
            </span>
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-black">Post-Consultation Summary</h1>
            <p className="text-xs text-emerald-100 mt-0.5">
              Your official medical summary and prescribed medication record.
            </p>
          </div>
        </div>

        {/* Doctor & Appointment Meta Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Attending Doctor</span>
            <p className="font-extrabold text-slate-900">{summary.doctor.name}</p>
            <p className="text-[11px] text-teal-700 font-medium">{summary.doctor.title}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Facility</span>
            <p className="font-semibold text-slate-800">{summary.doctor.facility}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Date & Duration</span>
            <p className="font-semibold text-slate-800">{summary.date}</p>
            <p className="text-[11px] text-slate-500">{summary.duration}</p>
          </div>
        </div>

        {/* Diagnosis & Clinical Notes */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="space-y-1 border-b border-slate-100 pb-3">
            <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-wider">
              Diagnosis
            </span>
            <h2 className="text-base font-extrabold text-slate-900">{summary.diagnosis}</h2>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
              Clinical Notes & Advice
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">{summary.notes}</p>
          </div>
        </div>

        {/* Prescribed Medications */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Pill className="w-4 h-4 text-teal-600" /> Issued Prescriptions
            </h2>
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
              Rx Verified
            </span>
          </div>

          <div className="space-y-3">
            {summary.prescriptions.map((rx, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 p-3.5 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <h3 className="font-extrabold text-slate-900">{rx.name}</h3>
                  <span className="text-[11px] font-semibold text-teal-700">{rx.duration}</span>
                </div>
                <p className="text-xs text-slate-600">
                  Dosage: <span className="font-semibold text-slate-800">{rx.dosage}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Quick Action to Order Prescribed Medicine */}
          <Link
            href="/patient/prescriptions"
            className="w-full flex items-center justify-center gap-2 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 py-3 rounded-xl transition-colors shadow-sm mt-2"
          >
            Order Prescribed Medicines <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Next Steps Footer */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs space-y-0.5 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase text-slate-400">Recommended Follow-up</span>
            <p className="font-extrabold text-slate-900">{summary.followUp}</p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => alert("Downloading PDF summary...")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </button>
            <Link
              href="/patient/dashboard"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 font-bold text-xs text-teal-700 bg-teal-50 hover:bg-teal-100 px-4 py-2.5 rounded-xl transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}