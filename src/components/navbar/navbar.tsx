"use client";
import { NavbarITem } from "@/components/navbar/navbarITem";
import { useParams, usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { useModalContext } from "@/lib/modalContext";
import { AdminProfileButton } from "@/components/buttons/adminProfileButton";
import ProfileMenu from "@/components/modals/profileMenu";

export default function Navbar() {
  const { id } = useParams();
  const pathname = usePathname();

  const { isOpen, openModal, closeModal, setModal } = useModalContext();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const admin = useRef(null);

  const handleModal = () => {
    if (isOpen) {
      closeModal();
    } else {
      setModal(admin.current);
      openModal(<ProfileMenu />);
    }
  };

  if (id) return null;

  return (
    <Fragment>
      <div
        className={`
        ${scrolled && "top-4 mx-4 drop-shadow-lg md:top-2 md:rounded-md"}
        sticky top-0 z-50 flex transform-gpu items-center justify-between border-b 
        border-neutral-100 bg-neutral-50 p-4 transition duration-150 ease-in-out
      `}
      >
        <ul className={"flex flex-row "}>
          <NavbarITem title={"Posts"} active={pathname == "/"} />
          <NavbarITem title={"Users"} active={pathname.includes("users")} />
        </ul>
        <span className={"relative"} ref={admin}>
          <AdminProfileButton callBack={() => handleModal()} />
        </span>
      </div>
    </Fragment>
  );
}
