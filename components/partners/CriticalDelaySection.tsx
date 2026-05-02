import {
  Brain,
  Clock3,
  Building2,
  Play,
  Lock,
} from "lucide-react";

export default function CriticalDelaysSection() {
  return (
    <section className="bg-white border-t border-[#eef1ec]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-20 md:py-24">

        {/* TWO COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-18 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div>
            <h2 className="text-[34px] md:text-[42px] leading-[1.08] font-bold tracking-[-0.03em] text-[#111827] mb-10">
              Addressing the three critical delays
            </h2>

            <div className="grid md:grid-cols-3 gap-5">

              {/* CARD 1 */}
              <div className="rounded-[24px] border border-[#e6ebe2] bg-white p-6 text-center shadow-sm">
                <div className="w-20 h-20 rounded-full bg-[#f7faf5] border border-[#e5ebe2] flex items-center justify-center mx-auto mb-5">
                  <Brain className="w-10 h-10 text-[#146c43]" />
                </div>

                <h3 className="text-[20px] leading-[1.35] font-semibold text-[#111827] mb-4">
                  Reducing delay in decision-making
                </h3>

                <p className="text-[15px] leading-7 text-[#374151]">
                  By helping families prepare financially in advance.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="rounded-[24px] border border-[#e6ebe2] bg-white p-6 text-center shadow-sm">
                <div className="w-20 h-20 rounded-full bg-[#f7faf5] border border-[#e5ebe2] flex items-center justify-center mx-auto mb-5">
                  <Clock3 className="w-10 h-10 text-[#146c43]" />
                </div>

                <h3 className="text-[20px] leading-[1.35] font-semibold text-[#111827] mb-4">
                  Reducing delay in accessing care
                </h3>

                <p className="text-[15px] leading-7 text-[#374151]">
                  By providing guidance and support during emergencies.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="rounded-[24px] border border-[#e6ebe2] bg-white p-6 text-center shadow-sm">
                <div className="w-20 h-20 rounded-full bg-[#f7faf5] border border-[#e5ebe2] flex items-center justify-center mx-auto mb-5">
                  <Building2 className="w-10 h-10 text-[#146c43]" />
                </div>

                <h3 className="text-[20px] leading-[1.35] font-semibold text-[#111827] mb-4">
                  Reducing delay in receiving care
                </h3>

                <p className="text-[15px] leading-7 text-[#374151]">
                  By improving financial readiness and coordination.
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="lg:border-l lg:border-[#e8ede5] lg:pl-14">

            <h2 className="text-[34px] md:text-[42px] leading-[1.08] font-bold tracking-[-0.03em] text-[#111827] mb-5">
              Real moments. Real support.
            </h2>

            <p className="text-[17px] leading-8 text-[#374151] mb-8 max-w-[620px]">
              Here is an example of what support can look like in a real
              situation.
            </p>

            {/* AUDIO PLAYER MOCKUP */}
            <div className="rounded-[24px] border border-[#e6ebe2] bg-white p-5 shadow-sm mb-8">
              <div className="flex items-center gap-5">

                {/* play */}
                <button className="w-16 h-16 rounded-full bg-[#146c43] flex items-center justify-center shrink-0 shadow-sm">
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </button>

                {/* waveform */}
                <div className="flex-1 flex items-center gap-1">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-[3px] rounded-full bg-[#d1d5db] ${
                        i % 5 === 0
                          ? "h-10"
                          : i % 4 === 0
                          ? "h-8"
                          : i % 3 === 0
                          ? "h-6"
                          : "h-4"
                      }`}
                    />
                  ))}
                </div>

                {/* time */}
                <p className="text-[15px] font-medium text-[#6b7280] shrink-0">
                  00:00 / 01:02
                </p>
              </div>
            </div>

            {/* STORY NOTE */}
            <div className="flex items-start gap-4 max-w-[640px]">
              <div className="w-10 h-10 rounded-full bg-[#f7faf5] border border-[#e5ebe2] flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-[#146c43]" />
              </div>

              <p className="text-[16px] md:text-[17px] leading-8 text-[#374151]">
                A mother reached out during a moment of uncertainty. Our team
                guided her step by step, helping her take the right action at
                the right time.{" "}
                <span className="text-[#6b7280]">
                  (Identity protected for privacy)
                </span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}