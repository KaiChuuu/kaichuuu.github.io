import { useEffect } from "react";

import ProjectSlider from "@/components/ProjectSlider";
import ProjectSearch from "@/components/ProjectSearch";
import { useRepos } from "@/context/ReposContext";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import SectionTitle from "@/components/common/SectionTitle";
import CertificationList from "@/components/CertificationList";

import FallingLeaves from "@/components/FallingLeaves";
import CherryBlossomTree from "@/assets/cherry-blossom-tree.png";
import CherryBlossomBranch from "@/assets/cherry-blossom-branch.png";

function PortfolioPage() {
  const { repos } = useRepos();

  const activeWorkRepos = repos.filter((r) => r.homepage && r.homepage !== "");

  useEffect(() => {
    if (window.location.hash === "#portfolio#certifications") {
      document
        .getElementById("certifications")
        ?.scrollIntoView({ behavior: "smooth" });
    }
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
          <SectionTitle title="Portfolio" />

          <ProjectSlider data={activeWorkRepos} title="Active Demos" />

          <div className="mt-30" />

          <ProjectSearch data={repos} title="All Projects" />

          <div className="mt-30" />

          <div id="certifications">
            <SectionTitle title="Certifications" />

            <CertificationList />
          </div>

          <div className="mt-30" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PortfolioPage;
