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
    <section className="bg-royalBlue relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden h-[85vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full">
          {/* Hero Text */}
          <div
            className={cn(
              'space-y-8 transition-all duration-700 transform flex flex-col justify-start text lg:col-span-7',
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            )}
          >
          <div>
            <p className="font-heading text-white text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
              No chaos, no guesswork.
            </p>
            <p className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-bold pt-4">
              <span className='bg-cream border rounded-2xl p-2 px-4 text-royalBlue'>Just clarity.</span>
            </p>
          </div>

            <p className="text-cream/80 text-xl md:text-xl max-w-xl">
              Connect your data tools and get key business metrics via smart push
              notifications. No dashboard-digging, no context-switching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/#newsletter" className='transition hover:translate-x-2'>
                <Button variant="outline" className='bg-steelBlue/40 hover:bg-white/90 text-white text-lg py-6 px-8 rounded-xl font-medium'>
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#features-brief" className='transition hover:translate-x-2'>
                <Button variant="outline" className="bg-transparent text-white hover:bg-gray-50 hover:text-royalBlue text-lg py-6 px-8 rounded-xl font-medium">
                  See More
                </Button>
              </Link>
            </div>
          </div>
          <div
            className={cn(
              'relative h-[500px] flex items-center justify-center transition-all duration-700 delay-300 lg:col-span-5',
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            )}
          >
            <div className="flex justify-center relative w-full">
              {/* Blob positioned behind the iPhone */}
              <div className="absolute w-[110%] h-[110%] z-0">
                {/* <DynamicBlob 
                  color={'fffff'}
                /> */}
              </div>
              
              {/* iPhone mockup */}
              <div className="relative z-10">
                <Image
                  src="/images/mobile/dashboard-expanded.png"
                  alt="iPhone 16 mobile app mockup"
                  width={592}
                  height={500}
                  className='lg:h-[530px] w-auto'
                />
              </div>
              {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] -z-20">
                <div className="absolute inset-0 bg-cream rounded-full blur-3xl opacity-60 animate-blob"></div>
                <div className="absolute inset-0 bg-steelBlue rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute inset-0 bg-royalBlue rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;