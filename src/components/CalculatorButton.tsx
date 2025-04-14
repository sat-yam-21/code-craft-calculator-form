
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CalculatorButtonProps = {
  value: string;
  onClick: (value: string) => void;
  variant?: 'number' | 'operator' | 'action' | 'equals';
  className?: string;
  span?: boolean;
};

/**
 * Calculator Button Component
 * Renders a styled button for the calculator interface
 */
const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  value,
  onClick,
  variant = 'number',
  className = '',
  span = false,
}) => {
  // Define styles based on button variant
  const getButtonStyles = () => {
    switch (variant) {
      case 'number':
        return 'bg-calculator-button-number hover:bg-calculator-button-number/90 text-white';
      case 'operator':
        return 'bg-calculator-button-operator hover:bg-calculator-button-operator/90 text-white';
      case 'action':
        return 'bg-calculator-button-action hover:bg-calculator-button-action/90 text-white';
      case 'equals':
        return 'bg-calculator-button-equals hover:bg-calculator-button-equals/90 text-white';
      default:
        return 'bg-calculator-button-number hover:bg-calculator-button-number/90 text-white';
    }
  };

  return (
    <Button
      className={cn(
        'p-0 w-full h-14 text-xl font-medium active:animate-button-press',
        getButtonStyles(),
        span ? 'col-span-2' : '',
        className
      )}
      onClick={() => onClick(value)}
    >
      {value}
    </Button>
  );
};

export default CalculatorButton;
