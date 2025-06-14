
import React from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Home, Info, Phone, Mail, Star } from 'lucide-react';

interface NavigationHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({ activeTab, onTabChange }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-blue-600">Portfolio Generator</h1>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('home')}
                  className="flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Home
                </Button>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('about')}
                  className="flex items-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  About Us
                </Button>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Contact
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <Button 
          onClick={() => onTabChange('form')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Create Portfolio
        </Button>
      </div>
    </nav>
  );
};

export default NavigationHeader;
