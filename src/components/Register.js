import React from 'react';
import './Register.css';

const Register = () => (
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

    <div id="containerRegister">
      <p id="RegisterText">Register</p>
      <input id="Name" type="text" required placeholder="Name" />
      <input id="emailRegister" type="email" required placeholder="Email" />
      <input id="passwordRegister" type="password" required placeholder="Password" />
      <input id="passwordConfirm" type="password" required placeholder="Confirm Password" />
      <button id="GoButtonRegister" type="submit">Go!</button>
    </div>
    <button id="GoogleButtonRegister" type="submit">
      <img className="logoGoogle" src="images/google-logo.png" alt="G" />
      Register with Google
      {' '}
    </button>
    <p id="returnText">
      Do you want to return?
      {' '}
      <button id="homeButton" type="submit">
        Home
      </button>
    </p>

  </>
);

export default Register;
