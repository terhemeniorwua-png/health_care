"use client";

import Link from "next/link";
import { ChevronLeft, DollarSign, CheckCircle } from "lucide-react";

export default function PayoutsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Link href="/admin/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900">
          <ChevronLeft className="w-4 h-4" /> Back to Control Center
        </Link>

        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl font-black text-slate-900">Vendor Payouts</h1>
          <p className="text-xs text-slate-500">Approve pending balance transfers to marketplace vendors.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="p-4 border border-amber-200 bg-amber-50/50 rounded-xl flex items-center justify-between text-xs">
            <div>
              <p className="font-extrabold text-slate-900">HealthPlus Pharmacy</p>
              <p className="text-amber-800 font-bold mt-0.5">Amount: ₦250,000 • Status: Pending</p>
            </div>
            <div className="flex gap-2">
              <button className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg">View Details</button>
              <button className="text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-1.5 rounded-lg shadow-xs">Approve Payout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}