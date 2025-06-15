
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, FileText, Palette, Download, CheckCircle, ArrowRight } from 'lucide-react';

const FillInformation: React.FC = () => {
  const steps = [
    {
      icon: User,
      title: "Personal Information",
      description: "Add your name, title, contact details, and professional bio",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: FileText,
      title: "Professional Details", 
      description: "Include your skills, work experience, education, and projects",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Palette,
      title: "Choose Template",
      description: "Select from our professional templates and upload your photo",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Download,
      title: "Download & Share",
      description: "Get your portfolio as a clean HTML file ready to publish",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Create your professional portfolio in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6 text-center">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-gray-800 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 md:px-4 py-2 rounded-full text-sm md:text-base mb-4 md:mb-6">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-medium">100% Free • No Registration Required</span>
          </div>
          <div>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm md:text-base px-6 md:px-8">
              Start Creating Now
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FillInformation;
