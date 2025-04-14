
/**
 * Form validation utility functions
 * This file contains validation logic for the registration form
 */

/**
 * Validates a full name
 * @param name The name to validate
 * @returns An object containing validity status and error message
 */
export const validateName = (name: string): { isValid: boolean; message: string } => {
  if (!name || name.trim().length < 5) {
    return {
      isValid: false,
      message: 'Name must be at least 5 characters long',
    };
  }
  return { isValid: true, message: '' };
};

/**
 * Validates an email address
 * @param email The email to validate
 * @returns An object containing validity status and error message
 */
export const validateEmail = (email: string): { isValid: boolean; message: string } => {
  if (!email || !email.includes('@')) {
    return {
      isValid: false,
      message: 'Enter a valid email address',
    };
  }
  return { isValid: true, message: '' };
};

/**
 * Validates a phone number
 * @param phone The phone number to validate
 * @returns An object containing validity status and error message
 */
export const validatePhone = (phone: string): { isValid: boolean; message: string } => {
  const cleanedPhone = phone.replace(/\D/g, '');
  
  if (cleanedPhone.length !== 10) {
    return {
      isValid: false,
      message: 'Phone number must be 10 digits',
    };
  }
  
  if (cleanedPhone === '1234567890') {
    return {
      isValid: false,
      message: 'Please enter a real phone number',
    };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validates a password
 * @param password The password to validate
 * @param username The username to compare against (password shouldn't match username)
 * @returns An object containing validity status and error message
 */
export const validatePassword = (
  password: string,
  username: string = ''
): { isValid: boolean; message: string } => {
  if (!password || password.length < 8) {
    return {
      isValid: false,
      message: 'Password must be at least 8 characters long',
    };
  }
  
  if (password.toLowerCase() === 'password') {
    return {
      isValid: false,
      message: 'Password cannot be "password"',
    };
  }
  
  if (username && password.toLowerCase().includes(username.toLowerCase())) {
    return {
      isValid: false,
      message: 'Password cannot contain your name',
    };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validates if password confirmation matches password
 * @param password The original password
 * @param confirmPassword The confirmation password
 * @returns An object containing validity status and error message
 */
export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): { isValid: boolean; message: string } => {
  if (password !== confirmPassword) {
    return {
      isValid: false,
      message: 'Passwords do not match',
    };
  }
  
  return { isValid: true, message: '' };
};
