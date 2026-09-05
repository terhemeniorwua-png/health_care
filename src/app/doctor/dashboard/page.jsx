"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Users,
  CheckCircle2,
  DollarSign,
  Clock,
  MessageSquare,
  XCircle,
  Bell,
  ChevronRight,
  ArrowUpRight,
  Video,
  FileText,
  Search,
  Filter,
} from "lucide-react";

export default function DoctorDashboardPage() {
  // Stats Data
  const stats = [
    {
      title: "Today's Appointments",
      value: "4",
      subtext: "1 completed, 3 remaining",
      icon: Calendar,
      color: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      title: "Total Patients",
      value: "1,284",
      subtext: "+12 this week",
      icon: Users,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Completed Consultations",
      value: "842",
      subtext: "Across all specialties",
      icon: CheckCircle2,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      title: "Earnings",
      value: "₦420,000",
      subtext: "This month",
      icon: DollarSign,
      color: "bg-amber-50 text-amber-700 border-amber-200",
    },
  ];

  // Today's Schedule
  const todaySchedule = [
    {
      time: "09:00 AM",
      patient: "Patient A (John Doe)",
      type: "Cardiology Follow-up",
      status: "Completed",
      statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
      mode: "In-Person",
    },
    {
      time: "10:30 AM",
      patient: "Patient B (Amina Bello)",
      type: "Hypertension Review",
      status: "In Progress",
      statusStyle: "bg-teal-50 text-teal-700 border-teal-200 animate-pulse",
      mode: "Telehealth Video",
    },
    {
      time: "12:00 PM",
      patient: "Patient C (Chidi Okonkwo)",
      type: "ECG Consultation",
      status: "Upcoming",
      statusStyle: "bg-slate-100 text-slate-700 border-slate-200",
      mode: "In-Person",
    },
    {
      time: "04:00 PM",
      patient: "Patient D (Fatima Usman)",
      type: "Routine Checkup",
      status: "Upcoming",
      statusStyle: "bg-slate-100 text-slate-700 border-slate-200",
      mode: "Telehealth Video",
    },
  ];

  // Recent Patients
  const recentPatients = [
    {
      id: "P-101",
      name: "John Doe",
      ageGender: "34 Yrs, Male",
      lastVisit: "Today, 09:00 AM",
      condition: "Essential Hypertension",
      avatarBg: "bg-teal-100 text-teal-800",
      initials: "JD",
    },
    {
      id: "P-102",
      name: "Amina Bello",
      ageGender: "29 Yrs, Female",
      lastVisit: "Aug 28, 2026",
      condition: "Palpitations / Arrhythmia",
      avatarBg: "bg-purple-100 text-purple-800",
      initials: "AB",
    },
    {
      id: "P-103",
      name: "Chidi Okonkwo",
      ageGender: "45 Yrs, Male",
      lastVisit: "Aug 15, 2026",
      condition: "Hyperlipidemia",
      avatarBg: "bg-blue-100 text-blue-800",
      initials: "CO",
    },
  ];

  // Notifications
  const notifications = [
    {
      id: 1,
      type: "New Appointment",
      title: "New appointment booked",
      message: "Patient D (Fatima Usman) scheduled a video consultation for 04:00 PM.",
      time: "15 mins ago",
      icon: Calendar,
      tagColor: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      id: 2,
      type: "Patient Message",
      title: "Message from John Doe",
      message: "\"Thank you doctor, my blood pressure reading this morning was 120/80.\"",
      time: "1 hour ago",
      icon: MessageSquare,
      tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      id: 3,
      type: "Cancellation",
      title: "Appointment cancelled",
      message: "Patient E cancelled their 02:30 PM appointment for today.",
      time: "3 hours ago",
      icon: XCircle,
      tagColor: "bg-rose-50 text-rose-700 border-rose-200",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Greeting */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
              Good morning, Dr. Sarah 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Here is your clinical schedule and patient overview for today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 px-4 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <Calendar className="w-4 h-4 text-teal-600" />
              Sept 5, 2026
            </button>
            <Link
              href="/doctor/consultations/start"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <Video className="w-4 h-4" /> Start Consultation
            </Link>
          </div>
        </div>

        {/* Key Metrics Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                    {stat.title}
                  </span>
                  <div className={`p-2 rounded-xl border ${stat.color}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    {stat.value}
                  </h2>
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Layout: Schedule & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (8 Cols): Today's Schedule + Recent Patients */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Today's Schedule Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-teal-600" /> Today's Schedule
                </h2>
                <Link
                  href="/doctor/schedule"
                  className="text-xs font-extrabold text-teal-700 hover:text-teal-900 inline-flex items-center gap-0.5"
                >
                  View Full Calendar <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-3">
                {todaySchedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="text-xs font-black text-teal-800 bg-teal-50 border border-teal-200 px-3 py-2 rounded-xl shrink-0">
                        {item.time}
                      </div>
                      <div>
                        <h3 className="text-xs font-black text-slate-900">
                          {item.patient}
                        </h3>
                        <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                          {item.type} •{" "}
                          <span className="text-slate-700 font-bold">
                            {item.mode}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-t-0 border-slate-200 pt-2 sm:pt-0">
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${item.statusStyle}`}
                      >
                        {item.status}
                      </span>
                      <button
                        type="button"
                        className="text-xs font-extrabold text-teal-700 hover:text-teal-900 underline underline-offset-2"
                      >
                        Open Chart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Patients Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 uppercase tracking-wider">
                  <Users className="w-4 h-4 text-teal-600" /> Recent Patients
                </h2>
                <Link
                  href="/doctor/patients"
                  className="text-xs font-extrabold text-teal-700 hover:text-teal-900 inline-flex items-center gap-0.5"
                >
                  All Patients Directory <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recentPatients.map((patient) => (
                  <div
                    key={patient.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-300 hover:shadow-xs transition-all space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-xs shrink-0 ${patient.avatarBg}`}
                      >
                        {patient.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xs font-extrabold text-slate-900 truncate">
                          {patient.name}
                        </h3>
                        <p className="text-[10px] text-slate-500 font-medium">
                          {patient.ageGender}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1 text-[11px] border-t border-slate-100 pt-2.5">
                      <p className="text-slate-500">
                        Condition:{" "}
                        <span className="font-bold text-slate-800">
                          {patient.condition}
                        </span>
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Last Visit: {patient.lastVisit}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="w-full text-center text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 py-1.5 rounded-lg transition-colors"
                    >
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (4 Cols): Notifications Activity Feed */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 uppercase tracking-wider">
                  <Bell className="w-4 h-4 text-teal-600" /> Notifications
                </h2>
                <span className="text-[10px] font-bold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200">
                  Real-time
                </span>
              </div>

              <div className="space-y-4">
                {notifications.map((notif) => {
                  const NotifIcon = notif.icon;
                  return (
                    <div
                      key={notif.id}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border ${notif.tagColor}`}
                        >
                          {notif.type}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                          {notif.time}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xs font-extrabold text-slate-900">
                          {notif.title}
                        </h3>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                          {notif.message}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                className="w-full text-center text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 py-2.5 rounded-xl transition-colors"
              >
                View All Activity Logs
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}