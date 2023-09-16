import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutThunk } from 'redux/authThunk'
import styles from './UserBar.module.css';

function UserBar() {
    const dispatch = useDispatch()
    const username = useSelector(state => state.auth.name)
    const token = useSelector(state => state.auth.token)
    const handleLogout = () => {
        dispatch(logoutThunk(token))
    }

    return (
        <div className={styles.userSection}>
            {username ? (
                <div className={styles.loggedIn}>
                    <p>{username}</p>
                    <button onClick={handleLogout} type='button' className={styles.logoutButton}>Logout</button>
                </div>
            ) : (
                <div className={styles.loggedOut}>
                    <Link to="/login" className={styles.loginLink}>Login</Link>
                    <Link to="/register" className={styles.registerLink}>Register</Link>
                </div>
            )}
        </div>

    )
}

export default UserBar