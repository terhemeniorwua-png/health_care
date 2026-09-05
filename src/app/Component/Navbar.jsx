"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Plus } from "lucide-react";

const NAV_LINKS = [
  { name: "Doctors", href: "/doctors" },
  { name: "Medicines", href: "/medicines" },
  { name: "Lab Tests", href: "/lab-tests" },
  { name: "Hospitals", href: "/hospitals" },
  { name: "Health Services", href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 bg-teal-600 rounded-md flex items-center justify-center text-white font-heading font-extrabold group-hover:bg-teal-700 transition-colors">
              <Plus className="w-5 h-5 stroke-[3]" />
            </div>
            <span className="font-heading font-extrabold text-xl text-slate-900 tracking-tight">
              HealthBrand
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-heading font-semibold text-sm transition-colors duration-150 ${
                    isActive
                      ? "text-teal-600 font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <Link
              href="/auth/login"
              className="font-body font-medium text-sm text-slate-900 px-3.5 py-2 hover:bg-slate-100 rounded-md transition-colors"
            >
              Login
            </Link>

            <Link
              href="/doctors"
              className="font-body font-semibold text-sm text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-md transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Right Side Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label="Search"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-slate-900 font-heading font-semibold text-sm bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
              <span>Menu</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-heading font-semibold transition-colors ${
                    isActive
                      ? "bg-slate-100 text-teal-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <Link
              href="/auth/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center font-body font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 py-2.5 rounded-md transition-colors"
            >
              Login
            </Link>
            <Link
               href="/doctors"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center font-body font-semibold text-white bg-teal-600 hover:bg-teal-700 py-2.5 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}