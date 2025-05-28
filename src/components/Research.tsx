
import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: "Multi-Scale Attention Network for Diabetic Foot Ulcer Segmentation using Self-Supervised Learning",
      conference: "MICCAI 2024",
      publisher: "Springer",
      doi: "https://doi.org/10.1007/978-3-031-80871-5_7",
      paperUrl: "https://link.springer.com/chapter/10.1007/978-3-031-80871-5_7",
      abstract: "This paper presents a novel multi-scale attention network for automated diabetic foot ulcer segmentation using self-supervised learning techniques, achieving state-of-the-art performance on medical imaging datasets."
    }
  ];

  return (
    <section id="research" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-gray-800 to-black dark:from-gray-300 dark:to-white rounded-full filter blur-3xl animate-float delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-full filter blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Publication</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105 animate-slide-in-left" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                    {pub.title}
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    {pub.conference} • {pub.publisher}
                  </p>
                </div>
                <div className="text-6xl ml-6 transform hover:scale-110 hover:rotate-12 transition-all duration-300 animate-float">
                  <FileText className="text-blue-500" size={48} />
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                {pub.abstract}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-full font-medium">
                  DOI: {pub.doi.replace('https://doi.org/', '')}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    DOI
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                  <a 
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:shadow-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Full Text
                    <ExternalLink className="ml-2" size={16} />
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

export default Research;
