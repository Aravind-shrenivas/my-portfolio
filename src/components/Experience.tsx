
import React from "react";
import { Briefcase, Terminal, BarChart3, Globe } from "lucide-react";

const experiences = [
  {
    company: "Intel Corporation, AZ, USA",
    title: "Supply Chain Analyst | Internship",
    period: "Jan 2025 – May 2025",
    achievements: [
      "Improved forecast accuracy by 12% using Python and Power BI dashboards.",
      "Automated reports via SQL and Excel macros, reducing manual effort by 30%.",
      "Applied SAP MM/WM and Lean to cut order cycle times by 15%.",
      "Collaborated through JIRA and Teams to resolve bottlenecks 10% faster.",
      "Built dashboards and KPIs that improved stock turnover by 8%."
    ],
    icon: BarChart3
  },
  {
    company: "University of Arizona, AZ, USA",
    title: "Research Assistant",
    period: "Apr 2024 – Oct 2024",
    achievements: [
      "Built a deep learning model for ophthalmic image segmentation (30% faster).",
      "Authored documentation to support academic publication.",
      "Created preprocessing pipelines to enhance image quality.",
      "Boosted model accuracy by 15% through hyperparameter tuning.",
      "Worked with clinical researchers to apply AI to real-world workflows.",
      "Placed 3rd in an international medical imaging ML competition."
    ],
    icon: Terminal
  },
  {
    company: "Capgemini Technology Services, India",
    title: "Senior Analyst",
    period: "Aug 2022 – May 2023",
    achievements: [
      "Promoted within 3 months for strong performance as Data Analyst.",
      "Streamlined OpenText processes, saving 15 hours/week.",
      "Boosted document search accuracy by 30% using metadata automation.",
      "Automated 10K+ weekly customer feedback entries.",
      "Deployed BERT sentiment analysis via AWS Lambda + Power BI."
    ],
    icon: Globe,
  },
  {
    company: "Cognizant Technology Solutions, India",
    title: "Supply Chain Analyst",
    period: "Sep 2020 – Aug 2022",
    achievements: [
      "Reduced excess inventory by 10%, saving $500K annually.",
      "Built ETL pipelines with Oracle SCM and IBM Sterling OMS (18% more accurate).",
      "Increased fulfillment by 20% using Six Sigma DMAIC.",
      "Automated reporting with AWS Lambda + Azure (25% faster).",
      "Trained 5 junior analysts and improved reporting accuracy by 15%.",
      "Improved cross-team collaboration via Slack and Confluence."
    ],
    icon: Briefcase
  }
];

const Experience = () => (
  <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 relative">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
        Professional <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Experience</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-3xl group"
          >
            <div className="flex items-center mb-5 space-x-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-500 to-emerald-500 shadow-lg">
                <exp.icon className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">{exp.company}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">{exp.title}</p>
                <span className="block text-sm text-blue-600 dark:text-emerald-300 font-medium mt-1">{exp.period}</span>
              </div>
            </div>
            <ul className="ml-2 space-y-3 mt-5">
              {exp.achievements.map((item, achIdx) => (
                <li key={achIdx} className="flex items-start space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
