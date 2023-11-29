import { useState } from 'react';
import styles from './LoginForm.module.css'
import Link from 'next/link';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginform}>
      <h1 className={styles.header}>Log In</h1>
      <label className={styles.label}>
        Email:
        <input className={styles.inputbox} type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label className={styles.label}>
        Password:
        <input className={styles.inputbox} type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button className={styles.button} type="submit">Log In</button>
      <p className={styles.subtext}>Forgot your password?</p>
      <Link className={styles.subtext} href='home'>
        <p>Continue as guest</p>
      </Link>
    </form>
  );
};

export default LoginForm;
