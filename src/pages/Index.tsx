
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PortfolioForm from '@/components/PortfolioForm';
import PortfolioPreview from '@/components/PortfolioPreview';
import TemplateSelector from '@/components/TemplateSelector';
import { Download, Eye, Code, Palette, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

const Index = () => {
  const { toast } = useToast();
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    personalInfo: {
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      linkedin: '',
      github: '',
      bio: ''
    },
    skills: [''],
    experience: [{ title: '', company: '', duration: '', description: '' }],
    education: [{ degree: '', institution: '', year: '' }],
    projects: [{ name: '', description: '', technologies: '', link: '' }],
    profileImage: null
  });

  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [activeTab, setActiveTab] = useState('form');

  const handleDataChange = (data: PortfolioData) => {
    setPortfolioData(data);
  };

  const handleProfileImageChange = (imageData: string | null) => {
    setPortfolioData(prev => ({
      ...prev,
      profileImage: imageData
    }));
  };

  const handleGenerate = () => {
    if (!portfolioData.personalInfo.name.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter at least your name to generate a portfolio.",
        variant: "destructive"
      });
      return;
    }

    setActiveTab('preview');
    toast({
      title: "Portfolio Generated!",
      description: "Your portfolio has been successfully generated.",
    });
  };

  const handleDownload = () => {
    const portfolioElement = document.querySelector('.portfolio-preview');
    if (!portfolioElement) return;

    const profileImageSection = portfolioData.profileImage ? `
      <div style="width: 8rem; height: 8rem; margin: 0 auto 1.5rem; border-radius: 50%; overflow: hidden; border: 4px solid white; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
        <img src="${portfolioData.profileImage}" alt="${portfolioData.personalInfo.name}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
    ` : `
      <div style="width: 8rem; height: 8rem; background: white; border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: bold; background: linear-gradient(to right, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        ${portfolioData.personalInfo.name.charAt(0)}
      </div>
    `;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.personalInfo.name} - Portfolio</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .portfolio-container { max-width: 1200px; margin: 0 auto; }
        .portfolio-header { background: linear-gradient(135deg, #3b82f6, #8b5cf6, #4f46e5); color: white; padding: 3rem; text-align: center; }
        .portfolio-header h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .portfolio-header p { font-size: 1.25rem; opacity: 0.9; margin-bottom: 1.5rem; }
        .contact-info { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; font-size: 0.9rem; }
        .contact-info div { display: flex; align-items: center; gap: 0.5rem; }
        .content { padding: 2rem; }
        .section { margin-bottom: 3rem; }
        .section h2 { font-size: 1.5rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6; }
        .skills { display: flex; flex-wrap: gap: 0.5rem; }
        .skill-tag { background: #e0f2fe; color: #0277bd; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; }
        .experience-item, .education-item, .project-item { margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; }
        .experience-item h3, .project-item h3 { font-size: 1.125rem; margin-bottom: 0.25rem; }
        .company, .institution { color: #3b82f6; font-weight: 500; }
        .duration, .year { color: #6b7280; font-size: 0.875rem; float: right; }
        .description { margin-top: 0.5rem; color: #4b5563; }
        .tech-tags { display: flex; flex-wrap: gap: 0.25rem; margin-top: 0.5rem; }
        .tech-tag { background: #f3f4f6; color: #374151; padding: 0.125rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; }
        @media (max-width: 768px) {
            .portfolio-header { padding: 2rem 1rem; }
            .portfolio-header h1 { font-size: 2rem; }
            .content { padding: 1rem; }
            .contact-info { gap: 1rem; }
        }
    </style>
</head>
<body>
    <div class="portfolio-container">
        <div class="portfolio-header">
            ${profileImageSection}
            <h1>${portfolioData.personalInfo.name}</h1>
            <p>${portfolioData.personalInfo.title}</p>
            <div class="contact-info">
                ${portfolioData.personalInfo.email ? `<div>📧 ${portfolioData.personalInfo.email}</div>` : ''}
                ${portfolioData.personalInfo.phone ? `<div>📞 ${portfolioData.personalInfo.phone}</div>` : ''}
                ${portfolioData.personalInfo.location ? `<div>📍 ${portfolioData.personalInfo.location}</div>` : ''}
            </div>
        </div>
        
        <div class="content">
            ${portfolioData.personalInfo.bio ? `
            <div class="section">
                <h2>About Me</h2>
                <p>${portfolioData.personalInfo.bio}</p>
            </div>
            ` : ''}
            
            ${portfolioData.skills.some(skill => skill.trim()) ? `
            <div class="section">
                <h2>Skills</h2>
                <div class="skills">
                    ${portfolioData.skills.filter(skill => skill.trim()).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            ` : ''}
            
            ${portfolioData.experience.some(exp => exp.title || exp.company) ? `
            <div class="section">
                <h2>Experience</h2>
                ${portfolioData.experience.filter(exp => exp.title || exp.company).map(exp => `
                <div class="experience-item">
                    <h3>${exp.title}</h3>
                    <div class="company">${exp.company}</div>
                    <div class="duration">${exp.duration}</div>
                    ${exp.description ? `<div class="description">${exp.description}</div>` : ''}
                </div>
                `).join('')}
            </div>
            ` : ''}
            
            ${portfolioData.education.some(edu => edu.degree || edu.institution) ? `
            <div class="section">
                <h2>Education</h2>
                ${portfolioData.education.filter(edu => edu.degree || edu.institution).map(edu => `
                <div class="education-item">
                    <h3>${edu.degree}</h3>
                    <div class="institution">${edu.institution}</div>
                    <div class="year">${edu.year}</div>
                </div>
                `).join('')}
            </div>
            ` : ''}
            
            ${portfolioData.projects.some(project => project.name) ? `
            <div class="section">
                <h2>Projects</h2>
                ${portfolioData.projects.filter(project => project.name).map(project => `
                <div class="project-item">
                    <h3>${project.name}</h3>
                    ${project.description ? `<div class="description">${project.description}</div>` : ''}
                    ${project.technologies ? `
                    <div class="tech-tags">
                        ${project.technologies.split(',').map(tech => `<span class="tech-tag">${tech.trim()}</span>`).join('')}
                    </div>
                    ` : ''}
                    ${project.link ? `<div style="margin-top: 0.5rem;"><a href="${project.link}" style="color: #3b82f6;">View Project</a></div>` : ''}
                </div>
                `).join('')}
            </div>
            ` : ''}
        </div>
    </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${portfolioData.personalInfo.name.replace(/\s+/g, '_')}_Portfolio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Portfolio Downloaded!",
      description: "Your portfolio has been saved as an HTML file.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Portfolio Generator
            </h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in">
              Create a stunning professional portfolio in minutes
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Personal Info</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                <span>Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>Live Preview</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>Download</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-lg">
            <TabsTrigger value="form" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Create Portfolio
            </TabsTrigger>
            <TabsTrigger value="template" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Choose Template
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Preview & Download
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="portfolio-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Fill Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PortfolioForm 
                    onDataChange={handleDataChange}
                    onGenerate={handleGenerate}
                  />
                </CardContent>
              </Card>

              <Card className="portfolio-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Live Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="max-h-[80vh] overflow-y-auto">
                    <PortfolioPreview 
                      data={portfolioData}
                      template={selectedTemplate}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="template">
            <Card className="portfolio-card max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Select Portfolio Template & Upload Profile Picture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TemplateSelector 
                  selectedTemplate={selectedTemplate}
                  onTemplateChange={setSelectedTemplate}
                  profileImage={portfolioData.profileImage}
                  onProfileImageChange={handleProfileImageChange}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview">
            <div className="space-y-6">
              <Card className="portfolio-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-between">
                    Portfolio Preview
                    <Button 
                      onClick={handleDownload}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                      disabled={!portfolioData.personalInfo.name.trim()}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download HTML
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <PortfolioPreview 
                      data={portfolioData}
                      template={selectedTemplate}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Create professional portfolios with ease
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
