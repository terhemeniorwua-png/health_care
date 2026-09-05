import Link from "next/link";
import { Clock } from "lucide-react";

const ARTICLES = [
  {
    id: "1",
    category: "Cardiology",
    title: "Understanding Your Blood Pressure",
    description: "Learn what blood pressure readings mean and simple steps to keep your heart healthy.",
    readingTime: "4 min read",
    date: "Sep 2, 2026",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "2",
    category: "General Health",
    title: "When Should You See a Doctor?",
    description: "Recognize warning signs that indicate it is time to schedule a professional consultation.",
    readingTime: "5 min read",
    date: "Aug 28, 2026",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "3",
    category: "Wellness",
    title: "7 Ways to Build Healthier Habits",
    description: "Practical lifestyle adjustments that lead to long-term physical and mental wellness.",
    readingTime: "6 min read",
    date: "Aug 20, 2026",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "4",
    category: "Diagnostics",
    title: "Understanding Common Blood Tests",
    description: "A guide to standard blood work, CBC results, and what key numbers represent.",
    readingTime: "5 min read",
    date: "Aug 15, 2026",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=300",
  },
];

export default function HealthResources() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Stay informed about your health
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                <div className="w-full h-40 bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="font-body text-xs font-semibold text-teal-600 uppercase tracking-wider">
                    {art.category}
                  </span>
                  <h3 className="font-heading font-bold text-base text-slate-900 mt-1 line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="font-body text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {art.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0 flex items-center justify-between text-xs text-slate-400 font-body">
                <span>{art.date}</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{art.readingTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
          href="/articles"
            className="inline-flex items-center justify-center font-body font-semibold text-sm text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-6 py-2.5 rounded-md transition-colors shadow-sm"
          >
            View Health Resources
          </Link>
        </div>
      </div>
    </section>
  );
}