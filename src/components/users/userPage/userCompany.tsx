import { FC } from "react";

interface UseCompanyProps {
  name: string;
  bs: string;
  catchPhrase: string;
}

export const UserCompany: FC<UseCompanyProps> = ({ name, bs, catchPhrase }) => {
  return (
    <div
      className={
        "mt-4 border-neutral-100 md:mt-0 md:rounded-md md:border md:p-4"
      }
    >
      <p>{name}</p>
      <p className={"text-xs capitalize text-neutral-500"}>{bs}</p>
      <p className={"text-xs text-neutral-500"}>{catchPhrase}</p>
    </div>
  );
};
