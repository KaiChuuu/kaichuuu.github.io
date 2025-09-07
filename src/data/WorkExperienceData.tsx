import type { WorkExperienceDataType } from "@/types/WorkExperienceDataType";

import SAPIcon from "@/assets/companies/sap-logo.png";
import ArcadeQuestIcon from "@/assets/companies/aq-logo.png";
import VJGAIcon from "@/assets/companies/vjga-logo.png";
import SuogogoIcon from "@/assets/companies/suogogo-technologies-logo.png";

export const workExperienceData: WorkExperienceDataType[] = [
  {
    name: "Suogogo Technologies Ltd.",
    title: "Full-Stack Developer Volunteer",
    logo: SuogogoIcon,
    description:
      "Participated in their last PI iteration and helped complete landing and merchant web pages using React. Overall, contributing to the development of multiple different designs, layouts, and interactive components.",
    startDate: "May 2025",
    endDate: "June 2025",
  },
  {
    name: "SAP",
    title: "Full-Stack Developer Intern",
    logo: SAPIcon,
    description:
      "Worked on developing features for the SAPForMe platform. In a cross-functional Scrum team, developed dashboard components end-to-end, collaborating on backend systems, frontend design, and testing.",
    startDate: "January 2022",
    endDate: "December 2022",
  },
  {
    name: "ArcadeQuest",
    title: "Software Engineer Intern",
    logo: ArcadeQuestIcon,
    description:
      "Developed a backend architecture to host and serve AI bots to automate matchmaking workflows for custom Fortnite tournaments. Also developed various notification systems, and a prize payout system.",
    startDate: "Feb 2021",
    endDate: "Sept 2021",
  },
  {
    name: "Vancouver Japanese Gardeners Association",
    title: "Frontend Developer",
    logo: VJGAIcon,
    description:
      "Manage and maintain VJGA’s React platform, implementing visual enhancements that improve user engagement and accessibility.",
    startDate: "Dec 2020",
    endDate: "Current",
  },
];
