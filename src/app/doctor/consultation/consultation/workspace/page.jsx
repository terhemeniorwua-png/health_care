"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  User,
  FileText,
  Activity,
  Pill,
  Calendar,
  CheckCircle2,
  Plus,
  Trash2,
} from "lucide-react";

export default function ConsultationWorkspacePage() {
  const [consultationNotes, setConsultationNotes] = useState("");
  const [assessment, setAssessment] = useState("");
  const [medications, setMedications] = useState([
    { name: "Amlodipine", dosage: "5mg", frequency: "Once daily" },
  ]);
  const [followUpDate, setFollowUpDate] = useState("");

  const addMedication = () => {
    setMedications([
      ...medications,
      { name: "", dosage: "", frequency: "" },
    ]);
  };

  const removeMedication = (index) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/doctor/appointments"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Appointments
        </Link>

        {/* Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              Consultation Workspace
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Record clinical notes, diagnostic assessments, prescriptions, and follow-ups.
            </p>
          </div>
        </div>

        {/* 1. Patient Information Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 border border-teal-300 flex items-center justify-center font-extrabold text-base shrink-0">
            JD
          </div>
          <div className="space-y-0.5">
            <h2 className="text-sm font-black text-slate-900">Patient Information: John Doe</h2>
            <p className="text-xs text-slate-500">
              34 Yrs • Male • Blood Group: <span className="font-bold text-teal-700">O+</span> • Allergies: <span className="font-bold text-rose-600">Penicillin</span>
            </p>
          </div>
        </div>

        {/* 2. Consultation Notes */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-teal-600" /> Consultation Notes
          </label>
          <textarea
            rows={4}
            value={consultationNotes}
            onChange={(e) => setConsultationNotes(e.target.value)}
            placeholder="Enter consultation notes..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 focus:ring-1 focus:ring-teal-500 outline-none leading-relaxed"
          ></textarea>
        </div>

        {/* 3. Assessment */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <Activity className="w-4 h-4 text-teal-600" /> Assessment
          </label>
          <textarea
            rows={3}
            value={assessment}
            onChange={(e) => setAssessment(e.target.value)}
            placeholder="Enter assessment..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 focus:ring-1 focus:ring-teal-500 outline-none leading-relaxed"
          ></textarea>
        </div>

        {/* 4. Prescription */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Pill className="w-4 h-4 text-amber-500" /> Prescription
            </h3>
            <button
              type="button"
              onClick={addMedication}
              className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Add Medication
            </button>
          </div>

          <div className="space-y-3">
            {medications.map((med, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-slate-50 p-3 rounded-xl border border-slate-200">
                <input
                  type="text"
                  placeholder="Medication Name"
                  value={med.name}
                  onChange={(e) => {
                    const updated = [...medications];
                    updated[idx].name = e.target.value;
                    setMedications(updated);
                  }}
                  className="sm:col-span-5 bg-white border border-slate-200 rounded-lg p-2 text-xs text-slate-900 outline-none"
                />
                <input
                  type="text"
                  placeholder="Dosage (e.g. 5mg)"
                  value={med.dosage}
                  onChange={(e) => {
                    const updated = [...medications];
                    updated[idx].dosage = e.target.value;
                    setMedications(updated);
                  }}
                  className="sm:col-span-3 bg-white border border-slate-200 rounded-lg p-2 text-xs text-slate-900 outline-none"
                />
                <input
                  type="text"
                  placeholder="Frequency"
                  value={med.frequency}
                  onChange={(e) => {
                    const updated = [...medications];
                    updated[idx].frequency = e.target.value;
                    setMedications(updated);
                  }}
                  className="sm:col-span-3 bg-white border border-slate-200 rounded-lg p-2 text-xs text-slate-900 outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeMedication(idx)}
                  className="sm:col-span-1 p-2 text-rose-600 hover:text-rose-800 flex justify-center"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Follow-up & Complete */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-teal-600" /> Follow-up
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-1/2 space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Schedule follow-up date</label>
              <input
                type="date"
                value={followUpDate}
                onChange={(e) => setFollowUpDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
              />
            </div>

            <button
              type="button"
              onClick={() => alert("Consultation completed and record saved.")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-extrabold text-white bg-teal-600 hover:bg-teal-700 px-6 py-3.5 rounded-xl transition-colors shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4" /> Complete Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}