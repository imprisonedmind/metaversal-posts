import { FC } from "react";
import { GiphContainer } from "@/components/giphContainer";

interface ErrorContainerProps {
  src: string;
  title: string;
}

export const ErrorContainer: FC<ErrorContainerProps> = ({ src, title }) => {
  return (
    <div
      className={`flex h-[500px] flex-col items-center justify-center gap-4`}
    >
      <GiphContainer src={src} />
      <p>{title}</p>
    </div>
  );
};
