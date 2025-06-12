import { cn } from '@/lib/utils';
import { Check, X, Star, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const PricingPlan = ({ title, price, interval, unit, features, buttonText, footerText, isVisible, isPopular, billingFrequency = "yearly" }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <div className={cn(
      "bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-700 transform p-6 sm:p-8 relative w-full flex flex-col justify-between h-full",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
      isPopular ? "md:scale-105 md:shadow-xl" : ""
    )}>
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 px-3 py-1 rounded-full sm:bg-steelBlue sm:text-white">
            <Star className="white stroke-steelBlue sm:stroke-white h-4 w-4" />
            <span className="hidden sm:block text-xs font-medium uppercase">Recommended</span>
          </div>
        </div>
      )}

      <div className="flex flex-col">
        <div className="mb-4 sm:mb-6">
          {/* Plan title and subtitle */}
          <h3 className="text-left font-heading text-xl sm:text-2xl font-bold mb-1 text-gray-900">{title}</h3>
          <p className="text-left text-gray-500">Billed {billingFrequency}</p>
        </div>

        {/* Features list */}
        <div className="mb-6 sm:mb-8 text-left">
          <h4 className="font-medium text-sm sm:text-md mb-3 sm:mb-4 text-gray-800">Includes</h4>
          <ul className="space-y-3 sm:space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start group relative">
                <div className='flex gap-2 flex-shrink-0'>
                  {feature.included === true ? (
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="text-green-500 h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                  ) : (
                    <div className="rounded-full bg-gray-100 p-1">
                      <X className="text-gray-500 h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                  )}
                  <span className="flex-1">{feature.text}</span>
                </div>

                {feature.description && (
                  <div className="flex-shrink-0 relative">
                    <button
                      className="ml-1 sm:ml-2 text-gray-400 hover:text-gray-600 cursor-help p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royalBlue/50"
                      onMouseEnter={() => setActiveTooltip(index)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
                      aria-label="More information"
                    >
                      <Info className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>

                    {/* Tooltip display */}
                    {activeTooltip === index && (
                      <div className="absolute z-50 left-auto right-0 top-full mt-2 p-3 bg-white rounded-lg shadow-lg border border-gray-200 w-64 sm:w-72 max-w-[90vw]">
                        <p className="text-sm text-gray-600 break-words">{feature.description}</p>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto">
        {/* Pricing */}
        <div className="mb-6 text-left">
          <div className="flex items-baseline flex-wrap">
            <span className="text-2xl sm:text-3xl font-bold">{price}</span>
            <span className="ml-2 text-gray-500 text-xs sm:text-sm">{unit} / {interval}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;