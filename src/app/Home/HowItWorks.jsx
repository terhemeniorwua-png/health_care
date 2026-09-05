const STEPS = [
  {
    number: "01",
    title: "Find",
    description: "Find a doctor, medicine, laboratory, hospital, or service.",
  },
  {
    number: "02",
    title: "Book or Order",
    description: "Choose a service, appointment, or product.",
  },
  {
    number: "03",
    title: "Get Care",
    description: "Attend your appointment, receive your test, or get your order delivered.",
  },
  {
    number: "04",
    title: "Manage",
    description: "Keep track of appointments, prescriptions, results, and orders from your dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Healthcare in a few simple steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-heading font-extrabold text-3xl text-teal-600">
                  {step.number}
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900 mt-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-slate-600 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}