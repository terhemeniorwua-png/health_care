"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Plus } from "lucide-react";

export default function AddTestPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    preparation: "",
    homeCollection: "Yes",
    processingTime: "12 Hours",
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-6">
        
        <Link href="/lab/tests" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Test Management
        </Link>

        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl font-black text-slate-900">Add New Diagnostic Test</h1>
          <p className="text-xs text-slate-500">Add a new test offering to your laboratory services menu.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-extrabold uppercase text-slate-500">Test Name</label>
            <input
              type="text"
              placeholder="e.g. Full Blood Count"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-extrabold uppercase text-slate-500">Description</label>
            <textarea
              rows={2}
              placeholder="Provide a brief clinical description of what the test evaluates..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold uppercase text-slate-500">Price (₦)</label>
              <input
                type="text"
                placeholder="e.g. 8500"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-extrabold uppercase text-slate-500">Processing Time</label>
              <input
                type="text"
                placeholder="e.g. 12 Hours"
                value={formData.processingTime}
                onChange={(e) => setFormData({ ...formData, processingTime: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-extrabold uppercase text-slate-500">Preparation Requirements</label>
            <input
              type="text"
              placeholder="e.g. Fasting required for 8-10 hours prior to sample collection."
              value={formData.preparation}
              onChange={(e) => setFormData({ ...formData, preparation: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-extrabold uppercase text-slate-500">Home Collection Availability</label>
            <select
              value={formData.homeCollection}
              onChange={(e) => setFormData({ ...formData, homeCollection: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
            >
              <option value="Yes">Yes - Home sample collection available</option>
              <option value="No">No - Requires lab visit</option>
            </select>
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-end">
            <button
              type="button"
              onClick={() => alert("Test added successfully!")}
              className="inline-flex items-center gap-2 text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-xl transition-colors"
            >
              <Plus className="w-4 h-4" /> Save Test
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}