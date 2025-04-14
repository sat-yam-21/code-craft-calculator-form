
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type FormInputProps = {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  validate?: (value: string, compareTo?: string) => { isValid: boolean; message: string };
  compareTo?: string;
  className?: string;
};

/**
 * Form Input Component with validation
 * Renders an input field with label and validation message
 */
const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder = '',
  validate,
  compareTo,
  className = '',
}) => {
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Validate input when value changes and input has been touched
  useEffect(() => {
    if (touched && validate) {
      const validation = validate(value, compareTo);
      setIsValid(validation.isValid);
      setError(validation.message);
    }
  }, [value, touched, validate, compareTo]);

  // Handle input blur to mark as touched
  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={cn(
          'border transition-colors duration-200',
          touched && !isValid 
            ? 'border-red-500 focus:border-red-500' 
            : touched && isValid && value 
              ? 'border-green-500 focus:border-green-500' 
              : 'border-gray-300'
        )}
      />
      
      {touched && error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
