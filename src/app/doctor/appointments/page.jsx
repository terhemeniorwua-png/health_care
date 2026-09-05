"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Calendar,
  Video,
  User,
  Clock,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  MoreVertical,
  ArrowRight,
} from "lucide-react";

const tabOptions = ["Today", "Upcoming", "Completed", "Cancelled"];

const allAppointments = [
  {
    id: "apt-101",
    tab: "Today",
    patientName: "John Doe",
    patientAgeGender: "34 Yrs, Male",
    time: "4:00 PM",
    date: "Today, Sep 5, 2026",
    type: "Video consultation",
    isOnline: true,
    avatarBg: "bg-teal-100 text-teal-800 border-teal-300",
    initials: "JD",
  },
  {
    id: "apt-102",
    tab: "Today",
    patientName: "Amina Bello",
    patientAgeGender: "29 Yrs, Female",
    time: "10:30 AM",
    date: "Today, Sep 5, 2026",
    type: "In-person visit",
    isOnline: false,
    avatarBg: "bg-purple-100 text-purple-800 border-purple-300",
    initials: "AB",
  },
  {
    id: "apt-201",
    tab: "Upcoming",
    patientName: "Fatima Usman",
    patientAgeGender: "41 Yrs, Female",
    time: "09:00 AM",
    date: "Tomorrow, Sep 6, 2026",
    type: "Video consultation",
    isOnline: true,
    avatarBg: "bg-blue-100 text-blue-800 border-blue-300",
    initials: "FU",
  },
  {
    id: "apt-202",
    tab: "Upcoming",
    patientName: "Chidi Okonkwo",
    patientAgeGender: "45 Yrs, Male",
    time: "02:15 PM",
    date: "Sep 8, 2026",
    type: "In-person visit",
    isOnline: false,
    avatarBg: "bg-amber-100 text-amber-800 border-amber-300",
    initials: "CO",
  },
  {
    id: "apt-301",
    tab: "Completed",
    patientName: "Samuel Adebayo",
    patientAgeGender: "52 Yrs, Male",
    time: "09:00 AM",
    date: "Sep 4, 2026",
    type: "Video consultation",
    isOnline: false,
    avatarBg: "bg-slate-100 text-slate-800 border-slate-300",
    initials: "SA",
  },
  {
    id: "apt-401",
    tab: "Cancelled",
    patientName: "Grace Eze",
    patientAgeGender: "38 Yrs, Female",
    time: "02:30 PM",
    date: "Sep 5, 2026",
    type: "In-person visit",
    isOnline: false,
    avatarBg: "bg-rose-100 text-rose-800 border-rose-300",
    initials: "GE",
  },
];

export default function DoctorAppointmentsPage() {
  const [activeTab, setActiveTab] = useState("Today");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAppointments = allAppointments.filter((apt) => {
    const matchesTab = apt.tab === activeTab;
    const matchesSearch = apt.patientName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/doctor/dashboard"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              Doctor Appointments
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Manage scheduled patient consultations, video calls, and clinical visits.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search patient name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-900 focus:ring-1 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>

        {/* Tabs Filter Bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
          {tabOptions.map((tab) => {
            const count = allAppointments.filter((a) => a.tab === tab).length;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all shrink-0 ${
                  isActive
                    ? "bg-teal-600 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                    isActive
                      ? "bg-teal-700 text-teal-100"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Appointment Cards List */}
        <div className="space-y-4">
          {filteredAppointments.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-xs text-slate-500">
              No appointments found for the selected view.
            </div>
          ) : (
            filteredAppointments.map((apt) => (
              <div
                key={apt.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-teal-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Patient Info */}
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-sm border shrink-0 ${apt.avatarBg}`}
                  >
                    {apt.initials}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-black text-slate-900">
                        Patient: {apt.patientName}
                      </h2>
                      <span className="text-[10px] font-bold text-slate-400">
                        ({apt.patientAgeGender})
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
                      <span className="font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-teal-600" />
                        {apt.time}
                      </span>

                      <span className="font-semibold text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {apt.date}
                      </span>

                      <span className="font-semibold text-slate-700 flex items-center gap-1 bg-slate-100 px-2.5 py-0.5 rounded-lg">
                        {apt.type.includes("Video") ? (
                          <Video className="w-3.5 h-3.5 text-teal-600" />
                        ) : (
                          <User className="w-3.5 h-3.5 text-slate-500" />
                        )}
                        {apt.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-end gap-2 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
                  {apt.tab === "Today" && (
                    <button
                      type="button"
                      onClick={() =>
                        alert(`Starting consultation with ${apt.patientName}`)
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 px-3.5 py-2 rounded-xl transition-colors shadow-xs"
                    >
                      <Video className="w-3.5 h-3.5" /> Start Consultation
                    </button>
                  )}

                  <Link
                    href={`/doctor/patients/${apt.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3.5 py-2 rounded-xl transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-slate-500" /> View Patient
                  </Link>

                  {(apt.tab === "Today" || apt.tab === "Upcoming") && (
                    <button
                      type="button"
                      onClick={() =>
                        alert(`Rescheduling appointment for ${apt.patientName}`)
                      }
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3.5 py-2 rounded-xl transition-colors"
                    >
                      Reschedule
                    </button>
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