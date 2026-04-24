type OptionCardProps = {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  variant?: "green" | "orange";
  onClick?: () => void;
  badge?: string;
};

export default function OptionCard({
  title,
  description,
  buttonText,
  image,
  variant = "green",
  onClick,
  badge,
}: OptionCardProps) {
  const isGreen = variant === "green";

  return (
    <div
      onClick={onClick}
      className={`group relative flex items-center gap-8 p-6 md:p-8 rounded-2xl border border-border 
      transition-all duration-300 cursor-pointer
      hover:shadow-lg hover:-translate-y-1
      min-h-[200px] md:min-h-[240px]
      ${
        isGreen
          ? "bg-gradient-to-br from-green-50 to-white"
          : "bg-gradient-to-br from-orange-50 to-white"
      }`}
    >

      {/* BADGE */}
      {badge && (
        <span className="absolute top-4 right-4 text-[11px] bg-white/90 backdrop-blur px-3 py-1 rounded-full border border-border shadow-sm">
          {badge}
        </span>
      )}

      {/* IMAGE */}
      <div className="flex-shrink-0 w-[160px] md:w-[220px] lg:w-[240px] flex items-center justify-center">

        <img
          src={image}
          alt={title}
          className="max-h-[140px] md:max-h-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
        />

      </div>

      {/* TEXT */}
      <div className="flex flex-col justify-center h-full space-y-3 max-w-md">

        <h3 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight min-h-[48px] md:min-h-[60px]">
          {title}
        </h3>

        <p className="text-sm md:text-base text-muted leading-relaxed">
          {description}
        </p>

        {/* BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className={`mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-soft w-fit
          ${
            isGreen
              ? "bg-primary text-white hover:opacity-90"
              : "bg-orange-600 text-white hover:opacity-90"
          }`}
        >
          {buttonText}

          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>

      </div>

    </div>
  );
}