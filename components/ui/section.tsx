// components/ui/section.tsx

export default function Section({ children, className = "" }) {
  return (
    <section
      className={`pt-12 md:pt-16 pb-16 md:pb-20 ${className}`}
    >
      {children}
    </section>
  );
}