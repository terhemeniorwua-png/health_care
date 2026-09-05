"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  ChevronLeft,
  Truck,
  Zap,
  CreditCard,
  Building2,
  Wallet,
  CheckCircle2,
  Lock,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, subtotal, deliveryFee, total, clearCart } = useCart();

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  const [deliveryMethod, setDeliveryMethod] = useState("standard"); // 'standard' | 'express'
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' | 'transfer' | 'other'
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Delivery costs calculation based on selection
  const selectedDeliveryCost = deliveryMethod === "express" ? 2500 : deliveryFee;
  const finalTotal = subtotal + selectedDeliveryCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);

    // Simulate order placement API call
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      alert("Order placed successfully! Redirecting...");
      router.push("/medicines");
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center max-w-sm w-full space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h2 className="text-base font-extrabold text-slate-900">Your cart is empty</h2>
          <p className="text-xs text-slate-500">
            Please add medicines or healthcare products to your cart before proceeding to checkout.
          </p>
          <Link
            href="/medicines"
            className="inline-block w-full text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 py-3 rounded-xl transition-colors"
          >
            Browse Medicines
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/medicines"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Store
        </Link>

        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-extrabold text-slate-900">Checkout</h1>
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-teal-600" /> Secure Checkout
          </span>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Checkout Sections */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Delivery Address */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                1. Delivery Address
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +234 801 234 5678"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="Street address, apartment, or suite"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">State</label>
                  <input
                    type="text"
                    name="state"
                    required
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* 2. Delivery Method */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                2. Delivery Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`p-4 rounded-xl border-2 flex items-start justify-between cursor-pointer transition-all ${
                    deliveryMethod === "standard"
                      ? "border-teal-600 bg-teal-50/30"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="standard"
                      checked={deliveryMethod === "standard"}
                      onChange={() => setDeliveryMethod("standard")}
                      className="mt-0.5 text-teal-600 focus:ring-teal-500"
                    />
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                        <Truck className="w-3.5 h-3.5 text-teal-600" /> Standard Delivery
                      </div>
                      <p className="text-[11px] text-slate-500">Delivered within 24-48 hrs</p>
                      <p className="text-xs font-extrabold text-slate-900 pt-1">
                        ₦{deliveryFee.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </label>

                <label
                  className={`p-4 rounded-xl border-2 flex items-start justify-between cursor-pointer transition-all ${
                    deliveryMethod === "express"
                      ? "border-teal-600 bg-teal-50/30"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="express"
                      checked={deliveryMethod === "express"}
                      onChange={() => setDeliveryMethod("express")}
                      className="mt-0.5 text-teal-600 focus:ring-teal-500"
                    />
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                        <Zap className="w-3.5 h-3.5 text-amber-500" /> Express Delivery
                      </div>
                      <p className="text-[11px] text-slate-500">Same-day within 3 hours</p>
                      <p className="text-xs font-extrabold text-slate-900 pt-1">₦2,500</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                3. Payment Method
              </h2>

              <div className="space-y-2.5">
                {[
                  {
                    id: "card",
                    title: "Debit / Credit Card",
                    desc: "Pay securely with Master, Visa, or Verve",
                    icon: CreditCard,
                  },
                  {
                    id: "transfer",
                    title: "Bank Transfer",
                    desc: "Instant bank transfer to dynamic account",
                    icon: Building2,
                  },
                  {
                    id: "other",
                    title: "Other Supported Methods",
                    desc: "USSD, Mobile Money, or Digital Wallets",
                    icon: Wallet,
                  },
                ].map((pm) => {
                  const IconComponent = pm.icon;
                  return (
                    <label
                      key={pm.id}
                      className={`p-4 rounded-xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                        paymentMethod === pm.id
                          ? "border-teal-600 bg-teal-50/30"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={pm.id}
                          checked={paymentMethod === pm.id}
                          onChange={() => setPaymentMethod(pm.id)}
                          className="text-teal-600 focus:ring-teal-500"
                        />
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-xs text-slate-900">{pm.title}</p>
                            <p className="text-[11px] text-slate-500">{pm.desc}</p>
                          </div>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 sticky top-6">
              <h2 className="text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                Order Summary
              </h2>

              {/* Items List */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1 divide-y divide-slate-100">
                {cart.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-lg object-cover bg-slate-100 border border-slate-200"
                      />
                      <div>
                        <p className="font-bold text-slate-900 line-clamp-1">{item.name}</p>
                        <p className="text-[10px] text-slate-500">Qty: {item.quantity}</p>
                        {item.isPrescriptionRequired && (
                          <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                            <ShieldCheck className="w-2.5 h-2.5 text-amber-600" /> Rx Verified
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

              {/* Price Calculations */}
              <div className="border-t border-slate-200 pt-3 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    ₦{subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery Method</span>
                  <span className="font-semibold text-slate-900">
                    {deliveryMethod === "express" ? "Express (₦2,500)" : `Standard (₦${deliveryFee.toLocaleString()})`}
                  </span>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between text-sm font-extrabold text-slate-900">
                  <span>Total Amount</span>
                  <span className="text-teal-700">₦{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 py-3.5 rounded-xl transition-colors shadow-sm disabled:bg-slate-300"
              >
                {isSubmitting ? (
                  "Processing Order..."
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Place Order • ₦{finalTotal.toLocaleString()}
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-slate-400">
                By placing this order, you agree to our terms of service and health privacy policies.
              </p>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}