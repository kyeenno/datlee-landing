"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import CollectEmails from '@/components/forms/CollectEmails';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // In a real app, this would send the email to your backend
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated on our launch.",
    });
    
    setEmail('');
  };
  
  return (
    <section ref={sectionRef} className="py-20 bg-steelBlue/50 bg-white" id="newsletter">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className={cn(
          "bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-royalBlue/10 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-royalBlue/10 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-royalBlue text-white mb-6">
              <Mail className="h-8 w-8" />
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Stay Updated on Our Launch
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              DataPulse is coming soon! Subscribe to our newsletter to be the first to know when we launch and get exclusive early access.
            </p>
            
            <div className='flex justify-center items-center'>
              <CollectEmails />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;