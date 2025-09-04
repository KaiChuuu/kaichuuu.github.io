import type { CertificationDataType } from "@/types/CertificationDataType";
import { certificationsData } from "@/data/CertificationData";

function CertificationList() {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center flex-wrap">
      {certificationsData.map((badge: CertificationDataType, index) => (
        <a
          href={badge.link}
          rel="noopener noreferrer"
          target="_blank"
          key={index}
          className="px-15 py-7 bg-tr-grey-white-gradient shadow-lg flex transition-all duration-500 text-black"
        >
          <div className="shadow-lg bg-dark-grey rounded-full p-4">
            <img className="w-35 h-36" src={badge.image}></img>
          </div>

          <div className="flex-1 flex flex-col justify-center text-center text-base-lg px-5">
            <div className="text-base-md font-bold">{badge.name}</div>
            <div className="text-base-md mt-5">{badge.issuer_name}</div>
            <div className="text-base-sm mt-2">
              Issued at: {badge.issues_at_date}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default CertificationList;
