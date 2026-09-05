"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  Filter, 
  Star, 
  BadgeCheck, 
  Video, 
  UserCheck, 
  Stethoscope, 
  HeartPulse, 
  Sparkles, 
  Baby, 
  Smile, 
  Brain, 
  HeartHandshake, 
  Eye,
  SlidersHorizontal,
  X
} from "lucide-react";

// Specialty Categories List
const SPECIALTY_CATEGORIES = [
  { name: "General Practice", icon: Stethoscope },
  { name: "Cardiology", icon: HeartPulse },
  { name: "Dermatology", icon: Sparkles },
  { name: "Pediatrics", icon: Baby },
  { name: "Dentistry", icon: Smile },
  { name: "Neurology", icon: Brain },
  { name: "Gynecology", icon: HeartHandshake },
  { name: "Ophthalmology", icon: Eye },
];

// Sample Doctor Data
const DOCTORS = [
  {
    id: "1",
    name: "Dr. Sarah Williams",
    specialty: "Cardiologist",
    isVerified: true,
    rating: 4.9,
    reviewsCount: 128,
    experience: "12 years experience",
    location: "Abuja",
    consultationType: "Video & In-person",
    price: "₦15,000",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "2",
    name: "Dr. Ibrahim Musa",
    specialty: "Dermatologist",
    isVerified: true,
    rating: 4.8,
    reviewsCount: 94,
    experience: "9 years experience",
    location: "Abuja",
    consultationType: "Video & In-person",
    price: "₦12,000",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "3",
    name: "Dr. Amara Okafor",
    specialty: "Pediatrician",
    isVerified: true,
    rating: 5.0,
    reviewsCount: 215,
    experience: "15 years experience",
    location: "Abuja",
    consultationType: "In-person",
    price: "₦18,000",
    image: "https://images.unsplash.com/photo-1594824813566-78a9c72c83ff?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "4",
    name: "Dr. Emmanuel Adebayo",
    specialty: "General Practice",
    isVerified: true,
    rating: 4.7,
    reviewsCount: 82,
    experience: "8 years experience",
    location: "Abuja",
    consultationType: "Video",
    price: "₦10,000",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
  },
];

