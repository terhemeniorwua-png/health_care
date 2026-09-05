"use client";

import Link from "next/link";
import {
  ChevronLeft,
  User,
  Package,
  MapPin,
  CreditCard,
  CheckCircle2,
  FileCheck,
  Clock,
} from "lucide-react";

export default function PharmacyOrderDetailsPage({ params }) {
  const order = {
    id: params?.id || "HL2045",
    customer: "John Doe",
    phone: "+234 801 234 5678",
    address: "12 Admiralty Way, Lekki Phase 1, Lagos",
    paymentMethod: "Online Card Payment (Paid)",
    orderStatus: "New Order",
    prescriptionStatus: "Verified by Dr. Sarah",
    items: [
      { name: "Paracetamol Extra 500mg", qty: 2, price: "₦1,200" },
      { name: "Amoxicillin 500mg Capsules", qty: 1, price: "₦3,500" },
      { name: "Vitamin C 1000mg Effervescent", qty: 1, price: "₦2,800" },
    ],
    totalAmount: "₦12,000",
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link href="/pharmacy/orders" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Pharmacy Orders
        </Link>

        {/* Order Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black text-slate-900">Order #{order.id}</h1>
              <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                {order.orderStatus}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Placed on Sep 5, 2026 • 10:15 AM</p>
          </div>

          {/* Action Workflow Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => alert("Order Accepted")}
              className="text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3.5 py-2 rounded-xl transition-colors"
            >
              Accept Order
            </button>
            <button
              type="button"
              onClick={() => alert("Order marked as Preparing")}
              className="text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3.5 py-2 rounded-xl transition-colors"
            >
              Prepare Order
            </button>
            <button
              type="button"
              onClick={() => alert("Order marked as Ready")}
              className="text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-xl transition-colors shadow-xs"
            >
              Mark Ready
            </button>
          </div>
        </div>

        {/* Prescription Verification Banner */}
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-center gap-3">
          <FileCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <div className="text-xs">
            <span className="font-extrabold text-emerald-900">Prescription Verification Status: </span>
            <span className="font-bold text-emerald-700">{order.prescriptionStatus}</span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Customer & Delivery Information */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <User className="w-4 h-4 text-teal-600" /> Customer Information
            </h2>
            <div className="space-y-2 text-xs">
              <p className="font-bold text-slate-900">{order.customer}</p>
              <p className="text-slate-600">{order.phone}</p>
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Delivery Address
                </span>
                <p className="text-slate-700 font-medium">{order.address}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5" /> Payment Method
                </span>
                <p className="text-emerald-700 font-bold">{order.paymentMethod}</p>
              </div>
            </div>
          </div>

          {/* Ordered Products */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Package className="w-4 h-4 text-teal-600" /> Ordered Items
            </h2>
            <div className="space-y-3 text-xs">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-slate-500">Qty: {item.qty}</p>
                  </div>
                  <span className="font-extrabold text-slate-900">{item.price}</span>
                </div>
              ))}
              <div className="pt-2 flex items-center justify-between text-sm font-black text-slate-900">
                <span>Total Amount:</span>
                <span className="text-teal-700">{order.totalAmount}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}