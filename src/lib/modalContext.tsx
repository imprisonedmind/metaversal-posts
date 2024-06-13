"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

type ModalContextValue = {
  isOpen: boolean;
  modalChildren: ReactNode | null;
  openModal: (arg0: ReactNode) => void;
  closeModal: () => void;
};

const defaultValues: ModalContextValue = {
  isOpen: false,
  modalChildren: null,
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = createContext<ModalContextValue>(defaultValues);

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState<ReactNode | null>(null);

  const openModal = (modalChildren: ReactNode) => {
    setIsOpen(true);
    setModalChildren(modalChildren);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalChildren(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, modalChildren }}
    >
      {children}
    </ModalContext.Provider>
  );
};
