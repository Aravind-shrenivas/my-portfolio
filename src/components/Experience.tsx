
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "TechCorp Solutions",
      period: "2023 - 2024",
      description: "Analyzed customer behavior data using Python and SQL, created interactive dashboards with Tableau, and developed predictive models that improved customer retention by 15%.",
      technologies: ["Python", "SQL", "Tableau", "Pandas"]
    },
    {
      title: "Research Assistant",
      company: "University Data Lab",
      period: "2022 - 2023",
      description: "Conducted statistical analysis on large healthcare datasets, collaborated on machine learning research projects, and published findings in peer-reviewed journals.",
      technologies: ["R", "Python", "TensorFlow", "Statistical Analysis"]
    },
    {
      title: "Junior Data Scientist",
      company: "StartupX Analytics",
      period: "2022 - 2022",
      description: "Built ETL pipelines for real-time data processing, implemented A/B testing frameworks, and optimized recommendation algorithms for e-commerce platform.",
      technologies: ["Apache Spark", "AWS", "Docker", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-10 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
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
