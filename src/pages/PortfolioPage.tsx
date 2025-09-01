import FallingLeaves from "@/components/common/FallingLeaves";
import ProjectSlider from "@/components/common/ProjectSlider";
import { useRepos } from "@/context/ReposContext";
import Navbar from "@/layouts/Navbar";
import SectionTitle from "@/layouts/SectionTitle";

function PortfolioPage() {
  const { repos, loading } = useRepos();

  const activeDemoRepos = repos.filter((r) => r.homepage && r.homepage !== "");

  return (
    <div className="bg-blue-black-gradient flex flex-col min-h-screen bg-warm-white relative">
      <div className="z-15">
        <Navbar />
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
        <FallingLeaves />
      </div>

      <div className="flex-1 bg-white max-w-[1440px] mx-auto w-full z-15">
        <div className="max-w-[1320px] mx-auto w-full px-5 py-4">
          <SectionTitle title="Portfolio" />

          <ProjectSlider data={activeDemoRepos} title="Active Demos" />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
