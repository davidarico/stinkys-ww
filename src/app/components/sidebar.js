"use client";

import { useState } from 'react';
import Link from 'next/link';

import styles from './sidebar.module.css'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.sidebar}>
            {isOpen ? (
                <div className={styles.menuContainer}>
                    <nav className="top-0 left-0 h-screen w-64 bg-gray-800 shadow-lg">
                        <ul className="flex flex-col w-full">
                            <li className="p-4">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/Games">
                                    Games
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/bug">
                                    Report a Bug
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/about">
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