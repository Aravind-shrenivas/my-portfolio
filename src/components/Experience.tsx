
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
    <section id="experience" className="py-16 gradient-bg relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-full filter blur-3xl animate-float delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 gradient-text animate-fade-in">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-black via-gray-600 to-black dark:from-white dark:via-gray-400 dark:to-white rounded-full shadow-lg"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16 animate-slide-in-left" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Enhanced timeline dot */}
                <div className="absolute -left-12 top-6 w-6 h-6 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-full border-4 border-white dark:border-black shadow-xl animate-scale-in" style={{ animationDelay: `${index * 200 + 300}ms` }}></div>
                
                <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover-lift border border-gray-200 dark:border-gray-800">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">{exp.title}</h3>
                      <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-full font-medium">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
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
