import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Story from "@/components/Story";
import Goals from "@/components/Goals";
import EventStructure from "@/components/EventStructure";
import Budget from "@/components/Budget";
import Sponsorship from "@/components/Sponsorship";
import Team from "@/components/Team";
import Quotes from "@/components/Quotes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Story />
        <Goals />
        <EventStructure />
        <Budget />
        <Sponsorship />
        <Team />
        <Quotes />
      </main>
      <Footer />
    </>
  );
}
