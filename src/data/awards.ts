export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description?: string;
  category: "fellowship" | "paper" | "academic" | "service" | "other";
  certificate?: string[];
}

export const awards: Award[] = [
  {
    id: "award0",
    title: "Grand Prize, 6th BK21 Energy New Industry Research Competition",
    organization: "Jeju National University",
    year: 2026,
    description: "Awarded the Grand Prize at the 6th BK21 Energy New Industry Research Performance Oral Presentation Competition, Jeju National University, held on August 12, 2026.",
    category: "academic",
    certificate: [
      "/images/certificates/Grand-prize-oral-presentation-certificate.png",
      "/images/certificates/Grand-prize-oral-presentation.png",
    ],
  },
  {
    id: "award1",
    title: "BK21 FOUR Research Scholarship",
    organization: "Jeju National University",
    year: 2025,
    description: "Fully funded Ph.D. scholarship under the Brain Korea 21 (BK21 FOUR) Program. Started in March 2025 and ongoing until the completion of the Ph.D. degree.",
    category: "fellowship",
  },
  {
    id: "award2",
    title: "Best Paper Award",
    organization: "ADINTECH 2025",
    year: 2025,
    description: "Awarded for the paper 'Augmenting LLM-Prompted Features and Deep RNNs for Accurate EV Energy Demand Forecasting' at the 2025 International Conference on Advanced Information Technology, Phnom Penh, Cambodia (August 22, 2025).",
    category: "paper",
    certificate: ["/images/certificates/adintech-best-paper-award.png"],
  },
  {
    id: "award3",
    title: "Excellent Research Performance Award",
    organization: "BK21, Jeju National University",
    year: 2025,
    description: "Recognized in the 4th BK21 Energy New Industry Research Achievement Competition on August 27, 2025.",
    category: "academic",
    certificate: ["/images/certificates/excellent-research-0.png", "/images/certificates/excellent-research-1.png"],
  },
  {
    id: "award4",
    title: "Mentor Facilitator",
    organization: "Jeju National University",
    year: 2025,
    description: "Recognized for serving as a Mentor Facilitator, supporting and guiding fellow researchers.",
    category: "service",
    certificate: ["/images/certificates/mentor-facilitator.png"],
  },
  {
    id: "award5",
    title: "Oral Presentation at Research Symposium",
    organization: "Research, Development and Innovation Symposium, Jeju National University",
    year: 2025,
    description: "Presented the paper 'Enhancing Energy Prediction Accuracy at EV Charging Stations Using Conv-BiLSTM with Advanced Features' at the Research, Development and Innovation Symposium.",
    category: "paper",
    certificate: ["/images/certificates/oral-presentation-research-symposium.png"],
  },
  {
    id: "award6",
    title: "3rd Position, M.S. in Computer Science",
    organization: "COMSATS University Islamabad",
    year: 2019,
    description: "Ranked 3rd among 25 students in the M.S. Computer Science program.",
    category: "academic",
  },
  {
    id: "award7",
    title: "5th Position, B.S. (Hons.) in Computer Science",
    organization: "University of Sargodha",
    year: 2016,
    description: "Ranked 5th among 50 students in the B.S. (Hons.) Computer Science program.",
    category: "academic",
  },
];