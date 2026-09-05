"use client";

import Link from "next/link";
import { ChevronLeft, Send, Bell } from "lucide-react";

export default function NotificationsManagementPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <Link href="/admin/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900">
          <ChevronLeft className="w-4 h-4" /> Back to Control Center
        </Link>

        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl font-black text-slate-900">Send Platform Announcement</h1>
          <p className="text-xs text-slate-500">Broadcast messages across In-app, Email, or SMS channels.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 text-xs">
          <div className="space-y-1">
            <label className="font-extrabold text-slate-700 uppercase text-[10px]">Recipient Group</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none font-bold text-slate-900">
              <option>All users</option>
              <option>Patients only</option>
              <option>Doctors only</option>
              <option>Vendors only</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="font-extrabold text-slate-700 uppercase text-[10px]">Broadcast Channels</label>
            <div className="flex gap-4 pt-1">
              <label className="flex items-center gap-1.5 font-bold"><input type="checkbox" defaultChecked /> In-app</label>
              <label className="flex items-center gap-1.5 font-bold"><input type="checkbox" defaultChecked /> Email</label>
              <label className="flex items-center gap-1.5 font-bold"><input type="checkbox" /> SMS</label>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-extrabold text-slate-700 uppercase text-[10px]">Announcement Message</label>
            <textarea rows={3} placeholder="Write system notification content..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none" />
          </div>

          <div className="pt-2 flex justify-end">
            <button className="inline-flex items-center gap-2 text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-xl shadow-xs">
              <Send className="w-3.5 h-3.5" /> Send Notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}