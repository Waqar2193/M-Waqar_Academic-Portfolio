export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  startDate: string;
  endDate?: string;
  status: "active" | "completed" | "on-hold";
  url?: string;
  github?: string;
  paper?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "proj0",
    title: "MTML-EV: Cross-Zone Meta-Learning for Urban EV Infrastructure",
    description: "Multi-target meta-learning system that transfers knowledge across urban zones for joint forecasting of EV charging demand and energy use.",
    longDescription: "Focuses on cross-zone generalization for sustainable cities: meta-learning across districts to improve multi-target forecasts under data scarcity.",
    tags: ["Meta-Learning", "Cross-Zone", "Multi-Target", "Sustainable Cities"],
    startDate: "2025-09",
    endDate: "Present",
    status: "active",
    paper: "https://doi.org/10.1016/j.scs.2026.107865",
    featured: true,
  },
  {
    id: "proj1",
    title: "Hybrid Deep Learning for EV Charging Forecasting",
    description: "Multivariate framework that fuses hybrid architectures for peak load and energy forecasting at charging stations.",
    longDescription: "Explores architectural hybrids for multivariate EV load forecasting with emphasis on peak-load reliability.",
    tags: ["Deep Learning", "Multivariate", "Peak Load", "EV Charging"],
    startDate: "2025-03",
    endDate: "Present",
    status: "active",
    paper: "https://doi.org/10.1016/j.apenergy.2025.126964",
    featured: true,
  },
  {
    id: "proj2",
    title: "CUP-EV: Probabilistic EV Charging Forecasting",
    description: "DLinear-based probabilistic model providing calibrated uncertainty for multi-horizon EV charging forecasts.",
    longDescription: "Cost- and uncertainty-aware design for decision support in grid and station operations.",
    tags: ["Probabilistic", "DLinear", "Uncertainty", "Multi-Horizon"],
    startDate: "2025-03",
    endDate: "Present",
    status: "active",
    paper: "https://doi.org/10.1016/j.ins.2026.123681",
    featured: true,
  },
  {
    id: "proj3",
    title: "Multi-Objective EV Charging Coordination",
    description: "Evolutionary optimization for cost-aware scheduling of EV charging under dynamic grid tariffs.",
    longDescription: "Balances cost, stability and user constraints via multi-objective evolutionary search.",
    tags: ["Evolutionary", "Multi-Objective", "Grid Tariffs", "Scheduling"],
    startDate: "2025-03",
    endDate: "Present",
    status: "active",
    paper: "https://doi.org/10.1016/j.est.2026.122681",
    featured: false,
  },
  {
    id: "proj4",
    title: "Crop Yield Forecasting with Stacking Ensembles",
    description: "Synthetic-data-augmented stacking ensemble for stable, accurate crop yield prediction.",
    longDescription: "Tests stability of ensemble generalization across agricultural scenarios.",
    tags: ["Ensemble", "Synthetic Data", "Agriculture", "Stability"],
    startDate: "2025-03",
    endDate: "2025-08",
    status: "completed",
    paper: "https://doi.org/10.1109/ACCESS.2025.3591802",
    featured: false,
  },
  {
    id: "proj5",
    title: "TEF-PLM: LLM-Augmented EV Energy Forecasting",
    description: "Fusion of tabular features and pretrained language-model embeddings for EV energy forecasting.",
    longDescription: "Investigates structured + unstructured fusion via PLM embeddings.",
    tags: ["LLMs", "Embeddings Fusion", "Tabular", "EV Energy"],
    startDate: "2025-03",
    endDate: "2025-07",
    status: "completed",
    paper: "https://doi.org/10.1016/j.egyr.2025.11.004",
    featured: false,
  },
  {
    id: "proj6",
    title: "LLM-Prompted Features for EV Demand Forecasting",
    description: "Prompt-driven feature engineering combined with deep RNNs for demand forecasting.",
    longDescription: "Awarded Best Paper at ADINTECH 2025.",
    tags: ["LLMs", "RNNs", "Feature Engineering", "ADINTECH"],
    startDate: "2025-03",
    endDate: "2025-06",
    status: "completed",
    paper: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12333644",
    featured: true,
  },
];
