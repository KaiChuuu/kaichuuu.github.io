import { useState } from "react";

import type { Repo } from "@/context/ReposContext";

import GitHubIcon from "@/assets/logos/github.svg?react";
import RightArrowIcon from "@/assets/right-arrow.svg?react";

import LogoMap from "@/data/LogoMap";

interface ProjectSearchProps {
  title: string;
  data: Repo[];
}

function ProjectSearch({ title, data }: ProjectSearchProps) {
  const [isFading, setIsFading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const maxCardsPerPage = 6;

  const totalPages = Math.ceil(data.length / maxCardsPerPage);
  const startIndex = (currentPage - 1) * maxCardsPerPage;
  const endIndex = startIndex + maxCardsPerPage;
  const filteredData = data.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage((page) => page + 1);
      setIsFading(false);
    }, 500);
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage((page) => page - 1);
      setIsFading(false);
    }, 500);
  };

  return (
    <div className="p-4 rounded-t-2xl rounded-br-2xl flex flex-col flex-wrap gap-10">
      <div className="bg-blue-black-gradient border p-4 rounded-t-2xl text-base-title text-white">
        {title}
      </div>
      <div className="flex flex-col relative">
        <div
          className={`grid grid-cols-3 gap-3 transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredData.map((repo, index) => {
            return (
              <div
                key={index}
                className="transition-all duration-1000 ease-in-out hover:scale-105
              h-75 flex flex-col text-dark-blue bg-white shadow-lg rounded-t-2xl rounded-br-2xl border border-gradient-blue"
              >
                <a
                  href={repo.homepage || repo.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="h-3/4 w-full overflow-hidden rounded-t-2xl relative transition-all duration-1000"
                >
                  <img
                    src={`https://raw.githubusercontent.com/KaiChuuu/${repo.name}/main/cover.jpg`}
                    alt={repo.name}
                    className="w-full h-full object-cover transition-all duration-1000 rounded-t-xl"
                  />

                  {/* <div className="bg-dark-blue rounded-tr-2xl border-t border-r border-white-grey absolute px-6 py-1 bottom-0 left-0 text-white text-base-lg">
                  {repo.name}
                </div> */}
                </a>

                <div className="h-1/4 flex flex-col bg-white text-dark-blue p-2 shadow-lg rounded-r-2xl overflow-hidden transition-all duration-750 ease-in-out relative">
                  <h3 className="font-bold text-lg">{repo.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {/* {repo.topics.map((topic, index) => (
                      <div>
                        <LogoMap name="cpp" />
                      </div>
                    ))} */}
                    <LogoMap name="cpp" />
                    <LogoMap name="csharp" />
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
