
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white p-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
            <Link to="/" className="w-full">
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
    </div>
  );
};

export default Welcome;
