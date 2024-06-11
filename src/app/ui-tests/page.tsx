"use client";
import Spinner from "@/components/loading/spinner";
import { Button } from "@/components/buttons/button";

export default function Page() {
  const throwError = () => {
    throw new Error("Error");
  };

  return (
    <div className={`flex flex-col gap-4`}>
      <Spinner />
      <Button callBack={() => throwError()} title={"Force Error"} />
    </div>
  );
}
