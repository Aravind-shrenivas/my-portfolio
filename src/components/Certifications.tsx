
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
    <section id="certifications" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{cert.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {cert.provider}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Issued: {cert.year}
                </p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  Credential ID: {cert.credentialId}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300"
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
