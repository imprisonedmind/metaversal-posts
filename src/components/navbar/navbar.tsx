"use client";
import { NavbarITem } from "@/components/navbar/navbarITem";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { users, id } = useParams();
  const pathname = usePathname();

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

  if (id) return null;

  return (
    <div
      className={`
        ${scrolled && "top-0 drop-shadow-lg md:top-2 md:rounded-md"}
        sticky top-0 z-50 border-b border-neutral-100 bg-neutral-50 p-4 transition 
        duration-150 ease-in-out md:mt-4
      `}
    >
      <ul className={"flex flex-row "}>
        <NavbarITem title={"Posts"} active={pathname == "/"} />
        <NavbarITem title={"Users"} active={users != null} />
      </ul>
    </div>
  );
}
