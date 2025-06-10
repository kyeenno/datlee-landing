import { cn } from '@/lib/utils';
import { Check, X, Star, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const PricingPlan = ({ 
  title, 
  price, 
  interval, 
  unit, 
  features, 
  buttonText, 
  footerText, 
  isVisible, 
  isPopular,
  billingFrequency = "yearly", 
  className = ""
}) => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <div className={cn(
      "bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-700 transform p-8 relative",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
      className
    )}>
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-600">
            <Star className="fill-green-500 stroke-green-500 h-4 w-4" />
            <span className="text-xs font-medium uppercase">Popular</span>
          </div>
        </div>
      )}
      
      {/* Plan title and subtitle */}
      <h3 className="font-heading text-2xl font-bold mb-1 text-gray-900">{title}</h3>
      <p className="text-gray-500 mb-6">Billed {billingFrequency}</p>
        {/* Features */}
      <div className="mb-8 text-left">
        <h4 className="font-medium text-md mb-4 text-gray-800">Includes</h4>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start group relative">
              <div className="flex-shrink-0 mr-3">
                {feature.included ? (
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="text-green-500 h-4 w-4" />
                  </div>
                ) : (
                  <div className="rounded-full bg-gray-100 p-1">
                    <X className="text-gray-400 h-4 w-4" />
                  </div>
                )}
              </div>
              <span className={cn(
                "text-base", 
                feature.included ? "text-gray-700" : "text-gray-400"
              )}>
                {feature.text}
              </span>
              
              {/* Info icon and tooltip for features with description */}
              {feature.description && (
                <>                  <button 
                    className="ml-2 text-gray-400 hover:text-gray-600 cursor-help"
                    onMouseEnter={() => setActiveTooltip(index)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    onClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
                  >
                    <Info className="h-4 w-4" />
                  </button>
                  
                  {/* Tooltip display */}
                  {activeTooltip === index && (
                    <div className="absolute z-50 left-0 top-full mt-2 p-3 bg-white rounded-lg shadow-lg border border-gray-200 w-64">
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
        {/* Pricing */}
      <div className="mb-8 text-left">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          <span className="ml-2 text-gray-500 text-sm">{unit} / {interval}</span>
        </div>
      </div>
      
      {/* Button */}
      <Button 
        className={cn(
          "w-full py-6 text-white font-medium flex items-center justify-center",
          isPopular 
            ? "bg-royalBlue" 
            : "bg-royalBlue"
        )}
      >
        {buttonText}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      
      {/* Footer text if present */}
      {footerText && (
        <p className="text-center text-sm text-gray-500 mt-4">
          {footerText}
        </p>
      )}
    </div>
  );
};

export default PricingPlan;