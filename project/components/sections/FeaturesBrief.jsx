"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Bell, Database, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    url: '/images/mobile/features/notifications-showcase.png',
    title: "Smart Notifications",
    description: "Receive real-time alerts and stay updated when important changes happen",
  },
  {
    url: '/images/mobile/features/sources-showcase.png',
    title: "Multiple Sources",
    description: "Connect 50+ data sources, including Stripe, Google Analytics, and more",
  },
  {
    url: '/images/mobile/features/dashboard-showcase.png',
    title: "Custom Dashboards",
    description: "Add & remove 100+ metrics, instantly get access to your data history",
  },
];

const FeaturesBrief = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 w-full" id='features-brief'>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-8">
            <span className='m-4'>One app to track all of your</span>
          </p>
          <p className="font-heading font-bold text-3xl md:text-4xl mb-6 leading-8">
            <span className='border rounded-xl bg-royalBlue p-2 px-4 text-white'>projects</span>
          </p>
          <p className="text-xl text-gray-700">
          Connect data sources, make data-driven decisions and get notified<br></br>when things change.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center text-center transition-all duration-700 transform",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  isVisible && { 'transition-delay': `${index * 200}ms` }
                )}
              >
                <div className="relative mb-6">
                  <Image 
                    src={feature.url}
                    alt={`${feature.title} icon`}
                    width={380}
                    height={317}
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBrief;