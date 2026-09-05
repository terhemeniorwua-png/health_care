"use client";

import Link from "next/link";
import { ChevronLeft, TrendingUp, DollarSign, ShoppingBag, Users, Package } from "lucide-react";

export default function PharmacyAnalyticsPage() {
  const metrics = [
    { title: "Total Revenue", value: "₦4,850,000", sub: "+14% vs last month" },
    { title: "Total Orders", value: "682", sub: "+8% order volume" },
    { title: "Average Order Value", value: "₦7,110", sub: "Per prescription/cart" },
    { title: "Customer Growth", value: "+210", sub: "New buyers this month" },
  ];

  const topProducts = [
    { name: "Paracetamol Extra 500mg", sales: "340 units", revenue: "₦408,000" },
    { name: "Amoxicillin 500mg Capsules", sales: "180 units", revenue: "₦630,000" },
    { name: "Vitamin C 1000mg Effervescent", sales: "210 units", revenue: "₦588,000" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link href="/pharmacy/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">Pharmacy Analytics</h1>
          <p className="text-xs text-slate-500 mt-0.5">Comprehensive performance reports for sales, top SKUs, and inventory turn rates.</p>
        </div>

        {/* Metric Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-1">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">{m.title}</span>
              <p className="text-2xl font-black text-slate-900">{m.value}</p>
              <p className="text-[11px] font-bold text-teal-700">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Analytics Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Top Products */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Package className="w-4 h-4 text-teal-600" /> Top Selling Products
            </h2>
            <div className="space-y-3">
              {topProducts.map((p, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-2.5 text-xs">
                  <div>
                    <p className="font-extrabold text-slate-900">{p.name}</p>
                    <p className="text-[11px] text-slate-500">{p.sales} sold</p>
                  </div>
                  <span className="font-black text-teal-700">{p.revenue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Performance */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-teal-600" /> Inventory Performance
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <p className="font-bold text-slate-900">Inventory Turn Rate</p>
                <p className="text-[11px] text-slate-600">4.2x stock rotation per month</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <p className="font-bold text-slate-900">Stockout Risk Level</p>
                <p className="text-[11px] text-amber-700 font-bold">Low (4 products currently flagged)</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}