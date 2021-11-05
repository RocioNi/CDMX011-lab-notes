import React, { } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import { auth, provider } from '../firebase';

const Home = () => (
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
      <input id="emailLogin" type="email" required placeholder="Email" />
      <input id="password" type="password" required placeholder="Password" />
      <button id="Go" type="submit">Go!</button>
    </div>
    <button id="GoogleButton" type="submit">
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
export default Home;
