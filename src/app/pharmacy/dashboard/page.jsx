"use client";

import Link from "next/link";
import {
  ShoppingBag,
  DollarSign,
  Package,
  AlertTriangle,
  ArrowRight,
  Clock,
  CheckCircle2,
  PackageCheck,
  ChevronRight,
  Plus,
} from "lucide-react";

export default function PharmacyDashboardPage() {
  const stats = [
    { title: "Today's Orders", value: "24", subtext: "+4 pending approval", icon: ShoppingBag, color: "bg-teal-50 text-teal-700 border-teal-200" },
    { title: "Revenue", value: "₦184,500", subtext: "Today's sales", icon: DollarSign, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { title: "Products", value: "1,240", subtext: "Active SKUs", icon: Package, color: "bg-blue-50 text-blue-700 border-blue-200" },
    { title: "Low-Stock Products", value: "8", subtext: "Requires reorder", icon: AlertTriangle, color: "bg-amber-50 text-amber-700 border-amber-200" },
  ];

  const recentOrders = [
    { id: "#HL2045", customer: "John Doe", items: "3 items", amount: "₦12,000", status: "New", statusStyle: "bg-teal-50 text-teal-700 border-teal-200" },
    { id: "#HL2046", customer: "Amina Bello", items: "1 item", amount: "₦4,500", status: "Preparing", statusStyle: "bg-amber-50 text-amber-700 border-amber-200" },
    { id: "#HL2047", customer: "Chidi Okonkwo", items: "5 items", amount: "₦28,000", status: "Delivered", statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
              Good morning, HealthPlus 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Here is your pharmacy store summary, inventory alerts, and live order activity.
            </p>
          </div>
          <Link
            href="/pharmacy/products/add"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" /> Add New Product
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
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5">{stat.subtext}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content: Orders + Inventory Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Recent Orders */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-teal-600" /> Recent Orders
              </h2>
              <Link href="/pharmacy/orders" className="text-xs font-extrabold text-teal-700 hover:text-teal-900 inline-flex items-center gap-0.5">
                View All <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-slate-900">{order.id}</span>
                      <span className="text-xs text-slate-500">• {order.customer}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">{order.items} • <span className="font-bold text-slate-900">{order.amount}</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${order.statusStyle}`}>
                      {order.status}
                    </span>
                    <Link href={`/pharmacy/orders/${order.id.replace('#', '')}`} className="text-xs font-bold text-teal-700 hover:underline">
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Alerts Sidebar */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> Inventory Alerts
              </h2>
            </div>

            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60 text-amber-900 space-y-2">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-xs font-bold">⚠ Vitamin C 1000mg is running low.</p>
              </div>
              <p className="text-[11px] text-amber-800/80 pl-6">Only 4 units remaining in stock. Minimum threshold is set to 20 units.</p>
            </div>

            <Link
              href="/pharmacy/inventory"
              className="w-full inline-flex items-center justify-center gap-2 text-xs font-extrabold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 py-3 rounded-xl transition-colors"
            >
              Manage Inventory <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}