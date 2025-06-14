
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
