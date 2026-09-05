"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Video,
  Building2,
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  BadgeCheck
} from "lucide-react";

export default function AppointmentBookingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    consultationType: "video", // 'video' | 'in-person'
    selectedDate: "2026-09-08", // Sep 8, 2026
    selectedTime: "04:00 PM",
    patientName: "",
    dob: "",
    phone: "",
    email: "",
    reason: "",
  });

  // Target Doctor Summary Data
  const doctor = {
    name: "Dr. Sarah Williams",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    rates: {
      video: 15000,
      "in-person": 20000,
    },
  };

  // Calendar dates mock (Sep 2026)
  const availableDates = [
    { day: "Mon", date: "7", fullDate: "2026-09-07" },
    { day: "Tue", date: "8", fullDate: "2026-09-08" },
    { day: "Wed", date: "9", fullDate: "2026-09-09" },
    { day: "Thu", date: "10", fullDate: "2026-09-10" },
    { day: "Fri", date: "11", fullDate: "2026-09-11" },
  ];

  const availableSlots = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const currentPrice = doctor.rates[formData.consultationType];

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Book Appointment</h1>
            <p className="text-xs text-slate-500 mt-0.5">Complete the steps below to schedule your consultation</p>
          </div>
          <Link
            href="/doctors/1"
            className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Doctor Profile
          </Link>
        </div>

        {/* Step Progress Bar Header */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2 px-1">
            <span>Step {currentStep} of 5</span>
            <span className="text-teal-600">
              {currentStep === 1 && "Consultation Type"}
              {currentStep === 2 && "Select Date"}
              {currentStep === 3 && "Select Time"}
              {currentStep === 4 && "Patient Details"}
              {currentStep === 5 && "Review & Payment"}
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-teal-600 h-full transition-all duration-300 ease-out rounded-full"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Step Form Container */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* STEP 1 — Consultation Type */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Step 1 — Consultation</h2>
                <p className="text-xs text-slate-500 mt-1">Choose how you would like to meet with your doctor.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Video Option */}
                <button
                  type="button"
                  onClick={() => handleInputChange("consultationType", "video")}
                  className={`p-5 rounded-xl border text-left transition-all relative ${
                    formData.consultationType === "video"
                      ? "border-teal-600 bg-teal-50/50 ring-2 ring-teal-600/20"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                    <Video className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">Video Consultation</h3>
                  <p className="text-xs text-slate-500 mt-1">Speak with doctor online via video call</p>
                  <p className="text-sm font-extrabold text-slate-900 mt-4">₦15,000</p>
                </button>

                {/* In-Person Option */}
                <button
                  type="button"
                  onClick={() => handleInputChange("consultationType", "in-person")}
                  className={`p-5 rounded-xl border text-left transition-all relative ${
                    formData.consultationType === "in-person"
                      ? "border-teal-600 bg-teal-50/50 ring-2 ring-teal-600/20"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">In-Person Consultation</h3>
                  <p className="text-xs text-slate-500 mt-1">Visit clinic location in Abuja</p>
                  <p className="text-sm font-extrabold text-slate-900 mt-4">₦20,000</p>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 — Date */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Step 2 — Date</h2>
                <p className="text-xs text-slate-500 mt-1">Choose an available appointment date.</p>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-3">
                <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-teal-600" /> September 2026
                </p>
                <div className="grid grid-cols-5 gap-2">
                  {availableDates.map((item) => {
                    const isSelected = formData.selectedDate === item.fullDate;
                    return (
                      <button
                        key={item.fullDate}
                        type="button"
                        onClick={() => handleInputChange("selectedDate", item.fullDate)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          isSelected
                            ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <span className="block text-[10px] uppercase tracking-wider opacity-80">{item.day}</span>
                        <span className="block font-extrabold text-base mt-0.5">{item.date}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 — Time */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Step 3 — Time</h2>
                <p className="text-xs text-slate-500 mt-1">Select an available time slot for your consultation.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {availableSlots.map((time) => {
                  const isSelected = formData.selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleInputChange("selectedTime", time)}
                      className={`py-3 px-4 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                          : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4 — Patient Information */}
          {currentStep === 4 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Step 4 — Patient Information</h2>
                <p className="text-xs text-slate-500 mt-1">Please provide accurate personal details for medical record accuracy.</p>
              </div>

              <div className="space-y-4 pt-1">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Amina Bello"
                      value={formData.patientName}
                      onChange={(e) => handleInputChange("patientName", e.target.value)}
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date of Birth */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => handleInputChange("dob", e.target.value)}
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-900 focus:outline-none focus:border-teal-600"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="amina@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                    />
                  </div>
                </div>

                {/* Reason for consultation */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Reason for consultation</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your health concern or symptoms..."
                    value={formData.reason}
                    onChange={(e) => handleInputChange("reason", e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5 — Review & Confirmation */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Step 5 — Review & Payment</h2>
                <p className="text-xs text-slate-500 mt-1">Review your consultation details before proceeding to payment.</p>
              </div>

              {/* Review Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                {/* Doctor Summary */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
                  <img src={doctor.image} alt={doctor.name} className="w-14 h-14 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900">{doctor.name}</h3>
                    <p className="text-xs font-semibold text-teal-600">{doctor.specialty}</p>
                  </div>
                </div>

                {/* Booking Key-Values matching specs */}
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Consultation Type:</span>
                    <span className="font-semibold text-slate-900 capitalize">
                      {formData.consultationType === "video" ? "Video Consultation" : "In-Person Consultation"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Date:</span>
                    <span className="font-semibold text-slate-900">September 8, 2026</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Time:</span>
                    <span className="font-semibold text-slate-900">{formData.selectedTime}</span>
                  </div>

                  <div className="flex justify-between pt-2 border-t border-slate-200 font-bold text-sm">
                    <span className="text-slate-900">Total Fee:</span>
                    <span className="text-teal-700">₦{currentPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Confirm & Pay CTA */}
              <button
                type="button"
                onClick={() => alert("Redirecting to Paystack payment gateway...")}
                className="w-full flex items-center justify-center gap-2 font-bold text-sm text-white bg-teal-600 hover:bg-teal-700 py-3.5 rounded-xl transition-colors shadow-sm"
              >
                <CreditCard className="w-4 h-4" />
                Confirm & Pay ₦{currentPrice.toLocaleString()}
              </button>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            ) : <div />}

            {currentStep < 5 && (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 px-6 py-2.5 rounded-lg transition-colors shadow-sm ml-auto"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}