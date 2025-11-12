import FeauteredCourses from "@/Component/FeauteredCourses";
import HeroSection from "@/Component/HeroSection";
import Instructors from "@/Component/instructor";
import TestimonialCards from "@/Component/TestimonialCards";
import UpcomingWebinar from "@/Component/UpcomingWebinar";
import WhyChoouseUs from "@/Component/WhyChoouseUs";
import Image from "next/image";
import Footer from "@/Component/Footer"
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       
        <HeroSection/>
        <FeauteredCourses/>
        <WhyChoouseUs/>
        <TestimonialCards/>
        <UpcomingWebinar/>
        <Instructors/>
         <Footer/>
    </main>
  );
}
