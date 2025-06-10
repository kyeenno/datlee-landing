"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Bell, BarChart2, Smartphone, Zap, Activity, 
  Clock, LineChart, CloudOff, Database, Gauge
} from 'lucide-react';
import Image from 'next/image';

const featuresList = [
  {
    icon: <Bell className="h-6 w-6 text-royalBlue" />,
    title: "Smart Notifications",
    description: "Get personalized push notifications about key metrics that matter most to your business.",
  },
  // {
  //   icon: <BarChart2 className="h-6 w-6 text-royalBlue" />,
  //   title: "Data Visualization",
  //   description: "View beautiful charts and graphs that make complex data easy to understand at a glance.",
  // },
  {
    icon: <Database className="h-6 w-6 text-royalBlue" />,
    title: "Multiple Data Sources",
    description: "Connect Google Analytics, Stripe, LemonSqueezy, Facebook Ads, and more in one place.",
  },
  {
    icon: <Zap className="h-6 w-6 text-royalBlue" />,
    title: "Real-time Updates",
    description: "Stay informed with real-time data updates so you're always working with the latest information.",
  },
  // {
  //   icon: <Smartphone className="h-6 w-6 text-royalBlue" />,
  //   title: "Mobile-First Design",
  //   description: "Access your business metrics anytime, anywhere with our beautifully designed mobile app.",
  // },
  {
    icon: <Activity className="h-6 w-6 text-royalBlue" />,
    title: "Customizable Dashboards",
    description: "Create personalized dashboards that display only the metrics that matter to you.",
  },
  {
    icon: <Clock className="h-6 w-6 text-royalBlue" />,
    title: "Historical Data",
    description: "Track your business performance over time with comprehensive historical data analysis.",
  },
  {
    icon: <LineChart className= "h-6 w-6 text-royalBlue" />,
    title: "Trend Analysis & Forecasting",
    description: "Identify patterns and trends in your data to make more informed business decisions.",
  },
  // {
  //   icon: <CloudOff className="h-6 w-6 text-royalBlue" />,
  //   title: "Offline Access",
  //   description: "View your most important metrics even when you're offline or have limited connectivity.",
  // },
];

export default function Features() {
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
    <section ref={sectionRef} id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Powerful Features for Data-Driven Founders
          </h2>
          <p className="text-lg text-gray-700">
            DataPulse brings your business metrics to your fingertips, helping you make informed decisions without the hassle of switching between multiple tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-cream rounded-xl p-6 shadow-sm border border-steelBlue/20 transform transition-all duration-500 hover:shadow-md hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                isVisible && { 'transition-delay': `${index * 100}ms` }
              )}
            >
              <div className="bg-white p-3 rounded-lg inline-block mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Feature Highlight */}
        <div className={cn(
          "mt-20 bg-steelBlue/30 rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-royalBlue/10 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-royalBlue/10 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                <Gauge className="h-5 w-5 text-royalBlue mr-2" />
                <span className="text-sm font-medium">Performance at a Glance</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Save Time with Intelligent Notifications
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Stop wasting time jumping between dashboards. DataPulse delivers just what you need to know, when you need to know it, helping you focus on growing your business.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="rounded-full bg-green-100 p-1 text-green-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Customizable notification thresholds</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-green-100 p-1 text-green-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Daily and weekly performance summaries</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-green-100 p-1 text-green-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Anomaly detection for unexpected changes</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-80 md:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Stylized Phone */}
                  <Image
                    src="/images/mobile/dashboard.jpg"
                    alt="iPhone 16 notification showcase"
                    width={420}
                    height={420}
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};