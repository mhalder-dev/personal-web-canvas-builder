import React from 'react';
import { Code2, Database, Globe, Cpu, GitBranch, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Competencies',
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        'Object-Oriented Programming (OOP)',
        'API Design and Integration',
        'Process Automation',
        'Machine Learning Basics'
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['C#', 'JavaScript', 'Python', 'Java', 'C']
    },
    {
      title: 'Frameworks & Platforms',
      icon: <Globe className="w-6 h-6" />,
      skills: ['.NET Core', 'Make.com (process automation)', 'WSO2 Micro Integrator']
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'Database Design', 'Data Management Systems']
    },
    {
      title: 'Development Practices',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['RESTful API Development', 'Version Control (Git)', 'Agile Methodologies']
    },
    {
      title: 'Tools & Technologies',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Postman', 'Visual Studio', 'VS Code', 'API Testing']
    }
  ];

  const technicalSkills = [
    { name: 'Backend Development', level: 90 },
    { name: 'API Integration', level: 85 },
    { name: 'Database Design', level: 80 },
    { name: 'Machine Learning', level: 75 },
    { name: 'Process Automation', level: 85 },
    { name: 'System Architecture', level: 80 }
  ];

  return (
    <section id="skills" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive technical skills developed through academic excellence and professional experience
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="text-muted-foreground flex items-center"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Proficiency */}
          <div className="bg-card p-8 rounded-lg shadow-soft border border-border">
            <h3 className="text-2xl font-semibold text-card-foreground mb-8 text-center">
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-card-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Certifications & Training
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <h4 className="font-semibold text-card-foreground mb-2">
                  Machine Learning for Everyone
                </h4>
                <p className="text-muted-foreground text-sm">
                  DataCamp - Machine Learning Certification From Basic to Advanced
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <h4 className="font-semibold text-card-foreground mb-2">
                  Introduction to Computer Science
                </h4>
                <p className="text-muted-foreground text-sm">
                  Harvard University (edX) - Foundational course on computer science concepts
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <h4 className="font-semibold text-card-foreground mb-2">
                  AI For Everyone
                </h4>
                <p className="text-muted-foreground text-sm">
                  Coursera - Non-technical introduction to AI by Andrew Ng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;