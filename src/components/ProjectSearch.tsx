import { useState } from "react";

import type { Repo } from "@/context/ReposContext";

import RightArrowIcon from "@/assets/right-arrow.svg?react";
import UpArrowIcon from "@/assets/up-arrow.svg?react";

interface ProjectSearchProps {
  title: string;
  data: Repo[];
}

function ProjectSearch({ title, data }: ProjectSearchProps) {
  const [isFading, setIsFading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const maxCardsPerPage = 9;

  const totalPages = Math.ceil(data.length / maxCardsPerPage);
  const startIndex = (currentPage - 1) * maxCardsPerPage;
  const endIndex = startIndex + maxCardsPerPage;
  const filteredData = data.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage === totalPages || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage((page) => page + 1);
      setIsFading(false);
    }, 1500);
  };

  const prevPage = () => {
    if (currentPage === 1 || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage((page) => page - 1);
      setIsFading(false);
    }, 1500);
  };

  return (
    <div className="p-4 flex flex-col flex-wrap gap-10">
      <div className="py-4 text-base-title bg-vert-blue-black-gradient bg-clip-text text-transparent">
        {title}
      </div>
      <div className="flex flex-col relative">
        <div className={`grid grid-cols-3 gap-3`}>
          {filteredData.map((repo, index) => {
            return (
              <div
                key={repo.id ?? `${currentPage}-${index}`}
                className={`h-65 flex flex-col text-dark-blue bg-white shadow-lg relative
                  ${isFading ? "fade-out" : "fade-in"}`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <a
                  href={repo.homepage || repo.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-full h-full overflow-hidden relative transition-all duration-1000"
                >
                  <img
                    src={`https://raw.githubusercontent.com/KaiChuuu/${repo.name}/main/cover.jpg`}
                    alt={repo.name}
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                </a>

                <div className="flex flex-col justify-between h-15 hover:h-30 transition-all duration-300 ease-in-out absolute bottom-0 bg-vert-black-white-gradient w-full p-4 items-center group">
                  <div className="w-full">
                    <div className="flex w-full justify-between items-center">
                      <a
                        href={repo.html_url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-white text-base-lg font-bold hover:underline hover:underline-offset-4"
                      >
                        {repo.name}
                      </a>
                      <UpArrowIcon className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:rotate-180" />
                    </div>

                    <p className="mt-2 text-base-sm text-ellipsis hidden group-hover:block text-white truncate">
                      {repo.description}
                    </p>
                  </div>

                  <div className="w-full justify-between hidden transition-all duration-500 ease-in-out group-hover:block text-white">
                    <div className="flex gap-2">
                      {repo.topics.map((topic, index) => (
                        <div
                          key={index}
                          className="bg-white text-dark-blue text-base-sm px-2 py-1 shadow-lg rounded-l-full rounded-r-full"
                        >
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
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
      <div className="flex justify-center gap-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            className={`${
              index + 1 == currentPage
                ? "bg-gradient-blue"
                : "bg-gradient-black"
            } rounded-full shadow-lg w-13 h-13 items-center justify-center flex transition-all duration-500`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSearch;
