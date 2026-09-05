"use client";

import Link from "next/link";
import {
  FileText,
  User,
  Calendar,
  Download,
  Send,
  Eye,
  Pill,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";

const prescriptionsList = [
  {
    id: "RX2045",
    doctor: "Dr. Sarah Williams",
    specialty: "Consultant Cardiologist",
    date: "September 5, 2026",
    medications: ["Amoxicillin 500mg Capsules", "Vitamin C 1000mg Effervescent"],
    facility: "CityCare Hospital, Abuja",
  },
  {
    id: "RX1982",
    doctor: "Dr. Emmanuel Okonkwo",
    specialty: "Pediatrician",
    date: "August 20, 2026",
    medications: ["Paracetamol Syrup 120mg/5ml", "Ibuprofen 200mg"],
    facility: "Premier Clinic, Lagos",
  },
];

export default function MyPrescriptionsPage() {
  const handleSendToPharmacy = (id) => {
    alert(`Prescription ${id} sent directly to your preferred partner pharmacy.`);
  };

  const handleDownload = (id) => {
    alert(`Downloading PDF for prescription ${id}...`);
  };

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
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">
            My Prescriptions
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            View, download, or forward your digital prescriptions directly to partner pharmacies.
          </p>
        </div>

        {/* Prescriptions Cards Stream */}
        <div className="space-y-4">
          {prescriptionsList.map((rx) => (
            <div
              key={rx.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 flex flex-col justify-between"
            >
              {/* Card Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-slate-900">
                    Prescription #{rx.id}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" /> Rx Verified
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> {rx.date}
                </span>
              </div>

              {/* Doctor Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Prescribed By</span>
                  <p className="font-extrabold text-slate-900 flex items-center gap-1.5 mt-0.5">
                    <User className="w-3.5 h-3.5 text-teal-600" /> {rx.doctor}
                  </p>
                  <p className="text-[11px] text-teal-700 font-medium pl-5">{rx.specialty}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Medical Facility</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{rx.facility}</p>
                </div>
              </div>

              {/* Medications List */}
              <div className="space-y-1.5 bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Prescribed Medications
                </span>
                <ul className="space-y-1">
                  {rx.medications.map((med, idx) => (
                    <li
                      key={idx}
                      className="text-xs font-bold text-slate-800 flex items-center gap-2"
                    >
                      <Pill className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      {med}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons Toolbar */}
              <div className="flex flex-wrap items-center justify-end gap-2 border-t border-slate-100 pt-3">
                <Link
                  href={`/consultations/summary?rx=${rx.id}`}
                  className="inline-flex items-center gap-1.5 font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-xl transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" /> View
                </Link>

                <button
                  type="button"
                  onClick={() => handleDownload(rx.id)}
                  className="inline-flex items-center gap-1.5 font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-xl transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </button>

                <button
                  type="button"
                  onClick={() => handleSendToPharmacy(rx.id)}
                  className="inline-flex items-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" /> Send to Pharmacist
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}