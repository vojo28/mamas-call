import { ReactNode } from "react";

type FeatureItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4">
      
      {/* ICON */}
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
        {icon}
      </div>

      {/* TEXT */}
      <div className="space-y-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </div>
  );
}