"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Check,
  X,
  ShieldCheck,
  Lock,
  User,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function RegisterPage() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+234",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState("form"); // "form" | "validating" | "creating" | "verifying" | "onboarding" | "completed"
  const [errors, setErrors] = useState({});

  // Password Requirements Validation
  const reqs = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[^A-Za-z0-9]/.test(formData.password),
  };

  const passedReqsCount = Object.values(reqs).filter(Boolean).length;

  // Calculate Strength
  const getStrength = () => {
    if (!formData.password) return null;
    if (passedReqsCount <= 2) return { label: "Weak", color: "bg-rose-500", text: "text-rose-600" };
    if (passedReqsCount <= 4) return { label: "Medium", color: "bg-amber-500", text: "text-amber-600" };
    return { label: "Strong", color: "bg-emerald-500", text: "text-emerald-600" };
  };

  const strength = getStrength();

  // Handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (passedReqsCount < 5) newErrors.password = "Password does not meet all security requirements";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the Terms of Service & Privacy Policy";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Begin Simulated Registration Workflow Pipeline
    setStep("validating");
    setTimeout(() => {
      setStep("creating");
      setTimeout(() => {
        setStep("verifying");
        setTimeout(() => {
          setStep("onboarding");
        }, 1500);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Create your account</h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
            Join our healthcare platform and manage your healthcare needs from one secure place.
          </p>
        </div>

        {/* Workflow State UI */}
        {step !== "form" && step !== "completed" && (
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-4">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
            <div>
              <p className="font-extrabold text-slate-900 text-sm capitalize">
                {step === "validating" && "Validating Form Information..."}
                {step === "creating" && "Creating Secure Patient Profile..."}
                {step === "verifying" && "Sending Verification Link to Email/Phone..."}
                {step === "onboarding" && "Configuring Patient Dashboard..."}
              </p>
              <p className="text-xs text-slate-500 mt-1">Please wait while we establish your account encryption.</p>
            </div>
            
            {/* Visual Step Lifecycle Tracker */}
            <div className="pt-2 flex justify-between text-[10px] font-extrabold text-slate-400">
              <span className={step === "validating" ? "text-blue-600" : "text-emerald-600"}>Validate</span>
              <span className={step === "creating" ? "text-blue-600" : step === "verifying" || step === "onboarding" ? "text-emerald-600" : ""}>Create User</span>
              <span className={step === "verifying" ? "text-blue-600" : step === "onboarding" ? "text-emerald-600" : ""}>Verify</span>
              <span className={step === "onboarding" ? "text-blue-600" : ""}>Onboard</span>
            </div>
          </div>
        )}

        {step === "onboarding" && (
          <div className="text-center pt-4">
            <button
              onClick={() => window.location.href = "/patient/dashboard"}
              className="w-full inline-flex items-center justify-center gap-2 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 py-3 rounded-xl shadow-xs transition-colors"
            >
              Go to Patient Dashboard <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Registration Form */}
        {step === "form" && (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            
            {/* Full Name */}
            <div className="space-y-1">
              <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 outline-none font-bold text-slate-900 focus:bg-white focus:border-blue-500 transition-colors"
                />
              </div>
              {errors.fullName && <p className="text-[10px] font-extrabold text-rose-600 mt-1">{errors.fullName}</p>}
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 outline-none font-bold text-slate-900 focus:bg-white focus:border-blue-500 transition-colors"
                />
              </div>
              {errors.email && <p className="text-[10px] font-extrabold text-rose-600 mt-1">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">Phone Number</label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-bold text-slate-900 focus:bg-white focus:border-blue-500 shrink-0"
                >
                  <option value="+234">🇳🇬 +234</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+254">🇰🇪 +254</option>
                  <option value="+27">🇿🇦 +27</option>
                </select>
                <div className="relative flex-1">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="801 234 5678"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 outline-none font-bold text-slate-900 focus:bg-white focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              {errors.phone && <p className="text-[10px] font-extrabold text-rose-600 mt-1">{errors.phone}</p>}
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-10 py-2.5 outline-none font-bold text-slate-900 focus:bg-white focus:border-blue-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="pt-2 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-extrabold">
                    <span className="text-slate-400 uppercase">Password Strength</span>
                    <span className={strength?.text}>{strength?.label}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 h-1.5">
                    <div className={`rounded-full transition-all ${passedReqsCount >= 1 ? strength?.color : "bg-slate-100"}`} />
                    <div className={`rounded-full transition-all ${passedReqsCount >= 3 ? strength?.color : "bg-slate-100"}`} />
                    <div className={`rounded-full transition-all ${passedReqsCount === 5 ? strength?.color : "bg-slate-100"}`} />
                  </div>
                </div>
              )}
            </div>

            {/* Password Requirements List */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
              <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Password must contain:</p>
              <div className="space-y-1 text-[11px] font-bold">
                <div className={`flex items-center gap-2 ${reqs.length ? "text-emerald-600" : "text-slate-400"}`}>
                  {reqs.length ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} At least 8 characters
                </div>
                <div className={`flex items-center gap-2 ${reqs.uppercase ? "text-emerald-600" : "text-slate-400"}`}>
                  {reqs.uppercase ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} One uppercase letter
                </div>
                <div className={`flex items-center gap-2 ${reqs.lowercase ? "text-emerald-600" : "text-slate-400"}`}>
                  {reqs.lowercase ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} One lowercase letter
                </div>
                <div className={`flex items-center gap-2 ${reqs.number ? "text-emerald-600" : "text-slate-400"}`}>
                  {reqs.number ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} One number
                </div>
                <div className={`flex items-center gap-2 ${reqs.special ? "text-emerald-600" : "text-slate-400"}`}>
                  {reqs.special ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} One special character
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="font-extrabold text-slate-700 uppercase text-[10px] tracking-wider">Confirm Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-10 py-2.5 outline-none font-bold text-slate-900 focus:bg-white focus:border-blue-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-[10px] font-extrabold text-rose-600 mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms and Privacy Agreement */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-slate-600 font-medium leading-tight">
                  I agree to the{" "}
                  <Link href="/terms" className="font-bold text-blue-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="font-bold text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.agreeTerms && <p className="text-[10px] font-extrabold text-rose-600">{errors.agreeTerms}</p>}

              {/* Explicit Healthcare Privacy Notice */}
              <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-xl flex items-start gap-2.5 text-blue-900">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-[11px] font-medium leading-relaxed">
                  Your health information is handled with privacy and security in mind using end-to-end access protocols.
                </p>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              type="submit"
              className="w-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 py-3 rounded-xl shadow-xs transition-colors"
            >
              Create Account
            </button>

            {/* Footer Sign-in Link */}
            <p className="text-center text-slate-500 font-medium text-[11px] pt-2">
              Already have an account?{" "}
              <Link href="/auth/login" className="font-extrabold text-blue-600 hover:underline">
                Sign In
              </Link>
            </p>

          </form>
        )}

      </div>
    </div>
  );
}