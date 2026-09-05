"use client";

import Link from "next/link";
import { ChevronLeft, Store, ShieldAlert, Star } from "lucide-react";

export default function VendorManagementPage() {
  const vendors = [
    { name: "HealthPlus Pharmacy", type: "Pharmacy", location: "Lagos, NG", status: "Verified", rating: "4.8", date: "10 Oct 2025" },
    { name: "Medeor Diagnostics", type: "Laboratory", location: "Abuja, NG", status: "Pending Verification", rating: "N/A", date: "02 Mar 2026" },
    { name: "St. Nicholas Specialist", type: "Hospital", location: "Lagos, NG", status: "Verified", rating: "4.9", date: "15 Jan 2025" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <Link href="/admin/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900">
          <ChevronLeft className="w-4 h-4" /> Back to Control Center
        </Link>

        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">Vendor Management</h1>
            <p className="text-xs text-slate-500 mt-0.5">Pharmacies, Laboratories, Hospitals, and Diagnostic Clinics.</p>
          </div>
          <Link href="/admin/vendors/verify" className="text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-xl">
            Pending Verifications
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[10px]">
                <th className="pb-3">Business Name</th>
                <th className="pb-3">Type</th>
                <th className="pb-3">Location</th>
                <th className="pb-3">Verification</th>
                <th className="pb-3">Rating</th>
                <th className="pb-3">Registered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {vendors.map((v, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-3 font-extrabold text-slate-900">{v.name}</td>
                  <td className="py-3 text-slate-600">{v.type}</td>
                  <td className="py-3 text-slate-500">{v.location}</td>
                  <td className="py-3">
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                      v.status === "Verified" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}>
                      {v.status}
                    </span>
                  </td>
                  <td className="py-3 font-bold text-slate-800 flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> {v.rating}
                  </td>
                  <td className="py-3 text-slate-400">{v.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}