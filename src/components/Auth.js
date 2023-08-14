import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/auth';

const Auth = () => {
  const [emailVal, setEmailVal] = useState({
    email:'',
    pass:''
 });
  const dispatch = useDispatch();

  const loginHandler = () => {
    setEmailVal({ emailVal });
    dispatch(authActions.login({emailVal}));
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='pass' />
          </div>
          <div className={classes.control}>
            <button>Login</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Auth;
