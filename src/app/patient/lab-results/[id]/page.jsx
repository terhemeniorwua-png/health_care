"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Download,
  Share2,
  Building2,
  Calendar,
  CheckCircle2,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

export default function LabResultDetailsPage() {
  const resultData = {
    id: "LAB-9042",
    testName: "Full Blood Count",
    date: "September 4, 2026",
    laboratory: "CityLab Laboratory",
    patientName: "John Doe",
    ageSex: "34 Yrs / Male",
    metrics: [
      { test: "Hemoglobin", result: "14.2 g/dL", refRange: "13.5 - 17.5 g/dL", status: "Normal" },
      { test: "White Blood Cells", result: "6.5 x10^3 / µL", refRange: "4.5 - 11.0 x10^3 / µL", status: "Normal" },
      { test: "Platelets", result: "250 x10^3 / µL", refRange: "150 - 450 x10^3 / µL", status: "Normal" },
      { test: "Hematocrit", result: "42.1 %", refRange: "41.0 - 50.0 %", status: "Normal" },
      { test: "Red Blood Cells", result: "4.8 x10^6 / µL", refRange: "4.3 - 5.9 x10^6 / µL", status: "Normal" },
    ],
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: resultData.testName,
        text: `Lab report for ${resultData.testName} from ${resultData.laboratory}`,
        url: window.location.href,
      });
    } else {
      alert("Result link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/patient/lab-results"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Lab Results
        </Link>

        {/* Header Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                {resultData.testName}
              </h1>
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" /> Verified Report
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Diagnostic report ref: {resultData.id}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => alert("Downloading PDF report...")}
              className="inline-flex items-center gap-1.5 font-bold text-xs text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 px-3.5 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" /> Download Result
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 px-3.5 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>
        </div>

        {/* Patient & Laboratory Info Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Laboratory</span>
            <p className="font-extrabold text-slate-900 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-teal-600" /> {resultData.laboratory}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Date Tested</span>
            <p className="font-extrabold text-slate-900 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" /> {resultData.date}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Patient</span>
            <p className="font-extrabold text-slate-900">{resultData.patientName}</p>
            <p className="text-[11px] text-slate-500">{resultData.ageSex}</p>
          </div>
        </div>

        {/* Results Data Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-teal-600" /> Test Breakdown & Parameters
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-100 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                <tr>
                  <th className="py-3 px-4">Test Parameter</th>
                  <th className="py-3 px-4">Result</th>
                  <th className="py-3 px-4">Reference Range</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {resultData.metrics.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-extrabold text-slate-900">
                      {item.test}
                    </td>
                    <td className="py-3.5 px-4 font-black text-teal-700">
                      {item.result}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 font-medium">
                      {item.refRange}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}   