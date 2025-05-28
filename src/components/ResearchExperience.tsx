
import React from 'react';
import { Hospital } from 'lucide-react';

const ResearchExperience = () => {
  const researchExp = {
    title: "Research Assistant",
    institution: "University of Arizona",
    period: "2024 - 2025",
    description: "Leading innovative research in medical AI and computer vision with focus on ophthalmic imaging and deep learning applications.",
    achievements: [
      "Invented and implemented a novel deep learning architecture for ophthalmic image segmentation, improving diagnostic efficiency by 30%",
      "Built and refined prototypes using custom and open-source deep learning tools for medical AI",
      "Conducted rigorous experiments to validate model performance using hypothesis-driven analysis",
      "First author on a peer-reviewed Springer paper at MICCAI 2024, presenting novel AI methodology",
      "Created technical documentation to support reproducibility and scientific communication",
      "Placed 3rd globally in the MICCAI 2024 ML Challenge, showcasing real-world AI deployment skills"
    ],
    technologies: ["PyTorch", "Computer Vision", "Medical Imaging", "Deep Learning", "Research Methodology", "Scientific Writing"]
  };

  return (
    <section id="research-experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full filter blur-3xl animate-float delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
          Research <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105 animate-slide-in-left">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Hospital className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">{researchExp.title}</h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">{researchExp.institution}</p>
                </div>
              </div>
              <span className="text-gray-600 dark:text-gray-400 text-sm bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900 px-4 py-2 rounded-full font-medium">{researchExp.period}</span>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">{researchExp.description}</p>
            
            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
              <ul className="space-y-2">
                {researchExp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start space-x-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {researchExp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchExperience;
