"use client";

import Link from "next/link";
import {
  ChevronLeft,
  User,
  TestTube2,
  CheckCircle2,
  Clock,
  ArrowRight,
  Upload,
} from "lucide-react";

export default function TestOrderDetailsPage({ params }) {
  const orderId = params?.id || "ORD-901";

  const order = {
    id: orderId,
    testName: "Full Blood Count",
    patientName: "John Doe",
    status: "Sample collected",
    currentStepIndex: 1, // 0: Booked, 1: Sample collected, 2: Processing, 3: Result review, 4: Released
  };

  const timelineSteps = [
    { title: "Booked", time: "08:30 AM" },
    { title: "Sample collected", time: "09:45 AM" },
    { title: "Processing", time: "In progress" },
    { title: "Result review", time: "Pending" },
    { title: "Released", time: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link href="/lab/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Order Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black text-slate-900">{order.testName}</h1>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {order.status}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Order ID: #{order.id}</p>
            </div>

            <Link
              href={`/lab/orders/${order.id}/upload`}
              className="inline-flex items-center gap-2 text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 rounded-xl transition-colors shadow-xs shrink-0"
            >
              <Upload className="w-4 h-4" /> Upload Result
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-0.5">
              <span className="text-[10px] font-extrabold uppercase text-slate-400">Patient</span>
              <p className="font-extrabold text-slate-900 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-indigo-600" /> {order.patientName}
              </p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-extrabold uppercase text-slate-400">Requested Test</span>
              <p className="font-extrabold text-slate-900 flex items-center gap-1">
                <TestTube2 className="w-3.5 h-3.5 text-indigo-600" /> {order.testName}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
            Sample Tracking Timeline
          </h2>

          <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {timelineSteps.map((step, idx) => {
              const isDone = idx <= order.currentStepIndex;
              const isCurrent = idx === order.currentStepIndex;

              return (
                <div key={idx} className="relative flex items-start gap-4">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-white ${
                      isDone
                        ? "border-indigo-600 text-indigo-600 bg-indigo-50"
                        : "border-slate-300 text-slate-300"
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    )}
                  </div>

                  <div>
                    <p className={`text-xs font-black ${isCurrent ? "text-indigo-600" : isDone ? "text-slate-900" : "text-slate-400"}`}>
                      {step.title}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{step.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}