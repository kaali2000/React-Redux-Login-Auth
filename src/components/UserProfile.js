import React from 'react';
import { useSelector } from 'react-redux';
import classes from './UserProfile.module.css';

const UserProfile = (props) => {
  const auth = useSelector(x => x.auth.value);
  return (
    <main className={classes.profile}>
      <h1>Hi {auth?.emailVal}!</h1>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
