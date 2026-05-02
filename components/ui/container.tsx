// components/ui/container.tsx

import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}