"use client";
import { FaTrash } from "react-icons/fa6";
import { useAdminContext } from "@/lib/adminContext";
import { useModalContext } from "@/lib/modalContext";
import { ConfirmModal } from "@/components/modals/confirmModal";

export default function TrashButton() {
  const { isAdmin } = useAdminContext();
  const { openModal } = useModalContext();

  if (!isAdmin) return null;

  return (
    <div
      onClick={() => openModal(<ConfirmModal title={"Are you sure?"} />)}
      className={`cursor-pointer rounded-md border border-neutral-200 bg-red-500 p-[5px]`}
    >
      <FaTrash className={"h-3 w-3 text-neutral-50"} />
    </div>
  );
}
