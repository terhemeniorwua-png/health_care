"use client";

import Link from "next/link";
import {
  Users,
  Building2,
  Store,
  ShoppingBag,
  Calendar,
  DollarSign,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Users", value: "24,850", sub: "+1,200 this month", icon: Users, color: "text-blue-600 bg-blue-50 border-blue-200" },
    { title: "Total Providers", value: "340", sub: "Doctors & Specialists", icon: Building2, color: "text-purple-600 bg-purple-50 border-purple-200" },
    { title: "Total Vendors", value: "128", sub: "Pharmacies & Labs", icon: Store, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { title: "Total Orders", value: "18,420", sub: "98.2% fulfilled", icon: ShoppingBag, color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
    { title: "Total Appointments", value: "8,910", sub: "Completed & Scheduled", icon: Calendar, color: "text-teal-600 bg-teal-50 border-teal-200" },
    { title: "Total Revenue", value: "₦142.8M", sub: "Platform GMV", icon: DollarSign, color: "text-emerald-700 bg-emerald-100 border-emerald-300" },
    { title: "Pending Verification", value: "14", sub: "Requires admin review", icon: ShieldCheck, color: "text-amber-600 bg-amber-50 border-amber-200" },
    { title: "Open Disputes", value: "3", sub: "Requires resolution", icon: AlertTriangle, color: "text-rose-600 bg-rose-50 border-rose-200" },
  ];

  const recentActivity = [
    { type: "provider", text: "New doctor registered: Dr. Alex Morgan (Cardiology)", time: "10 mins ago" },
    { type: "vendor", text: "New pharmacy submitted for verification: HealthPlus Pharmacy", time: "25 mins ago" },
    { type: "order", text: "Order #2045 marked as completed", time: "1 hour ago" },
    { type: "dispute", text: "New dispute opened on Order #2045 by Customer John Doe", time: "2 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Platform Control Center</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              High-level operational overview, revenue metrics, provider applications, and platform activity.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/vendors/verify"
              className="text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-4 py-2.5 rounded-xl transition-colors"
            >
              Verify Vendors (14)
            </Link>
            <Link
              href="/admin/disputes"
              className="text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 px-4 py-2.5 rounded-xl transition-colors shadow-xs"
            >
              Open Disputes (3)
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">{stat.title}</span>
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

        {/* Analytics & Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Analytics Overview Cards */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" /> Key Analytics Summary
              </h2>
              <Link href="/admin/reports" className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1">
                Full Analytics <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Monthly Growth</span>
                <p className="text-xl font-black text-slate-900 mt-1">+14.2%</p>
                <p className="text-[10px] text-emerald-600 font-bold mt-0.5">User & Doctor signups</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Order Volume</span>
                <p className="text-xl font-black text-slate-900 mt-1">2,410</p>
                <p className="text-[10px] text-blue-600 font-bold mt-0.5">Pharmacy & Lab orders</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Appointments</span>
                <p className="text-xl font-black text-slate-900 mt-1">1,180</p>
                <p className="text-[10px] text-purple-600 font-bold mt-0.5">Virtual & In-person</p>
              </div>
            </div>

            {/* Visual Analytics Placeholder */}
            <div className="h-48 bg-gradient-to-br from-slate-50 to-slate-100 border border-dashed border-slate-300 rounded-xl flex items-center justify-center text-slate-400 text-xs font-medium">
              [ Revenue, User Growth, Orders, Appointments Chart ]
            </div>
          </div>

          {/* Recent Activity Timeline */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-3">
              <Activity className="w-4 h-4 text-purple-600" /> Recent Activity
            </h2>

            <div className="space-y-4 text-xs">
              {recentActivity.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-900">{item.text}</p>
                  <p className="text-[10px] text-slate-400">{item.time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}