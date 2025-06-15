
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ImageUpload from './ImageUpload';

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateChange: (template: string) => void;
  profileImage?: string | null;
  onProfileImageChange?: (imageData: string | null) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  selectedTemplate, 
  onTemplateChange,
  profileImage,
  onProfileImageChange 
}) => {
  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      description: 'Colorful gradient design with cards and modern styling',
      category: 'Creative',
      preview: (
        <div className="w-full h-24 md:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3 md:p-4 text-white text-xs">
          <div className="bg-white/20 rounded-full w-6 h-6 md:w-8 md:h-8 mb-2"></div>
          <div className="bg-white/30 rounded w-full h-1.5 md:h-2 mb-1"></div>
          <div className="bg-white/30 rounded w-3/4 h-1.5 md:h-2"></div>
        </div>
      )
    },
    {
      id: 'minimalist',
      name: 'Minimalist',
      description: 'Clean, simple design with elegant typography',
      category: 'Professional',
      preview: (
        <div className="w-full h-24 md:h-32 bg-white border-2 border-gray-200 rounded-lg p-3 md:p-4 text-xs">
          <div className="border-b border-gray-200 pb-2 mb-2">
            <div className="bg-gray-800 rounded w-3/4 h-2 md:h-3 mb-1"></div>
            <div className="bg-gray-400 rounded w-1/2 h-1.5 md:h-2"></div>
          </div>
          <div className="space-y-1">
            <div className="bg-gray-300 rounded w-full h-1.5 md:h-2"></div>
            <div className="bg-gray-300 rounded w-5/6 h-1.5 md:h-2"></div>
          </div>
        </div>
      )
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Bold design with vibrant colors and creative layouts',
      category: 'Creative',
      preview: (
        <div className="w-full h-24 md:h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg p-3 md:p-4 text-white text-xs relative overflow-hidden">
          <div className="absolute top-2 right-2 w-4 h-4 md:w-6 md:h-6 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 md:w-4 md:h-4 bg-white/40 rounded-full"></div>
          <div className="bg-white/25 rounded w-2/3 h-2 md:h-3 mb-2"></div>
          <div className="bg-white/35 rounded w-1/2 h-1.5 md:h-2 mb-1"></div>
          <div className="bg-white/30 rounded w-full h-1.5 md:h-2"></div>
        </div>
      )
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Corporate design perfect for business professionals',
      category: 'Professional',
      preview: (
        <div className="w-full h-24 md:h-32 bg-slate-800 rounded-lg p-3 md:p-4 text-white text-xs">
          <div className="flex items-center mb-3">
            <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded mr-2"></div>
            <div className="bg-white rounded w-1/2 h-1.5 md:h-2"></div>
          </div>
          <div className="space-y-1">
            <div className="bg-slate-600 rounded w-full h-1.5 md:h-2"></div>
            <div className="bg-slate-600 rounded w-3/4 h-1.5 md:h-2"></div>
            <div className="bg-slate-600 rounded w-5/6 h-1.5 md:h-2"></div>
          </div>
        </div>
      )
    },
    {
      id: 'tech',
      name: 'Tech',
      description: 'Modern tech-inspired design with clean lines',
      category: 'Tech',
      preview: (
        <div className="w-full h-24 md:h-32 bg-black rounded-lg p-3 md:p-4 text-green-400 text-xs font-mono relative">
          <div className="absolute top-2 left-2 text-[8px] md:text-[10px]">{'> portfolio_'}</div>
          <div className="mt-3 md:mt-4 space-y-1">
            <div className="bg-green-400/30 rounded w-2/3 h-1"></div>
            <div className="bg-green-400/20 rounded w-1/2 h-1"></div>
            <div className="bg-green-400/25 rounded w-3/4 h-1"></div>
            <div className="bg-green-400/15 rounded w-1/3 h-1"></div>
          </div>
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      )
    },
    {
      id: 'elegant',
      name: 'Elegant',
      description: 'Sophisticated design with subtle animations',
      category: 'Professional',
      preview: (
        <div className="w-full h-24 md:h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-3 md:p-4 text-xs relative">
          <div className="absolute inset-0 bg-white/50 rounded-lg"></div>
          <div className="relative z-10">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-2"></div>
            <div className="bg-indigo-300 rounded w-3/4 h-1.5 md:h-2 mb-1"></div>
            <div className="bg-purple-300 rounded w-1/2 h-1.5 md:h-2"></div>
          </div>
        </div>
      )
    },
    {
      id: 'executive',
      name: 'Executive',
      description: 'Premium design for senior professionals and executives',
      category: 'Professional',
      preview: (
        <div className="w-full h-24 md:h-32 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg p-3 md:p-4 text-white text-xs">
          <div className="border-l-2 border-gold-400 pl-2 mb-2">
            <div className="bg-gold-400 rounded w-2/3 h-1.5 md:h-2 mb-1"></div>
            <div className="bg-white/70 rounded w-1/2 h-1 md:h-1.5"></div>
          </div>
          <div className="space-y-1">
            <div className="bg-white/50 rounded w-full h-1"></div>
            <div className="bg-white/40 rounded w-4/5 h-1"></div>
          </div>
        </div>
      )
    },
    {
      id: 'startup',
      name: 'Startup',
      description: 'Dynamic design perfect for entrepreneurs and innovators',
      category: 'Creative',
      preview: (
        <div className="w-full h-24 md:h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-3 md:p-4 text-white text-xs relative">
          <div className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="bg-white/30 rounded-full w-5 h-5 md:w-6 md:h-6 mb-2"></div>
          <div className="bg-white/40 rounded w-full h-1.5 md:h-2 mb-1"></div>
          <div className="bg-white/35 rounded w-3/4 h-1 md:h-1.5"></div>
          <div className="absolute bottom-1 left-1 text-[8px] opacity-60">{'{ code }'}</div>
        </div>
      )
    }
  ];

  const categories = ['All', 'Professional', 'Creative', 'Tech'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Profile Image Upload Section */}
      {onProfileImageChange && (
        <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">Profile Picture</h3>
          <ImageUpload
            onImageChange={onProfileImageChange}
            currentImage={profileImage}
            label="Upload your profile picture"
          />
        </div>
      )}

      {/* Template Selection */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6">
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 sm:mb-0">Choose Template</h3>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedTemplate === template.id
                  ? 'ring-2 ring-blue-500 shadow-lg'
                  : 'hover:shadow-md'
              }`}
              onClick={() => onTemplateChange(template.id)}
            >
              <CardContent className="p-3 md:p-4">
                <div className="mb-3">
                  {template.preview}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800 text-sm md:text-base">{template.name}</h4>
                  {selectedTemplate === template.id && (
                    <Badge className="bg-blue-500 text-white text-xs">Selected</Badge>
                  )}
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{template.description}</p>
                <div className="mt-2">
                  <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    {template.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
