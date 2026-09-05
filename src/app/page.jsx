import CtaSection from "./Home/CTA";
import FeaturedDoctors from "./Home/FtDoctorrs";
import HealthResources from "./Home/HealthService";
import Hero from "./Home/Hero";
import HowItWorks from "./Home/HowItWorks";
import LaboratorySection from "./Home/LabScience";
import MedicineMarketplace from "./Home/MedMarket";
import PopularServices from "./Home/PopularService";
import QuickServices from "./Home/Service";
import Testimonials from "./Home/Testimonial";
import TrustedProviders from "./Home/TrustedProvider";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
        <Hero />

        <QuickServices />

        <FeaturedDoctors />

        <PopularServices />

        <MedicineMarketplace />

        <LaboratorySection />

        <TrustedProviders />
        <HowItWorks />
        <HealthResources/>
        <Testimonials />
        <CtaSection />
    </div>
  );
}