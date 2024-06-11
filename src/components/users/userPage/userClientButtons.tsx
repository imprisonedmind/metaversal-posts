"use client";
import { NotificationsButton } from "@/components/buttons/notificationsButton";
import { Button } from "@/components/buttons/button";
import FollowButton from "@/components/buttons/followButton";
import DeleteButton from "@/components/buttons/deleteButton";

export default function UserClientButtons() {
  return (
    <span className={"flex flex-row items-center gap-2 self-center"}>
      <NotificationsButton callBack={() => alert("Notifications on")} />
      <FollowButton />
      <DeleteButton />
    </span>
  );
}
