import { useState } from 'react';

const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue); // desestructurar arreglos

  const openModal = () => {
    console.log(openModal); setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};
export default useModal;
