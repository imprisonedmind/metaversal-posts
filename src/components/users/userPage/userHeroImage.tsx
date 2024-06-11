import { FC } from "react";
import Image from "next/image";

interface UserHeroImageProps {
  id: string;
}

export const UserHeroImage: FC<UserHeroImageProps> = ({ id }) => {
  return (
    <section className={"relative h-60 overflow-clip bg-neutral-100"}>
      <Image
        src={`https://picsum.photos/id/${id}/700/300`}
        fill={true}
        alt={"random image"}
        className={"object-cover"}
      />
    </section>
  );
};
