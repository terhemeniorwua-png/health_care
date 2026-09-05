"use client";

import { useState } from "react";
import Link from "next/link";
import { KeyRound, Mail, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulated API call to dispatch recovery instructions
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
        
        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
            <KeyRound className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Forgot your password?</h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xs mx-auto leading-relaxed">
            Enter the email address associated with your account and we'll send you instructions to reset your password.
          </p>
        </div>

        {/* Success Confirmation Banner */}
        {isSubmitted ? (
          <div className="space-y-6">
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="text-xs font-black text-emerald-950">Instructions Dispatched</h3>
              <p className="text-xs font-medium text-emerald-700 leading-relaxed">
                We've sent a password reset link to <strong className="font-extrabold">{email}</strong>. Please check your inbox or spam folder.
              </p>
            </div>

            <Link
              href="/auth/reset-password"
              className="w-full text-xs font-extrabold text-blue-600 bg-blue-50 hover:bg-blue-100 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Simulate Clicking Email Reset Link
            </Link>
          </div>
        ) : (
          /* Email Submission Form */
          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            <div className="space-y-1.5">
              <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">
                Email address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 outline-none font-bold text-slate-900 focus:bg-white focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-70 py-3.5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send Reset Link"}
            </button>
          </form>
        )}

        {/* Back to Login */}
        <div className="text-center pt-2 border-t border-slate-100">
          <p className="text-xs font-medium text-slate-500">
            Remember your password?{" "}
            <Link href="/auth/login" className="font-extrabold text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}