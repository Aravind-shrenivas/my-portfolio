
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo alert instead of actual form submission
    alert(`Thank you ${formData.name}! Your message has been received. I'll get back to you soon!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 gradient-bg relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-800 to-black dark:from-gray-300 dark:to-white rounded-full filter blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 gradient-text animate-fade-in">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold gradient-text mb-6">
              Let's Connect
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply chat about data science and technology. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm hover-lift animate-fade-in delay-200">
                <div className="w-14 h-14 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white dark:text-black text-2xl">📧</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">alex.johnson@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm hover-lift animate-fade-in delay-300">
                <div className="w-14 h-14 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white dark:text-black text-2xl">💼</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg">LinkedIn</p>
                  <a href="https://linkedin.com/in/alexjohnson" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:underline font-medium transition-colors duration-300">
                    linkedin.com/in/alexjohnson
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm hover-lift animate-fade-in delay-400">
                <div className="w-14 h-14 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white dark:text-black text-2xl">💻</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg">GitHub</p>
                  <a href="https://github.com/alexjohnson" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:underline font-medium transition-colors duration-300">
                    github.com/alexjohnson
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover-lift border border-gray-200 dark:border-gray-800 animate-slide-in-right delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white/80 dark:bg-black/80 text-gray-900 dark:text-white transition-all duration-300 font-medium"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white/80 dark:bg-black/80 text-gray-900 dark:text-white transition-all duration-300 font-medium"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white/80 dark:bg-black/80 text-gray-900 dark:text-white transition-all duration-300 font-medium"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black py-4 rounded-xl hover-lift font-bold text-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
