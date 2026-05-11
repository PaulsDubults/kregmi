import React from "react";
import KregmiNavbar from "../components/kregmi/KregmiNavbar";
import HeroSplit from "../components/kregmi/HeroSplit";
import MarqueeBanner from "../components/kregmi/MarqueeBanner";
import AccountingServices from "../components/kregmi/AccountingServices";
import CompanyInfoSection from "../components/kregmi/CompanyInfoSection";
import TrainingSection from "../components/kregmi/TrainingSection";
import NVAProjectSection from "../components/kregmi/NVAProjectSection";
import ProjectsSection from "../components/kregmi/ProjectsSection";
import AboutSection from "../components/kregmi/AboutSection";
import CTABanner from "../components/kregmi/CTABanner";
import ContactSection from "../components/kregmi/ContactSection";
import KregmiFooter from "../components/kregmi/KregmiFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <KregmiNavbar />
      <HeroSplit />
      <MarqueeBanner />
      <CompanyInfoSection />
      <AccountingServices />
      <ProjectsSection />
      <NVAProjectSection />
      <TrainingSection />
      <AboutSection />
      <ContactSection />
      <KregmiFooter />
    </div>
  );
}