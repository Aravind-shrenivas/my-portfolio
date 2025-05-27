
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Predictive Model for Customer Churn",
      description: "Developed a machine learning model using Random Forest and XGBoost to predict customer churn with 94% accuracy. Implemented feature engineering techniques and deployed the model using Flask API.",
      technologies: ["Python", "XGBoost", "Flask", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/username/customer-churn-prediction",
      demoUrl: "https://demo-customer-churn.herokuapp.com",
      image: "📊"
    },
    {
      title: "Real-time Stock Price Analysis Dashboard",
      description: "Built an interactive dashboard using Streamlit and Plotly to analyze stock market trends. Integrated Yahoo Finance API for real-time data and implemented technical indicators.",
      technologies: ["Python", "Streamlit", "Plotly", "Yahoo Finance API", "Pandas"],
      githubUrl: "https://github.com/username/stock-analysis-dashboard",
      demoUrl: "https://stock-dashboard-demo.streamlit.app",
      image: "📈"
    },
    {
      title: "Natural Language Processing for Sentiment Analysis",
      description: "Created a sentiment analysis model for social media posts using BERT and transformer architecture. Achieved 91% accuracy on multi-class sentiment classification.",
      technologies: ["Python", "BERT", "Transformers", "PyTorch", "NLTK"],
      githubUrl: "https://github.com/username/sentiment-analysis-bert",
      demoUrl: "https://sentiment-demo.herokuapp.com",
      image: "🤖"
    },
    {
      title: "Computer Vision for Medical Image Classification",
      description: "Developed a CNN model to classify medical images for disease detection. Used transfer learning with ResNet50 and data augmentation techniques to improve model performance.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "ResNet50"],
      githubUrl: "https://github.com/username/medical-image-classification",
      demoUrl: "https://medical-ai-demo.herokuapp.com",
      image: "🏥"
    },
    {
      title: "Recommendation System for E-commerce",
      description: "Built a hybrid recommendation system combining collaborative filtering and content-based approaches. Implemented using Apache Spark for scalability and deployed on AWS.",
      technologies: ["Python", "Apache Spark", "AWS", "MLlib", "Collaborative Filtering"],
      githubUrl: "https://github.com/username/recommendation-system",
      demoUrl: "https://recommendation-demo.aws.com",
      image: "🛍️"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-cyan-900/10 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02] border border-cyan-200/50 dark:border-cyan-700/50 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="p-8">
                <div className="text-6xl mb-6 text-center transform hover:scale-110 hover:rotate-12 transition-all duration-300">{project.image}</div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-3 rounded-xl hover:shadow-2xl hover:shadow-gray-500/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white text-center py-3 rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Live Demo
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
