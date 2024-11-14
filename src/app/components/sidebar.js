"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from './sidebar.module.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    // Open/close sidebar on route navigation within each click
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.sidebar}>
            {isOpen ? (
                <div className={styles.menuContainer}>
                    <nav className="top-0 left-0 h-screen w-64 bg-gray-800 shadow-lg">
                        <ul className="flex flex-col w-full">
                            <li className="p-4">
                                <Link href="/" onClick={handleLinkClick}>
                                    Home
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/games" onClick={handleLinkClick}>
                                    Games
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/about" onClick={handleLinkClick}>
                                    About
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/bug" onClick={handleLinkClick}>
                                    Report a Bug
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/contact" onClick={handleLinkClick}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button className={styles.button} onClick={() => setIsOpen(false)}>
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="dodgerblue">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            ) : (
                <button className={styles.button} onClick={() => setIsOpen(true)}>
                    <svg
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="dodgerblue">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Sidebar;
