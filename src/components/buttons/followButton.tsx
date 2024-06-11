"use client";
import { Button } from "@/components/buttons/button";

export default function FollowButton() {
  return <Button callBack={() => alert("Followed!")} title={"Follow"} />;
}
