"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  FlaskConical,
  Building2,
  Home,
  ArrowRight,
} from "lucide-react";

// Mock Lab Tests Data
const popularTests = [
  "Full Blood Count",
  "Blood Glucose",
  "Lipid Profile",
  "Liver Function Test",
  "Kidney Function Test",
  "Malaria Test",
  "Urinalysis",
];

const labTestsData = [
  {
    id: "fbc",
    name: "Full Blood Count",
    description: "Complete blood count test measuring red/white blood cells and platelets.",
    price: 8000,
    availableMethods: ["Lab visit", "Home sample collection"],
  },
  {
    id: "bg",
    name: "Blood Glucose Test",
    description: "Measures blood sugar levels to screen or monitor diabetes.",
    price: 5000,
    availableMethods: ["Lab visit", "Home sample collection"],
  },
  {
    id: "lp",
    name: "Lipid Profile",
    description: "Evaluates cholesterol levels to assess cardiovascular health.",
    price: 12000,
    availableMethods: ["Lab visit"],
  },
  {
    id: "lft",
    name: "Liver Function Test",
    description: "Checks enzyme levels to assess health and function of the liver.",
    price: 15000,
    availableMethods: ["Lab visit", "Home sample collection"],
  },
];

export default function LabTestsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTests = labTestsData.filter((test) =>
    test.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-slate-900">
            Book a laboratory test
          </h1>
          <p className="text-xs text-slate-500">
            Select diagnostic tests and choose between lab walk-in or home collection.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search for a test..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
          />
        </div>

        {/* Popular Tests Chips */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Popular Tests
          </span>
          <div className="flex flex-wrap gap-2">
            {popularTests.map((testName) => (
              <button
                key={testName}
                onClick={() => setSearchQuery(testName)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-teal-600 hover:text-teal-600 transition-colors"
              >
                {testName}
              </button>
            ))}
          </div>
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-teal-50 text-teal-600">
                      <FlaskConical className="w-4 h-4" />
                    </div>
                    <h2 className="text-sm font-extrabold text-slate-900">
                      {test.name}
                    </h2>
                  </div>
                  <span className="text-sm font-black text-teal-700">
                    ₦{test.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {test.description}
                </p>
              </div>

              {/* Availability Badges */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Available:
                  </span>
                  <div className="flex items-center gap-3">
                    {test.availableMethods.includes("Lab visit") && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700">
                        <Building2 className="w-3.5 h-3.5 text-teal-600" /> Lab Visit
                      </span>
                    )}
                    {test.availableMethods.includes("Home sample collection") && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700">
                        <Home className="w-3.5 h-3.5 text-teal-600" /> Home Sample Collection
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  href={`/lab-tests/${test.id}`}
                  className="w-full flex items-center justify-center gap-1.5 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 py-2.5 rounded-xl transition-colors"
                >
                  Book Test <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}