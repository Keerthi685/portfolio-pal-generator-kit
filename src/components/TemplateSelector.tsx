
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
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-4 text-white text-xs">
          <div className="bg-white/20 rounded-full w-8 h-8 mb-2"></div>
          <div className="bg-white/30 rounded w-full h-2 mb-1"></div>
          <div className="bg-white/30 rounded w-3/4 h-2"></div>
        </div>
      )
    },
    {
      id: 'minimalist',
      name: 'Minimalist',
      description: 'Clean, simple design with elegant typography',
      preview: (
        <div className="w-full h-32 bg-white border-2 border-gray-200 rounded-lg p-4 text-xs">
          <div className="border-b border-gray-200 pb-2 mb-2">
            <div className="bg-gray-800 rounded w-3/4 h-3 mb-1"></div>
            <div className="bg-gray-400 rounded w-1/2 h-2"></div>
          </div>
          <div className="space-y-1">
            <div className="bg-gray-300 rounded w-full h-2"></div>
            <div className="bg-gray-300 rounded w-5/6 h-2"></div>
          </div>
        </div>
      )
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Bold design with vibrant colors and creative layouts',
      preview: (
        <div className="w-full h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg p-4 text-white text-xs relative overflow-hidden">
          <div className="absolute top-2 right-2 w-6 h-6 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/40 rounded-full"></div>
          <div className="bg-white/25 rounded w-2/3 h-3 mb-2"></div>
          <div className="bg-white/35 rounded w-1/2 h-2 mb-1"></div>
          <div className="bg-white/30 rounded w-full h-2"></div>
        </div>
      )
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Corporate design perfect for business professionals',
      preview: (
        <div className="w-full h-32 bg-slate-800 rounded-lg p-4 text-white text-xs">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 bg-blue-500 rounded mr-2"></div>
            <div className="bg-white rounded w-1/2 h-2"></div>
          </div>
          <div className="space-y-1">
            <div className="bg-slate-600 rounded w-full h-2"></div>
            <div className="bg-slate-600 rounded w-3/4 h-2"></div>
            <div className="bg-slate-600 rounded w-5/6 h-2"></div>
          </div>
        </div>
      )
    },
    {
      id: 'tech',
      name: 'Tech',
      description: 'Modern tech-inspired design with clean lines',
      preview: (
        <div className="w-full h-32 bg-black rounded-lg p-4 text-green-400 text-xs font-mono relative">
          <div className="absolute top-2 left-2 text-[8px]">{'> portfolio_'}</div>
          <div className="mt-4 space-y-1">
            <div className="bg-green-400/30 rounded w-2/3 h-1"></div>
            <div className="bg-green-400/20 rounded w-1/2 h-1"></div>
            <div className="bg-green-400/25 rounded w-3/4 h-1"></div>
            <div className="bg-green-400/15 rounded w-1/3 h-1"></div>
          </div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      )
    },
    {
      id: 'elegant',
      name: 'Elegant',
      description: 'Sophisticated design with subtle animations',
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-4 text-xs relative">
          <div className="absolute inset-0 bg-white/50 rounded-lg"></div>
          <div className="relative z-10">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-2"></div>
            <div className="bg-indigo-300 rounded w-3/4 h-2 mb-1"></div>
            <div className="bg-purple-300 rounded w-1/2 h-2"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Profile Image Upload Section */}
      {onProfileImageChange && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Picture</h3>
          <ImageUpload
            onImageChange={onProfileImageChange}
            currentImage={profileImage}
            label="Upload your profile picture"
          />
        </div>
      )}

      {/* Template Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Template</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <Card
              key={template.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedTemplate === template.id
                  ? 'ring-2 ring-blue-500 shadow-lg'
                  : 'hover:shadow-md'
              }`}
              onClick={() => onTemplateChange(template.id)}
            >
              <CardContent className="p-4">
                <div className="mb-3">
                  {template.preview}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800">{template.name}</h4>
                  {selectedTemplate === template.id && (
                    <Badge className="bg-blue-500 text-white">Selected</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">{template.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
