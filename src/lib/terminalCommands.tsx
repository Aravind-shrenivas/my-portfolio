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
    <div className="mt-1 font-mono">
      <p className="mb-3 text-green-400">Available commands:</p>
      <div className="space-y-1">
        <div className="flex"><span className="text-green-400 w-20">help</span><span className="text-gray-300">- Show this command list</span></div>
        <div className="flex"><span className="text-green-400 w-20">about-me</span><span className="text-gray-300">- Display my bio and summary</span></div>
        <div className="flex"><span className="text-green-400 w-20">my-experiences</span><span className="text-gray-300">- Print a timeline of my roles</span></div>
        <div className="flex"><span className="text-green-400 w-20">my-projects</span><span className="text-gray-300">- List my personal projects</span></div>
        <div className="flex"><span className="text-green-400 w-20">passions</span><span className="text-gray-300">- List my hobbies/interests</span></div>
        <div className="flex"><span className="text-green-400 w-20">get-cv</span><span className="text-gray-300">- Open my CV in a new tab</span></div>
        <div className="flex"><span className="text-green-400 w-20">get-linkedin</span><span className="text-gray-300">- Open my LinkedIn profile</span></div>
        <div className="flex"><span className="text-green-400 w-20">get-github</span><span className="text-gray-300">- Open my GitHub profile</span></div>
        <div className="flex"><span className="text-green-400 w-20">clear</span><span className="text-gray-300">- Clear the terminal screen</span></div>
        <div className="flex"><span className="text-green-400 w-20">themes</span><span className="text-gray-300">- Cycle through terminal color themes</span></div>
      </div>
    </div>
  ),
  'HELP': () => commands.help(),
  'Help': () => commands.help(),
  'about-me': () => (
    <p>
      I am a passionate and driven Data Scientist with a Master's degree in Computer Science from Arizona State University. With a strong foundation in machine learning, deep learning, and data analysis, I enjoy transforming complex data into actionable insights. I am particularly interested in NLP and computer vision and thrive on solving challenging problems that can make a real-world impact.
    </p>
  ),
  'my-experiences': () => (
    <div>
      <p><strong>Graduate Research Assistant</strong> | Arizona State University | May 2023 - May 2024</p>
      <p><strong>Software Engineer</strong> | LTIMindtree | Dec 2020 - July 2022</p>
    </div>
  ),
  experiences: () => commands['my-experiences'](),
  'my-projects': () => (
    <div>
      <p>Some of my projects include:</p>
      <ul className="list-disc list-inside ml-4 mt-2">
        <li><strong>Automated Stock Market Analysis Dashboard</strong>: A web app for real-time stock data visualization and analysis.</li>
        <li><strong>Multi-Lingual Document Summarizer</strong>: An NLP project to summarize documents in multiple languages.</li>
        <li><strong>E-commerce Recommendation System</strong>: A system that provides personalized product recommendations.</li>
      </ul>
      <p className="mt-2">Check out my GitHub for more details by typing 'get-github'.</p>
    </div>
  ),
  passions: () => (
    <p>
      Beyond coding and data, I'm an avid photographer, a movie buff, and I love exploring new hiking trails.
    </p>
  ),
  'get-cv': () => openLink(resumeUrl),
  'get-linkedin': () => openLink(linkedinUrl),
  'get-github': () => openLink(githubUrl),
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
