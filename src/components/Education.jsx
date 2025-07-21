import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science (B.Sc.) in Computer Science and Engineering',
      institution: 'United International University, Bangladesh',
      year: '2024',
      gpa: 'CGPA: 3.92/4.00',
      description: 'Comprehensive computer science program covering core subjects including algorithms, data structures, software engineering, database systems, and machine learning.',
      highlights: [
        'Graduated with High Distinction',
        'Strong foundation in theoretical computer science',
        'Extensive practical experience through lab courses',
        'Active participation in research projects'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Government Science College, Dhaka',
      year: '2018',
      gpa: 'GPA: 4.58/5.00',
      description: 'Science track with focus on mathematics, physics, and chemistry, providing strong analytical and problem-solving foundations.',
      highlights: [
        'Science track specialization',
        'Strong mathematical foundation',
        'Analytical thinking development',
        'Academic excellence achievement'
      ]
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Shaheed Police Smrity School, Dhaka',
      year: '2016',
      gpa: 'GPA: 5.00/5.00',
      description: 'Perfect academic performance in secondary education with comprehensive coverage of core subjects.',
      highlights: [
        'Perfect GPA achievement',
        'Academic excellence award',
        'Strong foundational education',
        'Consistent top performance'
      ]
    }
  ];

  const publications = [
    {
      title: 'Human Trajectory Imputation Model: A Hybrid Deep Learning Approach for Pedestrian Trajectory Imputation',
      authors: 'Barua, Deb Kanti, Halder, Mithun, Shayanta Shopnil, and Md. Motaharul Islam',
      year: '2025',
      journal: 'Applied Sciences',
      details: '15.2, p. 745. ISSN: 2076-3417. DOI: 10.3390/app15020745',
      type: 'Journal Publication'
    },
    {
      title: 'PTIN: Enriching Pedestrian Safety with an LSTM-GRU-Transformer Based Trajectory Imputation System for Autonomous Vehicles',
      authors: 'Barua, Deb Kanti, Halder, Mithun, Shayanta Shopnil, and Md. Motaharul Islam',
      year: '2023',
      conference: '2023 26th International Conference on Computer and Information Technology (ICCIT)',
      details: 'pp. 1–5. DOI: 10.1109/ICCIT60459.2023.10441523',
      type: 'Conference Paper'
    },
    {
      title: 'Clustering as a Catalyst for Big Data Classification (CC-BC)',
      authors: 'Halder, Mithun, Shayanta Shopnil, Yeasir Arafat, Md Muzadded Chowdhury, Sayed Hossain Jobayer, and Dewan Md. Farid',
      year: '2023',
      conference: '2023 26th International Conference on Computer and Information Technology (ICCIT)',
      details: 'pp. 1–6. DOI: 10.1109/ICCIT60459.2023.10441188',
      type: 'Conference Paper'
    },
    {
      title: 'HingeRLC-GAN: Combatting Mode Collapse with Hinge Loss and RLC Regularization',
      authors: 'Goni, Osman, Himadri Saha Arka, Halder, Mithun, Mir Moynuddin Ahmed Shibly, and Swakkhar Shatabda',
      year: '2025',
      journal: 'Pattern Recognition',
      details: 'Ed. by Apostolos Antonacopoulos, Subhasis Chaudhuri, Rama Chellappa, Cheng-Lin Liu, Saumik Bhattacharya, and Umapada Pal. Cham: Springer Nature Switzerland, pp. 370–385. ISBN: 978-3-031-78389-0',
      type: 'Book Chapter'
    }
  ];

  const extracurricular = [
    {
      activity: 'Paper Presenter',
      event: '26th International Conference on Computer and Information Technology (ICCIT)',
      year: '2023',
      description: 'Presented research findings on pedestrian safety and big data classification'
    },
    {
      activity: 'Project Mentor',
      event: 'United International University',
      year: '2024',
      description: 'Guided students on software development projects and research initiatives'
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & Research
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic excellence and research contributions in computer science and engineering
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Academic Qualifications
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-card rounded-lg shadow-soft border border-border overflow-hidden">
                  {/* Header */}
                  <div className="bg-primary/5 p-6 border-b border-border">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-card-foreground mb-2">
                          {edu.degree}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                          <p className="text-primary font-medium flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {edu.institution}
                          </p>
                          <div className="flex items-center gap-4">
                            <p className="text-muted-foreground flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {edu.year}
                            </p>
                            <p className="text-foreground font-semibold flex items-center">
                              <Award className="w-4 h-4 mr-2" />
                              {edu.gpa}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">{edu.description}</p>
                    
                    <h5 className="font-semibold text-card-foreground mb-4">Key Highlights:</h5>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Publications */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-primary" />
              Research Publications
            </h3>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-card rounded-lg shadow-soft border border-border p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-card-foreground mb-2">
                        {pub.title}
                      </h4>
                      <p className="text-muted-foreground mb-2">{pub.authors}</p>
                      <p className="text-primary font-medium">
                        {pub.journal || pub.conference} ({pub.year})
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mt-2 lg:mt-0 self-start">
                      {pub.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{pub.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Extracurricular Activities
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {extracurricular.map((activity, index) => (
                <div key={index} className="bg-card rounded-lg shadow-soft border border-border p-6">
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">
                    {activity.activity}
                  </h4>
                  <p className="text-primary font-medium mb-1">{activity.event}</p>
                  <p className="text-muted-foreground text-sm mb-3">{activity.year}</p>
                  <p className="text-muted-foreground">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="mt-16 bg-accent p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Academic References
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Dr. Md. Motaharul Islam</h4>
                <p className="text-muted-foreground text-sm mb-1">
                  Professor, Department of Computer Science and Engineering & Director, MSCSE Program
                </p>
                <p className="text-muted-foreground text-sm mb-1">United International University</p>
                <p className="text-muted-foreground text-sm mb-1">Room: 418 (B), PABX: 3108</p>
                <p className="text-primary text-sm">Email: motaharul@cse.uiu.ac.bd</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Dr. Swakkhar Shatabda</h4>
                <p className="text-muted-foreground text-sm mb-1">
                  Professor, OBE Team, Department of Computer Science and Engineering
                </p>
                <p className="text-muted-foreground text-sm mb-1">Brac University</p>
                <p className="text-muted-foreground text-sm mb-1">
                  4th Floor, Room No. 4G28, Kha 224 Bir Uttam Rafiqul Islam Avenue, Merul Badda, Dhaka, Bangladesh
                </p>
                <p className="text-primary text-sm">Email: swakkhar.shatabda@bracu.ac.bd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;