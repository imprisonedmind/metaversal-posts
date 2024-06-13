"use client";
import { Button } from "@/components/buttons/button";
import { useAdminContext } from "@/lib/adminContext";
import { useModalContext } from "@/lib/modalContext";
import { useEffect } from "react";

export default function ProfileMenu() {
  const { isAdmin, makeAdmin, makeUser } = useAdminContext();
  const { closeModal } = useModalContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 5) closeModal();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
          absolute right-4 top-14 z-[500] flex h-fit w-fit flex-col rounded-md 
          border border-neutral-200 bg-neutral-50 drop-shadow-xl
        `}
    >
      <div className={"p-x flex flex-row items-center px-4 py-2"}>
        <p className={"text-md"}>Settings</p>
      </div>
      <div className={"w-full border-t border-neutral-100"} />
      <span className={"mx-auto w-fit p-4"}>
        <Button
          callBack={() => (isAdmin ? makeUser() : makeAdmin())}
          title={isAdmin ? "User Mode" : "Admin Mode"}
          style={
            isAdmin ? "from-blue-500 to-blue-400" : "from-red-600 to-red-500"
          }
        />
      </span>
    </div>
  );
}
