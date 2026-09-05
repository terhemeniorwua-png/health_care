"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Calendar,
  ShoppingBag,
  FlaskConical,
  Pill,
  MessageSquare,
  Bell,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

const notificationCategories = [
  { name: "All", count: 6 },
  { name: "Appointments", icon: Calendar, count: 2 },
  { name: "Orders", icon: ShoppingBag, count: 1 },
  { name: "Lab results", icon: FlaskConical, count: 1 },
  { name: "Prescriptions", icon: Pill, count: 1 },
  { name: "Messages", icon: MessageSquare, count: 1 },
  { name: "Platform notifications", icon: Bell, count: 0 },
];

const initialNotifications = [
  {
    id: 1,
    category: "Appointments",
    icon: Calendar,
    color: "bg-teal-50 text-teal-700 border-teal-200",
    title: "Upcoming Appointment Reminder",
    message: "Your appointment with Dr. Sarah Williams starts in 30 minutes.",
    time: "10 mins ago",
    unread: true,
  },
  {
    id: 2,
    category: "Lab results",
    icon: FlaskConical,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "Lab Test Ready",
    message: "Your Full Blood Count result from CityLab Laboratory is now available for download.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 3,
    category: "Prescriptions",
    icon: Pill,
    color: "bg-amber-50 text-amber-700 border-amber-200",
    title: "New Prescription Issued",
    message: "Dr. Sarah Williams issued a new prescription for Amlodipine 5mg.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 4,
    category: "Orders",
    icon: ShoppingBag,
    color: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Medication Order Out for Delivery",
    message: "Your HealthPlus Pharmacy order #ORD-8821 is on its way to your home address.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 5,
    category: "Messages",
    icon: MessageSquare,
    color: "bg-purple-50 text-purple-700 border-purple-200",
    title: "New Message Received",
    message: "Dr. Sarah Williams sent you a message: 'How are you feeling today?'",
    time: "2 days ago",
    unread: false,
  },
  {
    id: 6,
    category: "Appointments",
    icon: Calendar,
    color: "bg-teal-50 text-teal-700 border-teal-200",
    title: "Appointment Confirmed",
    message: "Your consultation with Dr. Emmanuel Okonkwo has been confirmed for Sept 10.",
    time: "3 days ago",
    unread: false,
  },
];

export default function NotificationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  const filteredNotifications = notifications.filter((n) => {
    if (activeCategory === "All") return true;
    return n.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/patient/dashboard"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              Notifications
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Real-time alerts for appointments, diagnostic tests, orders, and clinical updates.
            </p>
          </div>
          <button
            type="button"
            onClick={markAllAsRead}
            className="inline-flex items-center gap-1.5 font-bold text-xs text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3.5 py-2 rounded-xl transition-colors shrink-0"
          >
            <CheckCircle2 className="w-3.5 h-3.5" /> Mark all as read
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
          {notificationCategories.map((cat) => {
            const isSelected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveCategory(cat.name)}
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full transition-all shrink-0 ${
                  isSelected
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat.icon && <cat.icon className="w-3.5 h-3.5" />}
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-xs text-slate-500">
              No notifications found in this category.
            </div>
          ) : (
            filteredNotifications.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                    item.unread
                      ? "bg-white border-teal-300 shadow-sm ring-1 ring-teal-100"
                      : "bg-white/70 border-slate-200 opacity-90"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl border shrink-0 ${item.color}`}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xs font-extrabold text-slate-900 truncate">
                          {item.title}
                        </h2>
                        {item.unread && (
                          <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0"></span>
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 shrink-0">
                        <Clock className="w-3 h-3" /> {item.time}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}