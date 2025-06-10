"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: "Create an Account",
    description: "Sign up on our web platform in under 2 minutes.",
    imageSrc: "/images/ux/step-one.png", 
  },
  {
    id: 2,
    title: "Connect Your Data",
    description: "Link your existing business tools like Stripe, Google Analytics, Hotjar, and more.",
    imageSrc: "/images/ux/step-two.png",
  },
  {
    id: 3,
    title: "Download the App",
    description: "Get our mobile app and set up your notification preferences.",
    imageSrc: "/images/ux/step-three.png",
  },
  {
    id: 4,
    title: "That's it!",
    description: "Start receiving personalized insights and notifications about your business.",
    imageSrc: "/images/ux/step-four.png",
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
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
    <section ref={sectionRef} id="how-it-works" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="mr-2">One glance and you're</span>
            <span className="border rounded-xl bg-royalBlue p-2 px-4 text-white">in control</span>
          </h2>
          <p className="text-xl text-gray-700 mt-6">
            Set up your account, connect sources, and wake up<br></br>knowing your business is fine.
          </p>
        </div>
        
        <div className="relative">
          {/* Center Timeline Line */}
          <div className="border rounded absolute left-1/2 top-0 bottom-0 w-2 bg-steelBlue/30 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="relative">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={cn(
                  "relative py-12",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  isVisible && { 'transition-delay': `${index * 200}ms` }
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-royalBlue rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-md"></div>
                
                {/* Step Number Badge */}
                <div className="absolute left-1/2 top-1/2 w-7 h-7 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center border-2 border-royalBlue">
                  <span className="text-xs font-bold text-royalBlue">{step.id}</span>
                </div>
                
                {/* Content Container - Alternating left and right */}
                {(() => {
                  const isLeft = step.id % 2 === 1; // Odd steps have image on left
                  
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      {/* Image Container - conditionally ordered */}
                      <div className={cn(
                        "cursor-pointer hover:shadow-lg relative rounded-xl overflow-hidden border-4 border-royalBlue/30 aspect-[3/2] h-60 md:h-72",
                        "transition-all duration-500 mx-auto",
                        isLeft ? "md:order-1" : "md:order-2" // Add margin from timeline
                      )}>
                        <div className="bg-cream/30 w-full h-full flex items-center justify-center">
                          {step.imageSrc ? (
                            <Image 
                              src={step.imageSrc} 
                              alt={step.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="text-center text-gray-400">Image: {step.title}</div>
                          )}
                        </div>
                      </div>
                      
                      {/* Text Content - conditionally ordered */}
                      <div className={cn(
                        "p-6 transition-all duration-300",
                        isLeft ? "md:order-2 md:text-left md:pl-8" : "md:order-1 md:text-right md:pr-8" // Add padding from timeline
                      )}>
                        <h3 className="font-heading text-2xl font-semibold mb-3 text-royalBlue">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;