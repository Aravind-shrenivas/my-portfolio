
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "M.S. in Data Science",
      school: "University of Arizona",
      period: "Expected May 2025",
      description: "Advanced coursework in machine learning, statistical modeling, and big data analytics. Focus on healthcare applications and deep learning architectures.",
      logo: "/lovable-uploads/5c076531-63d2-4907-9b1d-9f68064d41c9.png",
      color: "from-blue-500 to-blue-600"
    },
    {
      degree: "B.E. in Biomedical Engineering", 
      school: "PSG College of Technology",
      period: "May 2022",
      description: "Interdisciplinary program combining engineering principles with medical applications. Strong foundation in data analysis and research methodologies.",
      logo: "/lovable-uploads/4e23ce67-b9f0-4175-b3d7-819b9970fc93.png",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full filter blur-3xl animate-float delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-full filter blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
          <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Education</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <img 
                    src={edu.logo} 
                    alt={`${edu.school} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{edu.school}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                  {edu.period}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
