"use client";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function BackArrowButton() {
  const { back } = useRouter();

  return (
    <div
      onClick={() => back()}
      className={`
        group h-fit w-fit cursor-pointer rounded-full p-2 transition 
        duration-75 ease-in-out hover:bg-neutral-950
      `}
    >
      <FaArrowLeft
        className={`
          h-4 w-4 text-neutral-950 transition duration-75 ease-in-out
          group-hover:text-neutral-50
        `}
      />
    </div>
  );
}
