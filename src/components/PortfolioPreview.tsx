import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink } from 'lucide-react';

interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
    bio: string;
  };
  skills: string[];
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string;
    link: string;
  }>;
  profileImage?: string | null;
}

interface PortfolioPreviewProps {
  data: PortfolioData;
  template: string;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ data, template }) => {
  if (!data.personalInfo.name) {
    return (
      <div className="flex items-center justify-center h-96 text-gray-500">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-lg">Fill in your information to see the portfolio preview</p>
        </div>
      </div>
    );
  }

  const renderModernTemplate = () => (
    <div className="portfolio-preview modern-template">
      {/* Header Section */}
      <div className="portfolio-header bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white p-8 rounded-t-xl">
        <div className="text-center">
          {data.profileImage ? (
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={data.profileImage} 
                alt={data.personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {data.personalInfo.name.charAt(0)}
            </div>
          )}
          <h1 className="text-4xl font-bold mb-2">{data.personalInfo.name}</h1>
          <p className="text-xl opacity-90 mb-6">{data.personalInfo.title}</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {data.personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
          </div>
          
          <div className="flex justify-center gap-4 mt-4">
            {data.personalInfo.website && (
              <a href={data.personalInfo.website} className="hover:text-blue-200 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            )}
            {data.personalInfo.linkedin && (
              <a href={`https://${data.personalInfo.linkedin}`} className="hover:text-blue-200 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {data.personalInfo.github && (
              <a href={`https://${data.personalInfo.github}`} className="hover:text-blue-200 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* About Section */}
        {data.personalInfo.bio && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">About Me</h2>
            <p className="text-gray-600 leading-relaxed">{data.personalInfo.bio}</p>
          </section>
        )}

        {/* Skills Section */}
        {data.skills.some(skill => skill.trim()) && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.filter(skill => skill.trim()).map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Experience Section */}
        {data.experience.some(exp => exp.title || exp.company) && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">Experience</h2>
            <div className="space-y-6">
              {data.experience.filter(exp => exp.title || exp.company).map((exp, index) => (
                <Card key={index} className="portfolio-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {data.education.some(edu => edu.degree || edu.institution) && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">Education</h2>
            <div className="space-y-4">
              {data.education.filter(edu => edu.degree || edu.institution).map((edu, index) => (
                <Card key={index} className="portfolio-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                        <p className="text-blue-600">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {data.projects.some(project => project.name) && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {data.projects.filter(project => project.name).map((project, index) => (
                <Card key={index} className="portfolio-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                      {project.link && (
                        <a 
                          href={project.link} 
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    {project.description && (
                      <p className="text-gray-600 mb-3 leading-relaxed">{project.description}</p>
                    )}
                    {project.technologies && (
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.split(',').map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech.trim()}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );

  const renderMinimalistTemplate = () => (
    <div className="portfolio-preview minimalist-template bg-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <header className="text-center mb-12 pb-8 border-b border-gray-200">
          {data.profileImage && (
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
              <img 
                src={data.profileImage} 
                alt={data.personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <h1 className="text-5xl font-light text-gray-900 mb-2">{data.personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{data.personalInfo.title}</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
          </div>
        </header>

        {/* About */}
        {data.personalInfo.bio && (
          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">{data.personalInfo.bio}</p>
          </section>
        )}

        {/* Skills */}
        {data.skills.some(skill => skill.trim()) && (
          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.filter(skill => skill.trim()).map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {data.experience.some(exp => exp.title || exp.company) && (
          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Experience</h2>
            <div className="space-y-8">
              {data.experience.filter(exp => exp.title || exp.company).map((exp, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 mt-2">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.some(edu => edu.degree || edu.institution) && (
          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Education</h2>
            <div className="space-y-4">
              {data.education.filter(edu => edu.degree || edu.institution).map((edu, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.some(project => project.name) && (
          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Projects</h2>
            <div className="space-y-6">
              {data.projects.filter(project => project.name).map((project, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                    {project.link && (
                      <a href={project.link} className="text-gray-600 hover:text-gray-900">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  {project.description && (
                    <p className="text-gray-700 mb-2">{project.description}</p>
                  )}
                  {project.technologies && (
                    <p className="text-sm text-gray-500">{project.technologies}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );

  return (
    <div className="portfolio-container">
      {template === 'minimalist' ? renderMinimalistTemplate() : renderModernTemplate()}
    </div>
  );
};

export default PortfolioPreview;
