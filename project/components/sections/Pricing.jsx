"use client";

import { useEffect, useRef, useState } from 'react';
import PricingPlan from '@/components/PricingPlan';
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
    <section ref={sectionRef} id="pricing" className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-700">
            Affordable pricing to suit your goals.
          </p>

          <div className='flex gap-8'>
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
                style={isVisible ? { transitionDelay: `${i * 100}ms` } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;