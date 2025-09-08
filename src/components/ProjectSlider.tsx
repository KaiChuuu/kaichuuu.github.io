import { useState, useEffect } from "react";

import type { Repo } from "@/context/ReposContext";

import GitHubIcon from "@/assets/logos/github.svg?react";
import RightArrowIcon from "@/assets/right-arrow.svg?react";
import RepoCover from "@/components/common/RepoCover";

interface ProjectSliderProps {
  title: string;
  data: Repo[];
}

function ProjectSlider({ title, data }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [maxCardsPerPage, setMaxCardsPerPage] = useState(3);

  const totalPages = Math.ceil(data.length / maxCardsPerPage);
  const startIndex = (currentPage - 1) * maxCardsPerPage;
  const endIndex = startIndex + maxCardsPerPage;
  const slicedData = data.slice(startIndex, endIndex);

  const md = 768,
    lg = 1024;

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < lg && window.innerWidth >= md) {
        setMaxCardsPerPage(2);
        if (currentIndex == 2) setCurrentIndex(0);
      } else if (window.innerWidth >= lg) {
        setMaxCardsPerPage(3);
      } else {
        setMaxCardsPerPage(1);
        if (currentIndex >= 1) setCurrentIndex(0);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, [currentIndex]);

  const nextPage = () => {
    if (currentPage === totalPages || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage((page) => page + 1);
      setCurrentIndex(0);
      setIsFading(false);
    }, 1500);
  };

  const indexPage = (index: number) => {
    if (index == currentPage || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage(index);
      setIsFading(false);
    }, 1500);
  };

  const prevPage = () => {
    if (currentPage === 1 || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage((page) => page - 1);
      setCurrentIndex(0);
      setIsFading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col flex-wrap gap-5">
      <div className="py-4 font-bold text-base-normal-title bg-vert-blue-black-gradient bg-clip-text text-transparent">
        {title}
      </div>

      <div className="flex gap-3">
        {slicedData.map((repo, index) => {
          const isActive = currentIndex === index;

          return (
            <div
              key={repo.id ?? `${currentPage}-${index}`}
              onMouseEnter={() => setCurrentIndex(index)}
              className={`duration-1000 ${
                isActive
                  ? "w-full md:w-2/3 lg:w-1/2 scale-100 md:scale-105 z-10"
                  : "md:w-1/3 lg:w-1/4 scale-95 z-0"
              } ${isFading ? "fade-out" : "fade-in"}
                h-75 flex text-dark-blue shadow-lg`}
              style={{
                animationDelay: `${index * 250}ms`,
              }}
            >
              <a
                href={repo.homepage || repo.html_url || "#"}
                rel="noopener noreferrer"
                target="_blank"
                className={`w-full overflow-hidden relative transition-all duration-1000`}
              >
                <RepoCover
                  repoName={repo.name}
                  className="w-full h-full object-cover transition-all duration-1000 hover:scale-105"
                />
              </a>

              <div
                className={`bg-tr-grey-white-gradient text-dark-blue shadow-lg overflow-hidden transition-all duration-750 ease-in-out relative
                ${isActive ? "w-1/2 opacity-100 p-4" : "w-0 opacity-0"}
              `}
              >
                <a
                  href={repo.homepage || repo.html_url || "#"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-bold text-base-lg hover:underline hover:underline-offset-4"
                >
                  {repo.name}
                </a>
                <p className="text-sm mt-2">{repo.description}</p>

                {repo.html_url && (
                  <a
                    href={repo.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="absolute bottom-0 right-0 p-4"
                  >
                    <GitHubIcon className="w-10 h-10 a-default" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {data.length > maxCardsPerPage && (
        <div className="flex justify-end gap-4 mt-4">
          <div onClick={prevPage} className="text-white">
            <RightArrowIcon className="w-10 h-10 scale-x-[-1] shadow-lg transition-all duration-750 bg-interact-grey hover:bg-pink hover:text-brown" />
          </div>
          <div className="hidden md:flex gap-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                onClick={() => {
                  indexPage(index + 1);
                }}
                className={`${
                  index + 1 == currentPage
                    ? "bg-pink text-brown"
                    : "bg-dark-grey hover:bg-pink hover:text-brown"
                } shadow-lg w-10 h-10 text-base-md items-center justify-center flex transition-all duration-500`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div onClick={nextPage} className="text-white">
            <RightArrowIcon className="w-10 h-10 shadow-lg transition-all duration-750 bg-interact-grey hover:bg-pink hover:text-brown" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectSlider;
