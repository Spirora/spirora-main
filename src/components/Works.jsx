import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Code, Database, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// Sample works data - you can expand this
const worksData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full-Stack Development',
    description: 'A modern e-commerce platform built with React, Node.js, and MongoDB featuring real-time inventory management and payment processing.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    client: 'TechCorp Solutions',
    duration: '3 months',
    teamSize: '4 developers',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    year: '2024'
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'Enterprise Software',
    description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine integration.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes'],
    client: 'MedTech Innovations',
    duration: '6 months',
    teamSize: '8 developers',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    year: '2024'
  },
  {
    id: 3,
    title: 'FinTech Dashboard',
    category: 'Data Visualization',
    description: 'Real-time financial dashboard with advanced analytics, risk assessment, and automated reporting features.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'D3.js', 'Python', 'Redis', 'AWS Lambda'],
    client: 'FinanceFlow Inc',
    duration: '4 months',
    teamSize: '5 developers',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    year: '2023'
  },
  {
    id: 4,
    title: 'IoT Smart Home Hub',
    category: 'IoT & Mobile',
    description: 'Smart home automation platform with mobile app, voice control, and energy monitoring capabilities.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Node.js', 'MQTT', 'InfluxDB', 'Raspberry Pi'],
    client: 'SmartLiving Co',
    duration: '5 months',
    teamSize: '6 developers',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    year: '2023'
  },
  {
    id: 5,
    title: 'AI-Powered CRM',
    category: 'AI & Machine Learning',
    description: 'Customer relationship management system enhanced with AI for predictive analytics and automated customer insights.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
    client: 'SalesPro Solutions',
    duration: '7 months',
    teamSize: '10 developers',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    year: '2023'
  },
  {
    id: 6,
    title: 'Blockchain Voting System',
    category: 'Blockchain',
    description: 'Secure and transparent voting platform built on blockchain technology with end-to-end encryption.',
    image: '/api/placeholder/600/400',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
    client: 'DemocracyTech',
    duration: '8 months',
    teamSize: '7 developers',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    year: '2022'
  }
];

const categories = ['All', 'Full-Stack Development', 'Enterprise Software', 'Data Visualization', 'IoT & Mobile', 'AI & Machine Learning', 'Blockchain'];

function Works() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWork, setSelectedWork] = useState(null);

  const filteredWorks = selectedCategory === 'All'
    ? worksData
    : worksData.filter(work => work.category === selectedCategory);

  const handleBackToHome = () => {
    // For now, we'll just scroll to top. In a real app, you'd use routing
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative z-10">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 px-6 py-8 md:px-12 md:py-12"
      >
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBackToHome}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-4"
            >
              Our <span className="text-glow text-brand-accent">Portfolio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Discover our latest projects and see how we've helped businesses transform their digital presence
            </motion.p>
          </div>
        </div>
      </motion.header>

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-6 md:px-12 mb-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/25'
                    : 'bg-white/60 text-slate-600 hover:bg-white hover:text-brand-primary border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Works Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="px-6 md:px-12 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden border border-white/80 hover:border-brand-primary/50 transition-all duration-300 cursor-pointer shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-brand-primary/10"
                onClick={() => setSelectedWork(work)}
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className="text-6xl opacity-50">{work.category === 'Full-Stack Development' ? '💻' : work.category === 'Enterprise Software' ? '🏢' : work.category === 'Data Visualization' ? '📊' : work.category === 'IoT & Mobile' ? '📱' : work.category === 'AI & Machine Learning' ? '🤖' : work.category === 'Blockchain' ? '⛓️' : '🚀'}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-2 py-1 bg-brand-accent/20 text-brand-accent rounded-full">
                      {work.category}
                    </span>
                    <span className="text-xs text-slate-500">{work.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-accent transition-colors">
                    {work.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {work.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-slate-100/80 text-slate-700 rounded border border-slate-200">
                        {tech}
                      </span>
                    ))}
                    {work.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-slate-100/80 text-slate-700 rounded border border-slate-200">
                        +{work.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {work.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {work.teamSize}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={work.liveUrl}
                        className="p-2 text-slate-500 hover:text-brand-accent transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={work.githubUrl}
                        className="p-2 text-slate-500 hover:text-brand-accent transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Work Detail Modal */}
      {selectedWork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedWork(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedWork.title}</h2>
                  <p className="text-brand-accent font-medium">{selectedWork.category}</p>
                </div>
                <button
                  onClick={() => setSelectedWork(null)}
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-8xl opacity-50">
                      {selectedWork.category === 'Full-Stack Development' ? '💻' :
                       selectedWork.category === 'Enterprise Software' ? '🏢' :
                       selectedWork.category === 'Data Visualization' ? '📊' :
                       selectedWork.category === 'IoT & Mobile' ? '📱' :
                       selectedWork.category === 'AI & Machine Learning' ? '🤖' :
                       selectedWork.category === 'Blockchain' ? '⛓️' : '🚀'}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-brand-accent" />
                      <span className="text-slate-700">{selectedWork.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-brand-accent" />
                      <span className="text-slate-700">{selectedWork.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-brand-accent" />
                      <span className="text-slate-700">{selectedWork.client}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Project Overview</h3>
                  <p className="text-slate-600 mb-6">{selectedWork.description}</p>

                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedWork.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedWork.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                    <a
                      href={selectedWork.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 border border-slate-200 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Works;