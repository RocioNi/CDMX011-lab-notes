import React, { useState } from 'react';


function Modal({ seeModal, setSeeModal }) {
  const initialStateValues = {
    title: '',
    text: '',
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newNote(values);
    console.log('The note was created');
    setValues({});
    setShowModal((prev) => !prev);
  };

  return showModal ? (
    <article className="modalOpen">
      <div className="modalContainer">
        <button id="" type="submit" onClick={() => setShowModal((prev) => !prev)}> X </button>
        <h3>Write your New Note</h3>
        <input onChange={handleInputChange} value={values.title} name="title" type="text" placeholder="Title" className="TitleNote" />
        <textarea onChange={handleInputChange} value={values.text} name="description" placeholder="Description" className="BodyNote" />
        <div className="ContainerBtn">
          <button id="saveNote" type="submit" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </article>
  ) : <h3>Push the button</h3>;
}

export default Modal;
