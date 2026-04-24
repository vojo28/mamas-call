type Props = {
  quote: string;
  name: string;
  location: string;
  image: string;
};

export default function TestimonialCard({
  quote,
  name,
  location,
  image,
}: Props) {
  return (
    <div className="group relative bg-white/80 backdrop-blur border border-border/60 rounded-2xl p-4 md:p-5 space-y-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-[2px]">

      {/* SUBTLE GLOW */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

      {/* QUOTE */}
      <p className="relative text-sm md:text-base text-gray-800 leading-relaxed">
        <span className="text-lg leading-none mr-1 text-gray-400">“</span>
        {quote}
        <span className="text-lg leading-none ml-1 text-gray-400">”</span>
      </p>

      {/* USER */}
      <div className="relative flex items-center gap-3">

        {/* AVATAR */}
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
          />

          {/* subtle status dot */}
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
        </div>

        {/* TEXT */}
        <div className="leading-tight">
          <p className="text-sm font-semibold text-gray-900">
            {name}
          </p>
          <p className="text-xs text-gray-500">
            {location}
          </p>
        </div>

      </div>

    </div>
  );
}