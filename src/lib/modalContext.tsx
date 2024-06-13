"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type ModalContextValue = {
  isOpen: boolean;
  modalChildren: ReactNode | null;
  openModal: (arg0: ReactNode) => void;
  closeModal: () => void;
  setModal: Dispatch<SetStateAction<HTMLElement | null>>;
  modal: HTMLElement | null;
};

const defaultValues: ModalContextValue = {
  isOpen: false,
  modalChildren: null,
  openModal: () => {},
  closeModal: () => {},
  setModal: () => {},
  modal: null,
};

const ModalContext = createContext<ModalContextValue>(defaultValues);

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState<ReactNode | null>(null);

  const [modal, setModal] = useState<HTMLElement | null>(null);

  // TODO: useRef is probably going to make your life easier here...
  useEffect(() => {
    setOriginalModal();
  }, []);

  const setOriginalModal = () => {
    if (typeof window != "undefined") {
      setModal(document.getElementById("modal"));
    }
  };

  const openModal = (modalChildren: ReactNode) => {
    setIsOpen(true);
    setModalChildren(modalChildren);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalChildren(null);
    setOriginalModal();
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, modalChildren, setModal, modal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
