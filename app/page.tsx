import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Accreditations } from "@/components/home/Accreditations";
import { Record } from "@/components/home/Record";
import { Numbers } from "@/components/home/Numbers";
import { LaunchingGirder } from "@/components/home/LaunchingGirder";
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
    <main className="bg-base min-h-screen relative">
      <Navbar />

      <Hero />
      <Accreditations />
      <TheCore />
      <Record />
      <Legacy />
      <Numbers />
      <Services />
      <LaunchingGirder />
      <FeaturedProjects projects={projects} />

      <Footer />
    </main>
  );
}
