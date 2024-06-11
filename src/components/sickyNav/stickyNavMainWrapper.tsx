import { FC, ReactNode } from "react";

interface StickyNavMainWrapperProps {
  scrolled: boolean;
  children: ReactNode;
}

export const StickyNavMainWrapper: FC<StickyNavMainWrapperProps> = ({
  scrolled,
  children,
}) => {
  return (
    <section
      className={`
        ${scrolled && "bg-neutral-50/50 backdrop-blur-sm"} sticky top-0 z-50 py-4
      `}
    >
      {children}
    </section>
  );
};
