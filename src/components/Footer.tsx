import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Newsletter from '@/components/Newsletter';

interface FooterProps {
    siteTitle?: string;
}

const Footer: React.FC<FooterProps> = ({ siteTitle = "CÔNG TY TNHH VISPAICO | All rights reserved" }) => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Column 1: Logo and Mission and Social Icons */}
                    <div className="col-span-1 text-center md:text-left">
                        <div className="relative h-14 w-48 mx-auto md:mx-0 mb-8">
                            <Image src="/logos/Vispaico_ship it_Logo_wh.webp" alt="Vispaico Logo" fill style={{ objectFit: 'contain' }} />
                        </div>
                        <p className="text-blue-200 mb-8"><span className="font-bold">Vispaico | Ship It</span> - Because you need a website, not a 6-month project management nightmare.</p>

                        
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div className="col-span-1 text-center md:text-center">
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/contact" className="text-blue-200 hover:text-white transition-colors duration-300">Contact</Link></li>
                            <li><Link href="/faq" className="text-blue-200 hover:text-white transition-colors duration-300">FAQ</Link></li>
                            <li><Link href="/about" className="text-blue-200 hover:text-white transition-colors duration-300">About Us</Link></li>
                            <li><Link href="/terms" className="text-blue-200 hover:text-white transition-colors duration-300">Terms</Link></li>
                            <li><Link href="/privacy" className="text-blue-200 hover:text-white transition-colors duration-300">Privacy</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Newsletter Signup */}
                    <div className="col-span-1 text-center md:text-left">
                        <Newsletter />
                    </div>
                    
                </div>

                {/* Copyright and Owbnership Notice */}
                <div className="border-t border-white/20 pt-6 text-sm">
                        <div className="flex space-x-4 justify-center mb-4">
                        <a href="https://github.com/Vispaico" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-center text-blue-200 hover:text-white transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.165 6.839 9.485.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.338-2.22-.253-4.555-1.116-4.555-4.949 0-1.092.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.268 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.38.202 2.398.099 2.65.64.698 1.028 1.59 1.028 2.682 0 3.841-2.339 4.69-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.482C21.137 20.16 24 16.419 24 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://x.com/vispaico" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="text-blue-200 hover:text-white transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-6.57-8.689L3.44 21.75H.98L10.69 9.457L1.54 2.25H4.85L12.083 10.272L18.244 2.25zm-1.17 17.549L12.083 9.77l-5.209 6.89H4.24L9.772 5.01h2.953L18.244 19.799h-1.17z" /></svg>
                        </a>
                        <a href="https://www.tiktok.com/@vispaico" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-blue-200 hover:text-white transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.32 1.52v3.41c-1.84.08-3.68-.16-5.31-1.02-1.6-1.06-2.58-2.7-2.95-4.55-.02-.1-.03-.2-.03-.3v7.65c0 4.34-3.13 7.86-7.02 7.86-3.88 0-7.02-3.52-7.02-7.86s3.13-7.86 7.02-7.86c.04 0 .08 0 .12 0l.09.01v3.34c-1.68.04-3.28.82-4.27 2.15-1.01 1.36-1.22 3.13-.53 4.75.69 1.62 2.16 2.73 3.9 2.95 2.07.25 4.12-.67 5.2-2.44.6-1.06.9-2.34.9-3.68V.02z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/vispaico/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-blue-200 hover:text-white transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.06 1.278.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.765.297 1.635.499 2.913.558C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.278-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.297-.765.499-1.635.558-2.913.058-1.278.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.278-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.35 1.935 20.682 1.522 19.892 1.216c-.765-.297-1.635-.499-2.913-.558C15.667.014 15.26 0 12 0zm0 2.16c3.2 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.899.42.42.68.818.899 1.382.164.422.359 1.057.415 2.227.056 1.265.07 1.65.07 4.85s-.014 3.585-.07 4.85c-.056 1.17-.25 1.805-.415 2.227-.217.562-.477.96-.899 1.382-.42.42-.818-.68-1.382-.899-.422.164-1.057-.359-2.227-.415C8.415 2.176 8.805 2.16 12 2.16zM12 6a6 6 0 100 12 6 6 0 000-12zm0 1.8A4.2 4.2 0 1112 16.2a4.2 4.2 0 010-8.4zm0 1.8a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://www.facebook.com/vispaico/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-200 hover:text-white transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/vispaico/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-200 hover:text-white transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                        </a>
                        </div>
                <p className="pt-4 text-center text-blue-200/80">Vispaico.com is the official website of CÔNG TY TNHH VISPAICO (Vispaico Co. Ltd.), registered in Haiphong, Vietnam.</p>
                <p className="pt-4 text-center text-blue-200/80">&copy; {new Date().getFullYear()} {siteTitle} - Built in Haiphong, Vietnam 🇻🇳</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
