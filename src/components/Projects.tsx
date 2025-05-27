
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
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 dark:bg-gray-700 text-white text-center py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 rounded-lg hover:shadow-lg transition-all duration-300"
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
