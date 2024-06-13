"use client";
import { Button } from "@/components/buttons/button";
import { FaTrash } from "react-icons/fa6";
import { useAdminContext } from "@/lib/adminContext";
import { useModalContext } from "@/lib/modalContext";
import { ConfirmModal } from "@/components/modals/confirmModal";

export default function DeleteButton() {
  const { isAdmin } = useAdminContext();
  const { openModal } = useModalContext();

  if (!isAdmin) return null;

  return (
    <Button
      icon={<FaTrash className={"h-3 w-3 text-neutral-50"} />}
      callBack={() => openModal(<ConfirmModal title={"Are you sure?"} />)}
      title={"Delete User"}
      style={"from-red-600 to-red-500"}
    />
  );
}
