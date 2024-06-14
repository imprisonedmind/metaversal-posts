import { FC } from "react";
import Image from "next/image";
import { dynamicBlurDataUrl } from "@/lib/utilities";

interface UserHeroImageProps {
  id: number;
}

export const UserHeroImage: FC<UserHeroImageProps> = async ({ id }) => {
  const url = `https://picsum.photos/id/${id}/700/300`;
  const blurDataUrl = await dynamicBlurDataUrl(url);

  return (
    <section className={"relative h-60 overflow-clip"}>
      <Image
        fill={true}
        priority={true}
        src={url}
        placeholder={"blur"}
        blurDataURL={blurDataUrl}
        alt={"random image"}
        className={"z-5 object-cover"}
      />
    </section>
  );
};
