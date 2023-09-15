import { Navigate } from 'react-router-dom';
import { register } from 'services/auth';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {

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
            return <Navigate to={'/login'} />
        }

    };

    return (
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
            <button type="submit" className={styles.button}>Log In</button>
        </form>
    );
};