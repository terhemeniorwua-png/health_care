import Link from "next/link";
import { Plus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-teal-600 rounded-md flex items-center justify-center text-white font-heading font-extrabold">
                <Plus className="w-5 h-5 stroke-[3]" />
              </div>
              <span className="font-heading font-extrabold text-xl text-slate-900 tracking-tight">
                HealthBrand
              </span>
            </Link>
            <p className="mt-3 font-body text-xs text-slate-500 leading-relaxed">
              Making healthcare simpler and accessible for everyone.
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900">
              Platform
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-slate-600">
              <li><Link href="/doctors" className="hover:text-slate-900 transition-colors">Find Doctors</Link></li>
              <li><Link href="/medicines" className="hover:text-slate-900 transition-colors">Medicines</Link></li>
              <li><Link href="/lab-tests" className="hover:text-slate-900 transition-colors">Lab Tests</Link></li>
              <li><Link href="/hospitals" className="hover:text-slate-900 transition-colors">Hospitals</Link></li>
              <li><Link href="/health-services" className="hover:text-slate-900 transition-colors">Health Services</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900">
              For Professionals
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-slate-600">
              <li><Link href="/register/doctor" className="hover:text-slate-900 transition-colors">Join as Doctor</Link></li>
              <li><Link href="/register/pharmacy" className="hover:text-slate-900 transition-colors">Register Your Pharmacy</Link></li>
              <li><Link href="/register/laboratory" className="hover:text-slate-900 transition-colors">Register Your Laboratory</Link></li>
              <li><Link href="/register/clinic" className="hover:text-slate-900 transition-colors">Register Your Clinic</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-slate-900 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-slate-900 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link></li>
              <li><Link href="/help" className="hover:text-slate-900 transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-slate-600">
              <li><Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-slate-900 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright Footer */}
        <div className="pt-8 text-center font-body text-xs text-slate-500">
          © {new Date().getFullYear()} HealthBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}