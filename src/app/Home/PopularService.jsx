import Link from "next/link";
import { 
  Stethoscope, 
  Smile, 
  Brain, 
  HeartHandshake, 
  Baby, 
  Sparkles, 
  HeartPulse, 
  Eye 
} from "lucide-react";

const POPULAR_SERVICES = [
  { name: "General Consultation", icon: Stethoscope, href: "/services/general" },
  { name: "Dental Care", icon: Smile, href: "/services/dental" },
  { name: "Mental Health", icon: Brain, href: "/services/mental-health" },
  { name: "Women's Health", icon: HeartHandshake, href: "/services/womens-health" },
  { name: "Children's Health", icon: Baby, href: "/services/childrens-health" },
  { name: "Dermatology", icon: Sparkles, href: "/services/dermatology" },
  { name: "Cardiology", icon: HeartPulse, href: "/services/cardiology" },
  { name: "Eye Care", icon: Eye, href: "/services/eye-care" },
];

export default function PopularServices() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Healthcare services for your needs
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {POPULAR_SERVICES.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:border-teal-600/50 hover:shadow-md transition-all flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="font-heading font-semibold text-sm text-slate-900 group-hover:text-teal-600 transition-colors">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}