"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Package,
  Truck,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronLeft,
  ArrowRight,
  RotateCcw,
  ShoppingBag,
} from "lucide-react";

const initialOrders = [
  {
    id: "#HL2045",
    items: ["Paracetamol 500mg (100s)", "Vitamin C 1000mg Effervescent"],
    total: 9000,
    status: "Out for Delivery",
    date: "Today, 11:30 AM",
    deliveryAddress: "Plot 12, Admiralty Way, Lekki Phase 1, Lagos",
  },
  {
    id: "#HL2012",
    items: ["Amoxicillin 500mg Capsules", "Ibuprofen 400mg Tablets"],
    total: 12500,
    status: "Processing",
    date: "Yesterday, 4:15 PM",
    deliveryAddress: "Plot 12, Admiralty Way, Lekki Phase 1, Lagos",
  },
  {
    id: "#HL1988",
    items: ["Omega 3 Fish Oil", "Multivitamin Complex"],
    total: 18000,
    status: "Delivered",
    date: "Aug 28, 2026",
    deliveryAddress: "Plot 12, Admiralty Way, Lekki Phase 1, Lagos",
  },
  {
    id: "#HL1950",
    items: ["Digital Blood Pressure Monitor"],
    total: 35000,
    status: "Cancelled",
    date: "Aug 15, 2026",
    deliveryAddress: "Plot 12, Admiralty Way, Lekki Phase 1, Lagos",
  },
];

const tabs = ["All", "Processing", "Out for Delivery", "Delivered", "Cancelled"];

export default function MyOrdersPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredOrders = initialOrders.filter((order) => {
    if (activeTab === "All") return true;
    return order.status.toLowerCase() === activeTab.toLowerCase();
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "Out for Delivery":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            <Truck className="w-3 h-3 text-amber-600" /> Out for Delivery
          </span>
        );
      case "Processing":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            <Clock className="w-3 h-3 text-blue-600" /> Processing
          </span>
        );
      case "Delivered":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Delivered
          </span>
        );
      case "Cancelled":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
            <XCircle className="w-3 h-3 text-rose-600" /> Cancelled
          </span>
        );
      default:
        return null;
    }
  };

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
              My Orders
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Track medicine deliveries, order history, and reorder past prescriptions.
            </p>
          </div>
          <Link
            href="/medicines"
            className="inline-flex items-center justify-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition-colors shadow-sm shrink-0"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Order Medicines
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-slate-200 gap-4 sm:gap-6 text-xs font-bold overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 shrink-0 transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-teal-600 text-teal-700"
                  : "border-transparent text-slate-400 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-xs text-slate-400 space-y-2">
              <Package className="w-8 h-8 mx-auto text-slate-300" />
              <p>No orders found under "{activeTab}".</p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4"
              >
                {/* Top Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-slate-900">
                      Order {order.id}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-medium text-slate-400">
                      {order.date}
                    </span>
                  </div>
                  {getStatusBadge(order.status)}
                </div>

                {/* Main Body: Items & Price */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Items List */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Items Ordered
                    </span>
                    <ul className="space-y-0.5">
                      {order.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs font-semibold text-slate-800 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Total & Action */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0 shrink-0">
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">
                        Total Amount
                      </span>
                      <span className="text-base font-black text-slate-900">
                        ₦{order.total.toLocaleString()}
                      </span>
                    </div>

                    {order.status === "Out for Delivery" || order.status === "Processing" ? (
                      <Link
                        href="/checkout/success"
                        className="inline-flex items-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                      >
                        Track Order <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => alert(`Reordering items from ${order.id}`)}
                        className="inline-flex items-center gap-1.5 font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" /> Reorder
                      </button>
                    )}
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}