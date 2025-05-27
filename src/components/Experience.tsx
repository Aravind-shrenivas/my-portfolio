
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
    <section id="experience" className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Enhanced timeline dot */}
                <div className="absolute -left-12 top-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-xl animate-pulse"></div>
                
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-purple-200/50 dark:border-purple-700/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">{exp.title}</h3>
                      <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full font-medium">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
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
