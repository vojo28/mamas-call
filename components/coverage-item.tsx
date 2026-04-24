import { ReactNode } from "react";

type CoverageItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function CoverageItem({
  icon,
  title,
  description,
}: CoverageItemProps) {
  return (
    <div className="flex items-center gap-3">
      
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted">{description}</p>
      </div>
    </div>
  );
}