"use client";

import Image from "next/image";

export default function OptionCard({
  title,
  description,
  buttonText,
  image,
  variant = "green",
  onClick,
}) {
  const isGreen = variant === "green";

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white border border-border rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1"
    >
      {/* IMAGE */}
      <div className="relative w-32 h-32 mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* TEXT */}
      <div className="space-y-2 max-w-xs">
        <h3 className="text-xl md:text-2xl font-semibold leading-tight">
          {title}
        </h3>

        <p className="text-sm md:text-base text-muted leading-relaxed">
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-6 w-full flex justify-center">
        <button
          className={`px-6 py-3.5 rounded-full text-sm md:text-base font-semibold transition ${
            isGreen
              ? "bg-green-700 text-white hover:bg-green-600"
              : "bg-orange-500 text-white hover:bg-orange-400"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}