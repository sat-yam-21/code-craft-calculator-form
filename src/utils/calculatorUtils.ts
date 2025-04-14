
/**
 * Calculator utility functions
 * This file contains helper functions for the calculator operations
 */

/**
 * Calculate the result based on the current expression
 * @param num1 First number
 * @param num2 Second number
 * @param operator Mathematical operator
 * @returns Calculation result
 */
export const calculateResult = (num1: number, num2: number, operator: string): number => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      // Handle division by zero
      if (num2 === 0) {
        throw new Error('Cannot divide by zero');
      }
      return num1 / num2;
    case '%':
      return num1 % num2;
    default:
      return num2;
  }
};

/**
 * Format the display value to handle decimal places appropriately
 * @param value Number to format
 * @returns Formatted string
 */
export const formatDisplayValue = (value: number): string => {
  // Convert to string and check if it's an integer
  const valueStr = value.toString();
  
  // If the value has more than 12 digits, use exponential notation
  if (valueStr.replace('.', '').length > 12) {
    return value.toExponential(6);
  }
  
  // Return the string representation
  return valueStr;
};

/**
 * Calculate the square of a number
 * @param value Number to square
 * @returns Squared value
 */
export const calculateSquare = (value: number): number => {
  return value * value;
};
