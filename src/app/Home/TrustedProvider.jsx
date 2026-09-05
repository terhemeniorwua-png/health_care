import { Star, MapPin, BadgeCheck } from "lucide-react";

const PROVIDERS = [
  {
    id: "1",
    name: "Apex Central Pharmacy",
    type: "Verified Pharmacy",
    rating: 4.9,
    location: "Downtown Medical Center, NY",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "2",
    name: "BioHealth Diagnostics",
    type: "Verified Laboratory",
    rating: 4.8,
    location: "Westside Health Park, NY",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "3",
    name: "St. Jude Memorial Hospital",
    type: "Verified Hospital",
    rating: 4.9,
    location: "5th Avenue Metro, NY",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "4",
    name: "Dr. Marcus Vance",
    type: "Verified Doctor",
    rating: 5.0,
    location: "Neurology Specialist Clinic, NY",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
  },
];

export default function TrustedProviders() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Care from providers you can trust
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROVIDERS.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                <div className="relative w-full h-36 rounded-md overflow-hidden mb-4 border border-slate-100">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1 rounded-full shadow-sm">
                    <BadgeCheck className="w-5 h-5 text-teal-600 fill-teal-50" />
                  </div>
                </div>

                <span className="font-body text-xs font-semibold text-teal-600 uppercase tracking-wider">
                  {provider.type}
                </span>

                <h3 className="font-heading font-bold text-base text-slate-900 mt-1 line-clamp-1">
                  {provider.name}
                </h3>

                <div className="mt-3 space-y-1.5 text-xs text-slate-600 font-body">
                  <div className="flex items-center gap-1 font-semibold text-slate-900">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{provider.rating}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                    <span className="truncate">{provider.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}