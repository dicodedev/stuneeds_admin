import { createContext, useContext, useState } from "react";

const ModalContext = createContext({
  user: null,
  currentPage: null,
  values: null,
  modal: null,
  landingModal: null,
  modalSize: null,
  setModal: () => {},
  setLandingModal: () => {},
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  next: () => {},
});

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [currentPage, _setCurrentPage] = useState(null);
  const [next, _setNext] = useState(() => {});
  const [user, setUser] = useState(false);
  const [values, setValues] = useState(false);
  const [modalSize, setModalSize] = useState(false);
  const [modal, setModal] = useState(null);
  const [landingModal, setLandingModal] = useState(null);

  const value = {
    user,
    setUser,
    values,
    setValues,
    currentPage,
    modalSize,
    modal,
    setModal,
    landingModal,
    setLandingModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
