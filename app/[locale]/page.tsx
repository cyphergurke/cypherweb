import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import About from "@/components/About";
import { ContactForm } from "@/components/Contact";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-5">
      <Hero />
      <About />
      <Experience />
      <Approach />
      <RecentProjects />
      <ContactForm />
      <Footer />
    </div>
  );
};
