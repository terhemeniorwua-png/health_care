"use client";

import Link from "next/link";
import { ChevronLeft, ShoppingBag, Search, Filter } from "lucide-react";

export default function OrderManagementPage() {
  const orders = [
    { id: "#2045", customer: "John Doe", vendor: "HealthPlus Pharmacy", amount: "₦14,500", payment: "Paid", delivery: "In Transit", date: "05 Mar 2026" },
    { id: "#2044", customer: "Amina Bello", vendor: "Medeor Diagnostics", amount: "₦22,000", payment: "Paid", delivery: "Delivered", date: "04 Mar 2026" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <Link href="/admin/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900">
          <ChevronLeft className="w-4 h-4" /> Back to Control Center
        </Link>

        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">Order Management</h1>
          <p className="text-xs text-slate-500 mt-0.5">Monitor transactions and investigate delivery disputes.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[10px]">
                <th className="pb-3">Order ID</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Vendor</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Payment</th>
                <th className="pb-3">Delivery</th>
                <th className="pb-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-slate-50">
                  <td className="py-3 font-extrabold text-blue-600">{o.id}</td>
                  <td className="py-3 font-bold text-slate-900">{o.customer}</td>
                  <td className="py-3 text-slate-600">{o.vendor}</td>
                  <td className="py-3 font-black text-slate-900">{o.amount}</td>
                  <td className="py-3"><span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded border border-emerald-200">{o.payment}</span></td>
                  <td className="py-3 text-slate-600">{o.delivery}</td>
                  <td className="py-3 text-slate-400">{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}