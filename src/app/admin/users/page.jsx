"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Search, Eye, Edit2, UserX, CheckCircle2 } from "lucide-react";

export default function UserManagementPage() {
  const [activeTab, setActiveTab] = useState("All");

  const users = [
    { id: "USR-01", name: "John Doe", role: "Patient", email: "john@example.com", status: "Active", joined: "12 Jan 2026" },
    { id: "USR-02", name: "Dr. Alex Morgan", role: "Doctor", email: "alex.morgan@hospital.org", status: "Active", joined: "05 Feb 2026" },
    { id: "USR-03", name: "HealthPlus Admin", role: "Vendor", email: "contact@healthplus.com", status: "Active", joined: "18 Nov 2025" },
    { id: "USR-04", name: "Sarah Jenkins", role: "Administrator", email: "sarah.admin@platform.com", status: "Active", joined: "01 Jan 2025" },
    { id: "USR-05", name: "Michael Lawson", role: "Patient", email: "lawson@example.com", status: "Suspended", joined: "10 Dec 2025" },
  ];

  const filteredUsers = activeTab === "All" ? users : users.filter((u) => u.role.toLowerCase() === activeTab.toLowerCase().slice(0, -1) || u.role === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <Link href="/admin/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900">
          <ChevronLeft className="w-4 h-4" /> Back to Control Center
        </Link>

        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">User Management</h1>
          <p className="text-xs text-slate-500 mt-0.5">Manage access control across Patients, Doctors, Vendors, and Administrators.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
          {["All", "Patients", "Doctors", "Vendors", "Administrators"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-extrabold px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === tab ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[10px]">
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Role</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Joined</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50">
                    <td className="py-3 font-extrabold text-slate-900">{u.name}</td>
                    <td className="py-3 font-medium text-slate-600">{u.role}</td>
                    <td className="py-3 text-slate-500">{u.email}</td>
                    <td className="py-3">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                        u.status === "Active" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-rose-50 text-rose-700 border-rose-200"
                      }`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="py-3 text-slate-400">{u.joined}</td>
                    <td className="py-3 text-right space-x-2">
                      <button className="p-1 text-slate-500 hover:text-blue-600" title="View"><Eye className="w-3.5 h-3.5" /></button>
                      <button className="p-1 text-slate-500 hover:text-amber-600" title="Edit"><Edit2 className="w-3.5 h-3.5" /></button>
                      {u.status === "Active" ? (
                        <button className="p-1 text-slate-500 hover:text-rose-600" title="Suspend"><UserX className="w-3.5 h-3.5" /></button>
                      ) : (
                        <button className="p-1 text-slate-500 hover:text-emerald-600" title="Activate"><CheckCircle2 className="w-3.5 h-3.5" /></button>
                      )}
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