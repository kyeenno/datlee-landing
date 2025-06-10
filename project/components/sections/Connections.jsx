"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const companyLogos = [
  {
    url: "/images/logos/stripe.png",
    alt: "Stripe Logo"
  },
  {
    url: "/images/logos/twitter-x.png",
    alt: "Twitter/X Logo"
  },
  {
    url: "/images/logos/shopify.png",
    alt: "Shopify Logo"
  },
  {
    url: "/images/logos/meta.png",
    alt: "Meta Logo"
  },
  {
    url: "/images/logos/google-search-console.svg",
    alt: "Google Search Console Logo"
  },
  {
    url: "/images/logos/google-analytics.png",
    alt: "Google Analytics Logo"
  },
  {
    url: "/images/logos/google-ads.png",
    alt: "Google Ads Logo"
  },
];

const TrustedCompanies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-royalBlue py-6 h-[20vh] flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-2 md:px-12">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <p className="text-sm font-medium text-gray-400 mb-6">Connects with</p>
          
          <div className="flex flex-wrap gap-12 items-center justify-center">
            {companyLogos.map((logo, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-300 opacity-70 hover:opacity-100 bg-[#fdf5e6] p-4 border rounded-2xl",
                  isVisible && { 'transition-delay': `${index * 100}ms` }
                )}
              >
                <Image 
                  width={50}
                  height={50}
                  src={logo.url} 
                  alt={logo.alt} 
                  className="h-8 w-auto" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;