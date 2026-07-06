import HeroSection from "@/components/home/HeroSection";
import CompanyProfile from "@/components/CompanyProfile"
import ClientSlider from "@/components/shared/ClientSlider"
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudyJournal from "@/components/CaseStudyJournal";
import ProjectCTA from "@/components/ProjectCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanyProfile/>
      <WhyChooseUs/>
      <ProjectCTA/>
      <CaseStudyJournal/>
      <ClientSlider/>
    </main>
  );
}