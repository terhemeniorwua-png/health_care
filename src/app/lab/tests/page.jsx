"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Plus,
  Search,
  CheckCircle,
  XCircle,
  Clock,
  Home,
  Edit2,
  Trash2,
} from "lucide-react";

export default function TestManagementPage() {
  const labTests = [
    {
      id: "TEST-01",
      name: "Full Blood Count (FBC)",
      description: "Measures red/white blood cells, hemoglobin, and platelets.",
      price: "₦8,500",
      preparation: "Fasting not required.",
      homeCollection: true,
      processingTime: "12 Hours",
    },
    {
      id: "TEST-02",
      name: "Fasting Blood Sugar (FBS)",
      description: "Evaluates blood glucose levels after overnight fasting.",
      price: "₦3,000",
      preparation: "Fasting required for 8-12 hours prior.",
      homeCollection: true,
      processingTime: "4 Hours",
    },
    {
      id: "TEST-03",
      name: "Comprehensive Metabolic Panel",
      description: "Checks kidney function, liver function, and electrolyte balance.",
      price: "₦18,000",
      preparation: "10-12 hours fasting required.",
      homeCollection: false,
      processingTime: "24 Hours",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link href="/lab/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Page Heading & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">Test Management</h1>
            <p className="text-xs text-slate-500 mt-0.5">Manage available lab tests, pricing, fasting requirements, and home collection flags.</p>
          </div>
          <Link
            href="/lab/tests/add"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 rounded-xl transition-colors shadow-xs shrink-0"
          >
            <Plus className="w-4 h-4" /> Add Test
          </Link>
        </div>

        {/* Test Catalog Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[10px]">
                  <th className="pb-3">Test Name & Description</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Preparation Requirements</th>
                  <th className="pb-3">Home Collection</th>
                  <th className="pb-3">Turnaround Time</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {labTests.map((test) => (
                  <tr key={test.id} className="hover:bg-slate-50">
                    <td className="py-3 pr-4">
                      <p className="font-black text-slate-900">{test.name}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5 max-w-xs">{test.description}</p>
                    </td>
                    <td className="py-3 font-bold text-slate-900">{test.price}</td>
                    <td className="py-3 text-slate-600 max-w-xs">{test.preparation}</td>
                    <td className="py-3">
                      {test.homeCollection ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <Home className="w-3 h-3" /> Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                          Lab Visit Only
                        </span>
                      )}
                    </td>
                    <td className="py-3 text-slate-700 font-medium">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" /> {test.processingTime}
                      </span>
                    </td>
                    <td className="py-3 text-right space-x-2">
                      <button type="button" className="p-1.5 text-slate-500 hover:text-indigo-600 transition-colors">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button type="button" className="p-1.5 text-slate-500 hover:text-rose-600 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
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