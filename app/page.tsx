import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Maincontent from "@/components/Maincontent";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Maincontent/>
      <Footer/>
    </div>
  );
}
