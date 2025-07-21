import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Computer Science Professional
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a Computer Science professional with a strong academic foundation and diverse experience 
                in teaching, backend development, and applied intelligent systems. With a Bachelor's degree 
                from United International University and a CGPA of 3.92/4.00, I bring both theoretical 
                knowledge and practical expertise to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently serving as a Research & Development Executive at Akij iBOS Ltd., I contribute to 
                real-world automation and AI-driven projects. My work includes API integration using WSO2 
                Micro Integrator, backend development in .NET for the "FlightMesh" project, and ML-based 
                solutions like intelligent theft detection.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As a former Instructor at United International University, I taught both theory and lab 
                courses across core Computer Science subjects, bridging industry practices with academic 
                research and mentoring the next generation of developers.
              </p>

              {/* Research Interests */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Research Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Machine Learning',
                    'Deep Learning', 
                    'Computer Vision',
                    'Internet of Things (IoT)',
                    'Bio-informatics',
                    'Bionics'
                  ].map((interest, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold text-card-foreground">Development Expertise</h4>
                </div>
                <p className="text-muted-foreground">
                  Specialized in backend development, RESTful API design, and system integration 
                  with expertise in .NET Core, C#, and database management.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold text-card-foreground">Teaching & Mentoring</h4>
                </div>
                <p className="text-muted-foreground">
                  Former university instructor with experience in delivering theory and practical 
                  courses, guiding student projects, and academic research.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold text-card-foreground">Innovation Focus</h4>
                </div>
                <p className="text-muted-foreground">
                  Passionate about applying AI and machine learning to solve real-world problems, 
                  from theft detection systems to process automation.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold text-card-foreground">Professional Goal</h4>
                </div>
                <p className="text-muted-foreground">
                  Particularly interested in bridging industry practices with academic research 
                  and mentoring the next generation of technology professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;