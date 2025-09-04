import ProjectSlider from "@/components/ProjectSlider";
import ProjectSearch from "@/components/ProjectSearch";
import { useRepos } from "@/context/ReposContext";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import SectionTitle from "@/components/common/SectionTitle";

import FallingLeaves from "@/components/FallingLeaves";
import CherryBlossomTree from "@/assets/cherry-blossom-tree.png";
import GrassGround from "@/assets/grass-ground.png";
import CertificationList from "@/components/CertificationList";

function PortfolioPage() {
  const { repos, loading } = useRepos();

  const activeDemoRepos = repos.filter((r) => r.homepage && r.homepage !== "");

  return (
    <div className="flex flex-col min-h-screen bg-vert-grey-grey-gradient relative overflow-hidden">
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

      {/* <div className="relative w-full bg-ground">
        <div
          className="absolute -top-14 w-full h-20 bg-repeat-x"
          style={{
            backgroundImage: `url(${GrassGround})`,
            backgroundSize: "500px auto",
          }}
        /> */}

      <div className="flex-1 max-w-[1440px] mx-auto w-full z-15">
        <div className="max-w-[1320px] mx-auto w-full px-5 py-4">
          <SectionTitle title="Certifications" />

          <CertificationList />

          <div className="mt-30" />
        </div>
      </div>
      {/* </div> */}

      <Footer />
    </div>
  );
}

export default PortfolioPage;
