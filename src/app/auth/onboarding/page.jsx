"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Mail, AlertCircle, CheckCircle2, ArrowLeft, RotateCw } from "lucide-react";

export default function VerifyPage() {
  const router = useRouter();
  
  // OTP State (6 Digits)
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  // Timer & UI States
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Target Contact Email/Phone (Simulated)
  const [contactInfo, setContactInfo] = useState("philip@example.com");
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [tempContact, setTempContact] = useState(contactInfo);

  // Countdown Timer Effect
  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle Input Changes & Auto-Focus
  const handleChange = (index, value) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take last character typed
    setOtp(newOtp);
    setError("");

    // Auto-advance to next input field
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle Backspace Navigation
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle Clipboard Paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  // Resend OTP Code
  const handleResend = () => {
    if (!canResend) return;
    setOtp(["", "", "", "", "", ""]);
    setTimeLeft(60);
    setCanResend(false);
    setError("");
    inputRefs.current[0]?.focus();
  };

  // Submit OTP Verification
  const handleVerify = (e) => {
    e.preventDefault();
    const code = otp.join("");

    if (code.length < 6) {
      setError("Please enter all 6 digits of your verification code.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    // Simulated API Verification Verification Loop
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Simulated Logic: Code '123456' or any complete code works for demo, '000000' triggers error
      if (code === "000000") {
        setError("Invalid verification code. Please check and try again.");
      } else {
        setIsSuccess(true);
        setTimeout(() => {
          router.push("/auth/onboarding");
        }, 1500);
      }
    }, 1200);
  };

  // Update Contact Email/Phone
  const handleSaveContact = (e) => {
    e.preventDefault();
    if (!tempContact.trim()) return;
    setContactInfo(tempContact);
    setIsEditingContact(false);
    handleResend();
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Verify your account</h1>
          
          {/* Email / Contact Display & Inline Editor */}
          {!isEditingContact ? (
            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-slate-500">We've sent a 6-digit verification code to</p>
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-extrabold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {contactInfo}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setTempContact(contactInfo);
                    setIsEditingContact(true);
                  }}
                  className="text-[11px] font-extrabold text-blue-600 hover:underline"
                >
                  Change
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSaveContact} className="pt-2 space-y-2">
              <input
                type="text"
                value={tempContact}
                onChange={(e) => setTempContact(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 outline-none focus:border-blue-500"
                placeholder="Enter email or phone number"
              />
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setIsEditingContact(false)}
                  className="text-[11px] font-extrabold text-slate-500 hover:text-slate-700 px-2 py-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-[11px] font-extrabold text-white bg-blue-600 px-3 py-1 rounded-lg"
                >
                  Save & Resend
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Successful Verification Overlay State */}
        {isSuccess ? (
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="text-sm font-extrabold text-emerald-950">Account Verified!</h3>
            <p className="text-xs font-medium text-emerald-700">Redirecting you to setup your account preferences...</p>
          </div>
        ) : (
          <form onSubmit={handleVerify} className="space-y-6">
            
            {/* 6-Digit OTP Inputs */}
            <div className="flex justify-between gap-2" onPaste={handlePaste}>
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  className={`w-11 h-13 text-center text-lg font-black rounded-xl border outline-none transition-all ${
                    error
                      ? "border-rose-300 bg-rose-50/30 text-rose-900"
                      : digit
                      ? "border-blue-600 bg-blue-50/20 text-slate-900"
                      : "border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-blue-500"
                  }`}
                />
              ))}
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl flex items-center gap-2 text-rose-700 text-xs font-bold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Resend Code Section & Timer */}
            <div className="text-center space-y-1">
              <p className="text-xs font-medium text-slate-500">Didn't receive the code?</p>
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResend}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700"
                >
                  <RotateCw className="w-3.5 h-3.5" /> Resend code
                </button>
              ) : (
                <p className="text-xs font-bold text-slate-400">
                  Resend code in <span className="text-slate-700">{timeLeft}s</span>
                </p>
              )}
            </div>

            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 py-3.5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <RotateCw className="w-4 h-4 animate-spin" /> Verifying...
                </>
              ) : (
                "Verify Account"
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}