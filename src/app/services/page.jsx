"use client";

import Link from "next/link";
import {
  Stethoscope,
  ShieldCheck,
  Heart,
  Sparkles,
  Brain,
  FlaskConical,
  Binary,
  Home,
  Syringe,
  Apple,
  Dumbbell,
  Activity,
  ArrowRight,
} from "lucide-react";

const serviceCategories = [
  {
    category: "Primary Care",
    description: "First-contact healthcare for everyday medical needs and routine checkups.",
    icon: Stethoscope,
    services: [
      { name: "General consultation", icon: Stethoscope, desc: "In-person or virtual doctor appointments" },
      { name: "Preventive care", icon: ShieldCheck, desc: "Annual physicals and health screenings" },
    ],
  },
  {
    category: "Specialist Care",
    description: "Targeted medical expertise for specific conditions and organs.",
    icon: Heart,
    services: [
      { name: "Cardiology", icon: Heart, desc: "Heart health and cardiovascular care" },
      { name: "Dermatology", icon: Sparkles, desc: "Skin, hair, and scalp treatments" },
      { name: "Neurology", icon: Brain, desc: "Brain, spine, and nervous system care" },
    ],
  },
  {
    category: "Diagnostic Services",
    description: "Precise lab and imaging tests to accurately diagnose health conditions.",
    icon: FlaskConical,
    services: [
      { name: "Lab tests", icon: FlaskConical, desc: "Blood, urine, and pathology testing" },
      { name: "Imaging", icon: Binary, desc: "X-rays, ultrasounds, and MRI scans" },
    ],
  },
  {
    category: "Home Care",
    description: "Professional medical care delivered directly to your doorstep.",
    icon: Home,
    services: [
      { name: "Home nursing", icon: Home, desc: "Dedicated in-home medical attendance" },
      { name: "Home sample collection", icon: Syringe, desc: "Lab sample collection from home" },
    ],
  },
  {
    category: "Wellness",
    description: "Holistic health management focused on long-term vitality.",
    icon: Activity,
    services: [
      { name: "Nutrition", icon: Apple, desc: "Dietary plans and metabolic advice" },
      { name: "Fitness", icon: Dumbbell, desc: "Physical therapy and workout regimens" },
      { name: "Preventive health", icon: Activity, desc: "Lifestyle coaching & disease prevention" },
    ],
  },
];

export default function HealthServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Comprehensive Medical Solutions
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Healthcare services designed around you
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            Access broad spectrum medical services from top-rated specialists, home healthcare nurses, and diagnostic centers.
          </p>
        </div>

        {/* Service Categories Breakdown */}
        <div className="space-y-8">
          {serviceCategories.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.category} className="space-y-4">
                
                {/* Section Header */}
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                  <div className="p-2 rounded-xl bg-teal-50 text-teal-600">
                    <GroupIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-extrabold text-slate-900">
                      {group.category}
                    </h2>
                    <p className="text-[11px] text-slate-500">{group.description}</p>
                  </div>
                </div>

                {/* Sub-services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.services.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                      >
                        <div className="space-y-2">
                          <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <h3 className="text-xs font-extrabold text-slate-900">
                            {item.name}
                          </h3>
                          <p className="text-[11px] text-slate-500 leading-normal">
                            {item.desc}
                          </p>
                        </div>

                        <Link
                          href="/doctors"
                          className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors pt-2"
                        >
                          Explore Category <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}