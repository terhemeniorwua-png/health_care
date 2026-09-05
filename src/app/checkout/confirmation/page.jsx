"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Building2,
  Package,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function OrderConfirmationPage() {
  // Order details payload matching the specification
  const order = {
    id: "#HL2045",
    pharmacy: "HealthPlus Pharmacy (Central Branch)",
    products: [
      { id: "1", name: "Paracetamol 500mg Extra Strength", qty: 2, price: 2500 },
      { id: "2", name: "Vitamin C 1000mg Effervescent", qty: 1, price: 4500 },
    ],
    deliveryAddress: "Suite 12, Victoria Crest Estate, Lekki Phase 1, Lagos",
    total: 11000,
    estimatedDelivery: "Today within 3 hours (Express)",
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-md w-full shadow-sm space-y-6">
        
        {/* Header Badge */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-extrabold text-slate-900">
            Order Placed Successfully
          </h1>
          <p className="text-xs text-slate-500">
            Your order <strong className="text-slate-800">{order.id}</strong> has been confirmed.
          </p>
        </div>

        {/* Order Details List */}
        <div className="space-y-4 border-t border-b border-slate-100 py-4 text-xs">
          
          {/* Pharmacy */}
          <div className="flex items-start gap-3">
            <Building2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Pharmacy</span>
              <p className="font-bold text-slate-900">{order.pharmacy}</p>
            </div>
          </div>

          {/* Products */}
          <div className="flex items-start gap-3">
            <Package className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Products</span>
              <div className="space-y-1 mt-0.5">
                {order.products.map((item) => (
                  <div key={item.id} className="flex justify-between text-slate-800 font-medium">
                    <span>{item.name} (x{item.qty})</span>
                    <span className="font-bold">₦{(item.price * item.qty).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Delivery Address</span>
              <p className="font-bold text-slate-900">{order.deliveryAddress}</p>
            </div>
          </div>

          {/* Estimated Delivery */}
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Estimated Delivery</span>
              <p className="font-bold text-slate-900">{order.estimatedDelivery}</p>
            </div>
          </div>

          {/* Total */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-sm">
            <span className="font-extrabold text-slate-900">Total</span>
            <span className="font-extrabold text-teal-700">₦{order.total.toLocaleString()}</span>
          </div>

        </div>

        {/* Track Order CTA */}
        <Link
          href="/checkout/success"
          className="w-full flex items-center justify-center gap-2 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 py-3.5 rounded-xl transition-colors shadow-sm"
        >
          Track Order <ArrowRight className="w-4 h-4" />
        </Link>

      </div>
    </div>
  );
}