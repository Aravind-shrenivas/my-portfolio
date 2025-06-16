
import React from 'react';

// URLs for resource commands
const resumeUrl = "https://drive.google.com/file/d/1189PExRLS2bvao-KqzHWUkV1Dgsy968O/view?usp=sharing";
const linkedinUrl = "https://linkedin.com/in/aravind-shrenivas";
const githubUrl = "https://github.com/aravind-shrenivas";

// Util to open links
const openLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
  return `Opening ${url}...`;
};

// All terminal commands supported
export const commands: { [key: string]: (args?: string[]) => React.ReactNode } = {
  help: () => (
    <div className="mt-1">
      <p className="mb-2">Available commands:</p>
      <ul className="space-y-1">
        <li><span className="text-green-400 w-24 inline-block">help</span> - Show this command list</li>
        <li><span className="text-green-400 w-24 inline-block">about-me</span> - Display my bio and summary</li>
        <li><span className="text-green-400 w-24 inline-block">experiences</span> - Print a timeline of my roles</li>
        <li><span className="text-green-400 w-24 inline-block">my-projects</span> - List my personal projects</li>
        <li><span className="text-green-400 w-24 inline-block">passions</span> - List my hobbies/interests</li>
        <li><span className="text-green-400 w-24 inline-block">get cv</span> - Open my CV in a new tab</li>
        <li><span className="text-green-400 w-24 inline-block">get linkedin</span> - Open my LinkedIn profile</li>
        <li><span className="text-green-400 w-24 inline-block">get github</span> - Open my GitHub profile</li>
        <li><span className="text-green-400 w-24 inline-block">clear</span> - Clear the terminal screen</li>
        <li><span className="text-green-400 w-24 inline-block">themes</span> - Cycle through terminal color themes</li>
      </ul>
    </div>
  ),
  'about-me': () => (
    <p>
      I am a passionate and driven Data Scientist with a Master's degree in Computer Science from Arizona State University. With a strong foundation in machine learning, deep learning, and data analysis, I enjoy transforming complex data into actionable insights. I am particularly interested in NLP and computer vision and thrive on solving challenging problems that can make a real-world impact.
    </p>
  ),
  experiences: () => (
    <div>
      <p><strong>Graduate Research Assistant</strong> | Arizona State University | May 2023 - May 2024</p>
      <p><strong>Software Engineer</strong> | LTIMindtree | Dec 2020 - July 2022</p>
    </div>
  ),
  'my-projects': () => (
    <div>
      <p>Some of my projects include:</p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Automated Stock Market Analysis Dashboard</strong>: A web app for real-time stock data visualization and analysis.</li>
        <li><strong>Multi-Lingual Document Summarizer</strong>: An NLP project to summarize documents in multiple languages.</li>
        <li><strong>E-commerce Recommendation System</strong>: A system that provides personalized product recommendations.</li>
      </ul>
      <p className="mt-2">Check out my GitHub for more details by typing 'get github'.</p>
    </div>
  ),
  passions: () => (
    <p>
      Beyond coding and data, I'm an avid photographer, a movie buff, and I love exploring new hiking trails.
    </p>
  ),
  'get': (args?: string[]) => {
    if (!args || args.length === 0) {
      return 'Usage: get <cv|linkedin|github>';
    }
    switch (args[0]) {
      case 'cv':
        return openLink(resumeUrl);
      case 'linkedin':
        return openLink(linkedinUrl);
      case 'github':
        return openLink(githubUrl);
      default:
        return `Unknown argument for 'get': ${args[0]}`;
    }
  },
  'get cv': () => openLink(resumeUrl),
  'get linkedin': () => openLink(linkedinUrl),
  'get github': () => openLink(githubUrl),
  clear: () => "clear",
  themes: () => <span>Theme cycling is not implemented yet. (Coming soon!)</span>,
};
