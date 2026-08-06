import {
  About,
  Contact,
  Hero,
  Navbar,
  StarsCanvas,
  Works,
} from "@/components";
import Experience from "@/components/Experience";
import Feedbacks from "@/components/Feedbacks";
import IntroWrapper from "@/components/IntroWrapper";
import { SHOW_WORK_EXPERIENCE } from "@/constants/siteConfig";

export default function Home() {
  return (
    <IntroWrapper>
      <div>
        <Navbar />
        <Hero />
        <div className="bg-primary relative z-[1] h-full">
          <div className="relative z-[1]">
            <About />
            {SHOW_WORK_EXPERIENCE && <Experience />}
            <Works />
            <Feedbacks />
            <Contact />
          </div>
          <StarsCanvas />
        </div>
      </div>
    </IntroWrapper>
  );
}
