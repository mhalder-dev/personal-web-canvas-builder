import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email service integration here
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'mhalder201041@bscse.uiu.ac.bd',
      link: 'mailto:mhalder201041@bscse.uiu.ac.bd',
      description: 'Send me an email anytime!'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+880 1317 801458',
      link: 'tel:+8801317801458',
      description: 'Call me for urgent matters'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: 'Dhaka, Bangladesh',
      link: '#',
      description: 'Available for local meetings'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      details: 'Connect on LinkedIn',
      link: '#',
      description: 'Professional networking'
    }
  ];

  const quickActions = [
    {
      title: 'Schedule a Meeting',
      description: 'Book a time slot for a professional discussion',
      icon: <MessageCircle className="w-5 h-5" />,
      action: 'Schedule Call'
    },
    {
      title: 'Download Resume',
      description: 'Get the latest version of my CV',
      icon: <Github className="w-5 h-5" />,
      action: 'Download CV'
    },
    {
      title: 'View Portfolio',
      description: 'Explore my GitHub repositories',
      icon: <Github className="w-5 h-5" />,
      action: 'Visit GitHub'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to discuss opportunities, collaboration, or just want to connect? 
              I'd love to hear from you. Let's build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start p-4 bg-card rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 group-hover:bg-primary/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Actions */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-card rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 group-hover:bg-primary/20 transition-colors">
                          {action.icon}
                        </div>
                        <div>
                          <h5 className="font-medium text-card-foreground">
                            {action.title}
                          </h5>
                          <p className="text-muted-foreground text-sm">
                            {action.description}
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                        {action.action}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>

                <p className="text-muted-foreground text-sm text-center mt-4">
                  I'll get back to you within 24 hours!
                </p>
              </form>
            </div>
          </div>

          {/* Professional Availability */}
          <div className="mt-16 bg-card p-8 rounded-lg shadow-soft border border-border text-center">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Professional Availability
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Currently serving as Research & Development Executive at Akij iBOS Ltd. 
              Available for consulting, collaboration opportunities, and interesting projects. 
              Open to discussing research partnerships, speaking engagements, and mentoring opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                Available for Consulting
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                Open for Collaboration
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium">
                Research Partnerships
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-lg text-sm font-medium">
                Speaking Engagements
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;