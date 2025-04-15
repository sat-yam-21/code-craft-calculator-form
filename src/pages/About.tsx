
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold text-purple-900">About the Creator</CardTitle>
          <Link to="/welcome">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-200">
            <Avatar className="w-full h-full">
              <AvatarImage 
                src="/lovable-uploads/cbcc4b94-861f-4f43-9765-a1d8a607c7f8.png"
                alt="Satyam Patel"
                className="object-cover"
              />
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-2">SATYAM PATEL</h2>
            <p className="text-gray-600 max-w-lg">
              Full-stack developer passionate about creating intuitive and functional web applications. 
              Specializing in React, TypeScript, and modern web technologies.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/">
              <Button variant="outline">Registration</Button>
            </Link>
            <Link to="/calculator">
              <Button>Calculator</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
