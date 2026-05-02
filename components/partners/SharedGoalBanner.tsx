import { HeartPulse } from "lucide-react";

export default function SharedGoalBanner() {
  return (
    <section className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        <div className="relative overflow-hidden rounded-[30px] border border-[#0e5c38] bg-gradient-to-r from-[#0b5b34] via-[#0f7a46] to-[#0b5b34] px-6 md:px-12 py-10 md:py-14 shadow-[0_18px_45px_rgba(20,108,67,0.22)]">

          {/* subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.10),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.07),transparent_30%)]" />

          {/* decorative icon right */}
          <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 opacity-10">
            <HeartPulse className="w-28 h-28 md:w-36 md:h-36 text-white" />
          </div>

          {/* content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">

            <p className="text-[16px] md:text-[18px] font-semibold tracking-wide text-[#d9f5e5] mb-4">
              Our shared goal
            </p>

            <h2 className="text-[28px] md:text-[44px] leading-[1.18] font-semibold tracking-[-0.03em] text-white">
              To ensure no woman is left without care because of delay,
              lack of preparation, or financial barriers.
            </h2>

          </div>
        </div>

      </div>
    </section>
  );
}