import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from './Modal';
import { LogOut } from '../Firebase/FirebaseAuth';

// import { useHistory } from 'react-router-dom';
// import LogOut from '../Firebase/FirebaseAuth';
import './Feed.css';

const Feed = (initialValue = false) => {
  // investigar el uso de setState y que devuelve la funcion
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // comprender porque adentro de seeModal llamamos a setOpenModal

  const LogOutFeed = () => {
    LogOut().then(() => {
      history.push('/');
      console.log('LogOut ok');
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
        <button id="addNote" type="submit" onClick={openModal}>
          <img className="addNote" src="images/nueva-tarea.png" alt="New" />
          {' '}
        </button>
        <div id="btn modal">
          {/* manejo de props */}
          <Modal isOpen={isOpen} closeModal={closeModal}>
            {' '}
            <p>modal prueba</p>
            {' '}
          </Modal>
        </div>
        <div id="DivLogout">
          <button id="LogOut" type="submit" onClick={LogOutFeed}>
            <img src="images/cerrar-sesion.png" alt="LogOut" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Feed;
