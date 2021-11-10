import React, { useEffect, useState } from 'react';
import Modal from './modal';
import './Feed.css';
import fb from '../Firebase/FirebaseAuth';

const Feed = () => {
  const [notes, setNotes] = useState([]);
  const [seeModal, setSeeModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const db = fb.firestore();
  const giveNotes = () => {
    db.collection('allNotes').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setNotes(docs);
    });
  };

  useEffect(() => {
    giveNotes();
  }, []);

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
        {/* <Link to="/"> */}
        <p id="addNote"> Add Note</p>
        <button id="addNote" type="submit" onClick={openModal}>
          <img className="addNote" src="images/nueva-tarea.png" alt="G" />
          {' '}
        </button>
        <Modal showModal={seeModal} setShowModal={setSeeModal} />
      </div>

    </>;
};

export default Feed;
