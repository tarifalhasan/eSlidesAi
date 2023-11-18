import Hero from "@/components/landing/Hero";
import HowItWork from "@/components/landing/HowItWork";
import UnAuthenticHeader from "@/components/landing/UnAuthenticHeader";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div>
      <UnAuthenticHeader />
      <Hero />
      <HowItWork />
      <Footer />
    </div>
  );
}
