
import React from 'react';
import { cn } from '@/lib/utils';

type CalculatorDisplayProps = {
  value: string;
  expression: string;
  className?: string;
};

/**
 * Calculator Display Component
 * Renders the calculator display showing the current value and expression
 */
const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  value,
  expression,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-calculator-display text-white p-4 rounded-md mb-4 text-right',
        className
      )}
    >
      {/* Small expression display */}
      <div className="text-sm text-gray-400 mb-1 h-5 overflow-hidden">
        {expression}
      </div>
      
      {/* Main result display */}
      <div className="text-3xl font-semibold overflow-x-auto whitespace-nowrap scrollbar-hide">
        {value}
      </div>
    </div>
  );
};

export default CalculatorDisplay;
