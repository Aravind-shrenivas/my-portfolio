
import React from 'react';

const Publications = () => {
  const publications = [
    {
      title: "Machine Learning Approaches for Predictive Healthcare Analytics: A Comprehensive Study",
      journal: "Journal of Data Science in Medicine",
      year: "2024",
      authors: "Johnson, A., Smith, B., Davis, C.",
      doi: "10.1234/jdsm.2024.001",
      url: "https://example-journal.com/publications/ml-healthcare-analytics",
      abstract: "This paper explores various machine learning techniques applied to healthcare data prediction..."
    },
    {
      title: "Deep Learning for Time Series Forecasting in Financial Markets",
      journal: "International Conference on AI and Finance",
      year: "2023",
      authors: "Johnson, A., Williams, D.",
      doi: "10.1234/icaif.2023.045",
      url: "https://example-conference.com/papers/deep-learning-forecasting",
      abstract: "We present a novel deep learning approach for predicting financial market trends..."
    }
  ];

  return (
    <section id="publications" className="py-16 gradient-bg relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-gray-800 to-black dark:from-gray-300 dark:to-white rounded-full filter blur-3xl animate-float delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-full filter blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 gradient-text animate-fade-in">
          Publications & Research
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover-lift border border-gray-200 dark:border-gray-800 animate-slide-in-left" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold gradient-text mb-3">
                    {pub.title}
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    {pub.journal} • {pub.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                    {pub.authors}
                  </p>
                </div>
                <div className="text-6xl ml-6 transform hover:scale-110 hover:rotate-12 transition-all duration-300 animate-float">📄</div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                {pub.abstract}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-full font-medium">
                  DOI: {pub.doi}
                </div>
                <a 
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black rounded-xl hover-lift font-semibold transition-all duration-300"
                >
                  Read Paper
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
