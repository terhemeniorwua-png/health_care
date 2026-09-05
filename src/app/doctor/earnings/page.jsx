"use client";

import Link from "next/link";
import {
  ChevronLeft,
  DollarSign,
  TrendingUp,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { GenerateWidget } from "@/components/basekit";

export default function DoctorEarningsPage() {
  const earningsStats = [
    { title: "Today's Earnings", value: "₦25,000", sub: "1 appointment" },
    { title: "Monthly Earnings", value: "₦420,000", sub: "18 appointments" },
    { title: "Total Earnings", value: "₦3,850,000", sub: "Lifetime" },
    { title: "Pending Payout", value: "₦65,000", sub: "Next cycle: Sep 10" },
  ];

  const transactions = [
    {
      id: "TX-101",
      appointment: "Video Consultation with John Doe",
      date: "Sep 5, 2026",
      amount: "₦25,000",
      platformFee: "₦2,500 (10%)",
      netAmount: "₦22,500",
    },
    {
      id: "TX-102",
      appointment: "In-Person Visit with Amina Bello",
      date: "Sep 4, 2026",
      amount: "₦30,000",
      platformFee: "₦3,000 (10%)",
      netAmount: "₦27,000",
    },
    {
      id: "TX-103",
      appointment: "Video Consultation with Fatima Usman",
      date: "Sep 2, 2026",
      amount: "₦25,000",
      platformFee: "₦2,500 (10%)",
      netAmount: "₦22,500",
    },
  ];

  return (
    
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
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
              Doctor Earnings & Payouts
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Financial performance, consultation payouts, and platform fee breakdown.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {earningsStats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-1">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                {stat.title}
              </span>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
              <p className="text-[11px] font-medium text-teal-700">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Chart: Earnings Over Time */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <TrendingUp className="w-4 h-4 text-teal-600" /> Earnings Over Time (2026)
          </h2>

          <GenerateWidget type="inline_visualization" height="600px">

        </GenerateWidget>
        </div>

        {/* Recent Transactions Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
            Recent Consultation Transactions
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[10px]">
                  <th className="pb-3">Appointment</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Gross Amount</th>
                  <th className="pb-3">Platform Fee</th>
                  <th className="pb-3 text-right">Net Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50">
                    <td className="py-3 font-extrabold text-slate-900">{tx.appointment}</td>
                    <td className="py-3 text-slate-500">{tx.date}</td>
                    <td className="py-3 text-slate-700 font-bold">{tx.amount}</td>
                    <td className="py-3 text-rose-600 font-medium">{tx.platformFee}</td>
                    <td className="py-3 text-right font-black text-teal-700">{tx.netAmount}</td>
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