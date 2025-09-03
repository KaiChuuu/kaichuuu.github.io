import ProjectSlider from "@/components/common/ProjectSlider";
import ProjectSearch from "@/components/common/ProjectSearch";
import { useRepos } from "@/context/ReposContext";
import Navbar from "@/layouts/Navbar";
import SectionTitle from "@/layouts/SectionTitle";

import FallingLeaves from "@/components/common/FallingLeaves";
import CherryBlossomTree from "@/assets/cherry-blossom-tree.png";

function PortfolioPage() {
  const { repos, loading } = useRepos();

  const activeDemoRepos = repos.filter((r) => r.homepage && r.homepage !== "");

  return (
    <div className="flex flex-col min-h-screen bg-warm-white relative overflow-hidden">
      <div className="z-15">
        <Navbar />
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
        <FallingLeaves />
      </div>
      <div className="absolute top-30 right-0 translate-x-45">
        <img src={CherryBlossomTree} className="w-200" />
      </div>

      <div className="flex-1 max-w-[1440px] mx-auto w-full z-15">
        <div className="max-w-[1320px] mx-auto w-full px-5 py-4">
          <SectionTitle title="Portfolio" />

          <ProjectSlider data={activeDemoRepos} title="Active Demos" />

          <div className="mt-30" />

          <ProjectSearch data={repos} title="All Projects" />

          <div className="mt-30" />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
