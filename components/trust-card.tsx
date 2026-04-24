import { ReactNode } from "react";

type TrustCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function TrustCard({
  icon,
  title,
  description,
}: TrustCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-7 shadow-soft space-y-4">
      
      {/* ICON */}
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>

      {/* TEXT */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}