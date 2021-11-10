import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';
import { createUserEmail, googleRegister } from '../Firebase/FirebaseAuth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const history = useHistory();

  const createUser = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || password.length === 0
       || passwordConfirm.length === 0) {
      alert('Completa los campos requeridos');
    } else if (password !== passwordConfirm) { alert('The password doesn´t match'); }
    if (password === passwordConfirm) {
      createUserEmail(email, password).then(() => {
        history.push('/Feed');
        console.log('Register ok');
      })
        .catch((err) => console.log(err));
    }
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    googleRegister().then(() => {
      history.push('/Feed');
      console.log('Register Google ok');
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

      <div id="containerRegister">
        <p id="RegisterText">Register</p>
        <input id="name" type="text" required placeholder="Name" onChange={(e) => { setName(e.target.value); }} />
        <input id="emailRegister" type="email" required placeholder="Email" onChange={(e) => { setEmail(e.target.value); }} />
        <input id="passwordRegister" type="password" required placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
        <input id="passwordConfirm" type="password" required placeholder="Confirm Password" onChange={(e) => { setPasswordConfirm(e.target.value); }} />
        {/* <Link to="/"> */}
        <button id="GoButtonRegister" type="submit" onClick={createUser}>Go! </button>
        {/* </Link> */}

        {/* <Link to="/Feed"> */}
        <button id="GoogleButtonRegister" type="submit" onClick={googleSignIn}>
          <img className="logoGoogle" src="images/google-logo.png" alt="G" />
          Register with Google
          {' '}
        </button>
      </div>
      {/* </Link> */}
      <div id="returnComponents">
        <p id="returnText">
          Do you want to return?
          {' '}
          <Link to="/">
            {' '}
            <button id="homeButton" type="submit">Home</button>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
