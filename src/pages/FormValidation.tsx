
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Home } from 'lucide-react';
import FormInput from '@/components/FormInput';
import {
  validateName,
  validateEmail,
  validatePhone,
  validatePassword,
  validateConfirmPassword,
} from '@/utils/validationUtils';

/**
 * Form Validation Page Component
 * A responsive user registration form with validation
 */
const FormValidation: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  
  // Form validity state
  const [formIsValid, setFormIsValid] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  
  // Check overall form validity whenever form data changes
  useEffect(() => {
    const nameValid = validateName(formData.fullName).isValid;
    const emailValid = validateEmail(formData.email).isValid;
    const phoneValid = validatePhone(formData.phone).isValid;
    const passwordValid = validatePassword(formData.password, formData.fullName).isValid;
    const confirmPasswordValid = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    ).isValid;
    
    setFormIsValid(
      nameValid &&
      emailValid &&
      phoneValid &&
      passwordValid &&
      confirmPasswordValid &&
      Boolean(formData.fullName) &&
      Boolean(formData.email) &&
      Boolean(formData.phone) &&
      Boolean(formData.password) &&
      Boolean(formData.confirmPassword)
    );
  }, [formData]);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formIsValid) {
      // Form is valid, submit the data
      toast({
        title: 'Registration Successful!',
        description: 'Your account has been created successfully.',
      });
      
      // Clear the form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      // Form is invalid, show error
      toast({
        title: 'Registration Failed',
        description: 'Please fix the errors in the form before submitting.',
        variant: 'destructive',
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-form-bg flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
            <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">
              <Home size={20} />
            </Link>
          </div>
          <CardDescription>
            Create a new account with validated information
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form id="registrationForm" onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              id="fullName"
              label="Full Name"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              validate={validateName}
            />
            
            <FormInput
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              validate={validateEmail}
            />
            
            <FormInput
              id="phone"
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="1234567890"
              validate={validatePhone}
            />
            
            <FormInput
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              validate={(value) => validatePassword(value, formData.fullName)}
            />
            
            <FormInput
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              validate={(value) => validateConfirmPassword(formData.password, value)}
              compareTo={formData.password}
            />
          </form>
        </CardContent>
        
        <CardFooter>
          <Button 
            type="submit" 
            form="registrationForm" 
            className="w-full bg-form-button hover:bg-form-button/90" 
            disabled={!formIsValid}
          >
            Create Account
          </Button>
        </CardFooter>
      </Card>
      
      {/* Validation rules */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md max-w-md w-full">
        <h2 className="font-semibold mb-2 text-gray-800">Validation Rules:</h2>
        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
          <li>Full Name must be at least 5 characters long</li>
          <li>Email must contain "@"</li>
          <li>Phone Number must be 10 digits and not "1234567890"</li>
          <li>Password must be at least 8 characters</li>
          <li>Password cannot be "password" or contain your name</li>
          <li>Confirm Password must match Password</li>
        </ul>
      </div>
    </div>
  );
};

export default FormValidation;
