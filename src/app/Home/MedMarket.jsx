import Link from "next/link";
import { Star, ShoppingBag, Check } from "lucide-react";

const PRODUCTS = [
  {
    id: "1",
    name: "Digital Blood Pressure Monitor",
    category: "Medical Devices",
    price: "$45.00",
    vendor: "HealthPlus Pharmacy",
    availability: "In Stock",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "2",
    name: "Vitamin C 1000mg Supplements",
    category: "Vitamins & Wellness",
    price: "$18.50",
    vendor: "CareMed Pharmacy",
    availability: "In Stock",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "3",
    name: "First Aid Safety Kit",
    category: "Essentials",
    price: "$29.99",
    vendor: "MetroCare Supplies",
    availability: "In Stock",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=300",
  },
];

export default function MedicineMarketplace() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Your healthcare essentials, delivered
          </h2>
          <p className="mt-2 font-body text-slate-600 text-sm sm:text-base">
            Find healthcare products from verified pharmacies and vendors.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                <div className="w-full h-44 bg-slate-100 rounded-md overflow-hidden mb-4 border border-slate-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>{prod.category}</span>
                  <div className="flex items-center gap-1 font-semibold text-slate-900">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{prod.rating}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-base text-slate-900 line-clamp-1">
                  {prod.name}
                </h3>

                <p className="font-body text-xs text-slate-500 mt-1">
                  Sold by <span className="font-medium text-slate-700">{prod.vendor}</span>
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-heading font-extrabold text-lg text-slate-900">
                    {prod.price}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    <Check className="w-3 h-3" />
                    {prod.availability}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 font-body font-semibold text-sm text-white bg-teal-600 hover:bg-teal-700 py-2.5 rounded-md transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          ))}
        </div>

        {/* Browse Button */}
        <div className="mt-8 text-center">
          <Link
            href="/medicines"
            className="inline-flex items-center justify-center font-body font-semibold text-sm text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-6 py-2.5 rounded-md transition-colors shadow-sm"
          >
            Browse Medicines
          </Link>
        </div>

      </div>
    </section>
  );
}