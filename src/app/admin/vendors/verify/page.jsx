"use client";

import Link from "next/link";
import { ChevronLeft, CheckCircle, AlertCircle, XCircle, FileText } from "lucide-react";

export default function VendorVerificationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <Link href="/admin/vendors" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900">
          <ChevronLeft className="w-4 h-4" /> Back to Vendors
        </Link>

        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl font-black text-slate-900">Pending Verification Application</h1>
          <p className="text-xs text-slate-500">Review business documentation before granting marketplace privileges.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6 text-xs">
          <div>
            <h2 className="font-extrabold text-slate-900 border-b border-slate-100 pb-2">Business Information</h2>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div><span className="text-slate-400 uppercase text-[10px] font-extrabold">Name</span><p className="font-bold text-slate-900">HealthPlus Pharmacy</p></div>
              <div><span className="text-slate-400 uppercase text-[10px] font-extrabold">Type</span><p className="font-bold text-slate-900">Retail Pharmacy Chain</p></div>
            </div>
          </div>

          <div>
            <h2 className="font-extrabold text-slate-900 border-b border-slate-100 pb-2">Required Documentation</h2>
            <div className="space-y-2 mt-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <span className="font-medium text-slate-700 flex items-center gap-2"><FileText className="w-4 h-4 text-blue-600" /> Pharmacists Council Premises License (PCN)</span>
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Attached</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <span className="font-medium text-slate-700 flex items-center gap-2"><FileText className="w-4 h-4 text-blue-600" /> CAC Business Registration Document</span>
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Attached</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 justify-end">
            <button className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 px-4 py-2 rounded-xl">
              Reject Application
            </button>
            <button className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 hover:bg-amber-100 px-4 py-2 rounded-xl">
              Request Changes
            </button>
            <button className="text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-2 rounded-xl shadow-xs">
              Approve Vendor
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}