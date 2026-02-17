import type { Route } from "./+types/home";
import { Header } from "~/components/layout/Header";
import { HeroSection } from "~/components/hero/HeroSection";
import { AboutSection } from "~/components/about/AboutSection";
import { ExperienceSection } from "~/components/experience/ExperienceSection";
import { WritingSection } from "~/components/writing/WritingSection";
import { Footer } from "~/components/layout/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Brian Bolnick | Co-Founder & CPO" },
    {
      name: "description",
      content:
        "Brian Bolnick — Co-Founder & CPO at Veras. Builder, tinkerer, and engineer turned product leader.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WritingSection />
      </main>
      <Footer />
    </>
  );
}
