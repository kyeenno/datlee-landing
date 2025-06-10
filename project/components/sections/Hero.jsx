"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import DynamicBlob from '@/components/blobs/DynamicBlob';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-royalBlue relative pt-20 pb-12 sm:pt-24 md:pt-28 lg:pt-32 md:pb-16 lg:pb-24 overflow-hidden h-[80vh] md:min-h-[650px] lg:h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-full flex items-center relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-4 items-center w-full">
          {/* Hero Text */}
          <div
            className={cn(
              'space-y-6 md:space-y-8 lg:space-y-4 transition-all duration-700 transform flex flex-col justify-start text md:col-span-1 lg:col-span-7 order-1',
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            )}
          >
          <div className="mb-4 sm:mb-6 lg:mb-3">
            <p className="font-heading text-white text-[3rem] leading-[0.95] sm:leading-tight sm:text-6xl md:text-5xl lg:text-[5rem] font-bold mb-1 md:mb-4 lg:mb-8 lg:leading-[0.8]">
              No chaos, no guesswork.
            </p>
            <p className="font-heading text-white text-[2rem] leading-[0.9] sm:leading-tight sm:text-3xl md:text-4xl lg:text-[3em] font-bold pt-6 md:pt-4 lg:pt-2">
              <span className='bg-cream border rounded-xl md:rounded-2xl p-1 sm:p-2 px-2 text-royalBlue'>Just clarity.</span>
            </p>
          </div>

            <p className="text-cream/80 text-[1.5rem] leading-tight sm:text-lg md:text-xl lg:mb-3 max-w-xl">
              Connect your data tools and get key business metrics via smart push
              notifications. Stay on top of your business performance with ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 lg:pt-2">
              <Link href="/#newsletter" className='transition hover:translate-x-2'>
                <Button variant="outline" className='border-2 text-[1.5rem] bg-steelBlue/40 hover:bg-white/90 hover:text-royalBlue text-white text-base py-4 sm:py-6 px-5 sm:px-8 rounded-lg sm:rounded-xl font-medium'>
                  Get Early Access
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link href="#features-brief" className='transition hover:translate-x-2'>
                <Button variant="outline" className="border-2 text-[1.5rem] bg-transparent text-white hover:bg-cream hover:text-royalBlue text-base py-4 sm:py-6 px-5 sm:px-8 rounded-lg sm:rounded-xl font-medium">
                  See More
                </Button>
              </Link>
            </div>
          </div>
          <div
            className={cn(
              'relative flex items-center justify-center transition-all duration-700 delay-300 md:col-span-1 lg:col-span-5 order-2 md:order-2',
              isVisible
                ? 'opacity-100 translate-y-0 md:translate-x-0'
                : 'opacity-0 translate-y-6 md:translate-x-12'
            )}
          >
            <div className="flex justify-center relative w-full">
              <div className="absolute w-[110%] h-[110%] z-0">
              </div>
              
              {/* iPhone mockup */}
              <div className="hidden sm:flex justify-center items-center relative z-10">
                <Image
                  src="/images/mobile/sources-alerts.png"
                  alt="iPhone 16 mobile app mockup"
                  width={1184}
                  height={1000}
                  className='h-[600px] md:h-[400px] lg:h-[1060px] w-auto object-contain'
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;