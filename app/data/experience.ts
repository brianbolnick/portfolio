export interface Role {
  title: string;
  startDate: string;
  endDate: string;
}

export interface ExperienceEntry {
  company: string;
  companyShort: string;
  description: string;
  url: string;
  color: string;
  logo?: string;
  logoType?: "svg" | "image";
  logoNaturalColors?: boolean;
  roles: Role[];
  slug: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Veras",
    companyShort: "Veras",
    description:
      "Workforce management platform for senior living and healthcare — scheduling, time & attendance, and a full HRIS vision.",
    url: "https://veras.com",
    color: "#000000",
    logo: "/logos/veras-wordmark-white.svg",
    logoType: "svg",
    slug: "veras",
    roles: [
      {
        title: "Co-Founder & Chief Product Officer",
        startDate: "2022-07",
        endDate: "Present",
      },
    ],
  },
  {
    company: "Emotive",
    companyShort: "Emotive",
    description:
      "E-commerce SMS marketing platform that drives revenue through conversational text messaging.",
    url: "https://emotive.io",
    color: "#112b35",
    logo: "/logos/emotive.svg",
    logoType: "svg",
    slug: "emotive",
    roles: [
      {
        title: "Lead Software Engineer, Payments",
        startDate: "2021-09",
        endDate: "2022-07",
      },
      {
        title: "Senior Software Engineer",
        startDate: "2021-05",
        endDate: "2021-09",
      },
    ],
  },
  {
    company: "Podium",
    companyShort: "Podium",
    description:
      "Customer communication platform that helps local businesses manage messaging, reviews, and payments.",
    url: "https://podium.com",
    color: "#4f6ef6",
    logo: "/logos/podium-logo.svg",
    logoType: "svg",
    slug: "podium",
    roles: [
      {
        title: "Senior Software Engineer",
        startDate: "2020-10",
        endDate: "2021-05",
      },
      {
        title: "Software Engineer",
        startDate: "2018-09",
        endDate: "2020-11",
      },
    ],
  },
  {
    company: "The Church of Jesus Christ of Latter-day Saints",
    companyShort: "LDS Church",
    description:
      "Built web applications and tools for one of the world's largest religious organizations.",
    url: "https://churchofjesuschrist.org",
    color: "#1b4a6b",
    logo: "/logos/churchlogo.webp",
    logoType: "image",
    slug: "lds-church",
    roles: [
      {
        title: "Software Engineer",
        startDate: "2018-04",
        endDate: "2018-09",
      },
    ],
  },
  {
    company: "Instructure",
    companyShort: "Instructure",
    description:
      "EdTech company behind Canvas, the leading learning management system used by schools and universities worldwide.",
    url: "https://instructure.com",
    color: "#111922",
    logo: "/logos/instructure-logo.svg",
    logoType: "svg",
    logoNaturalColors: true,
    slug: "instructure",
    roles: [
      {
        title: "Principal Implementation Project Manager",
        startDate: "2018-02",
        endDate: "2018-04",
      },
      {
        title: "Implementation Consultant",
        startDate: "2016-02",
        endDate: "2018-02",
      },
      {
        title: "Content Migration Specialist",
        startDate: "2015-04",
        endDate: "2016-02",
      },
      {
        title: "L1 Technical Support Engineer",
        startDate: "2014-12",
        endDate: "2015-04",
      },
    ],
  },
];

export function formatDate(dateStr: string): string {
  if (dateStr === "Present") return "Present";
  const [year, month] = dateStr.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export function getDateRange(entry: ExperienceEntry): string {
  const earliest = entry.roles[entry.roles.length - 1].startDate;
  const latest = entry.roles[0].endDate;
  return `${formatDate(earliest)} — ${formatDate(latest)}`;
}
