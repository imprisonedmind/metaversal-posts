import { FC, ReactNode } from "react";

interface MainWrapperProps {
  children: ReactNode;
}

export const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return (
    <main
      className={
        "mx-auto flex max-w-[760px] flex-col gap-4 border-x border-neutral-100"
      }
    >
      {children}
    </main>
  );
};
