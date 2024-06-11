import { FC } from "react";
import Image from "next/image";

interface GiphContainerProps {
  src: string;
}

export const GiphContainer: FC<GiphContainerProps> = ({ src }) => {
  return <Image src={src} width={300} height={300} alt={"Not Found"} />;
};
