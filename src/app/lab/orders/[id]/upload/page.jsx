"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Save, CheckCircle, FileText } from "lucide-react";

export default function UploadResultPage({ params }) {
  const orderId = params?.id || "ORD-901";

  const [results, setResults] = useState({
    hemoglobin: "13.5",
    whiteBloodCells: "6.8",
    platelets: "250",
  });

  const [status, setStatus] = useState("Draft"); // Draft -> Saved -> Released

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link href={`/lab/orders/${orderId}`} className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Order Details
        </Link>

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">Upload Test Result</h1>
          <p className="text-xs text-slate-500 mt-0.5">Enter laboratory measurement values and release reports to patient portal.</p>
        </div>

        {/* Order Brief Card */}
        <div className="bg-indigo-50/60 border border-indigo-200 rounded-2xl p-4 grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-[10px] font-bold text-indigo-400 uppercase">Patient</span>
            <p className="font-extrabold text-indigo-950">John Doe</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-indigo-400 uppercase">Test</span>
            <p className="font-extrabold text-indigo-950">Full Blood Count</p>
          </div>
        </div>

        {/* Results Input Form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" /> Result Parameters
          </h2>

          <div className="space-y-4">
            
            {/* Hemoglobin */}
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2">
              <label className="text-xs font-bold text-slate-700">Hemoglobin (Hb)</label>
              <div className="sm:col-span-2 flex items-center gap-2">
                <input
                  type="text"
                  value={results.hemoglobin}
                  onChange={(e) => setResults({ ...results, hemoglobin: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs font-bold text-slate-900 outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <span className="text-[11px] font-bold text-slate-400 shrink-0">g/dL</span>
              </div>
            </div>

            {/* White Blood Cells */}
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2">
              <label className="text-xs font-bold text-slate-700">White Blood Cells (WBC)</label>
              <div className="sm:col-span-2 flex items-center gap-2">
                <input
                  type="text"
                  value={results.whiteBloodCells}
                  onChange={(e) => setResults({ ...results, whiteBloodCells: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs font-bold text-slate-900 outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <span className="text-[11px] font-bold text-slate-400 shrink-0">x10^3 / µL</span>
              </div>
            </div>

            {/* Platelets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2">
              <label className="text-xs font-bold text-slate-700">Platelets</label>
              <div className="sm:col-span-2 flex items-center gap-2">
                <input
                  type="text"
                  value={results.platelets}
                  onChange={(e) => setResults({ ...results, platelets: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs font-bold text-slate-900 outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <span className="text-[11px] font-bold text-slate-400 shrink-0">x10^3 / µL</span>
              </div>
            </div>

          </div>

          {/* Action Buttons: Save Result then Release Result */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              Current Status: <span className="font-extrabold text-slate-900">{status}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setStatus("Saved");
                  alert("Results saved as draft.");
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-800 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-4 py-2.5 rounded-xl transition-colors"
              >
                <Save className="w-3.5 h-3.5" /> Save Result
              </button>

              <button
                type="button"
                onClick={() => {
                  setStatus("Released");
                  alert("Results verified and released to patient!");
                }}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 rounded-xl transition-colors shadow-xs"
              >
                <CheckCircle className="w-3.5 h-3.5" /> Release Result
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}