"use client";
import { Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "@/lib/modalContext";

export default function Modal() {
  const { isOpen, openModal, closeModal, modalChildren } = useModalContext();
  const [modal, setModal] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window != "undefined") {
      setModal(document.getElementById("modal"));
    }
  }, []);

  useEffect(() => {
    const modalChildren = document.getElementById("modalChildren");

    const handleClickOutside = (event: MouseEvent) => {
      if (modalChildren && !modalChildren.contains(event.target as Node)) {
        isOpen && closeModal();
      }
    };

    if (typeof window !== "undefined" && isOpen) {
      document.addEventListener("click", handleClickOutside, false);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [isOpen, closeModal]);

  return (
    <Fragment>
      {modal &&
        isOpen &&
        createPortal(<div id={"modalChildren"}>{modalChildren}</div>, modal)}
    </Fragment>
  );
}
