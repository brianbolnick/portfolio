export interface Role {
  title: string;
  startDate: string;
  endDate: string;
}

export interface ExperienceEntry {
  company: string;
  companyShort: string;
  url: string;
  color: string;
  roles: Role[];
  slug: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Veras",
    companyShort: "Veras",
    url: "https://verasai.com",
    color: "#5eead4",
    slug: "veras",
    roles: [
      {
        title: "Co-Founder & CPO",
        startDate: "2022-07",
        endDate: "Present",
      },
    ],
  },
  {
    company: "Emotive",
    companyShort: "Emotive",
    url: "https://emotive.io",
    color: "#818cf8",
    slug: "emotive",
    roles: [
      {
        title: "Lead Software Engineer, Payments",
        startDate: "2021-05",
        endDate: "2022-06",
      },
    ],
  },
  {
    company: "Podium",
    companyShort: "Podium",
    url: "https://podium.com",
    color: "#3b82f6",
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
        endDate: "2020-10",
      },
    ],
  },
  {
    company: "The Church of Jesus Christ of Latter-Day Saints",
    companyShort: "LDS Church",
    url: "https://churchofjesuschrist.org",
    color: "#6366f1",
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
    url: "https://instructure.com",
    color: "#ef4444",
    slug: "instructure",
    roles: [
      {
        title: "Principal Implementation Project Manager",
        startDate: "2014-12",
        endDate: "2018-03",
      },
    ],
  },
];

export function formatDate(dateStr: string): string {
  if (dateStr === "Present") return "Present";
  const [year, month] = dateStr.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export function getDateRange(entry: ExperienceEntry): string {
  const earliest = entry.roles[entry.roles.length - 1].startDate;
  const latest = entry.roles[0].endDate;
  return `${formatDate(earliest)} — ${formatDate(latest)}`;
}
