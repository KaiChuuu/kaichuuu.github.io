import { useState } from "react";

import type { Repo } from "@/context/ReposContext";

import GitHubIcon from "@/assets/logos/github.svg?react";
import RightArrowIcon from "@/assets/right-arrow.svg?react";

interface ProjectSliderProps {
  title: string;
  data: Repo[];
}

function ProjectSlider({ title, data }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const maxCardsPerPage = 3;

  const totalPages = Math.ceil(data.length / maxCardsPerPage);
  const startIndex = (currentPage - 1) * maxCardsPerPage;
  const endIndex = startIndex + maxCardsPerPage;
  const filteredData = data.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setIsFading(true);
    setCurrentIndex(0);
    setTimeout(() => {
      setCurrentPage((page) => page + 1);
      setIsFading(false);
    }, 500);
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    setIsFading(true);
    setCurrentIndex(0);
    setTimeout(() => {
      setCurrentPage((page) => page - 1);
      setIsFading(false);
    }, 500);
  };

  return (
    <div className="p-4 flex flex-col flex-wrap gap-10">
      <div className="py-4 font-bold text-base-title bg-vert-blue-black-gradient bg-clip-text text-transparent">
        {title}
      </div>
      <div className="relative">
        <div
          className={`flex gap-3 transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredData.map((repo, index) => {
            const isActive = currentIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setCurrentIndex(index)}
                className={`${
                  isActive ? "w-1/2 scale-101 z-10" : "w-1/4 scale-100 z-0"
                } transition-all duration-1000 ease-in-out
                border border-gradient-blue
                h-75 flex text-dark-blue bg-warm-white shadow-lg rounded-t-2xl rounded-br-2xl`}
              >
                <a
                  href={repo.homepage || repo.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={`w-full overflow-hidden relative transition-all duration-1000 ${
                    isActive ? "rounded-tl-2xl" : "rounded-t-2xl rounded-br-2xl"
                  }`}
                >
                  <img
                    src={`https://raw.githubusercontent.com/KaiChuuu/${repo.name}/main/cover.jpg`}
                    alt={repo.name}
                    className="w-full h-full object-cover transition-all duration-1000 hover:scale-105"
                  />

                  {/* <div className="bg-dark-blue rounded-tr-2xl border-t border-r border-white-grey absolute px-6 py-1 bottom-0 left-0 text-white text-base-lg">
                  {repo.name}
                </div> */}
                </a>

                <div
                  className={`bg-white text-dark-blue shadow-lg rounded-r-2xl overflow-hidden transition-all duration-750 ease-in-out relative
                ${isActive ? "w-1/2 opacity-100 p-4" : "w-0 opacity-0"}
              `}
                >
                  <h3 className="font-bold text-lg">{repo.name}</h3>
                  <p className="text-sm mt-2">{repo.description}</p>

                  <a
                    href={repo.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="absolute bottom-0 right-0 p-4"
                  >
                    <GitHubIcon className="w-10 h-10 a-default" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white -translate-x-25"
        >
          <RightArrowIcon className="w-15 h-15 scale-x-[-1] bg-gradient-blue rounded-full shadow-lg " />
        </div>
        <div
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white translate-x-25"
        >
          <RightArrowIcon className="w-15 h-15 bg-gradient-black rounded-full shadow-lg transition-all duration-500 hover:bg-pink hover:text-brown" />
        </div>
      </div>
    </div>
  );
}

export default ProjectSlider;
