import { FC, Suspense } from "react";
import Image from "next/image";

interface UserHeroImageProps {
  id: string;
}

export const UserHeroImage: FC<UserHeroImageProps> = ({ id }) => {
  return (
    <section className={"relative h-60 overflow-clip"}>
      <div
        className={
          "absolute left-0 top-0 h-full w-full animate-pulse bg-neutral-300"
        }
      />
      <Image
        src={`https://picsum.photos/id/${id}/700/300`}
        fill={true}
        alt={"random image"}
        priority={true}
        className={"z-5 object-cover"}
      />
    </section>
  );
};
