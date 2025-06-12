"use client";

import { useEffect, useRef, useState } from 'react';
import PricingPlan from '@/components/sections/pricing/PricingPlan';
import pricingPlans from '@/data/pricingPlans';

const PricingSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} id="pricing" className="bg-cream py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <p className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-8">
            <span className='m-2'>Choose your</span>
            <span className='border rounded-xl bg-royalBlue p-2 px-4 text-white'>plan</span>
          </p>
					<p className="text-base sm:text-lg text-xl md:text-xl text-gray-700 mt-3 sm:mt-4 md:mt-6 px-2 sm:px-4 md:px-0 mx-auto max-w-sm sm:max-w-md md:max-w-lg">
						Affordable pricing to suit your goals.
					</p>

          <div className='flex flex-col justify-center items-center md:flex-row gap-8 mt-10 items-stretch'>
            {pricingPlans.map((plan, i) => (
              <PricingPlan 
                key={plan.id}
                title={plan.title}
                price={plan.price}
                interval={plan.interval}
                unit={plan.unit}
                features={plan.features}
                buttonText={plan.buttonText}
                footerText={plan.footerText}
                isVisible={isVisible}
                isPopular={plan.isPopular}
                style={isVisible ? { transitionDelay: `${i * 200}ms` } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;