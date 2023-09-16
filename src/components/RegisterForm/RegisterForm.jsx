import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from 'services/auth';
import styles from './RegisterForm.module.css';

// const register = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("succeed");
//         }, 1000);
//     });
// }


export const RegisterForm = () => {
    const [response, setResponse] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }
        try {
            const response = await register(userData)

            if (response === "succeed") {
                setResponse('succeed')
            }
        } catch (error) {
            setError('something gone wrong, try f5 and use another email')

        }

    };

    return (
        <>
            {response === 'succeed' ?
                <div className={styles.response}>
                    <h2>Registration successfull</h2>
                    <Link className={styles.button} to="/login">Login</Link>
                </div>
                :
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
                </form>}
        </>
    );
};