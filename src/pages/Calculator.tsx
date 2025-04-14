
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { 
  Plus, Minus, Divide, Asterisk, 
  Percent, SquareRoot, Equal, 
  RotateCcw, ArrowLeft, Home
} from 'lucide-react';
import CalculatorButton from '@/components/CalculatorButton';
import CalculatorDisplay from '@/components/CalculatorDisplay';
import { calculateResult, formatDisplayValue, calculateSquare } from '@/utils/calculatorUtils';

/**
 * Calculator Page Component
 * A fully functional calculator with basic operations, percentage, and square function
 */
const Calculator: React.FC = () => {
  // Calculator state
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [expression, setExpression] = useState('');

  /**
   * Handle number input
   * @param digit The number (0-9) or decimal point
   */
  const handleDigit = (digit: string) => {
    // If waiting for second operand, replace display with new digit
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      // Append digit to current display
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  /**
   * Handle decimal point input
   */
  const handleDecimalPoint = () => {
    // If waiting for second operand, start with "0."
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    // Don't add more than one decimal point
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  /**
   * Reset calculator to initial state
   */
  const handleClear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
    setExpression('');
  };

  /**
   * Handle backspace (delete last character)
   */
  const handleBackspace = () => {
    if (waitingForSecondOperand) return;
    
    setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
  };

  /**
   * Handle square operation (x²)
   */
  const handleSquare = () => {
    const currentValue = parseFloat(display);
    try {
      const result = calculateSquare(currentValue);
      setDisplay(formatDisplayValue(result));
      setExpression(`sqr(${currentValue})`);
    } catch (error) {
      handleCalculationError(error);
    }
  };

  /**
   * Handle operator input (+, -, *, /, %)
   * @param nextOperator The operator to use for calculation
   */
  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);
    
    // If we already have a first operand and operator, calculate the result so far
    if (firstOperand !== null && operator) {
      try {
        const result = calculateResult(firstOperand, inputValue, operator);
        setDisplay(formatDisplayValue(result));
        setFirstOperand(result);
        setExpression(`${result} ${nextOperator}`);
      } catch (error) {
        handleCalculationError(error);
        return;
      }
    } else {
      setFirstOperand(inputValue);
      setExpression(`${inputValue} ${nextOperator}`);
    }
    
    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  /**
   * Handle equals button
   * Calculates the final result
   */
  const handleEquals = () => {
    // Can't calculate if we don't have both operands and operator
    if (firstOperand === null || operator === null) {
      return;
    }

    const secondOperand = parseFloat(display);
    
    try {
      const result = calculateResult(firstOperand, secondOperand, operator);
      
      // Update display and reset state
      setDisplay(formatDisplayValue(result));
      setExpression(`${firstOperand} ${operator} ${secondOperand} =`);
      setFirstOperand(result);
      setOperator(null);
      setWaitingForSecondOperand(true);
    } catch (error) {
      handleCalculationError(error);
    }
  };

  /**
   * Handle calculation errors
   * @param error The error that occurred
   */
  const handleCalculationError = (error: unknown) => {
    const errorMessage = error instanceof Error ? error.message : 'Calculation error';
    
    toast({
      title: 'Error',
      description: errorMessage,
      variant: 'destructive',
    });
    
    handleClear();
  };

  /**
   * Handle button click from any calculator button
   * @param value Button value
   */
  const handleButtonClick = (value: string) => {
    // Numbers 0-9
    if (/^\d$/.test(value)) {
      handleDigit(value);
    } else {
      // Handle special buttons
      switch (value) {
        case '.':
          handleDecimalPoint();
          break;
        case 'AC':
          handleClear();
          break;
        case '⌫':
          handleBackspace();
          break;
        case 'x²':
          handleSquare();
          break;
        case '=':
          handleEquals();
          break;
        default:
          // Operators
          if (['+', '-', '*', '/', '%'].includes(value)) {
            handleOperator(value);
          }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-calculator-bg p-6 rounded-xl shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <Link to="/" className="text-white hover:text-purple-300 transition-colors">
              <Home size={20} />
            </Link>
            <h1 className="text-white text-xl font-bold">Calculator</h1>
            <div className="w-5"></div> {/* For visual balance */}
          </div>
          
          {/* Calculator display */}
          <CalculatorDisplay value={display} expression={expression} />
          
          {/* Calculator grid */}
          <div className="calculator-grid">
            {/* Row 1 */}
            <CalculatorButton value="AC" onClick={handleButtonClick} variant="action" />
            <CalculatorButton value="⌫" onClick={handleButtonClick} variant="action" />
            <CalculatorButton value="%" onClick={handleButtonClick} variant="operator" />
            <CalculatorButton value="/" onClick={handleButtonClick} variant="operator" />
            
            {/* Row 2 */}
            <CalculatorButton value="7" onClick={handleButtonClick} />
            <CalculatorButton value="8" onClick={handleButtonClick} />
            <CalculatorButton value="9" onClick={handleButtonClick} />
            <CalculatorButton value="*" onClick={handleButtonClick} variant="operator" />
            
            {/* Row 3 */}
            <CalculatorButton value="4" onClick={handleButtonClick} />
            <CalculatorButton value="5" onClick={handleButtonClick} />
            <CalculatorButton value="6" onClick={handleButtonClick} />
            <CalculatorButton value="-" onClick={handleButtonClick} variant="operator" />
            
            {/* Row 4 */}
            <CalculatorButton value="1" onClick={handleButtonClick} />
            <CalculatorButton value="2" onClick={handleButtonClick} />
            <CalculatorButton value="3" onClick={handleButtonClick} />
            <CalculatorButton value="+" onClick={handleButtonClick} variant="operator" />
            
            {/* Row 5 */}
            <CalculatorButton value="0" onClick={handleButtonClick} span />
            <CalculatorButton value="." onClick={handleButtonClick} />
            <CalculatorButton value="=" onClick={handleButtonClick} variant="equals" />
            
            {/* Row 6 */}
            <CalculatorButton 
              value="x²" 
              onClick={handleButtonClick} 
              variant="operator"
              className="col-span-4 mt-2"
            />
          </div>
        </div>
        
        {/* Instructions */}
        <div className="mt-6 text-white text-center bg-white/10 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">How to use:</h2>
          <ul className="text-sm text-left list-disc pl-5 space-y-1">
            <li>Enter numbers using the number pad</li>
            <li>Use operators (+, -, *, /, %) for calculations</li>
            <li>Press x² to square the current number</li>
            <li>Press = to calculate the result</li>
            <li>Press AC to clear all entries</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
