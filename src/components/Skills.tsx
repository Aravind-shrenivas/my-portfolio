
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 88 },
        { name: "SQL", level: 92 },
        { name: "JavaScript", level: 78 },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "Keras", level: 85 },
      ]
    },
    {
      title: "Data Tools & Platforms",
      skills: [
        { name: "Tableau", level: 88 },
        { name: "Power BI", level: 82 },
        { name: "Apache Spark", level: 75 },
        { name: "AWS", level: 78 },
      ]
    },
    {
      title: "Statistical Analysis",
      skills: [
        { name: "Hypothesis Testing", level: 92 },
        { name: "Time Series Analysis", level: 85 },
        { name: "Bayesian Statistics", level: 80 },
        { name: "A/B Testing", level: 88 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 dark:from-gray-800 dark:via-pink-900/10 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-pink-200/50 dark:border-pink-700/50 animate-fade-in" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 dark:text-gray-300 font-semibold text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400 font-bold bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-3 py-1 rounded-full">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
