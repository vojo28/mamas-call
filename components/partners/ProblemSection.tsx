import {
  Clock3,
  Wallet,
  Siren,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="bg-[#f6f8f4] border-t border-[#e7ece5]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-24 space-y-14">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <h2 className="text-[34px] leading-[1.1] md:text-[42px] md:leading-[1.05] font-bold tracking-[-0.03em] text-[#0f1720]">
            Every delay can cost a life
          </h2>

          <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#5b6470] max-w-2xl mx-auto">
            Every year, thousands of women in Nigeria die from pregnancy and
            childbirth-related complications. Most of these deaths are not
            because care does not exist.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* CARD 1 */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 md:p-7 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                <Clock3 className="w-8 h-8 text-red-500" strokeWidth={2.2} />
              </div>

              <div className="space-y-2">
                <h3 className="text-[20px] leading-snug font-semibold text-[#111827]">
                  Help comes too late
                </h3>

                <p className="text-[15px] leading-7 text-[#6b7280]">
                  Decisions are delayed and care is accessed too late.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 md:p-7 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                <Wallet className="w-8 h-8 text-[#146c43]" strokeWidth={2.2} />
              </div>

              <div className="space-y-2">
                <h3 className="text-[20px] leading-snug font-semibold text-[#111827]">
                  Families are not financially prepared
                </h3>

                <p className="text-[15px] leading-7 text-[#6b7280]">
                  Money is not ready when emergencies happen.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 md:p-7 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                <Siren className="w-8 h-8 text-red-500" strokeWidth={2.2} />
              </div>

              <div className="space-y-2">
                <h3 className="text-[20px] leading-snug font-semibold text-[#111827]">
                  Emergencies lead to panic and delays
                </h3>

                <p className="text-[15px] leading-7 text-[#6b7280]">
                  Confusion and panic slow down the right action.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHT STRIP */}
        <div className="rounded-3xl border border-[#dfe8dc] bg-[#eef5e8] px-6 py-7 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* LEFT */}
          <div className="flex items-center gap-5 w-full">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0">
              <ShieldCheck
                className="w-8 h-8 text-[#146c43]"
                strokeWidth={2.2}
              />
            </div>

            <p className="text-[20px] md:text-[26px] leading-[1.35] font-semibold text-[#163321] max-w-2xl">
              The real risk is not the absence of care, but in the delay in
              accessing it.
            </p>
          </div>

          {/* ECG RHYTHM + HEART */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <svg
              width="180"
              height="42"
              viewBox="0 0 180 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              <path
                d="M0 21H22L30 21L38 8L46 34L56 21H72L84 21L92 14L100 28L108 21H126L138 21L146 10L154 32L164 21H180"
                stroke="#a6b8a3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <HeartPulse
              className="w-8 h-8 text-[#9ab39a]"
              strokeWidth={2}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
