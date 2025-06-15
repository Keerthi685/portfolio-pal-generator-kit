
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const UserReviews: React.FC = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Amazing tool! Created my portfolio in just 10 minutes. The templates are beautiful and professional."
    },
    {
      name: "Rajesh Kumar",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Love the simplicity and elegant designs. Perfect for showcasing my design work to clients."
    },
    {
      name: "Anita Patel",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "The download feature is fantastic. I can customize everything and the output is clean HTML/CSS."
    },
    {
      name: "Vikram Singh",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Highly recommend! The templates are modern and the interface is very user-friendly."
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Join thousands of professionals who trust our portfolio generator
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3 md:mr-4 object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base truncate">{review.name}</h4>
                    <p className="text-gray-600 text-xs md:text-sm truncate">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
