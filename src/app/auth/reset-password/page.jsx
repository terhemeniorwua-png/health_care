"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Eye, EyeOff, Check, X, CheckCircle2, ShieldCheck, Loader2 } from "lucide-react";

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Password Requirements Validation
  const reqs = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[^A-Za-z0-9]/.test(formData.password),
  };

  const isFormValid = Object.values(reqs).every(Boolean) && formData.password === formData.confirmPassword;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("Please ensure passwords match and fulfill all security criteria.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Create a new password</h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Please enter and confirm your new secure account password below.
          </p>
        </div>

        {/* Success Screen */}
        {isSuccess ? (
          <div className="space-y-6 text-center">
            <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-black text-emerald-950">Password successfully changed.</h3>
              <p className="text-xs font-medium text-emerald-700">
                Your credentials have been updated securely. You can now sign in with your new password.
              </p>
            </div>

            <Link
              href="/auth/login"
              className="w-full inline-flex justify-center text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 py-3.5 rounded-xl shadow-xs transition-colors"
            >
              Sign In
            </Link>
          </div>
        ) : (
          /* Password Form */
          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            
            {/* New Password */}
            <div className="space-y-1">
              <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">New Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-3 outline-none font-bold text-slate-900 focus:bg-white focus:border-blue-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="space-y-1">
              <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">Confirm New Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-3 outline-none font-bold text-slate-900 focus:bg-white focus:border-blue-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Password Requirements Checklist */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Password requirements:</p>
              <div className="space-y-1.5 text-[11px] font-bold">
                <div className={`flex items-center gap-2 ${reqs.length ? "text-emerald-600" : "text-slate-400"}`}>
                  {reqs.length ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} At least 8 characters
                </div>
                <div className={`flex items-center gap-2 ${reqs.uppercase ? "text-emerald-600" : "text-slate-400"}`}>
                  {reqs.uppercase ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} Uppercase letter
                </div>
                <div className={`flex items-center gap-2 ${reqs.lowercase ? "text-emerald-600" : "text-slate-400"}`}>
                  {reqs.lowercase ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} Lowercase letter
                </div>
                <div className={`flex items-center gap-2 ${reqs.number ? "text-emerald-600" : "text-slate-400"}`}>
                  {reqs.number ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} Number
                </div>
                <div className={`flex items-center gap-2 ${reqs.special ? "text-emerald-600" : "text-slate-400"}`}>
                  {reqs.special ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} Special character
                </div>
              </div>
            </div>

            {error && <p className="text-[11px] font-extrabold text-rose-600 text-center">{error}</p>}

            <button
              type="submit"
              disabled={isLoading || !isFormValid}
              className="w-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 py-3.5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Reset Password"}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}