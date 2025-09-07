import { useEffect } from "react";

import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

import SectionTitle from "@/components/common/SectionTitle";
import AboutMe from "@/components/AboutMe";

import FallingLeaves from "@/components/FallingLeaves";
import CherryBlossomTree from "@/assets/cherry-blossom-tree.png";
import CherryBlossomBranch from "@/assets/cherry-blossom-branch.png";
import WorkExperience from "@/components/WorkExperience";
import EducationExperience from "@/components/EducationExperience";

function AboutMePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-vert-grey-grey-gradient relative overflow-hidden">
      <div className="z-15">
        <Navbar />
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
        <FallingLeaves />
      </div>
      <div className="absolute top-30 right-0 rotate-10 translate-x-45 show-on-4k">
        <img src={CherryBlossomTree} className="w-200" />
      </div>
      <div className="absolute top-170 right-0 scale-x-[-1] translate-x-75 show-on-4k">
        <img src={CherryBlossomBranch} className="w-150" />
      </div>

      <div className="flex-1 max-w-[1440px] mx-auto w-full z-15">
        <div className="max-w-[1320px] mx-auto w-full px-5 py-4">
          <SectionTitle title="About Me" />

          <AboutMe />

          <div className="mt-30" />

          <SectionTitle title="Education" />

          <EducationExperience />

          <div className="mt-30" />

          <SectionTitle title="Work Experience" />

          <WorkExperience />

          <div className="mt-30" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutMePage;
