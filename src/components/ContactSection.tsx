
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm md:text-base">Email Us</h4>
                  <p className="text-gray-600 text-sm md:text-base break-all">support@portfoliogen.com</p>
                  <p className="text-gray-600 text-sm md:text-base break-all">hello@portfoliogen.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm md:text-base">Call Us</h4>
                  <p className="text-gray-600 text-sm md:text-base">+91 9876543210</p>
                  <p className="text-gray-600 text-sm md:text-base">+91 8765432109</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="order-1 lg:order-2">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                  <Input id="phone" placeholder="+91 9876543210" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    className="mt-1 min-h-[100px] md:min-h-[120px]" 
                  />
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
