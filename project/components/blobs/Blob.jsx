import Image from 'next/image';

export default function Blob({ src, width }) {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src={src}
                    alt={`Background Shape`}
                    width={1920}
                    height={1080}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: `${width}%`
                    }}
                    priority
                />
            </div>
        </div>
    );
}