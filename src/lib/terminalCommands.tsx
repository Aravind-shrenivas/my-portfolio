
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
        <div className="flex"><span className="text-green-400 w-4">1.</span><span className="text-yellow-400 mx-2">"help":</span><span className="text-gray-300">Show this command list</span></div>
        <div className="flex"><span className="text-green-400 w-4">2.</span><span className="text-yellow-400 mx-2">"about-me":</span><span className="text-gray-300">Display my bio and summary</span></div>
        <div className="flex"><span className="text-green-400 w-4">3.</span><span className="text-yellow-400 mx-2">"my-experiences":</span><span className="text-gray-300">Print a timeline of my roles</span></div>
        <div className="flex"><span className="text-green-400 w-4">4.</span><span className="text-yellow-400 mx-2">"my-projects":</span><span className="text-gray-300">List my personal projects</span></div>
        <div className="flex"><span className="text-green-400 w-4">5.</span><span className="text-yellow-400 mx-2">"passions":</span><span className="text-gray-300">List my hobbies/interests</span></div>
        <div className="flex"><span className="text-green-400 w-4">6.</span><span className="text-yellow-400 mx-2">"get-cv":</span><span className="text-gray-300">Open my CV in a new tab</span></div>
        <div className="flex"><span className="text-green-400 w-4">7.</span><span className="text-yellow-400 mx-2">"get-linkedin":</span><span className="text-gray-300">Open my LinkedIn profile</span></div>
        <div className="flex"><span className="text-green-400 w-4">8.</span><span className="text-yellow-400 mx-2">"get-github":</span><span className="text-gray-300">Open my GitHub profile</span></div>
        <div className="flex"><span className="text-green-400 w-4">9.</span><span className="text-yellow-400 mx-2">"clear":</span><span className="text-gray-300">Clear the terminal screen</span></div>
        <div className="flex"><span className="text-green-400 w-4">10.</span><span className="text-yellow-400 mx-2">"themes":</span><span className="text-gray-300">Cycle through terminal color themes</span></div>
      </div>
    </div>
  ),
  'HELP': () => commands.help(),
  'Help': () => commands.help(),
  'about-me': () => (
    <p className="text-green-400">
      I'm Aravind Shrenivas, a data-driven Supply Chain Analyst with 3.5+ years of global experience in demand planning, inventory optimization, and workflow automation. I specialize in using tools like Python, SQL, and Power BI to streamline operations and deliver measurable improvements in forecast accuracy and order fulfillment. With a strong foundation in data science and hands-on experience across Intel, Capgemini, and Cognizant, I bridge the gap between analytics and real-world supply chain impact.
    </p>
  ),
  'my-experiences': () => (
    <div className="text-green-400">
      <div className="mb-2"><span className="text-yellow-400">1.</span> <strong>Intel – Supply Chain Analyst Intern:</strong> Improved demand forecast accuracy by 12% using Python & Power BI; automated reports and cut order cycle time by 15%.</div>
      <div className="mb-2"><span className="text-yellow-400">2.</span> <strong>University of Arizona – Research Assistant:</strong> Built deep learning models for medical image segmentation; earned 3rd place in a global ML competition.</div>
      <div className="mb-2"><span className="text-yellow-400">3.</span> <strong>Capgemini – Senior Analyst:</strong> Automated 10K+ feedback processes weekly; reduced documentation time by 15 hours using OpenText & AWS.</div>
      <div className="mb-2"><span className="text-yellow-400">4.</span> <strong>Cognizant – Supply Chain Analyst:</strong> Cut excess inventory by 10%, improved fulfillment by 20% using Tableau, R, and Six Sigma.</div>
    </div>
  ),
  experiences: () => commands['my-experiences'](),
  'my-projects': () => (
    <div className="text-green-400">
      <div className="mb-2"><span className="text-yellow-400">1.</span> <strong>Medical Image AI:</strong> Built deep learning pipelines to enhance ophthalmic diagnostics.</div>
      <div className="mb-2"><span className="text-yellow-400">2.</span> <strong>Sentiment Analysis Dashboard:</strong> Integrated BERT with AWS Lambda + Power BI for feedback insights.</div>
      <div className="mb-2"><span className="text-yellow-400">3.</span> <strong>Inventory Automation:</strong> Created macros & SQL tools to streamline supply chain reporting.</div>
    </div>
  ),
  passions: () => (
    <div className="text-green-400">
      <div className="mb-2"><span className="text-yellow-400">1.</span> Data science & AI for real-world impact</div>
      <div className="mb-2"><span className="text-yellow-400">2.</span> Supply chain optimization</div>
      <div className="mb-2"><span className="text-yellow-400">3.</span> Visual storytelling through dashboards</div>
      <div className="mb-2"><span className="text-yellow-400">4.</span> Continuous learning, competitions & research collaboration</div>
    </div>
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
