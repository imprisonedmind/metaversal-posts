"use client";
import { Button } from "@/components/buttons/button";
import { FaTrash } from "react-icons/fa6";

export default function DeleteButton() {
  return (
    <Button
      icon={<FaTrash className={"h-3 w-3 text-neutral-50"} />}
      callBack={() => alert("Deleted!")}
      title={"Delete User"}
      style={"bg-red-500"}
    />
  );
}
