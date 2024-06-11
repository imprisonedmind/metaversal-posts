import { FC, ReactNode } from "react";

interface StickyNavInsideWrapperProps {
  scrolled: boolean;
  children: ReactNode;
}

export const StickyNavInsideWrapper: FC<StickyNavInsideWrapperProps> = ({
  scrolled,
  children,
}) => {
  return (
    <div
      className={`
        flex items-center justify-between transition duration-150 ease-in-out
      `}
    >
      {children}
    </div>
  );
};
