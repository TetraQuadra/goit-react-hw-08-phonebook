import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { register } from 'services/auth';
import styles from './RegisterForm.module.css';

const register = (data) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("succeed");
        }, 1000);
    });
}


export const RegisterForm = () => {
    const [response, setResponse] = useState('')

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }
        const response = await register(userData)

        if (response === "succeed") {
            setResponse('succeed')

        }

    };

    return (
        <>
            {response === 'succeed' ?
                <div>
                    <h1>Registration successfull</h1>
                    <Link to="/login">Login</Link>
                </div>
                :
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>
                        Name
                        <input type="name" name="name" />
                    </label>
                    <label className={styles.label}>
                        Email
                        <input type="email" name="email" />
                    </label>
                    <label className={styles.label}>
                        Password
                        <input type="password" name="password" />
                    </label>
                    <button type="submit" className={styles.button}>Register</button>
                </form>}
        </>
    );
};