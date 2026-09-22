export interface EducationEntry {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  honors?: string[];
  thesis?: string;
  advisor?: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  type: "academic" | "industry" | "teaching" | "service";
}

export const education: EducationEntry[] = [
  {
    id: "edu1",
    degree: "Ph.D.",
    field: "Electronics Engineering",
    institution: "Jeju National University",
    location: "Jeju, Republic of Korea",
    startDate: "2025-03",
    endDate: "Present",
    description: "Research focus: Probabilistic time-series forecasting, energy informatics, electric vehicle charging systems, and meta-learning. Working at the Machine Learning Laboratory.",
    honors: ["BK21 FOUR Research Scholarship (March 2025 – Present)"],
    advisor: "Prof. Yung-Cheol Byun",
  },
  {
    id: "edu2",
    degree: "M.S.",
    field: "Computer Science",
    institution: "COMSATS University Islamabad",
    location: "Islamabad, Pakistan",
    startDate: "2016-09",
    endDate: "2019-03",
    description: "Specialization in Computer Science with a focus on machine learning and data science.",
    honors: ["CGPA: 3.71/4.00", "3rd Position among 25 students"],
  },
  {
    id: "edu3",
    degree: "B.S. (Honors)",
    field: "Computer Science",
    institution: "University of Sargodha",
    location: "Sargodha, Pakistan",
    startDate: "2012-09",
    endDate: "2016-06",
    description: "Bachelor of Science (Honors) in Computer Science.",
    honors: ["CGPA: 3.50/4.00", "5th Position among 50 students"],
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: "exp1",
    role: "Research Scholar",
    organization: "Machine Learning Laboratory, Jeju National University",
    location: "Jeju, Republic of Korea",
    startDate: "2025-03",
    endDate: "Present",
    description: [
      "Research on probabilistic and cross-zone forecasting for EV charging infrastructure and energy systems",
      "Collaboration on reproducible experiments and grid-aware evaluation",
    ],
    type: "academic",
  },
  {
    id: "exp2",
    role: "Lecturer (Computer Science)",
    organization: "Bahria Foundation College",
    location: "Attock, Pakistan",
    startDate: "2018-03",
    endDate: "2025-02",
    description: [
      "Taught Introduction to ICT, Programming Fundamentals, and Data Science Foundations",
      "Designed laboratory exercises and assessments",
      "Supervised student programming projects",
    ],
    type: "teaching",
  },
];