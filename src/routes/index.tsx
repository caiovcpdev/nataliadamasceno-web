import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Areas } from "@/sections/Areas";
import { Benefits } from "@/sections/Benefits";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Natália Damasceno — Psicóloga Clínica" },
      {
        name: "description",
        content:
          "Psicologia clínica com acolhimento, escuta ativa e cuidado individualizado. Atendimento online e presencial.",
      },
      { property: "og:title", content: "Natália Damasceno — Psicóloga Clínica" },
      {
        property: "og:description",
        content:
          "Um espaço seguro para cuidar da sua saúde emocional com leveza e acolhimento.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Areas />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
