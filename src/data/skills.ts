export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

export const skills: SkillCategory[] = [
  {
    name: "Research Areas",
    skills: [
      { name: "Machine Learning", level: 5 },
      { name: "Deep Learning", level: 5 },
      { name: "Time Series Forecasting", level: 5 },
      { name: "Probabilistic Forecasting", level: 5 },
      { name: "Meta-learning", level: 4 },
      { name: "Transfer Learning", level: 4 },
      { name: "Natural Language Processing", level: 4 },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "PyTorch", level: 5 },
      { name: "TensorFlow", level: 4 },
      { name: "Scikit-learn", level: 5 },
      { name: "XGBoost", level: 4 },
      { name: "Hugging Face", level: 4 },
      { name: "Darts", level: 4 },
      { name: "NeuralForecast", level: 4 },
      { name: "Pandas", level: 5 },
      { name: "NumPy", level: 5 },
    ],
  },
  {
    name: "Programming",
    skills: [
      { name: "Python", level: 5 },
      { name: "MATLAB", level: 4 },
      { name: "C/C++", level: 4 },
      { name: "SQL", level: 4 },
      { name: "LaTeX", level: 5 },
    ],
  },
  {
    name: "Data Science",
    skills: [
      { name: "Data Analysis", level: 5 },
      { name: "Data Visualization", level: 4 },
      { name: "Feature Engineering", level: 5 },
      { name: "Data Scraping", level: 4 },
      { name: "Statistical Analysis", level: 4 },
      { name: "Model Evaluation", level: 5 },
    ],
  },
  {
    name: "Research",
    skills: [
      { name: "Scientific Writing", level: 5 },
      { name: "Academic Publishing", level: 5 },
      { name: "Literature Review", level: 5 },
      { name: "Experimental Design", level: 4 },
      { name: "Reproducible Research", level: 4 },
      { name: "Peer Review", level: 4 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Visual Studio Code", level: 5 },
      { name: "PyCharm", level: 4 },
      { name: "Anaconda", level: 5 },
      { name: "Jupyter Notebook", level: 5 },
      { name: "Google Colab", level: 5 },
      { name: "Kaggle", level: 4 },
      { name: "Git", level: 4 },
      { name: "GitHub", level: 4 },
      { name: "Overleaf", level: 5 },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "English (IELTS 7.0)", level: 4 },
      { name: "Urdu (Native)", level: 5 },
      { name: "Punjabi (Native)", level: 5 },
    ],
  },
];