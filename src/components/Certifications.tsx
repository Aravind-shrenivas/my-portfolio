
import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Certified Data Scientist",
      provider: "Coursera - IBM",
      year: "2023",
      credentialId: "CERT-DS-2023-001",
      url: "https://coursera.org/verify/cert-ds-2023-001",
      icon: "🎓",
      skills: ["Machine Learning", "Python", "Data Analysis", "Statistics"]
    },
    {
      title: "AWS Certified Machine Learning - Specialty",
      provider: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-ML-SPEC-2023",
      url: "https://aws.amazon.com/certification/verify/cert-ml-2023",
      icon: "☁️",
      skills: ["AWS SageMaker", "MLOps", "Deep Learning", "Model Deployment"]
    },
    {
      title: "Professional Data Engineer",
      provider: "Google Cloud Platform",
      year: "2022",
      credentialId: "GCP-PDE-2022-789",
      url: "https://cloud.google.com/certification/verify/gcp-pde-2022",
      icon: "🔧",
      skills: ["BigQuery", "DataFlow", "Cloud ML Engine", "Data Pipeline"]
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gradient-to-br from-cyan-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-cyan-900/10 dark:to-pink-900/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] border border-cyan-200/50 dark:border-cyan-700/50 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 transform hover:scale-110 hover:rotate-12 transition-all duration-300">{cert.icon}</div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  {cert.title}
                </h3>
                <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                  {cert.provider}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 px-3 py-1 rounded-full font-medium inline-block">
                  Issued: {cert.year}
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 font-medium">
                  Credential ID: {cert.credentialId}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-xs font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white py-3 rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-semibold"
              >
                Verify Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
