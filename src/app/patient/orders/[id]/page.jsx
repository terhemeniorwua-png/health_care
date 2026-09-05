"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Package,
  Store,
  CreditCard,
  MapPin,
  CheckCircle2,
  Clock,
  Truck,
  Building2,
  FileText,
} from "lucide-react";

export default function OrderDetailsPage() {
  const order = {
    id: "#HL2045",
    date: "September 5, 2026",
    vendor: "HealthPlus Pharmacy (Lekki Branch)",
    paymentStatus: "Paid",
    paymentMethod: "Visa ending in 4242",
    items: [
      { name: "Paracetamol 500mg (100s)", qty: 2, price: 3000 },
      { name: "Vitamin C 1000mg Effervescent", qty: 1, price: 3000 },
    ],
    deliveryAddress: {
      name: "John Doe",
      street: "Plot 12, Admiralty Way, Lekki Phase 1",
      city: "Lagos",
      phone: "+234 801 234 5678",
    },
    subtotal: 9000,
    deliveryFee: 1000,
    total: 10000,
    trackingSteps: [
      { label: "Order placed", completed: true, date: "Sep 5, 09:00 AM" },
      { label: "Pharmacy confirmed", completed: true, date: "Sep 5, 09:15 AM" },
      { label: "Preparing", completed: true, date: "Sep 5, 10:00 AM" },
      { label: "Picked up", completed: true, date: "Sep 5, 11:00 AM" },
      { label: "Out for delivery", current: true, date: "Sep 5, 11:30 AM" },
      { label: "Delivered", completed: false, date: "Pending" },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/patient/orders"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Orders
        </Link>

        {/* Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              Order Details
            </h1>
            <p className="text-xs text-slate-500">
              Real-time delivery updates and order summary for {order.id}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full self-start sm:self-auto">
            <Truck className="w-3.5 h-3.5" /> Out for Delivery
          </span>
        </div>

        {/* Live Delivery Tracking Stepper */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Truck className="w-4 h-4 text-teal-600" /> Delivery Tracking
          </h2>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {order.trackingSteps.map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-3">
                <div
                  className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    step.completed
                      ? "bg-teal-600 text-white"
                      : step.current
                      ? "bg-amber-500 text-white ring-4 ring-amber-100 animate-pulse"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step.completed ? "✓" : step.current ? "●" : "○"}
                </div>
                <div className="flex-1 flex justify-between items-center text-xs">
                  <span
                    className={`font-extrabold ${
                      step.current
                        ? "text-amber-600"
                        : step.completed
                        ? "text-slate-900"
                        : "text-slate-400"
                    }`}
                  >
                    {step.label}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {step.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Order Meta & Vendor */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 text-xs">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
              Order Information
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Order ID</span>
                <span className="font-extrabold text-slate-900">{order.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Date</span>
                <span className="font-semibold text-slate-800">{order.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Fulfilling Vendor</span>
                <span className="font-semibold text-teal-700 flex items-center gap-1">
                  <Store className="w-3.5 h-3.5" /> {order.vendor}
                </span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-100">
                <span className="text-slate-400 font-semibold">Payment Status</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <CreditCard className="w-3 h-3" /> {order.paymentStatus} ({order.paymentMethod})
                </span>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 text-xs">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-600" /> Delivery Address
            </h2>
            <div className="space-y-1 text-slate-700">
              <p className="font-extrabold text-slate-900">{order.deliveryAddress.name}</p>
              <p>{order.deliveryAddress.street}</p>
              <p>{order.deliveryAddress.city}</p>
              <p className="text-slate-500 pt-1">Phone: {order.deliveryAddress.phone}</p>
            </div>
          </div>

        </div>

        {/* Product Items Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Package className="w-4 h-4 text-teal-600" /> Ordered Products
          </h2>

          <div className="divide-y divide-slate-100 space-y-3 pt-1">
            {order.items.map((item, idx) => (
              <div key={idx} className="pt-3 first:pt-0 flex justify-between items-center text-xs">
                <div>
                  <p className="font-extrabold text-slate-900">{item.name}</p>
                  <p className="text-slate-400 text-[11px]">Qty: {item.qty}</p>
                </div>
                <span className="font-extrabold text-slate-900">
                  ₦{(item.price * item.qty).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-4 space-y-1.5 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₦{order.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₦{order.deliveryFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-black text-sm text-slate-900 pt-2 border-t border-slate-100">
              <span>Total Paid</span>
              <span>₦{order.total.toLocaleString()}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}