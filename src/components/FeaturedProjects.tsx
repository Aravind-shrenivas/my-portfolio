
import React from 'react';
import { Github } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Anomaly Detection for Transaction Monitoring",
      description: "ML models (Isolation Forest, Autoencoder) to detect anomalies in financial transactions.",
      technologies: ["Anomaly Detection", "Autoencoder", "Python", "Scikit-learn"],
      githubUrl: "https://github.com/Aravind-shrenivas/Anomaly-Detection-for-Transaction-Monitoring",
      image: "/lovable-uploads/38ba2b1a-fc3c-4947-a679-c6a759d9b8a4.png"
    },
    {
      title: "Multi-Scale Attention Network for Diabetic Foot Ulcer Segmentation",
      description: "Self-supervised learning + ViT + DenseNet + Attention UNet for ulcer segmentation.",
      technologies: ["Self-supervised Learning", "Computer Vision", "PyTorch"],
      githubUrl: "https://github.com/Aravind-shrenivas/dfu_ssl",
      image: "/lovable-uploads/25bc6dc0-0023-4e57-b578-28104627eadd.png"
    },
    {
      title: "Car Sales Data Analysis Using SQL",
      description: "Complex queries, customer segmentation using CTEs, BI strategies.",
      technologies: ["SQL", "Data Analysis", "MySQL", "Business Intelligence"],
      githubUrl: "https://github.com/Aravind-shrenivas/car_sales_analysis",
      image: "/lovable-uploads/4cab9b05-e433-4ea4-a62f-d95eb762c0ee.png"
    },
    {
      title: "Tech or Treat: The Sentimental Stock Saga",
      description: "Sentiment analysis on Apple stock using VaderSentiment + stock price correlation.",
      technologies: ["NLP", "Sentiment Analysis", "Data Visualization"],
      githubUrl: "https://github.com/INFO-523-Exercises/project-final-Feature-Finders-Club",
      image: "/lovable-uploads/b45ac90b-bfb6-4858-b36e-b472b2956105.png"
    },
    {
      title: "Mycetoma Image Classification & Segmentation",
      description: "Deep learning models using nnUNet and CRF; ResNet50 classifier (91.78% accuracy).",
      technologies: ["PyTorch", "Image Segmentation", "Image Classification", "nnUNet"],
      githubUrl: "",
      image: "/lovable-uploads/3c8899d6-a5c9-4285-8d97-9fba614dfb9d.png"
    },
    {
      title: "Detection of Alzheimer's Disease Using Retinal Images",
      description: "Used OCT image dataset, applied Mask Autoencoders, SSL, WSL.",
      technologies: ["Deep Learning", "Self-supervised Learning", "Image Processing"],
      githubUrl: "",
      image: "/lovable-uploads/feb08a0e-24f2-435c-9fdc-854dca2b060f.png"
    },
    {
      title: "Cell Image Analysis: Pancreatic Tumor Detection",
      description: "Compared CNNs, FFNNs, ResNet, ViT, VGG16, InceptionV3 for tumor classification.",
      technologies: ["Deep Learning", "Computer Vision", "PyTorch", "TensorFlow"],
      githubUrl: "",
      image: "/lovable-uploads/71e75d8e-af19-4389-b80c-961a511d563e.png"
    },
    {
      title: "Deep Hybrid Model for Skin Cancer Classification",
      description: "CNN + SVM for multiclass skin lesion classification using HAM10000 dataset (97.26% accuracy).",
      technologies: ["CNN", "SVM", "Python"],
      githubUrl: "",
      image: "/lovable-uploads/e65705b6-de23-4707-b75a-f22821c5510b.png"
    }
  ];

  return (
    <section id="featured-projects" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-500 to-yellow-500 rounded-full filter blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
          Featured <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900 dark:to-emerald-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {project.githubUrl && (
                  <div className="flex justify-center">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 text-white dark:text-black text-center py-2 rounded-xl hover:shadow-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
