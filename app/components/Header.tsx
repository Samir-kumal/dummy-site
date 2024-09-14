import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" fill="url(#paint0_linear)" />
                        <path d="M12 13.25L19.25 9L12 19.25L4.75 9L12 13.25Z" fill="url(#paint1_linear)" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="4.75" y1="9" x2="19.25" y2="9" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6366F1" />
                                <stop offset="1" stopColor="#8B5CF6" />
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="4.75" y1="14.125" x2="19.25" y2="14.125" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6366F1" />
                                <stop offset="1" stopColor="#8B5CF6" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className="text-2xl font-semibold">
                        <span className="text-blue-500">New</span>
                        <span className="text-gray-800">HealthInsurance</span>
                    </span>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
                    <Link href="/blog" className="text-gray-600 hover:text-blue-500">Blog</Link>
                    <div className="relative group">
                        <button className="text-gray-600 hover:text-blue-500 flex items-center">
                            Service Areas
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {/* Dropdown menu would go here */}
                    </div>
                </nav>
                <div className="flex items-center">
                    <a href="tel:1-833-864-8035" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                        1-833-864-8035
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;