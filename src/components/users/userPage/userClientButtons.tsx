"use client";
import { NotificationsButton } from "@/components/buttons/notificationsButton";
import { Button } from "@/components/buttons/button";

export default function UserClientButtons() {
  return (
    <span className={"flex flex-row items-center gap-2 self-center"}>
      <NotificationsButton callBack={() => alert("Notifications on")} />
      <Button callBack={() => alert("Followed!")} title={"Follow"} />
    </span>
  );
}
