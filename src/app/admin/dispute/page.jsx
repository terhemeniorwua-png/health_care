"use client";

import Link from "next/link";
import { ChevronLeft, AlertTriangle, CheckCircle2, RefreshCw, MessageSquare } from "lucide-react";

export default function DisputeCenterPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <Link href="/admin/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900">
          <ChevronLeft className="w-4 h-4" /> Back to Control Center
        </Link>

        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            Dispute Center <AlertTriangle className="w-5 h-5 text-rose-600" />
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">Arbitrate order and service grievances between patients and vendors.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5 text-xs">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <span className="font-black text-slate-900 text-sm">Dispute #DSP-801 (Order #2045)</span>
            <span className="text-[10px] font-extrabold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Open Resolution</span>
          </div>

          <div className="bg-rose-50/50 border border-rose-200 p-4 rounded-xl space-y-1">
            <span className="text-[10px] font-extrabold text-rose-700 uppercase">Customer Complaint</span>
            <p className="font-bold text-slate-900">"My order was missing one item (Paracetamol 500mg strip)."</p>
          </div>

          <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-3">
            <div><span className="text-slate-400 text-[10px] font-bold">Customer</span><p className="font-extrabold text-slate-900">John Doe</p></div>
            <div><span className="text-slate-400 text-[10px] font-bold">Vendor</span><p className="font-extrabold text-slate-900">HealthPlus Pharmacy</p></div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 justify-end">
            <button className="text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl">Contact Vendor</button>
            <button className="text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-4 py-2 rounded-xl">Issue Partial Refund</button>
            <button className="text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl shadow-xs">Resolve & Close</button>
          </div>
        </div>

      </div>
    </div>
  );
}