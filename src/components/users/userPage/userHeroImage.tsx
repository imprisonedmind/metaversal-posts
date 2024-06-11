import { FC } from "react";

interface UserHeroImageProps {
  prop: string;
}

export const UserHeroImage: FC<UserHeroImageProps> = ({ prop }) => {
  return <section className={"h-60 bg-green-300"}></section>;
};
