"use client";
import { NavbarITem } from "@/components/navbar/navbarITem";
import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
  const { users, id } = useParams();
  const pathname = usePathname();

  if (id) return null;

  return (
    <div className={`mt-4 rounded-xl border border-neutral-100 p-4 shadow-sm`}>
      <ul className={"flex flex-row "}>
        <NavbarITem title={"Posts"} active={pathname == "/"} />
        <NavbarITem title={"Users"} active={users != null} />
      </ul>
    </div>
  );
}
