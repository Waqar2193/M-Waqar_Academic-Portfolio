export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "workshop" | "preprint";
  doi?: string;
  url?: string;
  pdf?: string;
  code?: string;
  abstract?: string;
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    id: "pub0",
    title: "MTML-EV: Multi-target meta-learning for cross-zone urban electric vehicle charging infrastructure management",
    authors: ["M. Waqar", "Y.-W. Kim", "Y.-C. Byun"],
    venue: "Sustainable Cities and Society",
    year: 2026,
    type: "journal",
    doi: "10.1016/j.scs.2026.107865",
    url: "https://doi.org/10.1016/j.scs.2026.107865",
    abstract: "We propose MTML-EV, a multi-target meta-learning framework for cross-zone urban electric vehicle charging infrastructure management, enabling effective knowledge transfer across diverse urban zones for simultaneous prediction of multiple charging-related targets in sustainable city environments.",
    featured: true,
  },
  {
    id: "pub1",
    title: "A hybrid deep learning framework for multivariate energy forecasting and peak load prediction in electric vehicle charging infrastructure",
    authors: ["M. Waqar", "Y.-W. Kim", "Y.-C. Byun"],
    venue: "Applied Energy",
    year: 2026,
    type: "journal",
    doi: "10.1016/j.apenergy.2025.126964",
    url: "https://doi.org/10.1016/j.apenergy.2025.126964",
    abstract: "We propose a hybrid deep learning framework for multivariate energy forecasting and peak load prediction in electric vehicle charging infrastructure, addressing the challenges of accurate demand prediction in EV charging systems.",
    featured: true,
  },
  {
    id: "pub2",
    title: "CUP-EV: Hybrid dlinear-based cost and uncertainty-aware probabilistic multi-horizon electric vehicle charging forecasting",
    authors: ["M. Waqar", "Y.-W. Kim", "Y.-C. Byun"],
    venue: "Information Sciences",
    year: 2026,
    type: "journal",
    doi: "10.1016/j.ins.2026.123681",
    url: "https://doi.org/10.1016/j.ins.2026.123681",
    abstract: "We introduce CUP-EV, a hybrid DLinear-based framework for cost and uncertainty-aware probabilistic multi-horizon electric vehicle charging forecasting, providing reliable uncertainty estimates for EV charging demand.",
    featured: true,
  },
  {
    id: "pub3",
    title: "Cost-aware evolutionary framework for multi-objective coordination of electric vehicle charging under grid tariffs",
    authors: ["M. Waqar", "Y.-W. Kim", "C. Kang", "Y.-C. Byun"],
    venue: "Journal of Energy Storage",
    year: 2026,
    type: "journal",
    doi: "10.1016/j.est.2026.122681",
    url: "https://doi.org/10.1016/j.est.2026.122681",
    abstract: "We develop a cost-aware evolutionary framework for multi-objective coordination of electric vehicle charging under grid tariffs, optimizing charging schedules to minimize costs while maintaining grid stability.",
    featured: false,
  },
  {
    id: "pub4",
    title: "A stacking ensemble framework leveraging synthetic data for accurate and stable crop yield forecasting",
    authors: ["M. Waqar", "Y.-W. Kim", "Y.-C. Byun"],
    venue: "IEEE Access",
    year: 2025,
    type: "journal",
    doi: "10.1109/ACCESS.2025.3591802",
    url: "https://doi.org/10.1109/ACCESS.2025.3591802",
    abstract: "We present a stacking ensemble framework that leverages synthetic data augmentation for accurate and stable crop yield forecasting, demonstrating improved prediction stability across diverse agricultural scenarios.",
    featured: false,
  },
  {
    id: "pub5",
    title: "TEF-PLM: A tabular and embeddings fusion framework using pretrained language model for enhanced electric vehicle energy forecasting",
    authors: ["M. Waqar", "Y.-W. Kim", "Y.-C. Byun"],
    venue: "Energy Reports",
    year: 2025,
    type: "journal",
    doi: "10.1016/j.egyr.2025.11.004",
    url: "https://doi.org/10.1016/j.egyr.2025.11.004",
    abstract: "We propose TEF-PLM, a tabular and embeddings fusion framework that leverages pretrained language models to enhance electric vehicle energy forecasting accuracy by integrating structured and unstructured data.",
    featured: false,
  },
  {
    id: "pub6",
    title: "Augmenting LLM-prompted features and deep RNNs for accurate EV energy demand forecasting",
    authors: ["M. Waqar", "Y.-W. Kim", "Y.-C. Byun"],
    venue: "Proceedings of the 2025 International Conference on Advanced Information Technology (ADINTECH 2025)",
    year: 2025,
    type: "conference",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12333644",
    abstract: "We augment LLM-prompted features with deep RNNs for accurate EV energy demand forecasting, demonstrating the effectiveness of combining large language model features with recurrent neural networks.",
    featured: true,
  },
  {
    id: "pub7",
    title: "Enhancing energy prediction accuracy at EV charging stations using conv-bilstm with advanced features",
    authors: ["M. Waqar", "Y.-W. Kim", "Y.-C. Byun"],
    venue: "Proceedings of the 2025 KIIT Summer Conference",
    year: 2025,
    type: "conference",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12288507",
    abstract: "We enhance energy prediction accuracy at EV charging stations using a Conv-BiLSTM architecture with advanced feature engineering, improving forecasting performance for charging station energy demand.",
    featured: false,
  },
  {
    id: "pub8",
    title: "Multi-objective optimization of EV charging demand in South Korea",
    authors: ["M. Waqar", "K. Nazir", "A. Debnath", "Y.-W. Kim", "H. Kwak", "Y.-C. Byun"],
    venue: "International Conference on Convergence Content (ICCC 2025)",
    year: 2025,
    type: "conference",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12555711",
    abstract: "We address multi-objective optimization of EV charging demand in South Korea, balancing grid stability, cost efficiency, and user satisfaction in charging infrastructure management.",
    featured: false,
  },
  {
    id: "pub9",
    title: "Resource management and security issues in mobile phone operating systems: A comparative analysis",
    authors: ["K. M. Awan", "M. Waqar", "M. Faseeh", "F. Ullah", "M. Q. Saleem"],
    venue: "PeerJ Preprints",
    year: 2017,
    type: "preprint",
    doi: "10.7287/peerj.preprints.3344v1",
    url: "https://doi.org/10.7287/peerj.preprints.3344v1",
    abstract: "A comparative analysis of resource management and security issues in mobile phone operating systems, examining trade-offs between performance and security across major mobile platforms.",
    featured: false,
  },
];