"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Stethoscope,
  Pill,
  TestTube2,
  Building2,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Clock,
  ArrowRight,
  Upload,
  User,
  Mail,
  Phone,
  Briefcase,
  Building,
} from "lucide-react";

export default function ProviderRegisterPage() {
  const [providerType, setProviderType] = useState(""); // "doctor" | "pharmacy" | "lab" | "hospital"
  const [currentStep, setCurrentStep] = useState(1); // Step in the dynamic pipeline

  // Provider Registration Data State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    licenseNumber: "",
    businessName: "",
    documentsUploaded: false,
  });

  const providerOptions = [
    { id: "doctor", title: "Doctor", icon: Stethoscope, desc: "Licensed medical practitioners & specialists" },
    { id: "pharmacy", title: "Pharmacy", icon: Pill, desc: "Licensed retail & clinical pharmacies" },
    { id: "lab", title: "Laboratory", icon: TestTube2, desc: "Diagnostic & medical testing facilities" },
    { id: "hospital", title: "Hospital / Clinic", icon: Building2, desc: "Hospitals, urgent care & medical centers" },
  ];

  // Pipeline configuration per provider type
  const getPipelineSteps = () => {
    if (providerType === "doctor") {
      return ["Provider Type", "Professional Info", "Credentials", "Verification", "Admin Review"];
    }
    return ["Provider Type", "Business Info", "Documents", "Verification", "Admin Review"];
  };

  const pipelineSteps = getPipelineSteps();

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < pipelineSteps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-slate-900 text-white shadow-xs">
            <Building className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Join as a Healthcare Professional
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Register your practice or medical facility to deliver quality care.
          </p>
        </div>

        {/* Dynamic Workflow Progress Steps */}
        {providerType && (
          <div className="overflow-x-auto pb-2">
            <div className="flex items-center justify-between min-w-[400px] border-b border-slate-100 pb-4">
              {pipelineSteps.map((stepName, idx) => {
                const stepNum = idx + 1;
                const isActive = currentStep === stepNum;
                const isPassed = currentStep > stepNum;

                return (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span
                      className={`w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center ${
                        isPassed
                          ? "bg-emerald-600 text-white"
                          : isActive
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {isPassed ? <CheckCircle2 className="w-3.5 h-3.5" /> : stepNum}
                    </span>
                    <span
                      className={`text-[10px] font-extrabold ${
                        isActive ? "text-slate-900" : "text-slate-400"
                      }`}
                    >
                      {stepName}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 1: Choose Provider Type */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <p className="text-xs font-black text-slate-700 uppercase tracking-wider text-center">
              What type of provider are you?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {providerOptions.map((item) => {
                const Icon = item.icon;
                const isSelected = providerType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProviderType(item.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                      isSelected
                        ? "border-slate-900 bg-slate-900 text-white shadow-md"
                        : "border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 text-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className={`p-2.5 rounded-xl ${isSelected ? "bg-white/10 text-white" : "bg-white text-slate-700 border border-slate-200"}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-black">{item.title}</h3>
                      <p className={`text-[10px] font-medium leading-normal mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              disabled={!providerType}
              onClick={() => setCurrentStep(2)}
              className="w-full text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-40 py-3.5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              Continue Registration <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Professional / Business Info */}
        {currentStep === 2 && (
          <form onSubmit={handleNext} className="space-y-4 text-xs">
            <h3 className="text-sm font-black text-slate-900 text-center">
              {providerType === "doctor" ? "Professional Information" : "Business Information"}
            </h3>

            <div className="space-y-3">
              <div className="space-y-1">
                <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">
                  {providerType === "doctor" ? "Full Name & Title" : "Registered Business Name"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={providerType === "doctor" ? "Dr. Jane Doe" : "MedPlus Pharmacy Ltd"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none font-bold text-slate-900 focus:bg-white focus:border-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">Official Email</label>
                  <input
                    type="email"
                    required
                    placeholder="official@facility.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none font-bold text-slate-900 focus:bg-white focus:border-slate-900"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none font-bold text-slate-900 focus:bg-white focus:border-slate-900"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-5 py-3 rounded-xl border border-slate-200 font-extrabold text-slate-600 hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 py-3 rounded-xl transition-colors"
              >
                Proceed to Verification
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Credentials / Documents Upload */}
        {currentStep === 3 && (
          <form onSubmit={handleNext} className="space-y-4 text-xs">
            <h3 className="text-sm font-black text-slate-900 text-center">
              {providerType === "doctor" ? "Medical Credentials & Practicing License" : "Compliance Documents & Permits"}
            </h3>

            <div className="space-y-3">
              <div className="space-y-1">
                <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">
                  {providerType === "doctor" ? "Medical License Number (MDCN)" : "Operating License / CAC Number"}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MDCN/R/12345"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none font-bold text-slate-900 focus:bg-white focus:border-slate-900"
                />
              </div>

              {/* Upload Dropzone */}
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center space-y-2 bg-slate-50/50">
                <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs font-bold text-slate-700">Upload Practicing Certificates / Premises License</p>
                <p className="text-[10px] text-slate-400 font-medium">PDF, PNG, or JPG up to 10MB</p>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, documentsUploaded: true })}
                  className="mt-2 text-[11px] font-extrabold text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-100"
                >
                  {formData.documentsUploaded ? "✓ Documents Attached" : "Choose Files"}
                </button>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-5 py-3 rounded-xl border border-slate-200 font-extrabold text-slate-600 hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!formData.documentsUploaded}
                className="flex-1 text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-40 py-3 rounded-xl transition-colors"
              >
                Submit for Verification
              </button>
            </div>
          </form>
        )}

        {/* STEP 4 & 5: Verification & Admin Review Simulation */}
        {currentStep >= 4 && (
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-4">
            <Clock className="w-10 h-10 text-amber-500 mx-auto animate-pulse" />
            <div className="space-y-1">
              <h3 className="text-base font-black text-slate-900">Submitted for Admin Review</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm mx-auto">
                Your medical credentials and facility documents are currently undergoing automated verification and manual compliance review.
              </p>
            </div>

            <div className="p-3 bg-white border border-slate-200 rounded-xl text-left text-xs font-bold text-slate-700 space-y-1.5">
              <p className="text-[10px] uppercase font-extrabold text-slate-400">Pipeline Status</p>
              <div className="flex items-center gap-2 text-emerald-600">
                <CheckCircle2 className="w-4 h-4" /> Credentials Submitted
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <Clock className="w-4 h-4" /> Background Verification (In Progress)
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4" /> Provider Dashboard Access
              </div>
            </div>

            <button
              onClick={() => window.location.href = "/provider/dashboard"}
              className="w-full text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 py-3 rounded-xl shadow-xs transition-colors"
            >
              Simulate Admin Approval & Open Dashboard
            </button>
          </div>
        )}

        {/* Public Patient Registration Link */}
        <div className="text-center pt-2">
          <p className="text-xs font-medium text-slate-500">
            Looking to register as a patient instead?{" "}
            <Link href="/auth/register" className="font-extrabold text-blue-600 hover:underline">
              Patient Registration
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}