
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - you'll need to set these up in your EmailJS account
      await emailjs.send(
        'service_id', // Replace with your EmailJS service ID
        'template_id', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'aravindshrenivas@gmail.com'
        },
        'public_key' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      label: "Location",
      value: "Fremont, California",
      icon: MapPin,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      label: "Email",
      value: "aravindshrenivas@gmail.com",
      icon: Mail,
      gradient: "from-emerald-500 to-emerald-600",
      link: "mailto:aravindshrenivas@gmail.com"
    },
    {
      label: "Phone",
      value: "+1 (520) 535-7327",
      icon: Phone,
      gradient: "from-yellow-500 to-yellow-600",
      link: "tel:+15205357327"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/aravind-shrenivas",
      icon: Linkedin,
      gradient: "from-blue-600 to-blue-700",
      link: "https://linkedin.com/in/aravind-shrenivas"
    },
    {
      label: "GitHub",
      value: "github.com/aravindshrenivas",
      icon: Github,
      gradient: "from-gray-600 to-gray-700",
      link: "https://github.com/aravindshrenivas"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full filter blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
          Get In <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Let's Connect
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply chat about data science and technology. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="group bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  {contact.link ? (
                    <a href={contact.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{contact.label}</p>
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{contact.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <contact.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{contact.label}</p>
                        <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:scale-105 animate-slide-in-right delay-300">
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
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white/80 dark:bg-black/80 text-gray-900 dark:text-white transition-all duration-300 font-medium"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white/80 dark:bg-black/80 text-gray-900 dark:text-white transition-all duration-300 font-medium"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white/80 dark:bg-black/80 text-gray-900 dark:text-white transition-all duration-300 font-medium"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="text-green-600 dark:text-green-400 text-center font-medium">
                  Thanks! Your message has been sent.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-600 dark:text-red-400 text-center font-medium">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
