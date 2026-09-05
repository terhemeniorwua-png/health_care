"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Stethoscope,
  Eye,
  Edit2,
  UserX,
  Plus,
  Search,
} from "lucide-react";

export default function DoctorsManagementPage() {
  const doctors = [
    {
      id: "DOC-01",
      name: "Dr. Alex Morgan",
      specialty: "Cardiology",
      availability: "Mon, Wed, Fri (09:00 AM - 04:00 PM)",
      status: "Active",
      appointments: 8,
    },
    {
      id: "DOC-02",
      name: "Dr. Fatima Ali",
      specialty: "Pediatrics",
      availability: "Tue, Thu, Sat (10:00 AM - 05:00 PM)",
      status: "Active",
      appointments: 12,
    },
    {
      id: "DOC-03",
      name: "Dr. David Lawson",
      specialty: "General Medicine",
      availability: "Mon - Fri (08:00 AM - 02:00 PM)",
      status: "Active",
      appointments: 5,
    },
    {
      id: "DOC-04",
      name: "Dr. Sandra Paul",
      specialty: "Dental Care",
      availability: "On Leave",
      status: "Inactive",
      appointments: 0,
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
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">Doctors Management</h1>
            <p className="text-xs text-slate-500 mt-0.5">Manage doctor profiles, specialties, shift availabilities, and active statuses.</p>
          </div>
          <button
            type="button"
            onClick={() => alert("Add Doctor Modal")}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl transition-colors shadow-xs shrink-0"
          >
            <Plus className="w-4 h-4" /> Add Doctor
          </button>
        </div>

        {/* Doctors Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[10px]">
                  <th className="pb-3">Doctor</th>
                  <th className="pb-3">Specialty</th>
                  <th className="pb-3">Availability / Shift</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Today's Appointments</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {doctors.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50">
                    <td className="py-3 font-extrabold text-slate-900">{doc.name}</td>
                    <td className="py-3 font-medium text-slate-600">{doc.specialty}</td>
                    <td className="py-3 text-slate-500">{doc.availability}</td>
                    <td className="py-3">
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                          doc.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-slate-100 text-slate-500 border-slate-200"
                        }`}
                      >
                        {doc.status}
                      </span>
                    </td>
                    <td className="py-3 font-bold text-slate-800">{doc.appointments} booked</td>
                    <td className="py-3 text-right space-x-2">
                      <button
                        type="button"
                        onClick={() => alert(`View details for ${doc.name}`)}
                        className="p-1.5 text-slate-500 hover:text-blue-600 transition-colors"
                        title="View"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => alert(`Edit ${doc.name}`)}
                        className="p-1.5 text-slate-500 hover:text-amber-600 transition-colors"
                        title="Edit"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => alert(`Deactivated ${doc.name}`)}
                        className="p-1.5 text-slate-500 hover:text-rose-600 transition-colors"
                        title="Deactivate"
                      >
                        <UserX className="w-3.5 h-3.5" />
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