export default function FindDoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter State Handlers
  const [filters, setFilters] = useState({
    location: "",
    specialty: "",
    gender: "",
    experience: "",
    consultationType: [],
    availability: "",
    price: "",
    rating: "",
  });

  const handleConsultationTypeChange = (type) => {
    setFilters((prev) => {
      const exists = prev.consultationType.includes(type);
      return {
        ...prev,
        consultationType: exists
          ? prev.consultationType.filter((t) => t !== type)
          : [...prev.consultationType, type],
      };
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-white border-b border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center sm:text-left">
            <h1 className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Find a Doctor
            </h1>
            <p className="mt-2 text-slate-600 text-base max-w-2xl">
              Connect with verified healthcare professionals that match your needs.
            </p>

            {/* Search Input */}
            <div className="mt-6 max-w-2xl">
              <div className="relative flex items-center bg-white rounded-lg shadow-sm border border-slate-200 focus-within:border-teal-600 focus-within:ring-2 focus-within:ring-teal-600/20 transition-all">
                <div className="pl-4 text-slate-400 pointer-events-none">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by doctor, specialty, condition..."
                  className="w-full py-3.5 pl-3 pr-24 text-sm text-slate-900 placeholder-slate-400 bg-transparent outline-none"
                />
                <button
                  type="button"
                  className="absolute right-2 font-semibold text-xs sm:text-sm text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-md transition-colors"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Specialty Categories Horizontal Bar */}
            <div className="mt-8">
              <p className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">
                Specialty categories
              </p>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {SPECIALTY_CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedSpecialty === cat.name;
                  return (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() =>
                        setSelectedSpecialty(isSelected ? null : cat.name)
                      }
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold shrink-0 transition-all border ${
                        isSelected
                          ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Search Results & Filtering Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button
              type="button"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-md py-2.5 px-4 font-semibold text-sm text-slate-900 shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4 text-teal-600" />
              <span>{showMobileFilters ? "Hide Filters" : "Show Filters"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside
              className={`lg:block bg-white border border-slate-200 rounded-lg p-5 shadow-sm h-fit ${
                showMobileFilters ? "block" : "hidden"
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-teal-600" />
                  <span>Filters</span>
                </h2>
                <button
                  type="button"
                  onClick={() =>
                    setFilters({
                      location: "",
                      specialty: "",
                      gender: "",
                      experience: "",
                      consultationType: [],
                      availability: "",
                      price: "",
                      rating: "",
                    })
                  }
                  className="text-xs text-teal-600 hover:underline font-medium"
                >
                  Reset All
                </button>
              </div>

              <div className="mt-5 space-y-6">
                {/* Location Filter */}
                <div>
                  <label className="block font-semibold text-xs text-slate-900 mb-2">
                    Location
                  </label>
                  <select
                    value={filters.location}
                    onChange={(e) =>
                      setFilters({ ...filters, location: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 px-3 text-xs text-slate-900 outline-none focus:border-teal-600"
                  >
                    <option value="">All Locations</option>
                    <option value="abuja">Abuja</option>
                    <option value="lagos">Lagos</option>
                    <option value="port-harcourt">Port Harcourt</option>
                  </select>
                </div>

                {/* Specialty Filter */}
                <div>
                  <label className="block font-semibold text-xs text-slate-900 mb-2">
                    Specialty
                  </label>
                  <select
                    value={filters.specialty}
                    onChange={(e) =>
                      setFilters({ ...filters, specialty: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 px-3 text-xs text-slate-900 outline-none focus:border-teal-600"
                  >
                    <option value="">All Specialties</option>
                    <option value="general-practice">General Practice</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="dentistry">Dentistry</option>
                    <option value="neurology">Neurology</option>
                    <option value="gynecology">Gynecology</option>
                    <option value="ophthalmology">Ophthalmology</option>
                  </select>
                </div>

                {/* Consultation Type Checkboxes */}
                <div>
                  <label className="block font-semibold text-xs text-slate-900 mb-2">
                    Consultation Type
                  </label>
                  <div className="space-y-2 text-xs text-slate-700">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.consultationType.includes("video")}
                        onChange={() => handleConsultationTypeChange("video")}
                        className="rounded border-slate-300 text-teal-600 focus:ring-teal-600"
                      />
                      <span>Video</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.consultationType.includes("in-person")}
                        onChange={() => handleConsultationTypeChange("in-person")}
                        className="rounded border-slate-300 text-teal-600 focus:ring-teal-600"
                      />
                      <span>In-person</span>
                    </label>
                  </div>
                </div>

                {/* Gender Filter */}
                <div>
                  <label className="block font-semibold text-xs text-slate-900 mb-2">
                    Gender
                  </label>
                  <select
                    value={filters.gender}
                    onChange={(e) =>
                      setFilters({ ...filters, gender: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 px-3 text-xs text-slate-900 outline-none focus:border-teal-600"
                  >
                    <option value="">Any Gender</option>
                    <option value="female">Female Doctor</option>
                    <option value="male">Male Doctor</option>
                  </select>
                </div>

                {/* Experience Filter */}
                <div>
                  <label className="block font-semibold text-xs text-slate-900 mb-2">
                    Experience
                  </label>
                  <select
                    value={filters.experience}
                    onChange={(e) =>
                      setFilters({ ...filters, experience: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 px-3 text-xs text-slate-900 outline-none focus:border-teal-600"
                  >
                    <option value="">Any Experience</option>
                    <option value="5+">5+ Years</option>
                    <option value="10+">10+ Years</option>
                    <option value="15+">15+ Years</option>
                  </select>
                </div>

                {/* Availability Filter */}
                <div>
                  <label className="block font-semibold text-xs text-slate-900 mb-2">
                    Availability
                  </label>
                  <select
                    value={filters.availability}
                    onChange={(e) =>
                      setFilters({ ...filters, availability: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 px-3 text-xs text-slate-900 outline-none focus:border-teal-600"
                  >
                    <option value="">Anytime</option>
                    <option value="today">Available Today</option>
                    <option value="tomorrow">Available Tomorrow</option>
                    <option value="this-week">This Week</option>
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block font-semibold text-xs text-slate-900 mb-2">
                    Price Range
                  </label>
                  <select
                    value={filters.price}
                    onChange={(e) =>
                      setFilters({ ...filters, price: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 px-3 text-xs text-slate-900 outline-none focus:border-teal-600"
                  >
                    <option value="">Any Price</option>
                    <option value="under-10k">Under ₦10,000</option>
                    <option value="10k-20k">₦10,000 - ₦20,000</option>
                    <option value="above-20k">Above ₦20,000</option>
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block font-semibold text-xs text-slate-900 mb-2">
                    Minimum Rating
                  </label>
                  <select
                    value={filters.rating}
                    onChange={(e) =>
                      setFilters({ ...filters, rating: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 px-3 text-xs text-slate-900 outline-none focus:border-teal-600"
                  >
                    <option value="">Any Rating</option>
                    <option value="4.5">4.5★ & Above</option>
                    <option value="4.0">4.0★ & Above</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Doctor Results Grid */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center justify-between pb-2">
                <p className="text-xs text-slate-500">
                  Showing <span className="font-semibold text-slate-900">{DOCTORS.length}</span> verified doctors
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DOCTORS.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 flex flex-col justify-between hover:border-slate-300 transition-all"
                  >
                    <div>
                      {/* Doctor Profile Header */}
                      <div className="flex items-start gap-4">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="w-16 h-16 rounded-full object-cover border border-slate-100 shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-bold text-base text-slate-900 truncate">
                              {doc.name}
                            </h3>
                            {doc.isVerified && (
                              <BadgeCheck className="w-4 h-4 text-teal-600 fill-teal-50 shrink-0" />
                            )}
                          </div>
                          <p className="text-sm font-medium text-teal-600">
                            {doc.specialty}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {doc.experience}
                          </p>
                        </div>
                      </div>

                      {/* Doctor Details */}
                      <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="font-semibold text-slate-900">{doc.rating}</span>
                            <span className="text-slate-400">({doc.reviewsCount})</span>
                          </div>
                          <span className="font-bold text-slate-900 text-sm">
                            {doc.price}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-slate-500 pt-1">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>{doc.location}</span>
                          </div>
                          <span className="text-slate-600 font-medium bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                            {doc.consultationType}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                      <Link
                        href={`/doctors/${doc.id}`}
                        className="w-full text-center font-medium text-xs sm:text-sm text-slate-900 bg-slate-100 hover:bg-slate-200 py-2.5 rounded-md transition-colors"
                      >
                        View Profile
                      </Link>
                      <Link
                        href={`/doctors/${doc.id}/book`}
                        className="w-full text-center font-semibold text-xs sm:text-sm text-white bg-teal-600 hover:bg-teal-700 py-2.5 rounded-md transition-colors"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}