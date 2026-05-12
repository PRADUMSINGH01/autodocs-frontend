import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
//import AgentConsole from "@/components/AgentConsole";
import FeatureShowcase from "@/components/FeatureShowcase";
//import TrustedBy from "@/components/TrustedBy";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />



      <HowItWorks />

      <FeatureShowcase />




      <FinalCTA />
    </div>
  );
}
