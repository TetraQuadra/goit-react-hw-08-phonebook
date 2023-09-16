import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
    const username = useSelector(state => state.auth.name)
    return (
        <main>
            <div className={styles.headerWrapper}>
                <h1 className={styles.header}>Create your very own contacts list!</h1>
                {username ? (
                    <div className={styles.loggedIn}>
                        <Link to="/contacts" className={styles.loginLink}>Open contacts</Link>
                    </div>
                ) : (
                    <div className={styles.loggedOut}>
                        <Link to="/login" className={styles.loginLink}>Login</Link>
                        <Link to="/register" className={styles.registerLink}>Register</Link>
                    </div>
                )}

            </div>
        </main>

    )
}

export default Home