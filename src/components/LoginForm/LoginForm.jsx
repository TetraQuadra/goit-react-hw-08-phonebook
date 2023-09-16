import { useDispatch } from 'react-redux';
import { redirect } from 'react-router-dom';
import { loginThunk } from 'redux/authThunk';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    dispatch(loginThunk(userData))
      .then(redirect('/'));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} >
      <label className={styles.label}>
        <p>Email</p>
        <input className={styles.input} type="email" name="email" />
      </label>
      <label className={styles.label}>
        <p>Password</p>
        <input className={styles.input} type="password" name="password" />
      </label>
      <button type="submit" className={styles.button}>Log In</button>
    </form>
  );
};