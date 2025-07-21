import React from 'react';
import { ExternalLink, Github, Code, Database, Bot, Plane } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FlightMesh API Development',
      company: 'Akij iBOS Ltd.',
      role: 'API Developer',
      icon: <Plane className="w-6 h-6" />,
      description: 'Comprehensive API development project for FlightMesh, focusing on RESTful services and third-party integrations for aviation industry solutions.',
      responsibilities: [
        'Developed RESTful APIs in .NET for FlightMesh project',
        'Integrated third-party supplier APIs including Global Distribution Systems (GDS)',
        'Ensured API performance, security, and scalability',
        'Implemented comprehensive testing and documentation'
      ],
      technologies: ['.NET Core', 'RESTful APIs', 'GDS Integration', 'API Security', 'Performance Optimization'],
      status: 'In Production',
      category: 'Backend Development'
    },
    {
      title: 'ML-Based Theft Detection System',
      company: 'Akij iBOS Ltd.',
      role: 'Machine Learning Developer',
      icon: <Database className="w-6 h-6" />,
      description: 'Intelligent theft detection system using machine learning algorithms to provide real-time security monitoring and automated alerts.',
      responsibilities: [
        'Designed and implemented machine learning models for theft detection',
        'Preprocessed data and evaluated model performance for real-time detection accuracy',
        'Integrated ML components into backend systems for automated alerts',
        'Optimized detection algorithms for high accuracy and low false positives'
      ],
      technologies: ['Machine Learning', 'Python', 'Data Preprocessing', 'Model Evaluation', 'Real-time Processing'],
      status: 'Completed',
      category: 'Machine Learning'
    },
    {
      title: 'Automated Chatbot for Managerium Software',
      company: 'Akij iBOS Ltd.',
      role: 'Developer',
      icon: <Bot className="w-6 h-6" />,
      description: 'Advanced chatbot solution integrated with Managerium software to enhance user engagement and automate customer interactions.',
      responsibilities: [
        'Developed an automated chatbot using Make.com and ChatGPT API',
        'Integrated chatbot with Managerium software promotional webpage to improve user engagement',
        'Automated customer interaction workflows to enhance support efficiency',
        'Implemented natural language processing for better user experience'
      ],
      technologies: ['Make.com', 'ChatGPT API', 'Workflow Automation', 'NLP', 'Customer Engagement'],
      status: 'Live',
      category: 'Automation'
    },
    {
      title: 'GDS and Airline API Exploration',
      company: 'Akij iBOS Ltd.',
      role: 'API Integration Researcher',
      icon: <Code className="w-6 h-6" />,
      description: 'Comprehensive research and analysis project exploring Global Distribution Systems and airline APIs for enhanced service integration.',
      responsibilities: [
        'Explored and analyzed Sabre, Travelport, and other GDS APIs',
        'Investigated direct airline APIs including US-Bangla Airlines for integration opportunities',
        'Documented API features and potential integration challenges',
        'Provided recommendations for optimal API integration strategies'
      ],
      technologies: ['API Research', 'GDS Systems', 'Sabre', 'Travelport', 'API Documentation', 'Integration Planning'],
      status: 'Research Completed',
      category: 'Research & Analysis'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Production':
      case 'Live':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      case 'Research Completed':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Backend Development':
        return 'bg-primary/10 text-primary';
      case 'Machine Learning':
        return 'bg-green-100 text-green-700';
      case 'Automation':
        return 'bg-orange-100 text-orange-700';
      case 'Research & Analysis':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="projects" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key projects showcasing expertise in backend development, machine learning, and system integration
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg shadow-soft border border-border overflow-hidden hover:shadow-medium transition-all duration-300"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-1">
                          {project.title}
                        </h3>
                        <p className="text-primary text-sm font-medium">{project.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Role:</span> {project.role}
                  </p>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h4 className="font-semibold text-card-foreground mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2 mb-6">
                    {project.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="font-semibold text-card-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                    {project.category !== 'Research & Analysis' && (
                      <button className="flex items-center px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm font-medium">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Projects Note */}
          <div className="mt-16 text-center">
            <div className="bg-card p-8 rounded-lg shadow-soft border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Additional Projects & Research
              </h3>
              <p className="text-muted-foreground mb-6">
                Beyond featured projects, I have contributed to various academic research initiatives, 
                published papers in international conferences, and participated in collaborative research 
                with industry partners. My work spans multiple domains including pattern recognition, 
                deep learning applications, and intelligent systems development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                  Published Research Papers
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                  Conference Presentations
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                  Academic Collaborations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;