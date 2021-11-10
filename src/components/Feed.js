import React, { useState } from 'react';
import { } from 'react-router-dom';
import { creatingNotes } from '../Firebase/Firestore';

// import { useHistory } from 'react-router-dom';
// import LogOut from '../Firebase/FirebaseAuth';
import './Feed.css';

const Feed = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const newNote = (e) => e.preventDefault();
  // creatingNotes(title, text).then(() => {
  //   console.log('Document successfully written!');
  // });
  creatingNotes(title, text).then(() => {
    console.log('Function ok');
  });
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
          <h1>
            To Do Notes
            {' '}
          </h1>
          <img src="images/post.png" alt="postIt" />
        </div>
        <div id="containerText">
          <p id="slogan">Don´t forget important things</p>
        </div>
      </div>

      <div id="containerNotes">
        <p id="Notes">Feed</p>
        <p id="addNote"> Add Note</p>
        <button id="addNote" type="submit">
          <img className="addNote" src="images/nueva-tarea.png" alt="New" />
          {' '}
        </button>
      </div>
      <div>
        <input id="titleNote" type="text" required placeholder="Title" onChange={(e) => { setTitle(e.target.value); }} />
        <textarea id="textNote" type="text" placeholder="Introduce your note" onChange={(e) => { setText(e.target.value); }} />
        <button id="saveNote" type="submit" onClick={newNote}>Save</button>
      </div>
      <div id="DivLogout">
        <button id="LogOut" type="submit">
          <img src="images/cerrar-sesion.png" alt="LogOut" />
        </button>
      </div>

    </>
  );
};

export default Feed;
