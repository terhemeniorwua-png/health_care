"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  ShoppingCart,
  Star,
  CheckCircle2,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";

export default function MedicinesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Pain Relief",
    "Cold & Flu",
    "Vitamins",
    "First Aid",
    "Personal Care",
    "Medical Equipment",
    "Wellness",
  ];

  // Mock Medicines Data
  const products = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      vendor: "HealthPlus Pharmacy",
      rating: 4.8,
      price: 2500,
      available: true,
      category: "Pain Relief",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 2,
      name: "Vitamin C 1000mg",
      vendor: "MedPlus Pharmacy",
      rating: 4.9,
      price: 4500,
      available: true,
      category: "Vitamins",
      image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 3,
      name: "Digital Thermometer",
      vendor: "Alpha Medical",
      rating: 4.7,
      price: 8000,
      available: true,
      category: "Medical Equipment",
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 4,
      name: "First Aid Kit Box",
      vendor: "HealthPlus Pharmacy",
      rating: 4.6,
      price: 15500,
      available: true,
      category: "First Aid",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=300",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-900 rounded-2xl p-6 sm:p-10 text-white shadow-sm relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Medicines & Healthcare
            </h1>
            <p className="text-teal-100 text-sm sm:text-base font-medium">
              Healthcare products delivered directly to you.
            </p>

            {/* Search Bar */}
            <div className="pt-4">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  placeholder="Search medicines, healthcare products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-slate-900 text-sm placeholder-slate-400 rounded-xl pl-12 pr-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
              selectedCategory === "All"
                ? "bg-teal-600 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-teal-600 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Grid: Sidebar Filters + Product List */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <aside className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-6 h-fit hidden lg:block">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-teal-600" /> Filters
              </h2>
              <button
                type="button"
                className="text-xs font-medium text-teal-600 hover:underline"
              >
                Reset
              </button>
            </div>

            {/* Filter Items */}
            <div className="space-y-4 text-xs font-semibold text-slate-700">
              {["Category", "Price", "Brand", "Vendor", "Availability", "Rating"].map(
                (filter) => (
                  <div
                    key={filter}
                    className="flex items-center justify-between border-b border-slate-100 pb-3 cursor-pointer hover:text-slate-900"
                  >
                    <span>{filter}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                )
              )}
            </div>
          </aside>

          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden flex justify-between items-center bg-white p-3 rounded-lg border border-slate-200">
            <span className="text-xs font-bold text-slate-700">Filter Products</span>
            <button className="flex items-center gap-1.5 text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-md">
              <Filter className="w-3.5 h-3.5" /> Filters
            </button>
          </div>

          {/* Product Cards Grid */}
          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="p-4 space-y-3">
                    {/* Product Image */}
                    <div className="w-full h-40 rounded-lg bg-slate-100 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div>
                      <p className="text-[10px] font-bold text-teal-600 tracking-wider uppercase">
                        {product.vendor}
                      </p>
                      <h3 className="font-extrabold text-sm text-slate-900 mt-0.5">
                        {product.name}
                      </h3>
                    </div>

                    {/* Rating & Availability */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <div className="flex items-center gap-1 font-bold text-slate-800">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{product.rating}</span>
                      </div>
                      {product.available && (
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Available
                        </div>
                      )}
                    </div>

                    {/* Price */}
                    <p className="text-base font-extrabold text-slate-900 pt-1">
                      ₦{product.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Add to Cart CTA */}
                  <div className="p-4 pt-0">
                    <button
                      type="button"
                      onClick={() => alert(`Added ${product.name} to cart!`)}
                      className="w-full flex items-center justify-center gap-2 font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 py-2.5 rounded-lg transition-colors shadow-sm"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

      </div>
    </div>
  );
}