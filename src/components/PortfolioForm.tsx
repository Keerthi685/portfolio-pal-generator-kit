
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';

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
}

interface PortfolioFormProps {
  onDataChange: (data: PortfolioData) => void;
  onGenerate: () => void;
}

const PortfolioForm: React.FC<PortfolioFormProps> = ({ onDataChange, onGenerate }) => {
  const [data, setData] = useState<PortfolioData>({
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
    projects: [{ name: '', description: '', technologies: '', link: '' }]
  });

  const updatePersonalInfo = (field: string, value: string) => {
    const newData = {
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value }
    };
    setData(newData);
    onDataChange(newData);
  };

  const updateSkills = (index: number, value: string) => {
    const newSkills = [...data.skills];
    newSkills[index] = value;
    const newData = { ...data, skills: newSkills };
    setData(newData);
    onDataChange(newData);
  };

  const addSkill = () => {
    const newData = { ...data, skills: [...data.skills, ''] };
    setData(newData);
    onDataChange(newData);
  };

  const removeSkill = (index: number) => {
    const newSkills = data.skills.filter((_, i) => i !== index);
    const newData = { ...data, skills: newSkills };
    setData(newData);
    onDataChange(newData);
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const newExperience = [...data.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    const newData = { ...data, experience: newExperience };
    setData(newData);
    onDataChange(newData);
  };

  const addExperience = () => {
    const newData = {
      ...data,
      experience: [...data.experience, { title: '', company: '', duration: '', description: '' }]
    };
    setData(newData);
    onDataChange(newData);
  };

  const removeExperience = (index: number) => {
    const newExperience = data.experience.filter((_, i) => i !== index);
    const newData = { ...data, experience: newExperience };
    setData(newData);
    onDataChange(newData);
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const newEducation = [...data.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    const newData = { ...data, education: newEducation };
    setData(newData);
    onDataChange(newData);
  };

  const addEducation = () => {
    const newData = {
      ...data,
      education: [...data.education, { degree: '', institution: '', year: '' }]
    };
    setData(newData);
    onDataChange(newData);
  };

  const removeEducation = (index: number) => {
    const newEducation = data.education.filter((_, i) => i !== index);
    const newData = { ...data, education: newEducation };
    setData(newData);
    onDataChange(newData);
  };

  const updateProject = (index: number, field: string, value: string) => {
    const newProjects = [...data.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    const newData = { ...data, projects: newProjects };
    setData(newData);
    onDataChange(newData);
  };

  const addProject = () => {
    const newData = {
      ...data,
      projects: [...data.projects, { name: '', description: '', technologies: '', link: '' }]
    };
    setData(newData);
    onDataChange(newData);
  };

  const removeProject = (index: number) => {
    const newProjects = data.projects.filter((_, i) => i !== index);
    const newData = { ...data, projects: newProjects };
    setData(newData);
    onDataChange(newData);
  };

  return (
    <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-4">
      {/* Personal Information */}
      <Card className="portfolio-card">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-800">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={data.personalInfo.name}
                onChange={(e) => updatePersonalInfo('name', e.target.value)}
                placeholder="John Doe"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="title">Professional Title</Label>
              <Input
                id="title"
                value={data.personalInfo.title}
                onChange={(e) => updatePersonalInfo('title', e.target.value)}
                placeholder="Full Stack Developer"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={data.personalInfo.email}
                onChange={(e) => updatePersonalInfo('email', e.target.value)}
                placeholder="john@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={data.personalInfo.phone}
                onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={data.personalInfo.location}
                onChange={(e) => updatePersonalInfo('location', e.target.value)}
                placeholder="New York, NY"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={data.personalInfo.website}
                onChange={(e) => updatePersonalInfo('website', e.target.value)}
                placeholder="https://johndoe.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                value={data.personalInfo.linkedin}
                onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                placeholder="linkedin.com/in/johndoe"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                value={data.personalInfo.github}
                onChange={(e) => updatePersonalInfo('github', e.target.value)}
                placeholder="github.com/johndoe"
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="bio">Professional Bio</Label>
            <Textarea
              id="bio"
              value={data.personalInfo.bio}
              onChange={(e) => updatePersonalInfo('bio', e.target.value)}
              placeholder="Brief description about yourself and your expertise..."
              className="mt-1 min-h-[100px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="portfolio-card">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-800">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.skills.map((skill, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={skill}
                  onChange={(e) => updateSkills(index, e.target.value)}
                  placeholder="Enter a skill"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeSkill(index)}
                  disabled={data.skills.length === 1}
                  className="shrink-0"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addSkill}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Skill
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="portfolio-card">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-800">Work Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="p-4 border rounded-lg bg-slate-50">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-semibold text-slate-800">Experience {index + 1}</h4>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeExperience(index)}
                    disabled={data.experience.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Job Title</Label>
                    <Input
                      value={exp.title}
                      onChange={(e) => updateExperience(index, 'title', e.target.value)}
                      placeholder="Software Engineer"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => updateExperience(index, 'company', e.target.value)}
                      placeholder="Tech Corp"
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Duration</Label>
                    <Input
                      value={exp.duration}
                      onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                      placeholder="Jan 2022 - Present"
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Description</Label>
                    <Textarea
                      value={exp.description}
                      onChange={(e) => updateExperience(index, 'description', e.target.value)}
                      placeholder="Describe your responsibilities and achievements..."
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addExperience}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Experience
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="portfolio-card">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-800">Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="p-4 border rounded-lg bg-slate-50">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-semibold text-slate-800">Education {index + 1}</h4>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeEducation(index)}
                    disabled={data.education.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Degree</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                      placeholder="Bachelor of Computer Science"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Institution</Label>
                    <Input
                      value={edu.institution}
                      onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                      placeholder="University of Technology"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Year</Label>
                    <Input
                      value={edu.year}
                      onChange={(e) => updateEducation(index, 'year', e.target.value)}
                      placeholder="2020"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addEducation}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Education
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="portfolio-card">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-800">Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {data.projects.map((project, index) => (
              <div key={index} className="p-4 border rounded-lg bg-slate-50">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-semibold text-slate-800">Project {index + 1}</h4>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeProject(index)}
                    disabled={data.projects.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>Project Name</Label>
                    <Input
                      value={project.name}
                      onChange={(e) => updateProject(index, 'name', e.target.value)}
                      placeholder="E-commerce Website"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={project.description}
                      onChange={(e) => updateProject(index, 'description', e.target.value)}
                      placeholder="Describe your project..."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Technologies Used</Label>
                    <Input
                      value={project.technologies}
                      onChange={(e) => updateProject(index, 'technologies', e.target.value)}
                      placeholder="React, Node.js, MongoDB"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Project Link</Label>
                    <Input
                      value={project.link}
                      onChange={(e) => updateProject(index, 'link', e.target.value)}
                      placeholder="https://github.com/johndoe/project"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addProject}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="sticky bottom-0 bg-white pt-4 border-t">
        <Button
          onClick={onGenerate}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg"
        >
          Generate Portfolio
        </Button>
      </div>
    </div>
  );
};

export default PortfolioForm;
