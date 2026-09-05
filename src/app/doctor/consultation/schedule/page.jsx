"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Calendar,
  Clock,
  Ban,
  Save,
  Check,
} from "lucide-react";

export default function DoctorSchedulePage() {
  const [workingHours, setWorkingHours] = useState({
    start: "09:00",
    end: "17:00",
  });
  const [consultationDuration, setConsultationDuration] = useState("30");
  const [blockedDays, setBlockedDays] = useState(["Sunday"]);

  const toggleBlockedDay = (day) => {
    if (blockedDays.includes(day)) {
      setBlockedDays(blockedDays.filter((d) => d !== day));
    } else {
      setBlockedDays([...blockedDays, day]);
    }
  };

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/doctor/dashboard"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              Doctor Schedule & Availability
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Set your recurring working hours, consultation duration, and block specific days.
            </p>
          </div>
          <button
            type="button"
            onClick={() => alert("Availability saved successfully.")}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 px-5 py-2.5 rounded-xl transition-colors shadow-xs shrink-0"
          >
            <Save className="w-4 h-4" /> Save Availability
          </button>
        </div>

        {/* Working Hours & Duration Settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Clock className="w-4 h-4 text-teal-600" /> Add Working Hours
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase">Start Time</label>
                <input
                  type="time"
                  value={workingHours.start}
                  onChange={(e) => setWorkingHours({ ...workingHours, start: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none mt-1"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase">End Time</label>
                <input
                  type="time"
                  value={workingHours.end}
                  onChange={(e) => setWorkingHours({ ...workingHours, end: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none mt-1"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Calendar className="w-4 h-4 text-teal-600" /> Manage Consultation Duration
            </h2>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase">Slot Duration</label>
              <select
                value={consultationDuration}
                onChange={(e) => setConsultationDuration(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none mt-1"
              >
                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="60">60 Minutes</option>
              </select>
            </div>
          </div>

        </div>

        {/* Set Availability & Block Time */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Ban className="w-4 h-4 text-rose-600" /> Set Availability & Block Time
          </h2>
          <p className="text-xs text-slate-500">
            Select days to block out completely from patient booking calendar.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-2">
            {daysOfWeek.map((day) => {
              const isBlocked = blockedDays.includes(day);
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleBlockedDay(day)}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 text-xs font-bold ${
                    isBlocked
                      ? "bg-rose-50 border-rose-300 text-rose-700"
                      : "bg-teal-50 border-teal-300 text-teal-800"
                  }`}
                >
                  <span>{day}</span>
                  <span className="text-[10px] font-semibold">
                    {isBlocked ? "Blocked" : "Available"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}