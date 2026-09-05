"use client";

import Link from "next/link";
import {
  User,
  Stethoscope,
  FlaskConical,
  Pill,
  Video,
  Truck,
  Calendar,
  FileText,
  Activity,
  CheckCircle2,
  Clock,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function PatientDashboardPage() {
  // Mock Data for Patient Dashboard
  const patient = {
    name: "John",
    timeGreeting: "Good morning",
  };

  const upcomingAppointment = {
    doctor: "Dr. Sarah Williams",
    specialty: "Cardiology",
    time: "Today, 4:00 PM",
    isReadyToJoin: true,
  };

  const activeOrder = {
    id: "#HL2045",
    status: "Out for delivery",
  };

  const overviewStats = [
    { label: "Upcoming appointments", count: 1, icon: Calendar, href: "/patient/appointments" },
    { label: "Active prescriptions", count: 3, icon: Pill, href: "/patient/prescriptions" },
    { label: "Recent lab results", count: 2, icon: FileText, href: "/patient/lab-results" },
    { label: "Completed consultations", count: 12, icon: CheckCircle2, href: "/patient/history" },
  ];

  const recentActivity = [
    {
      id: "1",
      dateGroup: "Today",
      title: "Medicine order placed",
      desc: "Order #HL2045 confirmed and dispatched",
      icon: Pill,
      iconBg: "bg-teal-50 text-teal-600",
    },
    {
      id: "2",
      dateGroup: "Yesterday",
      title: "Lab result available",
      desc: "Full Blood Count report uploaded by Synlab",
      icon: FlaskConical,
      iconBg: "bg-blue-50 text-blue-600",
    },
    {
      id: "3",
      dateGroup: "September 2",
      title: "Consultation completed",
      desc: "Follow-up video call with Dr. Emmanuel Okonkwo",
      icon: Stethoscope,
      iconBg: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Greeting Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              {patient.timeGreeting}, {patient.name} 👋
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              How can we help you today? Manage your appointments, orders, and records.
            </p>
          </div>

          <Link
            href="/patient/profile"
            className="inline-flex items-center gap-2 self-start sm:self-auto text-xs font-extrabold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-colors"
          >
            <User className="w-4 h-4 text-teal-600" /> Patient Profile
          </Link>
        </div>

        {/* Quick Actions Grid */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Quick Actions
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/doctors"
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:border-teal-600 hover:shadow-md transition-all flex items-center gap-3.5"
            >
              <div className="p-3 rounded-xl bg-teal-50 text-teal-600 shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold text-slate-900">Find a Doctor</h3>
                <p className="text-[10px] text-slate-500">Book virtual or walk-in consults</p>
              </div>
            </Link>

            <Link
              href="/lab-tests"
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:border-teal-600 hover:shadow-md transition-all flex items-center gap-3.5"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold text-slate-900">Book Lab Test</h3>
                <p className="text-[10px] text-slate-500">Lab visits or home collection</p>
              </div>
            </Link>

            <Link
              href="/medicines"
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:border-teal-600 hover:shadow-md transition-all flex items-center gap-3.5"
            >
              <div className="p-3 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                <Pill className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold text-slate-900">Order Medicine</h3>
                <p className="text-[10px] text-slate-500">Express delivery to your door</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Live Status Cards: Upcoming Appointment & Active Order */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Upcoming Appointment */}
          <div className="bg-gradient-to-br from-teal-900 to-teal-950 rounded-2xl p-5 text-white shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-teal-800/80 text-teal-200 px-2.5 py-1 rounded-full border border-teal-700">
                  Upcoming Appointment
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-amber-400">
                  <Clock className="w-3.5 h-3.5" /> {upcomingAppointment.time}
                </span>
              </div>

              <div>
                <h2 className="text-base font-extrabold text-white">
                  {upcomingAppointment.doctor}
                </h2>
                <p className="text-xs text-teal-200">{upcomingAppointment.specialty}</p>
              </div>
            </div>

            <Link
              href="/consultations/live"
              className="w-full flex items-center justify-center gap-2 font-bold text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 py-3 rounded-xl transition-colors shadow-sm"
            >
              <Video className="w-4 h-4" /> Join Consultation
            </Link>
          </div>

          {/* Active Order */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                  Active Order
                </span>
                <span className="text-xs font-extrabold text-teal-700">
                  {activeOrder.id}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Status</span>
                <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2 mt-0.5">
                  <Truck className="w-5 h-5 text-teal-600" /> {activeOrder.status}
                </h2>
                <p className="text-[11px] text-slate-500 pt-0.5">
                  Your delivery rider is en route to your address.
                </p>
              </div>
            </div>

            <Link
              href="/checkout/success"
              className="w-full flex items-center justify-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 py-3 rounded-xl transition-colors shadow-sm"
            >
              Track Order <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Health Overview Cards */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Health Overview
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {overviewStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Link
                  key={stat.label}
                  href={stat.href}
                  className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:border-teal-500 transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-base font-black text-slate-900">
                      {stat.count}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-700 leading-tight">
                    {stat.label}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <Activity className="w-4 h-4 text-teal-600" /> Recent Activity
            </h2>
            <Link
              href="/patient/activity"
              className="text-xs font-bold text-teal-600 hover:underline flex items-center gap-0.5"
            >
              View All <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4 divide-y divide-slate-100">
            {recentActivity.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="pt-4 first:pt-0 flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${activity.iconBg}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <div className="flex items-center justify-between text-xs">
                      <h3 className="font-extrabold text-slate-900">{activity.title}</h3>
                      <span className="text-[10px] font-bold text-slate-400">
                        {activity.dateGroup}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{activity.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}