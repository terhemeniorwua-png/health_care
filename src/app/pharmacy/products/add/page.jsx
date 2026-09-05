"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Plus, Upload, Check } from "lucide-react";

export default function AddPharmacyProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "Prescription",
    description: "",
    brand: "",
    price: "",
    stockQuantity: "",
    classification: "POM (Prescription Only Medicine)",
    availability: "In Stock",
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link href="/pharmacy/products" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Products Catalog
        </Link>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">Add New Product</h1>
          <p className="text-xs text-slate-500 mt-0.5">Enter product details, pricing, stock levels, and regulatory status.</p>
        </div>

        {/* Product Form Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
          
          <div className="space-y-4">
            
            {/* Name & Brand */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-extrabold uppercase text-slate-500">Product Name</label>
                <input
                  type="text"
                  placeholder="e.g. Paracetamol Extra 500mg"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-extrabold uppercase text-slate-500">Brand / Manufacturer</label>
                <input
                  type="text"
                  placeholder="e.g. GSK / Emzor"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Category & Classification */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-extrabold uppercase text-slate-500">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
                >
                  <option value="Prescription">Prescription</option>
                  <option value="OTC Medicines">OTC Medicines</option>
                  <option value="Vitamins & Supplements">Vitamins & Supplements</option>
                  <option value="Personal Care">Personal Care</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-extrabold uppercase text-slate-500">Regulatory Classification</label>
                <select
                  value={formData.classification}
                  onChange={(e) => setFormData({ ...formData, classification: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
                >
                  <option value="POM (Prescription Only Medicine)">POM (Prescription Only Medicine)</option>
                  <option value="P (Pharmacy Medicine)">P (Pharmacy Medicine)</option>
                  <option value="GSL (General Sales List)">GSL (General Sales List)</option>
                </select>
              </div>
            </div>

            {/* Price, Stock & Availability */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-extrabold uppercase text-slate-500">Price (₦)</label>
                <input
                  type="text"
                  placeholder="e.g. 2500"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-extrabold uppercase text-slate-500">Stock Quantity</label>
                <input
                  type="number"
                  placeholder="e.g. 50"
                  value={formData.stockQuantity}
                  onChange={(e) => setFormData({ ...formData, stockQuantity: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-extrabold uppercase text-slate-500">Availability</label>
                <select
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                  <option value="Discontinued">Discontinued</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold uppercase text-slate-500">Description</label>
              <textarea
                rows={3}
                placeholder="Enter product dosage instructions, active ingredients, and indications..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none"
              ></textarea>
            </div>

            {/* Product Image Upload Placeholder */}
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold uppercase text-slate-500">Product Image</label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center bg-slate-50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-100 transition-colors">
                <Upload className="w-5 h-5 text-slate-400" />
                <span className="text-xs font-semibold text-slate-600">Click to upload product image</span>
                <span className="text-[10px] text-slate-400">PNG, JPG up to 5MB</span>
              </div>
            </div>

          </div>

          {/* Submit Button */}
          <div className="pt-3 border-t border-slate-100 flex justify-end">
            <button
              type="button"
              onClick={() => alert("Product added successfully.")}
              className="inline-flex items-center gap-2 text-xs font-extrabold text-white bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-xl transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}