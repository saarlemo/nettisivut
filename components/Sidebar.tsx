// components/Sidebar.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import HamburgerIcon from '@/components/HamburgerIcon';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const setHelper = (state: boolean) => {
        if (state) {
            setIsOpen(true);
            document.body.style.overflow = 'hidden';
        } else if (!state) {
            setIsOpen(false);
            document.body.style.overflow = 'auto';
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setHelper(false);
            }
        };
        const handleKeyDown = (event: KeyboardEvent) => {
            setHelper(false);
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);



    return (
        <div className="lg:shadow-lg">
            <button
                className="fixed top-4 right-4 z-50 lg:hidden"
                onClick={() => {setHelper(!isOpen)}}
            >
                <HamburgerIcon isOpen={isOpen} />
            </button>

            {/* Overlay */}
            {isOpen && (
                <button
                    className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'} scroll-padding-top-[100%]`}
                    onClick={() => setHelper(false)}
                ></button>
            )}

            <div
                className={`
                    fixed
                    top-0
                    left-0
                    h-full
                    w-64
                    lg:relative
                    lg:h-[100%]
                    lg:w-[5cm]
                    lg:rounded-l
                    bg-[#272727]
                    lg:shadow-none
                    flex
                    flex-col
                    justify-between

                    transform
                    ${ isOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0
                    transition-transform
                    duration-300
                    ease-in-out
                    z-40

                    border-r-2
                    border-[#888]
                `}
            >
                <div className="p-4">
                    <nav className="flex flex-col divide-y divide-[#888]">
                        <Link href="./" className="rounded-t relative flex h-12 w-auto items-center justify-center overflow-hidden text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-opacity-20 before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56" onClick={() => setHelper(false)}>
                            <span className="relative z-10">Etusivu</span>
                        </Link>
                        {/*<Link href="projekteja" className="relative flex h-12 w-auto items-center justify-center overflow-hidden text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-opacity-20 before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56" onClick={() => setIsOpen(false)}>
                        <span className="relative z-10">Projekteja</span>
                        </Link>*/}
                        <Link href="cv" className="rounded-b relative flex h-12 w-auto items-center justify-center overflow-hidden text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-opacity-20 before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56" onClick={() => setHelper(false)}>
                        <span className="relative z-10">CV</span>
                        </Link>
                    </nav>
                </div>
                <div className="p-4 flex flex-row space-x-2">
                    <Link href="https://www.linkedin.com/in/saarlemo" target="_blank" className="w-8 h-8 text-white text-center">
                        <svg className="w-8 h-8" viewBox="0 0 72 72"  xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                                <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/>
                                <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/>
                            </g>
                        </svg>
                    </Link>
                    <Link href="https://github.com/saarlemo" target="_blank" className="w-8 h-8 text-white text-center">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                            <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
