// components/ImageShowcase.tsx
'use client'
import Image from 'next/image';
import { useState } from 'react';

interface ShowcaseProps {
    images: string[];
}

const ImageShowcase: React.FC<ShowcaseProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    return (
        <div className="relative w-full h-auto mx-auto">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`
                        ${index === currentIndex ? 'visible' : 'hidden'}
                    `}
                    style={{ transitionDuration: '500ms'}}
                >
                    <Image
                        src={image}
                        width={600}
                        height={400}
                        alt={`Projektin kuva ${index}`}
                        className="mx-auto w-auto h-96 max-w-[80%] max-h-[calc(80vw)] object-contain"
                    />
                </div>
            ))}
            <div className={`flex flex-row relative w-full ${images.length === 1 ? "hidden" : "h-8 md:h-16" } w-full`}>
                <button
                    onClick={goToPrevious}
                    className="flex items-center justify-end h-full w-full"
                >
                    <div className="inline-block w-4 h-4 border-b-2 border-l-2 border-white transform rotate-45"></div>
                </button>
                <div className="flex items-center justify-center h-full w-auto">
                    {images.map((_, index) => (
                    <div key={index} className="w-4 h-4 mx-1">
                        <div
                            className={`cursor-pointer ${
                            index === currentIndex ? 'w-3 h-3 bg-[#fff] m-0.5' : 'w-2 h-2 bg-[#888] m-1'
                            } rounded-full transition-all duration-300`}
                        />
                    </div>
                    ))}
                </div>
                <button
                    onClick={goToNext}
                    className="flex items-center justify-start h-full w-full"
                >
                    <div className="inline-block w-4 h-4 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </button>
            </div>
        </div>
    )
}

export default ImageShowcase