"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ShoppingBag, ArrowRight, User, Package, Clock } from "lucide-react";

export default function PharmacyOrdersPage() {
  const [activeTab, setActiveTab] = useState("New");

  const tabs = ["New", "Processing", "Ready", "Dispatched", "Delivered", "Cancelled"];

  const orders = [
    { id: "HL2045", tab: "New", customer: "John Doe", itemsCount: "3 items", total: "₦12,000", time: "10 mins ago" },
    { id: "HL2046", tab: "Processing", customer: "Amina Bello", itemsCount: "1 item", total: "₦4,500", time: "30 mins ago" },
    { id: "HL2047", tab: "Ready", customer: "Chidi Okonkwo", itemsCount: "5 items", total: "₦28,000", time: "1 hour ago" },
  ];

  const filteredOrders = orders.filter((o) => o.tab === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link href="/pharmacy/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">Pharmacy Orders</h1>
          <p className="text-xs text-slate-500 mt-0.5">Manage customer prescription and OTC medicine fulfillments.</p>
        </div>

        {/* Order Status Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all shrink-0 ${
                  isActive
                    ? "bg-teal-600 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Orders Card List */}
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-xs text-slate-500">
              No orders found under "{activeTab}".
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-teal-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-black text-slate-900">Order #{order.id}</h2>
                    <span className="text-[10px] font-bold text-slate-400">({order.time})</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Customer: <span className="font-extrabold text-slate-900">{order.customer}</span> • {order.itemsCount}
                  </p>
                  <p className="text-xs font-black text-teal-700">Total: {order.total}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/pharmacy/orders/${order.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition-colors shadow-xs"
                  >
                    Process Order <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}