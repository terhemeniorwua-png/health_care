"use client";

import { useState } from "react";
// import Link from "next/link";
import {
  Star,
  CheckCircle2,
  AlertTriangle,
  Truck,
  Minus,
  Plus,
  ShoppingCart,
  BadgeCheck,
  Upload,
  ChevronLeft,
  FileText,
  ShieldCheck,
} from "lucide-react";

// Mock database fetching simulation based on [id]
const getProductData = (id) => {
  return {
    id,
    name: "Paracetamol 500mg Extra Strength",
    brand: "HealthCare Plus",
    rating: 4.8,
    reviewsCount: 124,
    price: 2500,
    inStock: true,
    stockCount: 45,
    isPrescriptionRequired: true, // Set to true to trigger Rx workflow
    vendor: {
      name: "HealthPlus Pharmacy",
      isVerified: true,
      location: "Abuja Central Branch",
    },
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600",
    ],
    description:
      "Paracetamol 500mg provides fast, effective relief from mild-to-moderate pain including headaches, toothaches, muscle aches, and fever reduction caused by colds or flu. Formulated for quick absorption and gentle stomach tolerance.",
    importantInfo: [
      "Dosage: Adults take 1-2 tablets every 4 to 6 hours as needed.",
      "Warning: Do not exceed 8 tablets (4,000mg) within a 24-hour period.",
      "Do not combine with other paracetamol-containing medications.",
      "Store below 30°C in a dry place away from direct sunlight.",
    ],
    deliveryEstimate: "Today within 3 hours (Express Delivery)",
  };
};

const similarProducts = [
  {
    id: "2",
    name: "Ibuprofen 400mg",
    brand: "MedPlus",
    price: 3200,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "3",
    name: "Aspirin 75mg",
    brand: "Bayer",
    price: 1800,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "4",
    name: "Vitamin C 1000mg",
    brand: "HealthCare Plus",
    price: 4500,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=300",
  },
];

export default function ProductDetailPage({ params }) {
  const product = getProductData(params.id);

  // Component States
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [isPrescriptionUploaded, setIsPrescriptionUploaded] = useState(false);

  const handleQuantityChange = (type) => {
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
    if (type === "inc" && quantity < product.stockCount) setQuantity(quantity + 1);
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
      setIsPrescriptionUploaded(true);
    }
  };

  const handleAddToCart = () => {
    if (product.isPrescriptionRequired && !isPrescriptionUploaded) {
      alert("Please upload a valid doctor's prescription before adding to cart.");
      return;
    }
    alert(`Added ${quantity} unit(s) of ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/medicines"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Medicines
        </Link>

        {/* Product Details Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="w-full h-80 sm:h-96 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden relative">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === img
                        ? "border-teal-600 ring-2 ring-teal-600/20"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Meta & Actions */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Header Meta */}
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                      Brand: {product.brand}
                    </span>
                    {product.isPrescriptionRequired && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">
                        <AlertTriangle className="w-3 h-3 text-amber-600" />
                        Prescription Required (Rx)
                      </span>
                    )}
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {product.name}
                  </h1>
                </div>

                {/* Rating & Availability */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1 font-bold text-slate-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 font-normal">
                      ({product.reviewsCount} reviews)
                    </span>
                  </div>
                  <div className="h-3 w-px bg-slate-200" />
                  {product.inStock ? (
                    <div className="flex items-center gap-1 font-semibold text-emerald-600">
                      <CheckCircle2 className="w-4 h-4" /> In Stock
                    </div>
                  ) : (
                    <div className="font-semibold text-red-600">Out of Stock</div>
                  )}
                </div>

                {/* Price */}
                <div className="pt-2">
                  <span className="text-3xl font-extrabold text-slate-900">
                    ₦{product.price.toLocaleString()}
                  </span>
                </div>

                {/* Vendor Summary */}
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Fulfilled & Sold By
                    </p>
                    <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                      {product.vendor.name}
                      {product.vendor.isVerified && (
                        <BadgeCheck className="w-4 h-4 text-teal-600 fill-teal-100" />
                      )}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                    Verified Vendor
                  </span>
                </div>

                {/* Prescription Verification Flow */}
                {product.isPrescriptionRequired && (
                  <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-amber-900">
                          Doctor Prescription Verification
                        </h4>
                        <p className="text-[11px] text-amber-700 mt-0.5">
                          This medication requires doctor verification. Please upload your prescription.
                        </p>
                      </div>
                    </div>

                    <div className="pt-1">
                      <label className="flex items-center justify-center gap-2 border-2 border-dashed border-amber-300 bg-white hover:bg-amber-50/50 p-3 rounded-lg cursor-pointer transition-colors text-xs font-bold text-amber-800">
                        <Upload className="w-4 h-4 text-amber-600" />
                        {prescriptionFile ? prescriptionFile.name : "Upload Prescription File (PDF/JPG)"}
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                )}

                {/* Quantity Controller & Add to Cart */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold text-slate-700">Quantity</span>
                    <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                      <button
                        onClick={() => handleQuantityChange("dec")}
                        className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-4 text-xs font-bold text-slate-900">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange("inc")}
                        className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={product.isPrescriptionRequired && !isPrescriptionUploaded}
                    className={`w-full flex items-center justify-center gap-2 font-bold text-sm text-white py-3.5 rounded-xl transition-all shadow-sm ${
                      product.isPrescriptionRequired && !isPrescriptionUploaded
                        ? "bg-slate-300 cursor-not-allowed"
                        : "bg-teal-600 hover:bg-teal-700"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {product.isPrescriptionRequired && !isPrescriptionUploaded
                      ? "Upload Prescription to Purchase"
                      : `Add to Cart • ₦${(product.price * quantity).toLocaleString()}`}
                  </button>
                </div>

                {/* Delivery Information */}
                <div className="flex items-center gap-2.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <Truck className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>
                    Estimated Delivery: <strong>{product.deliveryEstimate}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs / Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Description */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <FileText className="w-4 h-4 text-teal-600" /> Description
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Important Information / Warnings */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Important Instructions & Warnings
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
              {product.importantInfo.map((info, idx) => (
                <li key={idx} className="leading-relaxed">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Similar Products Grid */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {similarProducts.map((item) => (
              <Link
                key={item.id}
                href={`/medicines/${item.id}`}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow block space-y-3"
              >
                <div className="w-full h-36 rounded-lg bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-teal-600 uppercase">
                    {item.brand}
                  </p>
                  <h4 className="font-extrabold text-sm text-slate-900">
                    {item.name}
                  </h4>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-extrabold text-sm text-slate-900">
                      ₦{item.price.toLocaleString()}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {item.rating}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}