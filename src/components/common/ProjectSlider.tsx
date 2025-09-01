import { useState } from "react";

import type { Repo } from "@/context/ReposContext";

interface ProjectSliderProps {
  title: string;
  data: Repo[];
}

function ProjectSlider({ title, data }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(2);

  return (
    <div className="bg-blue-black-gradient p-4 rounded-t-2xl rounded-br-2xl flex flex-col flex-wrap gap-10">
      <div className="bg-blue-black-gradient border p-4 rounded-t-2xl text-base-title text-white">
        {title}
      </div>
      <div className="flex gap-3">
        {data.map((repo, index) => {
          const isActive = currentIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setCurrentIndex(index)}
              className={`${
                isActive ? "w-1/2 scale-101 z-10" : "w-1/4 scale-100 z-0"
              } transition-all duration-1000 ease-in-out 
              h-75 flex text-dark-blue bg-warm-white shadow-lg rounded-t-2xl rounded-br-2xl`}
            >
              <div
                className={`w-full overflow-hidden relative transition-all duration-1000 ${
                  isActive ? "rounded-tl-2xl" : "rounded-t-2xl rounded-br-2xl"
                }`}
              >
                <img
                  src={`https://raw.githubusercontent.com/KaiChuuu/${repo.name}/main/cover.jpg`}
                  alt={repo.name}
                  className="w-full h-full object-cover"
                />

                {/* <div className="bg-blue-black-gradient rounded-tr-2xl border-t border-r border-white-grey absolute px-6 py-1 bottom-0 left-0 bg-white text-white text-base-lg">
                  {repo.name}
                </div> */}
              </div>

              <div
                className={`bg-blue text-white shadow-lg rounded-r-2xl overflow-hidden transition-all duration-750 ease-in-out
                ${isActive ? "w-1/2 opacity-100 p-4" : "w-0 opacity-0"}
              `}
              >
                <h3 className="font-bold text-lg">{repo.name}</h3>
                <p className="text-sm mt-2">{repo.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSlider;
