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
    id: "proj1",
    title: "Hybrid Deep Learning for EV Charging Forecasting",
    description: "Developing a hybrid deep learning framework for multivariate energy forecasting and peak load prediction in electric vehicle charging infrastructure.",
    longDescription: "This project develops a hybrid deep learning framework that combines multiple neural network architectures for multivariate energy forecasting and peak load prediction in EV charging infrastructure. The framework addresses the challenges of accurate demand prediction in EV charging systems, published in Applied Energy.",
    tags: ["Deep Learning", "Time Series Forecasting", "EV Charging", "Energy Informatics"],
    startDate: "2025-03",
    endDate: "Present",
    status: "active",
    paper: "https://doi.org/10.1016/j.apenergy.2025.126964",
    featured: true,
  },
  {
    id: "proj2",
    title: "CUP-EV: Probabilistic EV Charging Forecasting",
    description: "Cost and uncertainty-aware probabilistic multi-horizon electric vehicle charging forecasting using hybrid DLinear-based framework.",
    longDescription: "CUP-EV is a hybrid DLinear-based framework for cost and uncertainty-aware probabilistic multi-horizon EV charging forecasting. It provides reliable uncertainty estimates for EV charging demand, enabling better decision-making for grid operators and charging station managers. Published in Information Sciences.",
    tags: ["Probabilistic Forecasting", "DLinear", "Uncertainty Quantification", "EV Charging"],
    startDate: "2025-03",
    endDate: "Present",
    status: "active",
    paper: "https://doi.org/10.1016/j.ins.2026.123681",
    featured: true,
  },
  {
    id: "proj3",
    title: "Multi-Objective EV Charging Coordination",
    description: "Cost-aware evolutionary framework for multi-objective coordination of electric vehicle charging under grid tariffs.",
    longDescription: "This project develops a cost-aware evolutionary framework for multi-objective coordination of EV charging under grid tariffs. The framework optimizes charging schedules to minimize costs while maintaining grid stability, addressing the complex trade-offs in EV charging infrastructure management. Published in Journal of Energy Storage.",
    tags: ["Evolutionary Algorithms", "Multi-Objective Optimization", "Grid Tariffs", "EV Charging"],
    startDate: "2025-03",
    endDate: "Present",
    status: "active",
    paper: "https://doi.org/10.1016/j.est.2026.122681",
    featured: false,
  },
  {
    id: "proj4",
    title: "Crop Yield Forecasting with Stacking Ensembles",
    description: "Stacking ensemble framework leveraging synthetic data for accurate and stable crop yield forecasting.",
    longDescription: "This project presents a stacking ensemble framework that leverages synthetic data augmentation for accurate and stable crop yield forecasting. The framework demonstrates improved prediction stability across diverse agricultural scenarios, contributing to food security and agricultural planning. Published in IEEE Access.",
    tags: ["Ensemble Learning", "Synthetic Data", "Crop Yield", "Forecasting"],
    startDate: "2025-03",
    endDate: "2025-08",
    status: "completed",
    paper: "https://doi.org/10.1109/ACCESS.2025.3591802",
    featured: false,
  },
  {
    id: "proj5",
    title: "TEF-PLM: LLM-Augmented EV Energy Forecasting",
    description: "Tabular and embeddings fusion framework using pretrained language models for enhanced electric vehicle energy forecasting.",
    longDescription: "TEF-PLM is a tabular and embeddings fusion framework that leverages pretrained language models to enhance EV energy forecasting accuracy by integrating structured and unstructured data. The framework demonstrates the power of combining LLM embeddings with traditional tabular data for energy forecasting. Published in Energy Reports.",
    tags: ["Large Language Models", "Embeddings Fusion", "Energy Forecasting", "EV Charging"],
    startDate: "2025-03",
    endDate: "2025-07",
    status: "completed",
    paper: "https://doi.org/10.1016/j.egyr.2025.11.004",
    featured: false,
  },
  {
    id: "proj6",
    title: "LLM-Prompted Features for EV Demand Forecasting",
    description: "Augmenting LLM-prompted features and deep RNNs for accurate EV energy demand forecasting.",
    longDescription: "This project augments LLM-prompted features with deep RNNs for accurate EV energy demand forecasting. It demonstrates the effectiveness of combining large language model features with recurrent neural networks, achieving state-of-the-art performance. Presented at ADINTECH 2025 and awarded Best Paper.",
    tags: ["LLMs", "RNNs", "Feature Engineering", "EV Demand Forecasting"],
    startDate: "2025-03",
    endDate: "2025-06",
    status: "completed",
    paper: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12333644",
    featured: true,
  },
];
