
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Analyst",
      company: "Capgemini",
      period: "2021 - 2023",
      description: "Led data science initiatives across marketing, claims processing, and customer analytics, delivering significant business impact through advanced ML solutions.",
      achievements: [
        "Boosted marketing ROI by 25% using customer segmentation in Python",
        "Reduced claims processing by 30% with predictive workflows in AWS Glue", 
        "Improved customer retention with Azure ML churn prediction",
        "Enhanced pipeline efficiency by 40% with Databricks + PySpark",
        "Automated infrastructure deployment with Terraform and Jenkins"
      ],
      technologies: ["Python", "AWS Glue", "Azure ML", "Databricks", "PySpark", "Terraform", "Jenkins"],
      icon: "💼"
    },
    {
      title: "Data Analyst Intern",
      company: "HCL Technologies",
      period: "2019 - 2020",
      description: "Developed healthcare analytics solutions focusing on patient outcomes, operational efficiency, and data security compliance.",
      achievements: [
        "Reduced hospital readmissions by 15% using R and xgboost",
        "Improved efficiency by 25% with Power BI dashboards",
        "Increased data security and HIPAA compliance by 35%",
        "Integrated EPIC, survey, and third-party data into real-time reporting"
      ],
      technologies: ["R", "xgboost", "Power BI", "EPIC", "HIPAA Compliance"],
      icon: "🏥"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full filter blur-3xl animate-float delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
          Professional <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-emerald-500 to-yellow-500 rounded-full shadow-lg"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 ml-16 animate-slide-in-left" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Enhanced timeline dot */}
                <div className="absolute -left-12 top-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-4 border-white dark:border-black shadow-xl flex items-center justify-center animate-scale-in" style={{ animationDelay: `${index * 200 + 300}ms` }}>
                  <span className="text-white text-sm">{exp.icon}</span>
                </div>
                
                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">{exp.title}</h3>
                      <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900 dark:to-emerald-900 px-4 py-2 rounded-full font-medium">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">{exp.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <span className="text-emerald-500 mt-1">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
