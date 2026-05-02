import Image from "next/image";

export default function PartnersHero() {
  return (
    <section className="bg-[#f3f5f2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div className="max-w-[620px]">
            
            {/* Eyebrow */}
            <p className="text-[12px] md:text-[13px] tracking-wide font-semibold uppercase text-[#2d6b47] mb-5">
              For Partners, NGOs & Government
            </p>

            {/* Headline */}
            <h1 className="text-[42px] leading-[1.05] md:text-[58px] md:leading-[1.02] font-bold tracking-[-0.03em] text-[#0f1720] max-w-[620px]">
              Improving maternal outcomes starts with reducing delay.
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-[18px] leading-[1.75] text-[#4b5563] max-w-[560px]">
              Mama’s Call helps families prepare for childbirth, access care faster,
              and receive support when it matters most.
            </p>

            {/* Proof line */}
            <div className="mt-6 flex items-center gap-3 text-[15px] text-[#4b5563]">
              <span className="text-[#2d6b47] text-base">◌</span>
              <span>Nigeria’s first 24/7 maternal care support system</span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              
              <button className="h-14 px-8 rounded-xl bg-[#146c43] text-white text-[16px] font-semibold shadow-sm hover:opacity-95 transition">
                Partner with us
              </button>

              <button className="h-14 px-8 rounded-xl border border-[#d8ddd7] bg-white text-[#111827] text-[16px] font-semibold hover:bg-[#f8faf8] transition">
                Talk to our team
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[560px]">
              <Image
                src="/partners-hero.webp"
                alt="Happy expecting couple"
                fill
                priority
                className="object-contain object-center scale-[1.03]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}