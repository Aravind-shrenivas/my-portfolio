
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
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
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
