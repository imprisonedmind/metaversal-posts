"use client";
import { FC } from "react";
import { Button } from "@/components/buttons/button";
import { useModalContext } from "@/lib/modalContext";

interface ConfirmModalProps {
  title: string;
}

export const ConfirmModal: FC<ConfirmModalProps> = ({ title }) => {
  const { closeModal } = useModalContext();

  return (
    <div
      className={`
        absolute right-1/2 top-0 z-[500] flex h-[100vh] w-[100svw] translate-x-[50%] 
        items-center justify-center bg-neutral-900/10
    `}
    >
      <div
        className={`
          divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-neutral-50 
          drop-shadow-2xl
        `}
      >
        <p className={"mx-auto w-fit p-4"}>{title}</p>
        <div className={"flex flex-row gap-2 p-4"}>
          <Button
            callBack={() => {
              alert("Deleted!");
              closeModal();
            }}
            title={"Confirm"}
            style={"from-red-600 to-red-500 !w-24 flex justify-center"}
          />
          <Button
            callBack={() => closeModal()}
            title={"Cancel"}
            style={"from-neutral-950 to-neutral-800 !w-24 flex justify-center"}
          />
        </div>
      </div>
    </div>
  );
};
