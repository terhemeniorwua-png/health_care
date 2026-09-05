"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Package, AlertTriangle, CheckCircle, RefreshCw } from "lucide-react";

export default function PharmacyInventoryPage() {
  const inventoryStats = [
    { title: "Total Products", value: "1,240", sub: "Registered SKUs" },
    { title: "In Stock", value: "1,180", sub: "Sufficient inventory" },
    { title: "Low Stock", value: "52", sub: "Below safety threshold" },
    { title: "Out of Stock", value: "8", sub: "Needs urgent restock" },
  ];

  const [inventoryList, setInventoryList] = useState([
    { id: "SKU-101", product: "Paracetamol Extra 500mg", currentStock: 140, status: "In Stock" },
    { id: "SKU-102", product: "Amoxicillin 500mg Capsules", currentStock: 45, status: "In Stock" },
    { id: "SKU-103", product: "Vitamin C 1000mg Effervescent", currentStock: 4, status: "Low Stock" },
    { id: "SKU-104", product: "Omeprazole 20mg", currentStock: 0, status: "Out of Stock" },
  ]);

  const updateStockLevel = (id, newStock) => {
    setInventoryList(
      inventoryList.map((item) => {
        if (item.id === id) {
          const qty = parseInt(newStock) || 0;
          let status = "In Stock";
          if (qty === 0) status = "Out of Stock";
          else if (qty < 10) status = "Low Stock";
          return { ...item, currentStock: qty, status };
        }
        return item;
      })
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <Link href="/pharmacy/dashboard" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">Inventory Management</h1>
          <p className="text-xs text-slate-500 mt-0.5">Monitor stock levels, set reorder alerts, and update inventory counts.</p>
        </div>

        {/* Inventory Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {inventoryStats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-1">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">{stat.title}</span>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
              <p className="text-[11px] font-medium text-slate-500">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
            Inventory Stock Table
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[10px]">
                  <th className="pb-3">SKU ID</th>
                  <th className="pb-3">Product Name</th>
                  <th className="pb-3">Current Stock</th>
                  <th className="pb-3">Stock Status</th>
                  <th className="pb-3 text-right">Quick Update Stock</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inventoryList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="py-3 font-extrabold text-slate-400">{item.id}</td>
                    <td className="py-3 font-extrabold text-slate-900">{item.product}</td>
                    <td className="py-3 font-bold text-slate-800">{item.currentStock} units</td>
                    <td className="py-3">
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                          item.status === "In Stock"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : item.status === "Low Stock"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-rose-50 text-rose-700 border-rose-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <div className="inline-flex items-center justify-end gap-2">
                        <input
                          type="number"
                          defaultValue={item.currentStock}
                          onBlur={(e) => updateStockLevel(item.id, e.target.value)}
                          className="w-20 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold text-slate-900 text-center outline-none"
                        />
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-2.5 py-1 rounded-lg transition-colors"
                        >
                          <RefreshCw className="w-3 h-3" /> Update Stock
                        </button>
                      </div>
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