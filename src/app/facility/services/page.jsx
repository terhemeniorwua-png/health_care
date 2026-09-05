"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Plus,
  Building2,
  CheckCircle,
  XCircle,
  Edit2,
  Trash2,
} from "lucide-react";

export default function FacilityServicesPage() {
  const services = [
    {
      id: "SRV-01",
      name: "General Consultation",
      department: "General Medicine",
      price: "₦10,000",
      availability: "Available",
      description: "Comprehensive medical evaluation and health checkup.",
    },
    {
      id: "SRV-02",
      name: "Cardiology Assessment",
      department: "Cardiology",
      price: "₦25,000",
      availability: "Available",
      description: "ECG, blood pressure profiling, and cardiac check.",
    },
    {
      id: "SRV-03",
      name: "Pediatric Wellness Check",
      department: "Pediatrics",
      price: "₦15,000",
      availability: "Available",
      description: "Growth tracking, physical checkup, and routine childhood screening.",
    },
    {
      id: "SRV-04",
      name: "Dental Cleaning & Examination",
      department: "Dental Care",
      price: "₦20,000",
      availability: "Available",
      description: "Professional scaling, polishing, and oral exam.",
    },
    {
      id: "SRV-05",
      name: "Full Blood Count & Lipid Profile",
      department: "Laboratory",
      price: "₦12,500",
      availability: "Available",
      description: "Diagnostic blood tests for cellular and lipid analysis.",
    },
    {
      id: "SRV-06",
      name: "Chest X-Ray & Ultrasound Scanning",
      department: "Imaging",
      price: "₦30,000",
      availability: "Unavailable",
      description: "Radiology imaging and diagnostic ultrasound.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link href="/facility/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Facility Overview
        </Link>

        {/* Page Heading & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">Facility Services</h1>
            <p className="text-xs text-slate-500 mt-0.5">Manage offering menus across General Consultation, Cardiology, Pediatrics, Dental, Lab, and Imaging.</p>
          </div>
          <button
            type="button"
            onClick={() => alert("Add Service Modal")}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl transition-colors shadow-xs shrink-0"
          >
            <Plus className="w-4 h-4" /> Add Service
          </button>
        </div>

        {/* Services Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[10px]">
                  <th className="pb-3">Service Name & Description</th>
                  <th className="pb-3">Department</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Availability</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {services.map((srv) => (
                  <tr key={srv.id} className="hover:bg-slate-50">
                    <td className="py-3 pr-4">
                      <p className="font-extrabold text-slate-900">{srv.name}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5 max-w-xs">{srv.description}</p>
                    </td>
                    <td className="py-3 font-semibold text-slate-700">{srv.department}</td>
                    <td className="py-3 font-black text-slate-900">{srv.price}</td>
                    <td className="py-3">
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                          srv.availability === "Available"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        {srv.availability}
                      </span>
                    </td>
                    <td className="py-3 text-right space-x-2">
                      <button type="button" className="p-1.5 text-slate-500 hover:text-blue-600 transition-colors">
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