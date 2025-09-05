import type { CertificationDataType } from "@/types/CertificationDataType";

import AWSCertifiedCloudPractitionerIcon from "@/assets/logos/aws-certified-cloud-practitioner.png";
import CPPAssociateProgrammerIcon from "@/assets/logos/cpp-certified-associate-programmer.png";
import OracleFoundationAssociateIcon from "@/assets/logos/oracle-foundations-associate-ai.png";
import OracleProfessionalGenerativeAIIcon from "@/assets/logos/oracle-professional-generative-ai.png";

export const certificationsData: CertificationDataType[] = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    description:
      "Strong understanding of the Large Language Models (LLMs) and are skilled at using OCI Generative AI Service.",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8DFDFDE29C61D5783B2B60B0F59DA2CF661D6CB011B42B0CF59CBCE33861FA2E",
    image: OracleProfessionalGenerativeAIIcon,
    issuer_name: "Oracle",
    issues_at_date: "2025-08-11",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    description:
      "Fundamental concepts of artificial intelligence (AI) and machine learning (ML). Application knowledge of these technologies within the Oracle Cloud Infrastructure.",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1517BFBBBEBACB01D5613D2151E19DAD385E10081BE0F838837400A4E49CDAB2",
    image: OracleFoundationAssociateIcon,
    issuer_name: "Oracle",
    issues_at_date: "2025-02-11",
  },
  {
    name: "CPA – C++ Certified Associate Programmer",
    description:
      "Ability to accomplish coding tasks related to the basics of programming in the C++ language, and the fundamental notions and techniques used in object-oriented programming.",
    link: "https://www.credly.com/badges/596af324-951f-4d4f-a57d-c6e4a1c70656/public_url",
    image: CPPAssociateProgrammerIcon,
    issuer_name: "C++ Institute",
    issues_at_date: "2023-06-13",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    description:
      "Fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge.",
    link: "https://www.credly.com/badges/788fc21c-7a4a-46a3-90a7-5a634a2aebae/public_url",
    image: AWSCertifiedCloudPractitionerIcon,
    issuer_name: "Amazon Web Services Training and Certification",
    issues_at_date: "2024-08-03",
  },
];
