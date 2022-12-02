import React from 'react'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';

const header = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme("");
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    let themeButton;
    if (theme === 'light') {
        themeButton = <button onClick={() => setTheme("dark") && setMounted(true)}><img id={styles.mountain} src="/mountain.png"></img></button>
    }
    else {
        themeButton = <button onClick={() => setTheme("light") && setMounted(true)}><img id={styles.nightMountain} src="/night-landscape.png"></img></button>
    };
    return (
        <div className={styles.nav}>
            <ul id={styles.navList} className={styles.navList}>
                <li>
                    <Link href="/"><h4>Stone Villa Mouzaki</h4></Link>
                </li>
            </ul>
            <ul id={styles.secondList} className={styles.navList}>
                <li>
                    <Link href="/contact"><h4>Contact</h4></Link>
                </li>
                <li>
                    <Link href="/history"><h4>History</h4></Link>
                </li>
                <li>
                    {themeButton}
                </li>
            </ul>
            <div className={styles.mobileNav}>
                <ul>
                    <li>
                        <Link href="/">
                            <i className="fa-solid fa-house"></i>
                            <h4>Home</h4>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <i className="fa-sharp fa-solid fa-message-text"></i>
                            <h4>Contact</h4>
                        </Link>

                    </li>
                    <li>
                        <Link href="/history">
                            <i className="fa-solid fa-landmark"></i>
                            <h4>History</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default header