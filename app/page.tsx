import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import BottomBand from "@/Components/BottomBand";
import ProjectsSlider from "@/Components/ProjectsSlider";
import StickyIntro from "@/Components/StickyIntro";
import SmoothScroll from "@/Components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <StickyIntro>
        <Navbar />
        <Hero />
        <BottomBand />
      </StickyIntro>
      <ProjectsSlider />
    </SmoothScroll>
  );
}
