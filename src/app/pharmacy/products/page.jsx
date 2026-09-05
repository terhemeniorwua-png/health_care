"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Package,
  Plus,
  Search,
  Filter,
  MoreVertical,
  ChevronLeft,
  Edit2,
  Trash2,
} from "lucide-react";

export default function PharmacyProductsPage() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { id: "PRD-01", name: "Paracetamol Extra 500mg", category: "OTC Medicines", price: "₦1,200", stock: 140, status: "Active" },
    { id: "PRD-02", name: "Amoxicillin 500mg Capsules", category: "Prescription", price: "₦3,500", stock: 45, status: "Active" },
    { id: "PRD-03", name: "Vitamin C 1000mg Effervescent", category: "Vitamins & Supplements", price: "₦2,800", stock: 4, status: "Low Stock" },
    { id: "PRD-04", name: "Omeprazole 20mg", category: "Prescription", price: "₦4,000", stock: 0, status: "Out of Stock" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link href="/pharmacy/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Page Heading & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">Pharmacy Products</h1>
            <p className="text-xs text-slate-500 mt-0.5">Manage product catalog, pricing, and availability status.</p>
          </div>
          <Link
            href="/pharmacy/products/add"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition-colors shadow-xs shrink-0"
          >
            <Plus className="w-4 h-4" /> Add Product
          </Link>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 outline-none"
          >
            <option value="All">Category: All</option>
            <option value="Prescription">Prescription</option>
            <option value="OTC Medicines">OTC Medicines</option>
            <option value="Vitamins & Supplements">Vitamins & Supplements</option>
          </select>

          <select
            value={stockFilter}
            onChange={(e) => setStockFilter(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 outline-none"
          >
            <option value="All">Stock: All</option>
            <option value="In Stock">In Stock (&gt;10)</option>
            <option value="Low Stock">Low Stock (1-10)</option>
            <option value="Out of Stock">Out of Stock (0)</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 outline-none"
          >
            <option value="All">Status: All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[10px]">
                  <th className="pb-3">Product</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Stock</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="py-3 font-extrabold text-slate-900">{item.name}</td>
                    <td className="py-3 text-slate-500">{item.category}</td>
                    <td className="py-3 font-bold text-slate-900">{item.price}</td>
                    <td className="py-3 font-bold text-slate-700">{item.stock} units</td>
                    <td className="py-3">
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                          item.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : item.status === "Low Stock"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-rose-50 text-rose-700 border-rose-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 text-right space-x-2">
                      <button type="button" className="p-1.5 text-slate-500 hover:text-teal-600 transition-colors">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button type="button" className="p-1.5 text-slate-500 hover:text-rose-600 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
