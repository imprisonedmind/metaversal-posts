"use client";
import { FaTrash } from "react-icons/fa6";

export default function TrashButton() {
  return (
    <div
      onClick={() => alert("Post deleted!")}
      className={`cursor-pointer rounded-md border border-neutral-200 bg-red-500 p-[5px]`}
    >
      <FaTrash className={"h-3 w-3 text-neutral-50"} />
    </div>
  );
}
