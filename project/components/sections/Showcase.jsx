import Image from "next/image";
import { cn } from '@/lib/utils';
import { useEffect, useState } from "react";

export default function Showcase() {
    const [isVisible, SetIsVisible] = useState(null);

    useEffect(() => {
        SetIsVisible(true);
    }, [])

    return (
        <div
            className={cn(
                'relative h-[500px] flex items-center justify-center transition-all duration-700 delay-300',
                isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-12'
            )}
        >
            <div className="relative w-full">
                <Image
                    src="/images/mobile/dashboard-expanded.png"
                    alt="iPhone 16 mobile app showcase"
                    width={410}
                    height={900}
                />
            </div>
        </div>
    );
}