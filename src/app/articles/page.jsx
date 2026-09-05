"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Clock,
  User,
  Calendar,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const articleCategories = [
  "All",
  "General Health",
  "Nutrition",
  "Women's Health",
  "Men's Health",
  "Children's Health",
  "Fitness",
  "Mental Wellness",
  "Preventive Care",
];

const articlesData = [
  {
    id: "1",
    title: "10 Essential Preventive Health Checks Every Adult Should Have",
    description: "Screening tests can detect diseases early before symptoms appear. Here is a guide on what health checks to prioritize by age.",
    category: "Preventive Care",
    author: "Dr. Sarah Aliyu",
    date: "Sept 2, 2026",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "2",
    title: "Understanding Gut Health and Its Impact on Immune System",
    description: "Learn how gut microbiota influences immunity, digestion, and mental wellbeing, plus diet tips to keep your microbiome healthy.",
    category: "Nutrition",
    author: "Dietitian Mark Okon",
    date: "Aug 28, 2026",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "3",
    title: "Managing Workplace Stress and Preventing Burnout",
    description: "Practical mindfulness techniques and lifestyle adjustments to protect your mental health while balancing work deadlines.",
    category: "Mental Wellness",
    author: "Dr. Grace Benson",
    date: "Aug 15, 2026",
    readingTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "4",
    title: "Pediatric Nutrition: Building Healthy Eating Habits Early",
    description: "Simple, nutrient-dense meal ideas and strategies to overcome picky eating habits in young children.",
    category: "Children's Health",
    author: "Dr. Emmanuel Okonkwo",
    date: "Jul 30, 2026",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=500",
  },
];

export default function HealthArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = articlesData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Health resources
            </h1>
          </div>
          <p className="text-xs text-slate-500">
            Medically reviewed articles, health tips, and expert wellness guides.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search health articles, topics, or medical conditions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {articleCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full shrink-0 transition-colors ${
                selectedCategory === cat
                  ? "bg-teal-600 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Article Cover Image */}
                <div className="w-full h-48 bg-slate-100 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-teal-700 text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-sm border border-slate-100">
                    {article.category}
                  </span>
                </div>

                {/* Article Content */}
                <div className="p-5 space-y-2">
                  <h2 className="text-base font-extrabold text-slate-900 line-clamp-2 hover:text-teal-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>

              {/* Author & Meta Footer */}
              <div className="p-5 pt-0 space-y-3 border-t border-slate-100 mt-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-3">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <User className="w-3.5 h-3.5 text-teal-600" />
                    {article.author}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {article.readingTime}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/articles/${article.id}`}
                  className="w-full flex items-center justify-center gap-1 font-bold text-xs text-teal-600 bg-teal-50 hover:bg-teal-100 py-2.5 rounded-xl transition-colors border border-teal-100"
                >
                  Read Full Article <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}