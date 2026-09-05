import Link from "next/link";
import { Star, MapPin, BadgeCheck, Clock, Calendar } from "lucide-react";

const DOCTORS = [
  {
    id: "1",
    name: "Dr. Sarah Jenkins",
    specialty: "Cardiologist",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    isVerified: true,
    rating: 4.9,
    reviewsCount: 124,
    experience: "12 yrs exp",
    location: "Downtown Medical Center, NY",
    price: "$120",
    availability: "Available Today",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",
    isVerified: true,
    rating: 4.8,
    reviewsCount: 98,
    experience: "9 yrs exp",
    location: "Westside Clinic, NY",
    price: "$95",
    availability: "Available Tomorrow",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    photo: "https://images.unsplash.com/photo-1594824813566-78a9c72c83ff?auto=format&fit=crop&q=80&w=300",
    isVerified: true,
    rating: 5.0,
    reviewsCount: 210,
    experience: "15 yrs exp",
    location: "Children's Health Hub, NY",
    price: "$110",
    availability: "Available Today",
  },
];

export default function FeaturedDoctors() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Find the right healthcare professional
          </h2>
          <p className="mt-2 font-body text-slate-600 text-sm sm:text-base">
            Connect with verified professionals based on specialty, availability, location, and consultation type.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                {/* Doctor Header Info */}
                <div className="flex items-start gap-4">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-16 h-16 rounded-full object-cover border border-slate-100"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-heading font-bold text-base text-slate-900">
                        {doc.name}
                      </h3>
                      {doc.isVerified && (
                        <BadgeCheck className="w-4 h-4 text-teal-600 fill-teal-50" />
                      )}
                    </div>
                    <p className="font-body text-sm font-medium text-teal-600">
                      {doc.specialty}
                    </p>
                    <p className="font-body text-xs text-slate-500 mt-0.5">
                      {doc.experience}
                    </p>
                  </div>
                </div>

                {/* Rating & Availability Details */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs font-body text-slate-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-slate-900">{doc.rating}</span>
                      <span className="text-slate-400">({doc.reviewsCount})</span>
                    </div>
                    <span className="font-semibold text-slate-900 text-sm">{doc.price}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{doc.location}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{doc.availability}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                <Link
                  href={`/doctors/${doc.id}`}
                  className="w-full text-center font-body font-medium text-xs sm:text-sm text-slate-900 bg-slate-100 hover:bg-slate-200 py-2.5 rounded-md transition-colors"
                >
                  View Profile
                </Link>
                <Link
                  href={`/doctors/${doc.id}/book`}
                  className="w-full text-center font-body font-semibold text-xs sm:text-sm text-white bg-teal-600 hover:bg-teal-700 py-2.5 rounded-md transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section View All Button */}
        <div className="mt-8 text-center">
          <Link
            href="/doctors"
            className="inline-flex items-center justify-center font-body font-semibold text-sm text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-6 py-2.5 rounded-md transition-colors shadow-sm"
          >
            View All Doctors
          </Link>
        </div>

      </div>
    </section>
  );
}