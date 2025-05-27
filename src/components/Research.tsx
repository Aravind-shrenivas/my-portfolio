
import React from 'react';

const Research = () => {
  const research = {
    title: "Multi-Scale Attention Network for Diabetic Foot Ulcer Segmentation using Self-Supervised Learning",
    venue: "MICCAI 2024 Conference Proceedings",
    publisher: "Springer",
    year: "2024",
    role: "First Author",
    description: "Designed deep learning architecture for medical image segmentation achieving 30% improvement in accuracy. Led development, validation, and publication of AI research in healthcare applications.",
    impact: "Published in top-tier medical AI conference with international recognition",
    doi: "10.1007/978-3-031-xxxxx-x_xx"
  };

  const researchExperience = {
    position: "Research Assistant",
    institution: "University of Arizona",
    period: "2024 - 2025",
    responsibilities: [
      "Designed deep learning architecture for medical image segmentation (30% improvement)",
      "First-author paper at MICCAI 2024 (Springer)",
      "Led development, validation, and publication of AI research in healthcare"
    ]
  };

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-emerald-500 to-yellow-500 rounded-full filter blur-3xl animate-float delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full filter blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
          Research & <span className="bg-gradient-to-r from-yellow-500 to-emerald-500 bg-clip-text text-transparent">Publication</span>
        </h2>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Research Experience */}
          <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105 animate-slide-in-left">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg text-2xl flex-shrink-0">
                🔬
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {researchExperience.position}
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">{researchExperience.institution}</p>
                <span className="bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900 dark:to-emerald-900 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 inline-block">
                  {researchExperience.period}
                </span>
                <ul className="space-y-2">
                  {researchExperience.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Publication */}
          <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105 animate-slide-in-right delay-200">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg text-xl">
                    📄
                  </div>
                  <span className="bg-gradient-to-r from-yellow-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {research.role}
                  </span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                  {research.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {research.venue} • {research.publisher} • {research.year}
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              {research.description}
            </p>
            
            <div className="bg-gradient-to-r from-yellow-50 to-emerald-50 dark:from-yellow-900/20 dark:to-emerald-900/20 p-4 rounded-xl mb-6">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                <strong>Impact:</strong> {research.impact}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full font-medium">
                DOI: {research.doi}
              </div>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-emerald-500 text-white rounded-xl hover:shadow-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Read Paper
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
