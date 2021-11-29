import React, { useState } from 'react';
import { creatingNotes } from '../Firebase/Firestore';
import './Modal.css';
// manejo de props
// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, closeModal }) => { // conocer sobre le paso de props
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const newNote = (e) => {
    e.preventDefault();
    creatingNotes(title, note).then(() => {
      console.log('Function ok');
    });
  };
  // uso de esos props
  return (

    <article className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className="modal-container">
        <button className="modal-close" type="submit" onClick={closeModal}>x</button>
        <br />
        <input id="titleNote" type="text" required placeholder="Title" onChange={(e) => { setTitle(e.target.value); }} />
        <textarea id="textNote" type="text" placeholder="Introduce your note" onChange={(e) => { setNote(e.target.value); }} />
        <button id="saveNote" type="submit" onClick={newNote}>Save</button>
      </div>
    </article>

  );
};

export default Modal;
