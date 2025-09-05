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
          className="hover:scale-105 px-15 py-7 bg-tr-grey-white-gradient shadow-lg flex transition-all duration-500 text-black"
        >
          <div className="shadow-lg bg-dark-grey rounded-full p-4">
            <img className="w-35 h-36" src={badge.image}></img>
          </div>

          <div className="flex-1 flex flex-col justify-between text-center text-base-lg px-5">
            <div className="text-base-md font-bold">{badge.name}</div>

            <div className="text-base-sm py-2">{badge.description}</div>

            <div className="flex justify-between">
              <div className="text-base-sm font-bold">{badge.issuer_name}</div>
              <div className="text-base-sm">
                Issued at: <b>{badge.issues_at_date}</b>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default CertificationList;
