"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const steps = [
	{
		id: 1,
		title: "Create an Account",
		description: "Sign up on our web platform in under 2 minutes.",
		imageSrc: "/images/sections/user-flow/step-one.png",
	},
	{
		id: 2,
		title: "Connect Your Data",
		description: "Link your existing business tools like Stripe, Google Analytics, Hotjar, and more.",
		imageSrc: "/images/sections/user-flow/step-two.png",
	},
	{
		id: 3,
		title: "Download the App",
		description: "Get our mobile app and set up your notification preferences.",
		imageSrc: "/images/sections/user-flow/step-three.png",
	},
	{
		id: 4,
		title: "That's it!",
		description: "Start receiving personalized insights and notifications about your business.",
		imageSrc: "/images/sections/user-flow/step-four.png",
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
		<section ref={sectionRef} id="how-it-works" className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
				<div className="text-center max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12">
					<p className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-8">
						<span className='m-4'>One glance and you're</span>
					</p>
					<p className="font-heading font-bold text-3xl md:text-4xl mb-6 leading-8">
						<span className='border rounded-xl bg-royalBlue p-2 px-4 text-white'>in control</span>
					</p>
					<p className="text-base sm:text-lg text-xl md:text-xl text-gray-700 mt-3 sm:mt-4 md:mt-6 px-2 sm:px-4 md:px-0 mx-auto max-w-sm sm:max-w-md md:max-w-lg">
						Set up your account, connect sources, and wake up knowing your business is fine.
					</p>
				</div>

				<div className="relative">
					{/* Center Timeline Line */}
					<div className="hidden sm:block border rounded absolute left-1/2 top-0 bottom-0 w-2 bg-steelBlue/30 transform -translate-x-1/2"></div>

					{/* Steps */}
					<div className="relative">
						{steps.map((step, index) => (
							<div
								key={step.id}
								className={cn(
									"relative py-6 sm:py-8 md:py-12",
									"mb-6 sm:mb-0",
									isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
									isVisible ? `transition-all duration-700 delay-${index * 200}` : ""
								)}
								style={isVisible ? { transitionDelay: `${index * 200}ms` } : {}}
							>
								{/* Timeline Dot */}
								<div className="hidden sm:block absolute left-1/2 top-1/2 w-5 h-5 bg-royalBlue rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-md"></div>

								{/* Step Number Badge */}
								<div className="hidden sm:flex absolute sm:left-1/2 sm:top-1/2 w-7 h-7 bg-white rounded-full transform sm:-translate-x-1/2 sm:-translate-y-1/2 z-20 items-center justify-center border-2 border-royalBlue shadow-sm">
									<span className="text-xs font-bold text-royalBlue">{step.id}</span>
								</div>

								{/* Content Container */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center">
									{/* Image Container */}
									<div className={cn(
										"cursor-pointer hover:shadow-lg relative rounded-xl overflow-hidden border-4 border-royalBlue/30 aspect-[3/2]",
										"transition-all duration-500 mx-auto",
										"w-full max-w-[90%]",

										"order-2",
										step.id % 2 === 1 ? "sm:order-1" : "sm:order-2"
									)}>
										<div className="relative bg-cream/30 w-full h-full flex items-center justify-center">
												{step.imageSrc ? (
													<Image
														src={step.imageSrc}
														alt={step.title}
														fill
														className="object-contain"
														priority
													/>
												) : (
													<div className="text-center text-gray-400">Image: {step.title}</div>
												)}
										</div>
									</div>

									{/* Text Content */}
									<div className={cn(
										"transition-all duration-300",
										"sm:pl-10 px-8 sm:pl-0",
										"mt-4 sm:mt-0",
										"order-1",
										step.id % 2 === 1
											? "sm:order-2 sm:text-left sm:pl-8"
											: "sm:order-1 sm:text-right sm:pr-8"
									)}>
										<h3 className="font-heading text-2xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-royalBlue">
											{step.title}
										</h3>
										<p className="text-gray-700 text-lg sm:text-base lg:text-lg">
											{step.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;