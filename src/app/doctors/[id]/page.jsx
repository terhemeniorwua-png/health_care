"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  Star,
  MapPin,
  Clock,
  Video,
  Building2,
  GraduationCap,
  Briefcase,
  MessageSquare,
  Calendar as CalendarIcon,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Award
} from "lucide-react";

export default function DoctorProfilePage({ params }) {
  const [consultationMode, setConsultationMode] = useState("video"); // 'video' | 'in-person'
  const [selectedDate, setSelectedDate] = useState("10"); // Default Mon 10th
  const [selectedTime, setSelectedTime] = useState("09:00 AM");

  // Sample Doctor Data matching specs
  const doctor = {
    id: {params}?.id || "1",
    name: "Dr. Sarah Williams",
    specialty: "Cardiologist",
    isVerified: true,
    verifiedTitle: "Verified Healthcare Professional",
    rating: 4.9,
    reviewsCount: 324,
    experienceYears: "12 years experience",
    location: "Abuja, Nigeria",
    about:
      "Dr. Sarah Williams is a cardiologist with extensive experience in cardiovascular care and patient management.",
    specializations: [
      "Hypertension",
      "Heart disease",
      "Preventive cardiology",
      "Cardiovascular health",
    ],
    education: [
      {
        title: "Medical Degree (MBBS)",
        institution: "University of Ibadan",
        year: "2012",
      },
      {
        title: "Specialist Training in Cardiology",
        institution: "National Postgraduate Medical College",
        year: "2016",
      },
      {
        title: "Professional Certifications",
        institution: "West African College of Physicians (FWACP)",
        year: "2018",
      },
    ],
    experienceTimeline: [
      {
        role: "Senior Consultant Cardiologist",
        organization: "National Hospital Abuja",
        period: "2020 – Present",
        description: "Leading cardiovascular diagnostic unit and critical care team.",
      },
      {
        role: "Consultant Cardiologist",
        organization: "Federal Medical Centre",
        period: "2016 – 2020",
        description: "Specialized in non-invasive cardiology and hypertension treatment.",
      },
      {
        role: "Resident Physician",
        organization: "University College Hospital",
        period: "2012 – 2016",
        description: "Completed residency training in internal medicine and cardiology.",
      },
    ],
    consultationOptions: {
      video: { price: "₦15,000", label: "Video Consultation", icon: Video },
      inPerson: { price: "₦20,000", label: "In-Person Consultation", icon: Building2 },
    },
    availableDays: [
      { day: "Mon", date: "10" },
      { day: "Tue", date: "11" },
      { day: "Wed", date: "12" },
      { day: "Thu", date: "13" },
      { day: "Fri", date: "14" },
    ],
    availableTimes: ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
    reviews: [
      {
        id: "r1",
        author: "Amina B.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Dr. Williams was extremely patient and thorough. She explained my hypertension management plan in detail. Highly recommended!",
      },
      {
        id: "r2",
        author: "Emeka O.",
        rating: 5,
        date: "1 month ago",
        comment: "Very professional video consultation. She reviewed all my lab results online and gave clear follow-up instructions.",
      },
      {
        id: "r3",
        author: "Tunde A.",
        rating: 4.8,
        date: "2 months ago",
        comment: "Excellent bedside manner and great diagnostic accuracy. Long wait time at the clinic, but worth it.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Profile Header */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl object-cover border border-slate-100 shrink-0"
              />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-900">
                    {doctor.name}
                  </h1>
                </div>

                <p className="text-base font-semibold text-teal-600">
                  {doctor.specialty}
                </p>

                {doctor.isVerified && (
                  <div className="flex items-center gap-1.5 text-xs font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md w-fit">
                    <BadgeCheck className="w-4 h-4 text-teal-600 fill-teal-100" />
                    <span>{doctor.verifiedTitle}</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 pt-1">
                  <div className="flex items-center gap-1 font-semibold text-slate-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{doctor.rating}</span>
                    <span className="text-slate-400 font-normal">
                      — {doctor.reviewsCount} reviews
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{doctor.experienceYears}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{doctor.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Header CTA Buttons */}
            <div className="flex sm:flex-col gap-3 w-full md:w-auto shrink-0">
              <Link
                 href={`/appointments/book?doctorId=${doctor.id}`}
//                 {`/doctors/${doctor.id}?type=${consultationMode}&date=${selectedDate}&time=${encodeURIComponent(
//   selectedTime
// )}`}
                className="flex-1 sm:flex-none text-center font-semibold text-sm text-white bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg transition-colors shadow-sm"
              >
                Book Appointment
              </Link>
              <button
                type="button"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 font-semibold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 px-6 py-3 rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-slate-500" />
                <span>Message</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About */}
            <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="font-bold text-lg text-slate-900 mb-3">About</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {doctor.about}
              </p>
            </section>

            {/* Specializations */}
            <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="font-bold text-lg text-slate-900 mb-4">
                Specializations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctor.specializations.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-teal-600" />
                <span>Education</span>
              </h2>
              <div className="space-y-4">
                {doctor.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-teal-600 pl-4 py-0.5">
                    <p className="font-semibold text-sm text-slate-900">{edu.title}</p>
                    <p className="text-xs text-slate-500">{edu.institution} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Timeline */}
            <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-teal-600" />
                <span>Experience</span>
              </h2>

              <div className="relative border-l border-slate-200 pl-6 space-y-6 ml-2">
                {doctor.experienceTimeline.map((exp, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-teal-600 rounded-full border-2 border-white ring-4 ring-slate-100" />

                    <div>
                      <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                        {exp.period}
                      </span>
                      <h3 className="font-bold text-sm text-slate-900 mt-1">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-medium text-slate-500">
                        {exp.organization}
                      </p>
                      <p className="text-xs text-slate-600 mt-1.5">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Patient Reviews */}
            <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h2 className="font-bold text-lg text-slate-900">Reviews</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span className="font-bold text-sm text-slate-900 ml-1">
                        {doctor.rating}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">
                      Based on {doctor.reviewsCount} patient reviews
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 divide-y divide-slate-100">
                {doctor.reviews.map((rev) => (
                  <div key={rev.id} className="pt-4 first:pt-0 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-900">
                        {rev.author}
                      </span>
                      <span className="text-[11px] text-slate-400">{rev.date}</span>
                    </div>

                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(rev.rating)
                              ? "fill-amber-400"
                              : "text-slate-200 fill-slate-200"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {rev.comment}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Column: Consultation Options & Interactive Availability */}
          <div className="space-y-6">
            
            {/* Consultation Options Card */}
            <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-3">
                Consultation Options
              </h2>

              <div className="space-y-3">
                {/* Video Option */}
                <button
                  type="button"
                  onClick={() => setConsultationMode("video")}
                  className={`w-full p-3.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                    consultationMode === "video"
                      ? "border-teal-600 bg-teal-50/60 ring-1 ring-teal-600"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="font-semibold text-xs text-slate-900">
                        Video Consultation
                      </p>
                      <p className="text-[11px] text-slate-500">Online video call</p>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-slate-900">
                    {doctor.consultationOptions.video.price}
                  </span>
                </button>

                {/* In-Person Option */}
                <button
                  type="button"
                  onClick={() => setConsultationMode("in-person")}
                  className={`w-full p-3.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                    consultationMode === "in-person"
                      ? "border-teal-600 bg-teal-50/60 ring-1 ring-teal-600"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="font-semibold text-xs text-slate-900">
                        In-Person Consultation
                      </p>
                      <p className="text-[11px] text-slate-500">Clinic visit</p>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-slate-900">
                    {doctor.consultationOptions.inPerson.price}
                  </span>
                </button>
              </div>
            </section>

            {/* Availability Calendar & Time Selection Card */}
            <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-base text-slate-900">Availability</h2>
                <span className="text-xs text-slate-400 font-medium">September</span>
              </div>

              {/* Day Calendar Strip */}
              <div className="grid grid-cols-5 gap-1.5 text-center">
                {doctor.availableDays.map((item) => {
                  const isSelected = selectedDate === item.date;
                  return (
                    <button
                      key={item.date}
                      type="button"
                      onClick={() => setSelectedDate(item.date)}
                      className={`p-2 rounded-lg border transition-all ${
                        isSelected
                          ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <span className="block text-[10px] uppercase tracking-wider font-medium opacity-80">
                        {item.day}
                      </span>
                      <span className="block font-bold text-sm mt-0.5">
                        {item.date}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Available Times Slot Grid */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-slate-700">Available times:</p>
                <div className="grid grid-cols-2 gap-2">
                  {doctor.availableTimes.map((time) => {
                    const isTimeSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-md text-xs font-semibold border transition-all ${
                          isTimeSelected
                            ? "bg-teal-600 text-white border-teal-600"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Booking CTA */}
              <div className="pt-2">
                <Link
                 href={`/appointments/book?doctorId=${doctor.id}`}
                  className="w-full flex items-center justify-center font-semibold text-sm text-white bg-teal-600 hover:bg-teal-700 py-3 rounded-lg transition-colors shadow-sm"
                >
                  Book Appointment
                </Link>
              </div>
            </section>

          </div>

        </div>
      </div>
    </div>
  );
}
