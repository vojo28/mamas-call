// components/ui/section.tsx

import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`pt-12 md:pt-16 pb-16 md:pb-20 ${className}`}
    >
      {children}
    </section>
  );
}