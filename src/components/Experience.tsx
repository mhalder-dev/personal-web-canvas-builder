import React from 'react';
import { MapPin, Calendar, Briefcase, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Akij iBOS Ltd.',
      position: 'Executive, Research and Development',
      period: 'January 2025 – Present',
      location: 'Bangladesh',
      type: 'Full-time',
      responsibilities: [
        'Developed process automation workflows using Make.com to streamline business operations',
        'Designed and implemented machine learning models such as theft detection systems',
        'Integrated APIs using WSO2 Micro Integrator for enterprise communication',
        'Developed backend APIs in .NET for the FlightMesh project at Akij Air',
        'Explored and integrated Global Distribution Systems (GDS) and supplier APIs for enhanced connectivity'
      ],
      technologies: ['Make.com', 'Machine Learning', 'WSO2 Micro Integrator', '.NET Core', 'API Integration', 'GDS APIs']
    },
    {
      company: 'United International University',
      position: 'Instructor',
      period: 'May 2024 – December 2024',
      location: 'Bangladesh',
      type: 'Part-time',
      responsibilities: [
        'Delivered theory and lab courses including Object-Oriented Programming, Data Structures, and Discrete Mathematics',
        'Prepared course materials and designed lab exercises for hands-on learning',
        'Guided students in academic projects and research initiatives',
        'Led student teams in software projects, guiding design, development, and deployment',
        'Mentored students to apply programming concepts effectively in practical projects',
        'Encouraged collaborative problem-solving and iterative project improvement'
      ],
      technologies: ['Object-Oriented Programming', 'Data Structures', 'Discrete Mathematics', 'Academic Research', 'Project Management']
    }
  ];

  const leadershipExperience = [
    {
      title: 'Team Leadership & Management',
      company: 'Akij iBOS Ltd.',
      period: 'January 2025 – Present',
      highlights: [
        'Developed backend APIs in .NET for enterprise projects including FlightMesh',
        'Integrated external supplier APIs including GDS for enhanced service connectivity',
        'Implemented process automation workflows using Make.com',
        'Worked on machine learning projects such as theft detection'
      ]
    },
    {
      title: 'Academic Leadership',
      company: 'United International University',
      period: 'May 2024 – December 2024',
      highlights: [
        'Led student teams in software projects, guiding design, development, and deployment',
        'Mentored students to apply programming concepts effectively in practical projects',
        'Encouraged collaborative problem-solving and iterative project improvement'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional journey spanning software development, research, and academic instruction
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-primary" />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-card rounded-lg shadow-soft border border-border overflow-hidden">
                  {/* Header */}
                  <div className="bg-primary/5 p-6 border-b border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-card-foreground mb-1">
                          {exp.position}
                        </h4>
                        <p className="text-lg text-primary font-medium mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end space-y-1">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location} • {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h5 className="font-semibold text-card-foreground mb-4">Key Responsibilities:</h5>
                    <ul className="space-y-3 mb-6">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>

                    <div>
                      <h5 className="font-semibold text-card-foreground mb-3">Technologies & Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <Users className="w-6 h-6 mr-3 text-primary" />
              Leadership & Team Management Experience
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {leadershipExperience.map((leadership, index) => (
                <div key={index} className="bg-card rounded-lg shadow-soft border border-border p-6">
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">
                    {leadership.title}
                  </h4>
                  <p className="text-primary font-medium mb-1">{leadership.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{leadership.period}</p>
                  
                  <ul className="space-y-2">
                    {leadership.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Research Collaborations */}
          <div className="mt-16 bg-accent p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Research Collaborations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Reviewer</h4>
                <p className="text-muted-foreground">Applied Sciences (MDPI)</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Reviewer</h4>
                <p className="text-muted-foreground">IEEE Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;