
import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      title: "How to Reduce Your Power BI Model Size by 90%",
      author: "Towards Data Science",
      description: "Essential techniques for optimizing Power BI performance and reducing model size for better analytics.",
      url: "https://towardsdatascience.com",
      icon: "📊"
    },
    {
      title: "Understanding Transformers",
      author: "Jay Alammar",
      description: "A visual guide to understanding the transformer architecture that powers modern AI.",
      url: "https://jalammar.github.io/illustrated-transformer/",
      icon: "🤖"
    },
    {
      title: "Can AI Agents Be Trusted?",
      author: "Harvard Business Review",
      description: "Exploring the ethical implications and trustworthiness of AI systems in business.",
      url: "https://hbr.org",
      icon: "🧠"
    },
    {
      title: "The Future of MLOps",
      author: "Google AI Blog",
      description: "Best practices for deploying and managing machine learning models in production.",
      url: "https://ai.googleblog.com",
      icon: "⚙️"
    }
  ];

  return (
    <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-800 hover-lift">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
        <span className="text-blue-500 mr-2">📖</span>
        Blogs That Might Interest You
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Here are some insightful reads that have inspired me and may spark your curiosity too.
      </p>
      <div className="space-y-3">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              {blog.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {blog.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">{blog.author}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{blog.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
