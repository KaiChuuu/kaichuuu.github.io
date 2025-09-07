import { useState } from "react";

import type { Repo } from "@/context/ReposContext";

import RightArrowIcon from "@/assets/right-arrow.svg?react";
import UpArrowIcon from "@/assets/up-arrow.svg?react";
import Dropdown from "@/components/common/Dropdown";
import RepoCover from "@/components/common/RepoCover";

import { techStackGroup, languageGroup } from "@/data/TopicGroupings";

interface ProjectSearchProps {
  title: string;
  data: Repo[];
}

function ProjectSearch({ title, data }: ProjectSearchProps) {
  const [isFading, setIsFading] = useState(false);

  const [query, setQuery] = useState("");
  const [techStack, setTechStack] = useState("");
  const [language, setLanguage] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const maxCardsPerPage = 9;

  const startIndex = (currentPage - 1) * maxCardsPerPage;
  const endIndex = startIndex + maxCardsPerPage;

  const filteredData = data.filter((repo) => {
    const matchesTechStack = !techStack || repo.topics?.includes(techStack);
    const matchesLanguage = !language || repo.topics?.includes(language);

    const searchLC = query.toLowerCase();
    const matchesSearch =
      !query ||
      repo.topics?.some((topic) => {
        return topic.toLowerCase().includes(searchLC);
      }) ||
      repo.name.toLowerCase().includes(searchLC);

    return matchesTechStack && matchesLanguage && matchesSearch;
  });
  const totalPages = Math.ceil(filteredData.length / maxCardsPerPage);
  const slicedData = filteredData.slice(startIndex, endIndex);

  const updateTechStack = (value: string) => {
    setTechStack(value);
    setCurrentPage(1);
  };

  const updateLanguage = (value: string) => {
    console.log(value, "<- LANGUAGE");
    setLanguage(value);
    setCurrentPage(1);
  };

  const nextPage = () => {
    if (currentPage === totalPages || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage((page) => page + 1);
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
      setIsFading(false);
    }, 1500);
  };

  console.log(filteredData.length, "????");

  return (
    <div className="flex flex-col flex-wrap gap-5">
      <div className="flex items-center justify-between">
        <div className="py-4 font-bold text-base-normal-title bg-vert-blue-black-gradient bg-clip-text text-transparent">
          {title}
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search Projects or Tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-interact-grey px-4 py-2 text-left shadow-lg flex justify-between items-center text-white text-base-md"
          />
          <Dropdown
            name="Tech Stack"
            options={techStackGroup}
            onSelect={(value) => updateTechStack(value)}
          />
          <Dropdown
            name="Language"
            width="w-35"
            options={languageGroup}
            onSelect={(value) => updateLanguage(value)}
          />
        </div>
      </div>
      <div className="flex flex-col relative">
        <div className={`grid grid-cols-3 gap-3`}>
          {slicedData.map((repo, index) => {
            return (
              <div
                key={repo.id ?? `${currentPage}-${index}`}
                className={`h-65 flex flex-col text-dark-blue bg-white shadow-lg relative hover:scale-105
                  ${isFading ? "fade-out" : "fade-in"}`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <a
                  href={repo.homepage || repo.html_url || "#"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-full h-full overflow-hidden relative transition-all duration-1000"
                >
                  <RepoCover
                    repoName={repo.name}
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                </a>

                <div className="flex flex-col justify-between h-15 hover:h-30 transition-all duration-300 ease-in-out absolute bottom-0 bg-vert-black-white-gradient w-full p-4 items-center group">
                  <div className="w-full">
                    <div className="flex w-full justify-between items-center">
                      <a
                        href={repo.html_url || "#"}
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
                      {repo.displayed_topics?.map((topic, index) => (
                        <div
                          key={index}
                          className={`${
                            index === 0 ? "bg-dark-grey" : "bg-white"
                          } flex justify-center items-center text-dark-blue text-base-sm px-2 py-1 shadow-lg rounded-l-full rounded-r-full`}
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
      </div>
      {filteredData.length > maxCardsPerPage && (
        <div className="flex justify-end gap-4 mt-4">
          <div onClick={prevPage} className="text-white">
            <RightArrowIcon className="w-10 h-10 scale-x-[-1] shadow-lg transition-all duration-750 bg-interact-grey hover:bg-pink hover:text-brown" />
          </div>
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
          <div onClick={nextPage} className="text-white">
            <RightArrowIcon className="w-10 h-10 shadow-lg transition-all duration-750 bg-interact-grey hover:bg-pink hover:text-brown" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectSearch;
