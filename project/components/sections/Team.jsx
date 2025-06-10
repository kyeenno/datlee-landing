"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import Blob from '@/components/blobs/Blob';

const teamMembers = [
	{
		name: 'Valerija Kovalova',
		role: 'Co-Founder',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: '/images/team/valerija-k.jpg',
		social: {
			linkedin: 'https://linkedin.com/in/valerija-kovalova',
		},
	},
	{
		name: 'Aleksandra Bogomola',
		role: 'Co-Founder',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: '/images/team/aleksandra-b.jpg',
		social: {
			linkedin: 'https://linkedin.com/',
		},
	},
	{
		name: 'Valters Vanags',
		role: 'Co-Founder',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

		image: '/images/team/valters-v.jpg',
		social: {
			linkedin: 'https://linkedin.com',
		},
	},
	{
		name: 'Renars Niedra',
		role: 'Co-Founder',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: '/images/team/renars-n.jpg',
		social: {
			linkedin: 'https://linkedin.com',
		},
	},
];

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
    <section ref={sectionRef} id="team" className="bg-white relative overflow-hidden min-h-[150vh] py-20 flex justify-center items-center">
      {/* Background Blob */}
      <Blob
        width={90}
        src={'/svg/blobs/blob-royalblue.svg'}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            <span className='text-white'>Our </span>
            <span className='border-cream rounded-xl bg-cream p-2 px-4 text-royalBlue'>Team</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={cn(
                "shadow-sm rounded-2xl overflow-hidden gap-2 transition-all duration-500 transform group hover:cursor-pointer relative",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                isVisible && { 'transition-delay': `${index * 100}ms` }
              )}
              style={{ borderRadius: '10px' }}
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="border-[#b0c4de] object-cover transition-transform duration-500"
                />
              </div>

              <div className="p-6 h-full bg-cream">
                <h3 className="font-heading text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-royalBlue font-medium mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>

                <div className="flex space-x-3">
                  {member.social.linkedin && (
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
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;