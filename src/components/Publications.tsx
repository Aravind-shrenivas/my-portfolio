
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
    <section id="publications" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Publications & Research
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {pub.journal} • {pub.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {pub.authors}
                  </p>
                </div>
                <div className="text-4xl ml-4">📄</div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {pub.abstract}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-0">
                  DOI: {pub.doi}
                </div>
                <a 
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Read Paper
                  <span className="ml-2">→</span>
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
