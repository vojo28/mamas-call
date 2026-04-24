// Step item number section on Your baby budget
type StepItemProps = {
  number: string;
  title: string;
  description?: string;
};

export default function StepItem({
  number,
  title,
  description,
}: StepItemProps) {
  const colorStyles = [
    "bg-green-100 text-green-700",
    "bg-orange-100 text-orange-700",
    "bg-blue-100 text-blue-700",
  ];

  const index = Number(number) - 1;
  const color = colorStyles[index] || "bg-primary/10 text-primary";

  return (
    <div className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-soft transition hover:shadow-md hover:-translate-y-0.5">

      <div className="flex items-start gap-4">

        {/* NUMBER */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${color}`}
        >
          {number}
        </div>

        {/* CONTENT */}
        <div className="space-y-1 ">

          <h4 className="font-semibold text-base leading-snug">
            {title}
          </h4>

          {description && (
            <p className="text-sm text-muted leading-relaxed">
              {description}
            </p>
          )}

        </div>

      </div>

    </div>
  );
}