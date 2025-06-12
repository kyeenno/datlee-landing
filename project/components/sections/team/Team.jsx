"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import Blob from '@/components/blobs/Blob';
import teamMembers from '@/data/teamMembers';

const TeamSection = () => {
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
    <section ref={sectionRef} id="team" className="bg-royalBlue lg:bg-white relative overflow-hidden min-h-[150vh] py-20 flex justify-center items-center">
      {/* Background Blob */}
      <Blob
        src={'/svg/blobs/blob-royalblue.svg'}
        className='scale-90 md:scale-125'
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            <span className='text-white'>Our </span>
            <span className='border-cream rounded-xl bg-cream p-2 px-4 text-royalBlue'>Team</span>
          </h2>
          <p className="text-base sm:text-lg text-xl md:text-xl text-cream mt-3 sm:mt-4 md:mt-6 px-2 sm:px-4 md:px-0 mx-auto max-w-sm sm:max-w-md md:max-w-lg">
            With experience in data and IT, we are commited to helping you stay on top of your product's health.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={cn(
                "shadow-sm border-royalBlue rounded-2xl overflow-hidden transition-all duration-500 transform group hover:cursor-pointer relative flex flex-col",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                isVisible && { 'transition-delay': `${index * 100}ms` }
              )}
            >
              <div className="h-64 relative overflow-hidden flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                {/* Company logos */}
                {member.companies[0] && (
                  <div className="absolute bottom-2 right-2 bg-white/90 p-1 rounded-md shadow-md border-cream border-2">
                    <Image
                      src={member.companies[0].logo}
                      alt={member.companies[0].name}
                      width={50}
                      height={50}
                      className="h-6 w-auto"
                    />
                  </div>
                )}
              </div>

              <div className="flex-grow p-6 h-full bg-cream flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-royalBlue font-medium mb-1">{member.role}</p>
                  <p className="text-gray-700 text-sm my-4">{member.bio}</p>
                </div>

                {/* Socials */}
                <div className="flex space-x-3">
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-royalBlue transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.social?.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-royalBlue transition-colors"
                      aria-label={`${member.name}'s Github`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Mentors section */}
          <div className='col-span-full flex flex-col items-center justify-center mt-2 text-center gap-4'>
            <p className='text-[#fdf5e6] font-medium opacity-90'>With the help of our mentors</p>
            <Link href="https://webyvc.notion.site/">
              <Image
                src="/images/logos/webyvc.png"
                alt="Weby.vc logo"
                width={120}
                height={60}
                className='border-cream border-2 rounded-2xl'
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;