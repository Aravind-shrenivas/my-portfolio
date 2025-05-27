
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
    <section id="publications" className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 dark:from-gray-800 dark:via-pink-900/10 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
          Publications & Research
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-pink-200/50 dark:border-pink-700/50 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    {pub.title}
                  </h3>
                  <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-2">
                    {pub.journal} • {pub.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                    {pub.authors}
                  </p>
                </div>
                <div className="text-6xl ml-6 transform hover:scale-110 hover:rotate-12 transition-all duration-300">📄</div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                {pub.abstract}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full font-medium">
                  DOI: {pub.doi}
                </div>
                <a 
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-semibold"
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
