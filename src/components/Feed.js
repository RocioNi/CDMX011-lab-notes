import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from './Modal';
import { LogOut } from '../Firebase/FirebaseAuth';
import { allData } from '../Firebase/Firestore';
import useModal from './useModal';

// import { useHistory } from 'react-router-dom';
// import LogOut from '../Firebase/FirebaseAuth';
import './Feed.css';

const Feed = () => {
  // investigar el uso de setState y que devuelve la funcion
  const history = useHistory();
  // comprender porque adentro de seeModal llamamos a setOpenModal

  const { closeModal, openModal, isOpen } = useModal(false);
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const obteinData = async () => {
      try {
        const data = await allData;
        console.log(data.docs);
        const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(arrayData);
        setTareas(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    obteinData();
  }, []);

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
        <p id="addNoteText">
          {' '}
          New Note
          <button id="addNote" type="submit" onClick={openModal}>
            <img className="addNoteImg" src="images/nueva-tarea1.png" alt="New" />
            {' '}
          </button>
        </p>
        {/* manejo de props */}
        <Modal isOpen={isOpen} closeModal={closeModal} />
        <div className="containerAlllNotes">
          <div className="list-group">
            {tareas.map((item) => (
              <div className="list-group-item" key={item.id}>
                {item.title}
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="LogOut">
        <button id="LogOutBtn" type="submit" onClick={LogOutFeed}>
          <img className="LogOutImg" src="images/salida.png" alt="LogOut" />
        </button>
      </div>

    </>
  );
};

export default Feed;
