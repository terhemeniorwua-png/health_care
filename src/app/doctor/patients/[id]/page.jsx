"use client";

import Link from "next/link";
import {
  ChevronLeft,
  User,
  Calendar,
  FileText,
  Pill,
  FlaskConical,
  Clock,
  Video,
  ShieldAlert,
  Heart,
  Phone,
  Mail,
  Plus,
} from "lucide-react";

export default function DoctorPatientProfilePage() {
  const patient = {
    name: "John Doe",
    ageGender: "34 Yrs, Male",
    dob: "May 14, 1992",
    phone: "+234 801 234 5678",
    email: "john.doe@example.com",
    bloodGroup: "O Positive (O+)",
    allergies: ["Penicillin", "Peanuts"],
    appointmentHistory: [
      { date: "Sep 5, 2026 - 4:00 PM", type: "Video Consultation", status: "Upcoming" },
      { date: "Aug 12, 2026", type: "In-Person Consultation", status: "Completed" },
    ],
    medicalRecords: [
      { title: "ECG Summary Report", date: "Aug 12, 2026", facility: "CityCare Hospital" },
    ],
    prescriptions: [
      { name: "Amlodipine 5mg", dosage: "1 tablet daily", prescribedDate: "Aug 12, 2026" },
    ],
    labResults: [
      { test: "Lipid Profile Test", result: "Normal Range", date: "Aug 10, 2026" },
    ],
    consultationHistory: [
      { date: "Aug 12, 2026", notes: "Patient reported occasional dizziness. Mild hypertension noted." },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/doctor/appointments"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Appointments
        </Link>

        {/* Header Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-800 border border-teal-300 flex items-center justify-center font-extrabold text-xl shrink-0">
              JD
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black text-slate-900">{patient.name}</h1>
                <span className="text-xs font-bold text-slate-500">({patient.ageGender})</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-3">
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {patient.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {patient.email}</span>
              </p>
            </div>
          </div>

          <Link
            href="/doctor/consultation/workspace"
            className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 px-5 py-3 rounded-xl transition-colors shadow-xs shrink-0"
          >
            <Video className="w-4 h-4" /> Start Consultation
          </Link>
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Basic Info & Vitals */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <User className="w-4 h-4 text-teal-600" /> Basic Information
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Date of Birth</span>
                <p className="font-extrabold text-slate-900 mt-0.5">{patient.dob}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Blood Group</span>
                <p className="font-extrabold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md inline-block mt-0.5">{patient.bloodGroup}</p>
              </div>
              <div className="col-span-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-500" /> Known Allergies
                </span>
                <div className="flex gap-2 mt-1">
                  {patient.allergies.map((a, idx) => (
                    <span key={idx} className="text-[10px] font-extrabold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Appointment History */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Calendar className="w-4 h-4 text-teal-600" /> Appointment History
            </h2>
            <div className="space-y-2 text-xs">
              {patient.appointmentHistory.map((apt, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-extrabold text-slate-900">{apt.date}</p>
                    <p className="text-[11px] text-slate-500">{apt.type}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                    {apt.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Prescriptions & Lab Results */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Pill className="w-4 h-4 text-amber-500" /> Active Prescriptions
            </h2>
            <div className="space-y-2 text-xs">
              {patient.prescriptions.map((p, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/60">
                  <p className="font-extrabold text-slate-900">{p.name}</p>
                  <p className="text-[11px] text-slate-600">{p.dosage} • Prescribed {p.prescribedDate}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Medical Records & Labs */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <FlaskConical className="w-4 h-4 text-emerald-600" /> Lab Results & Reports
            </h2>
            <div className="space-y-2 text-xs">
              {patient.labResults.map((lab, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/60 flex items-center justify-between">
                  <div>
                    <p className="font-extrabold text-slate-900">{lab.test}</p>
                    <p className="text-[11px] text-emerald-700 font-bold">{lab.result}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold">{lab.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}