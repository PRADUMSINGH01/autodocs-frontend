import Hero from "@/components/Hero";
import AnimatedWorkflow from "@/components/AnimatedWorkflow";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AnimatedWorkflow />
    </div>
  );
}
