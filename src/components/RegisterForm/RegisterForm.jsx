import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { redirect } from "react-router-dom";
import { registerThunk } from 'redux/authThunk';
import styles from './RegisterForm.module.css';

// const register = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("succeed");
//         }, 1000);
//     });
// }

export const RegisterForm = () => {
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }
        try {
            dispatch(registerThunk(userData))
            redirect("/contacts")
        } catch (error) {
            setError('something gone wrong, try f5 and use another email')
        }

    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                {error && <p className={styles.error}>{error}</p>}
                <label className={styles.label}>
                    <p>Name</p>
                    <input
                        required
                        className={styles.input} type="name" name="name" />
                </label>
                <label className={styles.label}>
                    <p>Email</p>
                    <input
                        required
                        className={styles.input} type="email" name="email" />
                </label>
                <label className={styles.label}>
                    <p>Password</p>
                    <input required
                        minLength="7"
                        className={styles.input} type="password" name="password" />
                </label>
                <button type="submit" className={styles.button}>Register</button>
            </form>
        </>
    );
};