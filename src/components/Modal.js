import React, { useState } from 'react';
import { creatingNotes } from '../Firebase/Firestore';
import './Modal.css';
// manejo de props
const Modal = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const newNote = (e) => {
    e.preventDefault();
    creatingNotes(title, note).then(() => {
      console.log('Function ok');
      setOpenModal((prev) => !prev);
    });
  };
  // uso de esos props
  return openModal ? (
    <>
      <section className="modal">
        <form className="modalCreateNote">
          <div className="btn-close">
            <button id="btn-close" type="submit" onClick={() => setOpenModal((prev) => !prev)}>x</button>
          </div>
          <input id="titleNote" type="text" required placeholder="Title" onChange={(e) => { setTitle(e.target.value); }} />
          <textarea id="textNote" type="text" placeholder="Introduce your note" onChange={(e) => { setNote(e.target.value); }} />
          <button id="saveNote" type="submit" onClick={newNote}>Save</button>
        </form>

      </section>
    </>
  ) : <h3>Push the button</h3>;
};

export default Modal;
