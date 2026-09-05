import Link from "next/link";
import { 
  UserCheck, 
  Pill, 
  TestTube2, 
  Building2, 
  Video, 
  Home 
} from "lucide-react";

const SERVICES = [
  {
    title: "Find a Doctor",
    description: "Connect with verified healthcare professionals.",
    icon: UserCheck,
    href: "/doctors",
  },
  {
    title: "Order Medicine",
    description: "Get healthcare products delivered to your door.",
    icon: Pill,
    href: "/medicines",
  },
  {
    title: "Book a Lab Test",
    description: "Book laboratory tests and receive your results digitally.",
    icon: TestTube2,
    href: "/lab-tests",
  },
  {
    title: "Find a Hospital",
    description: "Discover hospitals and clinics near you.",
    icon: Building2,
    href: "/hospitals",
  },
  {
    title: "Online Consultation",
    description: "Speak with a healthcare professional from anywhere.",
    icon: Video,
    href:"/appointments/book?type=video",
  },
  {
    title: "Home Healthcare",
    description: "Access selected healthcare services from home.",
    icon: Home,
    href: "/home-healthcare",
  },
];

export default function QuickServices() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            How can we help you today?
          </h2>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-teal-600/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-2 font-body text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}