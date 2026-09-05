"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  XCircle,
  RotateCcw,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const initialAppointments = [
  {
    id: "apt-101",
    doctor: "Dr. Sarah Williams",
    specialty: "Cardiology",
    type: "Virtual Consultation",
    dateTime: "Today, 4:00 PM",
    status: "upcoming",
    location: "Online (Video Call)",
    canJoin: true,
  },
  {
    id: "apt-102",
    doctor: "Dr. Emmanuel Okonkwo",
    specialty: "Pediatrics",
    type: "In-Person Visit",
    dateTime: "Sept 12, 2026 at 10:30 AM",
    status: "upcoming",
    location: "CityCare Hospital, Abuja",
    canJoin: false,
  },
  {
    id: "apt-100",
    doctor: "Dr. Amina Yusuf",
    specialty: "General Surgery",
    type: "Virtual Consultation",
    dateTime: "Sept 2, 2026 at 2:00 PM",
    status: "completed",
    location: "Online (Video Call)",
    canJoin: false,
  },
];

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleCancel = (id) => {
    if (confirm("Are you sure you want to cancel this appointment?")) {
      setAppointments((prev) =>
        prev.map((apt) =>
          apt.id === id ? { ...apt, status: "cancelled" } : apt
        )
      );
    }
  };

  const filteredAppointments = appointments.filter(
    (apt) => apt.status === activeTab
  );

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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              My Appointments
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Manage scheduled consultations, join live calls, or reschedule appointments.
            </p>
          </div>
          <Link
            href="/doctors"
            className="inline-flex items-center justify-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition-colors shadow-sm shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" /> Book New Appointment
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 gap-6 text-xs font-bold">
          {["upcoming", "completed", "cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 capitalize transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-teal-600 text-teal-700"
                  : "border-transparent text-slate-400 hover:text-slate-700"
              }`}
            >
              {tab} Appointments
            </button>
          ))}
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {filteredAppointments.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-xs text-slate-400 space-y-2">
              <AlertCircle className="w-8 h-8 mx-auto text-slate-300" />
              <p>No {activeTab} appointments found.</p>
            </div>
          ) : (
            filteredAppointments.map((apt) => (
              <div
                key={apt.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-100">
                      {apt.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {apt.id}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-sm font-extrabold text-slate-900">
                      {apt.doctor}
                    </h2>
                    <p className="text-xs text-teal-700 font-medium">
                      {apt.specialty}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1 font-semibold text-slate-800">
                      <Clock className="w-3.5 h-3.5 text-amber-500" /> {apt.dateTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {apt.location}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
                  {apt.status === "upcoming" && (
                    <>
                      {apt.canJoin && (
                        <Link
                          href="/consultations/live"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 font-bold text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-2 rounded-xl transition-colors shadow-sm"
                        >
                          <Video className="w-3.5 h-3.5" /> Join Call
                        </Link>
                      )}
                      <button
                        type="button"
                        onClick={() => handleCancel(apt.id)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1 font-semibold text-xs text-rose-600 hover:bg-rose-50 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <XCircle className="w-3.5 h-3.5" /> Cancel
                      </button>
                    </>
                  )}

                  {apt.status === "completed" && (
                    <Link
                      href={`/doctors?rebook=${apt.doctor}`}
                      className="inline-flex items-center gap-1 font-bold text-xs text-teal-600 bg-teal-50 hover:bg-teal-100 px-3.5 py-2 rounded-xl transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Rebook Consultation
                    </Link>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}