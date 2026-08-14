export interface NewsItem {
  id: string;
  date: string; // ISO format: YYYY-MM-DD
  title: string;
  description: string;
  url?: string;
  type: "publication" | "award" | "talk" | "media" | "other";
  featured?: boolean;
  images?: string[];
}

export const news: NewsItem[] = [
  {
    id: "news0",
    date: "2026-08-12",
    title: "Oral Presentation at 6th BK21 Energy New Industry Research Competition",
    description:
      "Presented the research 'Cross-Zone Meta Learning for Intelligent Urban Electric Vehicle Charging Infrastructure Management' at the 6th BK21 Energy New Industry Research Performance Oral Presentation Competition, held at Engineering Building 1, Jeju National University.",
    type: "talk",
    featured: true,
    images: [
      "/images/presentations/6thNewEnergyIndustryColloquium0.jpeg",
      "/images/presentations/6thNewEnergyIndustryColloquium1.jpeg",
      "/images/presentations/6thNewEnergyIndustryColloquium2.jpeg",
      "/images/presentations/6thNewEnergyIndustryColloquium3.jpeg",
      "/images/presentations/6thNewEnergyIndustryColloquium4.jpeg",
      "/images/presentations/6thNewEnergyIndustryColloquium5.jpeg",
      "/images/presentations/6thNewEnergyIndustryColloquium6.jpeg",
      "/images/presentations/6thNewEnergyIndustryColloquium7.jpeg",
      "/images/presentations/6thNewEnergyIndustryColloquium8.jpeg",
      "/images/presentations/6thNewEnergyIndustryColloquium9.jpeg",
    ],
  },
  {
    id: "news1",
    date: "2026-06-04",
    title: "Oral Presentation at 2026 KIIT Summer Conference",
    description: "Presented the paper 'Lightweight Deep Learning Framework for Multi-Horizon Probabilistic EV Charging Energy Forecasting' at the Korea Information Technology Society Summer Conference 2026, Maison Glad Jeju Hotel, Jeju, Republic of Korea.",
    type: "talk",
    featured: true,
    images: [
      "/images/presentations/kiit-2026-0.jpeg",
      "/images/presentations/kiit-2026-1.jpeg",
      "/images/presentations/kiit-2026-2.jpeg",
      "/images/presentations/kiit-2026-3.jpeg",
      "/images/presentations/kiit-2026-4.jpeg",
      "/images/presentations/kiit-2026-5.jpeg",
    ],
  },
  {
    id: "news2",
    date: "2026-05-25",
    title: "Paper published in Information Sciences",
    description: "Our paper 'CUP-EV: Hybrid DLinear-based Cost and Uncertainty-aware Probabilistic Multi-Horizon Electric Vehicle Charging Forecasting' has been published in Information Sciences.",
    url: "https://doi.org/10.1016/j.ins.2026.123681",
    type: "publication",
    featured: true,
  },
  {
    id: "news3",
    date: "2026-05-18",
    title: "Paper published in Journal of Energy Storage",
    description: "Our paper 'Cost-Aware Evolutionary Framework for Multi-Objective Coordination of Electric Vehicle Charging under Grid Tariffs' has been published in Journal of Energy Storage (vol. 169, p. 122681).",
    url: "https://doi.org/10.1016/j.est.2026.122681",
    type: "publication",
    featured: true,
  },
  {
    id: "news4",
    date: "2025-12-19",
    title: "Oral Presentation at ICCC 2025",
    description: "Presented the paper 'Multi-Objective Optimization of EV Charging Demand in South Korea' at the International Conference on Convergence Content (ICCC 2025), Taipei, Taiwan.",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12555711",
    type: "talk",
    featured: false,
    images: [
      "/images/presentations/iccc-2025-0.jpeg",
      "/images/presentations/iccc-2025-1.jpeg",
      "/images/presentations/iccc-2025-2.jpeg",
      "/images/presentations/iccc-2025-3.jpeg",
      "/images/presentations/iccc-2025-4.jpeg",
    ],
  },
  {
    id: "news5",
    date: "2025-11-14",
    title: "Paper published in Energy Reports",
    description: "Our paper 'TEF-PLM: A Tabular and Embeddings Fusion Framework using Pretrained Language Model for Enhanced Electric Vehicle Energy Forecasting' has been published in Energy Reports (vol. 14, pp. 3952-3976).",
    url: "https://doi.org/10.1016/j.egyr.2025.11.004",
    type: "publication",
    featured: false,
  },
  {
    id: "news6",
    date: "2025-11-05",
    title: "Paper published in Applied Energy",
    description: "Our paper 'A Hybrid Deep Learning Framework for Multivariate Energy Forecasting and Peak Load Prediction in Electric Vehicle Charging Infrastructure' has been published in Applied Energy (vol. 402, p. 126964).",
    url: "https://doi.org/10.1016/j.apenergy.2025.126964",
    type: "publication",
    featured: true,
  },
  {
    id: "news7",
    date: "2025-08-27",
    title: "Excellent Research Performance Award",
    description: "Recognized with the Excellent Research Performance Award at the 4th BK21 Energy New Industry Research Achievement Competition, Jeju National University.",
    type: "award",
    featured: true,
  },
  {
    id: "news8",
    date: "2025-08-22",
    title: "Best Paper Award at ADINTECH 2025",
    description: "Awarded the Best Paper Award at the 2025 International Conference on Advanced Information Technology (ADINTECH 2025), Phnom Penh, Cambodia, for the paper 'Augmenting LLM-Prompted Features and Deep RNNs for Accurate EV Energy Demand Forecasting'.",
    type: "award",
    featured: true,
  },
  {
    id: "news9",
    date: "2025-08-20",
    title: "Online Presentation at ADINTECH 2025",
    description: "Presented the paper 'Augmenting LLM-Prompted Features and Deep RNNs for Accurate EV Energy Demand Forecasting' at the 2025 International Conference on Advanced Information Technology (ADINTECH 2025), Phnom Penh, Cambodia.",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12333644",
    type: "talk",
    featured: false,
  },
  {
    id: "news10",
    date: "2025-07-23",
    title: "Paper published in IEEE Access",
    description: "Our paper 'A Stacking Ensemble Framework Leveraging Synthetic Data for Accurate and Stable Crop Yield Forecasting' has been published in IEEE Access (vol. 13, pp. 136909-136926).",
    url: "https://doi.org/10.1109/ACCESS.2025.3591802",
    type: "publication",
    featured: false,
  },
  {
    id: "news11",
    date: "2025-06-12",
    title: "Oral Presentation at 2025 KIIT Summer Conference",
    description: "Presented the paper 'Enhancing Energy Prediction Accuracy at EV Charging Stations Using Conv-BiLSTM with Advanced Features' at the Korea Information Technology Society Summer Conference 2025, Maison Glad Jeju Hotel, Jeju, Republic of Korea.",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12288507",
    type: "talk",
    featured: false,
  },
  {
    id: "news12",
    date: "2025-03-01",
    title: "Started PhD at Jeju National University",
    description: "Began Ph.D. in Electronics Engineering at Jeju National University, Republic of Korea, under the supervision of Prof. Yung-Cheol Byun at the Machine Learning Laboratory. Recipient of the BK21 FOUR Research Scholarship.",
    type: "other",
    featured: true,
  },
];