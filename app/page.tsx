import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TheCore } from "@/components/home/TheCore";
import { Legacy } from "@/components/home/Legacy";
import { Services } from "@/components/home/Services";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { COMPANY_DATA } from "@/lib/data";


function getFeaturedProjects() {
  const { all, featuredIds } = COMPANY_DATA.projects;
  return all.filter(p => featuredIds.includes(p.id));
}

export default function Home() {
  const projects = getFeaturedProjects();

  return (
    <main className="bg-background min-h-screen relative selection:bg-primary selection:text-background">
      <Navbar />

      <Hero />
      <TheCore />
      <Legacy />
      <Services />
      <FeaturedProjects projects={projects} />

      <Footer />
    </main>
  );
}
