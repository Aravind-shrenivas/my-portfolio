
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Libraries",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "R", icon: "📊" },
        { name: "Java", icon: "☕" },
        { name: "SQL", icon: "🗃️" },
        { name: "Shell", icon: "⚡" },
        { name: "TensorFlow", icon: "🧠" },
        { name: "Scikit-learn", icon: "🤖" },
        { name: "PySpark", icon: "✨" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS S3", icon: "☁️" },
        { name: "AWS EC2", icon: "🖥️" },
        { name: "AWS Glue", icon: "🔗" },
        { name: "Azure Synapse", icon: "🔵" },
        { name: "Azure ML", icon: "🤖" },
        { name: "GCP BigQuery", icon: "📈" },
        { name: "Terraform", icon: "🏗️" }
      ]
    },
    {
      title: "Data & Visualization",
      skills: [
        { name: "Power BI", icon: "📊" },
        { name: "Tableau", icon: "📈" },
        { name: "Data Pipelines", icon: "🔄" },
        { name: "ETL", icon: "⚙️" },
        { name: "Data Warehousing", icon: "🏬" }
      ]
    },
    {
      title: "ML & Statistics",
      skills: [
        { name: "Model Optimization", icon: "⚡" },
        { name: "Anomaly Detection", icon: "🔍" },
        { name: "Hypothesis Testing", icon: "🧪" },
        { name: "Statistical Modeling", icon: "📐" }
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Hadoop", icon: "🐘" },
        { name: "Spark", icon: "⚡" },
        { name: "Hive", icon: "🐝" },
        { name: "Databricks", icon: "🧱" },
        { name: "Jenkins", icon: "🔧" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full filter blur-3xl animate-float delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full filter blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
          Technical <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="max-w-7xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} 
                    className="group bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in" 
                    style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 50}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {skill.name}
                      </span>
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
