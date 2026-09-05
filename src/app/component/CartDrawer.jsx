"use client";

import { useCart } from "@/context/CartContext";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingCart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    deliveryFee,
    total,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-teal-600" />
              <h2 className="text-base font-extrabold text-slate-900">
                Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={closeCart}
              type="button"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-slate-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Your cart is empty</h3>
                <p className="text-xs text-slate-500 max-w-xs">
                  Looks like you haven't added any medicines or healthcare products yet.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-2 text-xs font-bold text-teal-600 hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-start">
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover bg-slate-100 border border-slate-200 shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 space-y-1">
                    <p className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">
                      {item.brand}
                    </p>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                      {item.name}
                    </h4>

                    {item.isPrescriptionRequired && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <ShieldCheck className="w-3 h-3 text-amber-600" />
                        Rx Attached
                      </span>
                    )}

                    <p className="text-xs font-extrabold text-slate-900 pt-0.5">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-slate-200 rounded-md bg-slate-50">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-slate-600 hover:text-slate-900"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-slate-600 hover:text-slate-900"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Price Breakdown */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    ₦{subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Delivery Fee</span>
                  <span className="font-semibold text-slate-900">
                    ₦{deliveryFee.toLocaleString()}
                  </span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between text-sm font-extrabold text-slate-900">
                  <span>Total</span>
                  <span className="text-teal-700">₦{total.toLocaleString()}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full flex items-center justify-center gap-2 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 py-3.5 rounded-xl transition-colors shadow-sm"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}