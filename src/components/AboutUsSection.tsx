
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap, Download, Palette, Star } from 'lucide-react';

const AboutUsSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Instant Generation",
      description: "Create professional portfolios in minutes, not hours"
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-500" />,
      title: "Multiple Templates",
      description: "Choose from beautifully designed templates"
    },
    {
      icon: <Download className="w-6 h-6 text-green-500" />,
      title: "Easy Download",
      description: "Get your portfolio as a clean HTML file"
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      comment: "Amazing tool! Created my portfolio in just 10 minutes. The templates are beautiful and professional."
    },
    {
      name: "Mike Chen",
      role: "Full Stack Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      comment: "Love how easy it is to use. The live preview feature is fantastic and saved me so much time."
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      comment: "Perfect for showcasing my design work. The minimalist template is exactly what I needed."
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Portfolio Generator</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create stunning professional portfolios effortlessly with our intuitive platform
          </p>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Fill Your Info</h4>
              <p className="text-gray-600">Enter your personal details, skills, and experience</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Choose Template</h4>
              <p className="text-gray-600">Select from our beautiful template designs</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Live Preview</h4>
              <p className="text-gray-600">See your portfolio update in real-time</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Download</h4>
              <p className="text-gray-600">Get your HTML portfolio file instantly</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User Reviews */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
