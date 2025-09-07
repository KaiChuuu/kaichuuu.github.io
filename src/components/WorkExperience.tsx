import { workExperienceData } from "@/data/WorkExperienceData";
import type { WorkExperienceDataType } from "@/types/WorkExperienceDataType";

function WorkExperience() {
  return (
    <div>
      <div className="flex flex-col text-dark-blue gap-5">
        {workExperienceData.map(
          (company: WorkExperienceDataType, index: number) => (
            <div
              className="h-40 flex justify-between p-5 px-10 py-7 bg-tr-grey-white-gradient shadow-lg hover:scale-102 transition-all duration-500"
              key={index}
            >
              <div className="w-2/3 flex flex-col justify-center">
                <div className="font-bold text-base-md">
                  {company.name} - {company.title}
                </div>
                <div className="text-base-sm mt-1">
                  from <span className="text-base-md">{company.startDate}</span>{" "}
                  to <span className="text-base-md">{company.endDate}</span>
                </div>

                <div className="mt-3 text-base-md">{company.description}</div>
              </div>
              <div className="w-1/3 flex justify-end items-center">
                <img className="w-25" src={company.logo} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default WorkExperience;
