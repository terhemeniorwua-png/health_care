"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Package,
  Truck,
  Building2,
  Clock,
  PhoneCall,
  Download,
  ChevronLeft,
  MapPin,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export default function OrderSuccessPage() {
  // Mock Order Details Data
  const orderDetails = {
    orderId: "ORD-2026-94820",
    date: "Sept 5, 2026",
    paymentMethod: "Bank Transfer (Paid)",
    estimatedDeliveryTimeMinutes: 45, // 45-minute delivery window
    deliveryAddress: {
      name: "John Doe",
      phone: "+234 801 234 5678",
      address: "Suite 12, Victoria Crest Estate, Lekki Phase 1",
      city: "Lagos",
      state: "Lagos State",
    },
    vendor: {
      name: "HealthPlus Pharmacy (Lekki Branch)",
      phone: "+234 800 432 5840",
      isVerified: true,
    },
    items: [
      {
        id: "1",
        name: "Paracetamol 500mg Extra Strength",
        brand: "HealthCare Plus",
        quantity: 2,
        price: 2500,
        image:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200",
        isPrescriptionRequired: true,
      },
      {
        id: "2",
        name: "Vitamin C 1000mg Effervescent",
        brand: "MedPlus",
        quantity: 1,
        price: 4500,
        image:
          "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=200",
        isPrescriptionRequired: false,
      },
    ],
    summary: {
      subtotal: 9500,
      deliveryFee: 1500,
      discount: 0,
      total: 11000,
    },
    trackingSteps: [
      { step: 1, label: "Order Placed", status: "completed", time: "03:05 AM" },
      { step: 2, label: "Rx Verified", status: "completed", time: "03:07 AM" },
      { step: 3, label: "Packed & Ready", status: "current", time: "In Progress" },
      { step: 4, label: "Out for Delivery", status: "pending", time: "Pending" },
      { step: 5, label: "Delivered", status: "pending", time: "Pending" },
    ],
  };

  // Dynamic Countdown Timer Logic (45-minute countdown)
  const [timeLeft, setTimeLeft] = useState(
    orderDetails.estimatedDeliveryTimeMinutes * 60
  );

  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/medicines"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Store
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> Print Receipt
          </button>
        </div>

        {/* Confirmation Header Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-center shadow-sm space-y-3">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-teal-600 uppercase tracking-widest">
              Payment Successful
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
              Thank You for Your Order!
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Order ID: <strong className="text-slate-800">{orderDetails.orderId}</strong> • Placed on {orderDetails.date}
            </p>
          </div>
        </div>

        {/* Live Delivery Countdown Timer Widget */}
        <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-2xl p-6 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-teal-200">
              <Clock className="w-4 h-4 text-amber-400" /> Estimated Express Delivery
            </div>
            <h2 className="text-lg font-bold">Arriving in approx. {Math.ceil(timeLeft / 60)} minutes</h2>
            <p className="text-xs text-teal-100">
              Dispatching from <strong>{orderDetails.vendor.name}</strong>
            </p>
          </div>

          <div className="bg-teal-950/60 border border-teal-700/50 rounded-xl px-6 py-3 text-center shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
              Timer Remaining
            </span>
            <div className="text-2xl font-black font-mono text-amber-400 tracking-wider">
              {formatTimer(timeLeft)}
            </div>
          </div>
        </div>

        {/* Live Order Tracker Timeline */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Order Status & Tracking
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            {orderDetails.trackingSteps.map((step) => {
              const isCompleted = step.status === "completed";
              const isCurrent = step.status === "current";

              return (
                <div key={step.step} className="space-y-2 text-center sm:text-left">
                  <div className="relative flex items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        isCompleted
                          ? "bg-emerald-600 text-white"
                          : isCurrent
                          ? "bg-teal-600 text-white ring-4 ring-teal-100"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {isCompleted ? "✓" : step.step}
                    </div>
                  </div>
                  <div>
                    <p
                      className={`text-xs font-bold ${
                        isCurrent
                          ? "text-teal-700"
                          : isCompleted
                          ? "text-slate-900"
                          : "text-slate-400"
                      }`}
                    >
                      {step.label}
                    </p>
                    <p className="text-[10px] text-slate-400">{step.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Details & Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Order Receipt (Items Breakdown) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Package className="w-4 h-4 text-teal-600" /> Itemized Receipt
            </h2>

            <div className="space-y-4 divide-y divide-slate-100">
              {orderDetails.items.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover bg-slate-100 border border-slate-200"
                    />
                    <div>
                      <p className="text-[10px] font-bold text-teal-600 uppercase">
                        {item.brand}
                      </p>
                      <h4 className="font-extrabold text-slate-900">{item.name}</h4>
                      <p className="text-[11px] text-slate-500">
                        Qty: {item.quantity} × ₦{item.price.toLocaleString()}
                      </p>
                      {item.isPrescriptionRequired && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 mt-1">
                          <ShieldCheck className="w-3 h-3 text-amber-600" /> Rx Verified
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="font-extrabold text-slate-900">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations Breakdown */}
            <div className="border-t border-slate-200 pt-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">
                  ₦{orderDetails.summary.subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Express Delivery Fee</span>
                <span className="font-semibold text-slate-900">
                  ₦{orderDetails.summary.deliveryFee.toLocaleString()}
                </span>
              </div>
              <div className="border-t border-slate-200 pt-3 flex justify-between text-sm font-extrabold text-slate-900">
                <span>Total Amount Paid</span>
                <span className="text-teal-700">
                  ₦{orderDetails.summary.total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Delivery & Pharmacy Info */}
          <div className="space-y-6">
            
            {/* Delivery Location */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                <MapPin className="w-4 h-4 text-teal-600" /> Delivery Address
              </h3>
              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-bold text-slate-900">{orderDetails.deliveryAddress.name}</p>
                <p>{orderDetails.deliveryAddress.phone}</p>
                <p>{orderDetails.deliveryAddress.address}</p>
                <p>{orderDetails.deliveryAddress.city}, {orderDetails.deliveryAddress.state}</p>
              </div>
            </div>

            {/* Fulfilling Pharmacy & Dispatch Contact */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                <Building2 className="w-4 h-4 text-teal-600" /> Fulfilled By
              </h3>
              <div className="text-xs text-slate-600 space-y-2">
                <p className="font-bold text-slate-900">{orderDetails.vendor.name}</p>
                <a
                  href={`tel:${orderDetails.vendor.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:underline pt-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call Dispatch Pharmacy
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}