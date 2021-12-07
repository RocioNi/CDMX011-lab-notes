import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LogInUser, googleRegister, user } from '../Firebase/FirebaseAuth';
import './Home.css';
// import { auth, provider } from '../firebase';

const Home = () => {
  const [emailLogin, setEmailLogin] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const LogIn = (e) => {
    e.preventDefault();
    LogInUser(emailLogin, password).then(() => {
      history.push('/Feed');
      console.log(user());
    })
      .catch((err) => alert(err.message));
  };

  const googleLogIn = (e) => {
    e.preventDefault();
    googleRegister().then(() => {
      history.push('/Feed');
      console.log('LogIn Google ok');
    })
      .catch((err) => console.log(err));
  };

  return (

    <>
      <div id="containerTitle">
        <div className="circles">
          <div id="circlePurple" />
          <div id="circleGreen" />
          <div id="circleOrange" />
          <div id="circleYellow" />
          <div id="circlePurpleTwo" />
        </div>
        <div className="title">
          <h1>To Do Notes</h1>
          <img src="images/post.png" alt="postIt" />
        </div>
        <div id="containerText">
          <p id="slogan">Don´t forget important things</p>
        </div>
      </div>
      <div id="containerLog">
        <p id="Login">Log in</p>
        <input id="emailLogin" type="email" required placeholder="Email" onChange={(e) => { setEmailLogin(e.target.value); }} />
        <input id="password" type="password" required placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
        <button id="Go" type="submit" onClick={LogIn}>Go!</button>
      </div>
      <button id="GoogleButton" type="submit" onClick={googleLogIn}>
        <img className="logoGoogle" src="images/google-logo.png" alt="G" />
        Log in with Google

        {' '}
      </button>
      <p id="registerAsk">
        Don´t you have an account?
        {' '}
        <Link to="/Register">
          <button id="RegisterButton" type="submit">
            Register
          </button>

        </Link>

      </p>

    </>
  );
};
export default Home;
