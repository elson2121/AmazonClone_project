import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Signup.module.css';
import {  signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../Dataprovider/Dataprovider';
import { Type } from '../../../Utils/actiontype';
import { ClipLoader } from 'react-spinners';
import { auth } from '../../../Utils/firebase';



function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false // Fixed typo from 'singUp' to 'signUp'
  });
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContext);

  console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    const buttonName = e.target.name;
    setLoading((prev) => ({ ...prev, [buttonName]: true }));
    setError("");

    try {
      if (buttonName === "signin") {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userCredential.user
        });
        navigate('/');
      } else if (buttonName === "signUp") {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userCredential.user
        });
        navigate('/');
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading((prev) => ({ ...prev, [buttonName]: false }));
    }
  };

  return (
    <section className={classes.login}>
      <Link to='/'>
        <img src="https://m.media-amazon.com/images/I/31epF-8N9LL.png" alt="Amazon logo" />
      </Link>
      
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id='email'
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          
          <button
            type="button"
            name="signin"
            onClick={authHandler}
            className={classes.login_SigninButton}
            disabled={loading.signIn}
          >
            {loading.signIn ? <ClipLoader color="white" size={15} /> : "Sign In"}
          </button>
        </form>
        
        <p>By signing in, you agree to our Conditions of Use & Sale. Please review our Privacy Notice, Cookies Notice, and Interest-Based Ads Notice.</p>
        
        <button
          type="button"
          name="signUp"
          onClick={authHandler}
          className={classes.log_in_registerButton}
          disabled={loading.signUp}
        >
          {loading.signUp ? <ClipLoader color="white" size={15} /> : "Create Your Amazon Account"}
        </button>

        {error && (
          <p className={classes.error_message}>{error}</p>
        )}
      </div>
    </section>
  );
}

export default SignUp;