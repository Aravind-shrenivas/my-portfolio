
import React from "react";
import { Briefcase, Terminal, BarChart3, Globe } from "lucide-react";

const experiences = [
  {
    company: "Intel Corporation, AZ, USA",
    title: "Supply Chain Analyst | Internship",
    period: "Jan 2025 – May 2025",
    achievements: [
      "Improved forecast accuracy by 12% using Python & Power BI",
      "Automated reports via SQL and Excel, saving 30% manual time",
      "Reduced order cycle times by 15% (SAP MM/WM + Lean)",
      "Collaborated via JIRA/Teams to fix bottlenecks 10% faster",
      "Built dashboards to improve stock turnover by 8%"
    ],
    icon: BarChart3
  },
  {
    company: "University of Arizona, AZ, USA",
    title: "Research Assistant",
    period: "Apr 2024 – Oct 2024",
    achievements: [
      "Built deep learning models that improved segmentation speed by 30%",
      "Created documentation for AI research publications",
      "Enhanced image pipelines for better data consistency",
      "Tuned models to improve accuracy by 15%",
      "Collaborated with clinical teams to apply AI to workflows",
      "3rd place at global medical AI competition"
    ],
    icon: Terminal
  },
  {
    company: "Capgemini Technology Services, India",
    title: "Senior Analyst",
    period: "Aug 2022 – May 2023",
    achievements: [
      "Promoted to Senior Analyst in 3 months",
      "Saved 15 hours/week with OpenText automation",
      "Boosted search accuracy 30% via metadata tools",
      "Automated 10K+ feedback records weekly",
      "Deployed BERT sentiment analysis on AWS Lambda + Power BI"
    ],
    icon: Globe,
  },
  {
    company: "Cognizant Technology Solutions, India",
    title: "Supply Chain Analyst",
    period: "Sep 2020 – Aug 2022",
    achievements: [
      "Reduced excess inventory by 10%, saving $500K",
      "Built ETL pipelines across Oracle SCM & IBM Sterling OMS",
      "Improved order fulfillment by 20% via Six Sigma",
      "Used AWS Lambda + Azure for auto-reporting (25% faster)",
      "Mentored 5 junior analysts; improved reporting accuracy 15%",
      "Enhanced team collaboration via Slack and Confluence"
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
      
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full hidden md:block"></div>
        
        {/* Mobile timeline line */}
        <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full md:hidden"></div>
        
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative mb-16 last:mb-0">
            {/* Desktop layout - alternating sides */}
            <div className={`hidden md:flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-5/12 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-3xl group">
                  <div className={`flex items-center mb-5 space-x-4 ${idx % 2 === 0 ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-500 to-emerald-500 shadow-lg">
                      <exp.icon className="text-white" size={24} />
                    </div>
                    <div className={idx % 2 === 0 ? 'text-right' : 'text-left'}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{exp.company}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">{exp.title}</p>
                      <span className="block text-sm text-blue-600 dark:text-emerald-300 font-medium mt-1">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((item, achIdx) => (
                      <li key={achIdx} className={`flex items-start space-x-2 ${idx % 2 === 0 ? 'flex-row-reverse space-x-reverse text-right' : ''}`}>
                        <span className="text-emerald-500 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-4 border-white dark:border-black shadow-lg z-10"></div>
            </div>
            
            {/* Mobile layout - single column */}
            <div className="md:hidden ml-16">
              <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                <div className="flex items-center mb-4 space-x-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-500 to-emerald-500 shadow-lg">
                    <exp.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{exp.company}</h3>
                    <p className="text-base text-gray-600 dark:text-gray-300">{exp.title}</p>
                    <span className="block text-sm text-blue-600 dark:text-emerald-300 font-medium mt-1">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((item, achIdx) => (
                    <li key={achIdx} className="flex items-start space-x-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mobile timeline node */}
              <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-2 border-white dark:border-black shadow-lg z-10" style={{ top: '2rem' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
