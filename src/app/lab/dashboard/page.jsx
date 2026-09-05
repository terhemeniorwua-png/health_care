"use client";

import Link from "next/link";
import {
  TestTube2,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  ChevronRight,
  ArrowRight,
  User,
  Microscope,
} from "lucide-react";

export default function LabDashboardPage() {
  const stats = [
    { title: "Today's Tests", value: "38", sub: "+5 scheduled", icon: TestTube2, color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    { title: "Pending Samples", value: "12", sub: "Awaiting processing", icon: Clock, color: "bg-amber-50 text-amber-700 border-amber-200" },
    { title: "Completed Tests", value: "24", sub: "Ready or released", icon: CheckCircle2, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { title: "Awaiting Release", value: "6", sub: "Pending path review", icon: AlertCircle, color: "bg-purple-50 text-purple-700 border-purple-200" },
  ];

  const todayBookings = [
    { id: "ORD-901", patient: "John Doe", test: "Full Blood Count (FBC)", time: "09:30 AM", type: "Home Collection" },
    { id: "ORD-902", patient: "Amina Bello", test: "Lipid Profile & HbA1c", time: "10:15 AM", type: "Walk-in" },
    { id: "ORD-903", patient: "Chidi Okonkwo", test: "Comprehensive Metabolic Panel", time: "11:00 AM", type: "Walk-in" },
  ];

  const pendingResults = [
    { id: "ORD-899", patient: "Sarah Jenkins", test: "Thyroid Profile (TSH, T3, T4)", status: "Processing", action: "Upload Result" },
    { id: "ORD-895", patient: "David O. Lawson", test: "Full Blood Count", status: "Review Required", action: "Review & Release" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
              Laboratory Dashboard 🔬
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Track daily diagnostic bookings, sample processing stages, and test result releases.
            </p>
          </div>
          <Link
            href="/lab/tests/add"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" /> Add New Test
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">{stat.title}</span>
                  <div className={`p-2 rounded-xl border ${stat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">{stat.value}</h2>
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5">{stat.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Today's Bookings */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <TestTube2 className="w-4 h-4 text-indigo-600" /> Today's Bookings
              </h2>
              <Link href="/lab/orders" className="text-xs font-extrabold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-0.5">
                View All <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {todayBookings.map((booking) => (
                <div key={booking.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-slate-900">{booking.patient}</span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {booking.type}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-600">{booking.test}</p>
                    <p className="text-[10px] text-slate-400">Time: {booking.time} • Order #{booking.id}</p>
                  </div>
                  <Link
                    href={`/lab/orders/${booking.id}`}
                    className="text-xs font-bold text-indigo-700 hover:underline shrink-0"
                  >
                    View Status
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Results requiring processing/review */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Microscope className="w-4 h-4 text-purple-600" /> Pending Results
              </h2>
            </div>

            <div className="space-y-3">
              {pendingResults.map((item) => (
                <div key={item.id} className="p-4 rounded-xl border border-slate-200 bg-purple-50/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900">{item.patient}</span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{item.test}</p>
                  <div className="pt-2 flex justify-end">
                    <Link
                      href={`/lab/orders/${item.id}/upload`}
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      {item.action} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}