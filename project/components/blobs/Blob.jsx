import Image from 'next/image';

export default function Blob({ src, className }) {
    return (
        <div className="absolute top-0 left-0 inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src={src}
                        alt="Background Shape"
                        fill
                        className={`object-contain ${className || ''}`}
                        priority
                    />
            </div>
        </div>
    );
}