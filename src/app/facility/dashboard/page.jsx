"use client";

import Link from "next/link";
import {
  Calendar,
  Users,
  Stethoscope,
  Building2,
  DollarSign,
  Clock,
  CheckCircle2,
  ChevronRight,
  Activity,
  UserCheck,
} from "lucide-react";

export default function FacilityDashboardPage() {
  const stats = [
    { title: "Appointments", value: "142", sub: "+12 today", icon: Calendar, color: "bg-blue-50 text-blue-700 border-blue-200" },
    { title: "Patients", value: "2,840", sub: "Registered", icon: Users, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { title: "Doctors", value: "32", sub: "24 active", icon: Stethoscope, color: "bg-purple-50 text-purple-700 border-purple-200" },
    { title: "Departments", value: "12", sub: "Operational", icon: Building2, color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    { title: "Revenue", value: "₦3.4M", sub: "This month", icon: DollarSign, color: "bg-teal-50 text-teal-700 border-teal-200" },
  ];

  const todaysAppointments = [
    { id: "APT-101", patient: "Sarah Jenkins", doctor: "Dr. Alex Morgan", dept: "Cardiology", time: "10:30 AM", status: "Confirmed" },
    { id: "APT-102", patient: "Michael Chen", doctor: "Dr. Fatima Ali", dept: "Pediatrics", time: "11:15 AM", status: "In Progress" },
    { id: "APT-103", patient: "Grace Adebayo", doctor: "Dr. David Lawson", dept: "General", time: "12:00 PM", status: "Waiting" },
  ];

  const availableDoctors = [
    { name: "Dr. Alex Morgan", specialty: "Cardiology", status: "In Clinic (Room 4)" },
    { name: "Dr. Fatima Ali", specialty: "Pediatrics", status: "In Clinic (Room 2)" },
    { name: "Dr. David Lawson", specialty: "General Medicine", status: "Available" },
  ];

  const facilityActivity = [
    { time: "09:45 AM", title: "New Patient Registered", desc: "Samuel Okon completed onboarding." },
    { time: "09:30 AM", title: "Lab Result Released", desc: "CBC report uploaded for John Doe." },
    { time: "08:50 AM", title: "Doctor Checked In", desc: "Dr. Fatima Ali marked available in Pediatrics." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
              Facility Overview 🏥
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real-time operational metrics, doctor availability, and facility activity.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/facility/doctors"
              className="text-xs font-extrabold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 px-4 py-2.5 rounded-xl transition-colors"
            >
              Doctors Management
            </Link>
            <Link
              href="/facility/services"
              className="text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl transition-colors shadow-xs"
            >
              Facility Services
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">{stat.title}</span>
                  <div className={`p-2 rounded-xl border ${stat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">{stat.value}</h2>
                  <p className="text-[11px] font-medium text-slate-500">{stat.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Today's Appointments */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" /> Today's Appointments
              </h2>
            </div>

            <div className="space-y-3">
              {todaysAppointments.map((apt) => (
                <div key={apt.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-slate-900">{apt.patient}</span>
                      <span className="text-[10px] font-bold text-slate-400">• {apt.dept}</span>
                    </div>
                    <p className="text-slate-500 mt-0.5">Assigned: <span className="font-bold text-slate-800">{apt.doctor}</span></p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Time: {apt.time}</p>
                  </div>
                  <span className="font-extrabold text-[10px] px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                    {apt.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Doctors Available & Facility Activity */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Doctors currently available */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-3">
                <UserCheck className="w-4 h-4 text-emerald-600" /> Doctors Currently Available
              </h2>
              <div className="space-y-3 text-xs">
                {availableDoctors.map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div>
                      <p className="font-bold text-slate-900">{doc.name}</p>
                      <p className="text-[11px] text-slate-500">{doc.specialty}</p>
                    </div>
                    <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facility Activity Timeline */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-3">
                <Activity className="w-4 h-4 text-purple-600" /> Facility Activity
              </h2>
              <div className="relative pl-4 border-l-2 border-slate-200 space-y-4 text-xs">
                {facilityActivity.map((act, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-purple-600 border-2 border-white" />
                    <p className="font-extrabold text-slate-900">{act.title}</p>
                    <p className="text-[11px] text-slate-500">{act.desc}</p>
                    <span className="text-[10px] text-slate-400 font-medium">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}