import { educationExperienceData } from "@/data/EducationExperienceData";
import type { EducationExperienceDataType } from "@/types/EducationExperienceDatatType";

import RightArrowIcon from "@/assets/right-arrow.svg?react";

function EducationExperience() {
  return (
    <div className="flex flex-col text-dark-blue gap-10">
      <div className="flex flex-col gap-5">
        {educationExperienceData.map(
          (school: EducationExperienceDataType, index: number) => (
            <div
              className="h-auto md:h-40 flex flex-col-reverse sm:flex-row justify-between p-5 px-10 py-7 bg-tr-grey-white-gradient shadow-lg hover:scale-102 transition-all duration-500"
              key={index}
            >
              <div className="w-full sm:w-2/3 flex flex-col justify-center mt-5 sm:mt-0">
                <div className="font-bold text-base-md">{school.name}</div>

                <div className="mt-1 text-base-md">
                  {school.degree} - {school.major}
                </div>

                <div className="text-base-sm mt-3">
                  from <span className="text-base-md">{school.startDate}</span>{" "}
                  to <span className="text-base-md">{school.endDate}</span>
                </div>
              </div>
              <div className="w-full sm:w-1/3 flex justify-start sm:justify-end items-center">
                <img className="w-25" src={school.logo} />
              </div>
            </div>
          )
        )}
      </div>

      <div
        className="flex justify-end items-center text-base-md text-dark-blue a-default"
        onClick={() => {
          window.location.hash = "portfolio#certifications";
        }}
      >
        <div>CERTIFICATIONS</div>

        <RightArrowIcon className="w-8 h-8" />
      </div>
    </div>
  );
}

export default EducationExperience;
