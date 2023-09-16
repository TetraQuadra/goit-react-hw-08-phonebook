import UserBar from 'components/UserBar/UserBar';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link to="/" className={styles.navLink}>Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/contacts" className={styles.navLink}>Contacts</Link>
                    </li>
                </ul>
            </nav>
            <UserBar />
        </header>
    );
}

export default Header;
