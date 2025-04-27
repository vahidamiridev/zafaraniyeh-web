import Pricing from "@/components/Pricing";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import ServicesComponent from "../components/Services/ServicesComponent";


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Features />
      <ServicesComponent />
      <Testimonials />
    </>
  );
}
