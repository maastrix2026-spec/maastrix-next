import AboutHero from "@/components/about/AboutHero";
import AboutProcess from "@/components/about/AboutProcess"
import AboutStory from "@/components/about/AboutStory"
import AboutTestimonials from "@/components/about/AboutTestimonal"
import OurTeamSection from "@/components/about/OurTeamSection";
import CaseStudyJournal from "@/components/CaseStudyJournal";

export const metadata = {
  title: "About Maastrix Solutions | Enterprise Web & IT Engineering Leader",
  description: "Founded in 2004 and headquartered in Michigan, Maastrix Solutions delivers premier tailor-made web design, E2E portals, and IT application development services globally.",
  keywords: ["Web Design Industry", "IT Solutions Michigan", "Maastrix Solutions", "Enterprise Web Development"],
};

export default function Home() {
  return (
    <main>
      <AboutHero />
      <AboutProcess/>
      <AboutStory/>
      <OurTeamSection/>
      <CaseStudyJournal/>
      <AboutTestimonials/>
    </main>
  );
}