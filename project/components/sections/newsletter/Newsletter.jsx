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
    <section ref={sectionRef} className="py-20 bg-royalBlue relative overflow-hidden" id="newsletter">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className={cn(
          "bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden transition-all duration-700 transform border-2 border-steelBlue/20",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-8">
              Stay
              <span className='border rounded-xl bg-royalBlue p-2 px-4 text-white m-2'>Tuned</span>
            </p>
            <p className="text-base sm:text-lg text-xl md:text-xl text-gray-700 mt-3 sm:mt-4 md:mt-6 px-2 sm:px-4 md:px-0 mx-auto max-w-sm sm:max-w-md md:max-w-lg">
              Let us know your email and we will contact you as soon as Datlee gets live!
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-royalBlue/5 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-royalBlue/5 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl"></div>

          <div className='flex justify-center items-center'>
            <CollectEmails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;