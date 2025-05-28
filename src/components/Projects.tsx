
import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Medical Image Segmentation with Deep Learning",
      description: "Multi-scale attention network for diabetic foot ulcer segmentation using self-supervised learning. Published at MICCAI 2024.",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Medical Imaging"],
      githubUrl: "https://github.com/aravindshrenivas/medical-segmentation",
      icon: "🏥"
    },
    {
      title: "Customer Churn Prediction Pipeline",
      description: "End-to-end ML pipeline using Azure ML and PySpark to predict customer churn with 95% accuracy for healthcare insurance.",
      technologies: ["Python", "Azure ML", "PySpark", "MLflow", "Databricks"],
      githubUrl: "https://github.com/aravindshrenivas/churn-prediction",
      icon: "📊"
    },
    {
      title: "Real-time Claims Processing Automation",
      description: "Automated claims processing system using AWS Glue and machine learning models, reducing processing time by 30%.",
      technologies: ["Python", "AWS Glue", "Lambda", "DynamoDB", "Scikit-learn"],
      githubUrl: "https://github.com/aravindshrenivas/claims-automation",
      icon: "⚡"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-gray-800 to-black dark:from-gray-200 dark:to-white rounded-full filter blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
          Featured <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="p-8">
                <div className="text-6xl mb-6 text-center transform hover:scale-110 hover:rotate-12 transition-all duration-300 animate-float">{project.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 text-white dark:text-black text-center py-3 rounded-xl hover:shadow-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
