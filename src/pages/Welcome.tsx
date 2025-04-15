
import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Navigate after scrolling 100px
        navigate('/signup');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigate]);

  return (
    <div ref={pageRef} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-purple-900 mb-2">Welcome to Code Craft</CardTitle>
          <CardDescription className="text-xl text-gray-600">
            Your journey into interactive web development starts here
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <p className="text-center text-gray-700 max-w-2xl">
            Explore our feature-rich calculator and secure registration system. Built with modern web technologies
            for an optimal user experience.
          </p>
          <p className="text-center text-gray-500 italic">
            Scroll down to continue to registration...
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
            <Link to="/signup" className="w-full">
              <Button
                variant="outline"
                className="w-full text-lg py-6 group hover:bg-purple-50"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about" className="w-full">
              <Button
                variant="secondary"
                className="w-full text-lg py-6 group hover:bg-purple-100"
              >
                About Creator
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      <div className="h-screen"></div>
    </div>
  );
};

export default Welcome;
