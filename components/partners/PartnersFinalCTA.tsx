import { ArrowRight, HeartHandshake } from "lucide-react";

export default function PartnersFinalCTA() {
  return (
    <section className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        <div className="relative overflow-hidden rounded-[32px] border border-[#e7ece5] bg-gradient-to-br from-[#ffffff] via-[#f8fbf7] to-[#eef7f0] p-8 md:p-12 shadow-[0_18px_50px_rgba(15,23,32,0.06)]">

          {/* decorative glow */}
          <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-[#146c43]/8 blur-3xl" />
          <div className="absolute -bottom-12 -left-10 w-48 h-48 rounded-full bg-[#146c43]/6 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-[1.2fr_.8fr] gap-10 items-center">

            {/* LEFT */}
            <div>

              <div className="w-16 h-16 rounded-full bg-[#146c43] flex items-center justify-center shadow-[0_12px_30px_rgba(20,108,67,0.22)] mb-6">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>

              <p className="text-[15px] md:text-[16px] font-semibold tracking-wide text-[#146c43] uppercase mb-4">
                Partner with Mama’s Call
              </p>

              <h2 className="text-[30px] md:text-[46px] leading-[1.08] font-semibold tracking-[-0.03em] text-[#111827] mb-5 max-w-[760px]">
                Help more mothers access care faster and prepare with confidence.
              </h2>

              <p className="text-[17px] md:text-[18px] leading-8 text-[#374151] max-w-[720px]">
                Whether you are a government agency, NGO, hospital, insurer,
                foundation, CSR team, or philanthropist — we can build programs
                that create measurable maternal health impact.
              </p>

            </div>

            {/* RIGHT */}
            <div className="lg:pl-8">

              <div className="rounded-[28px] border border-[#e7ece5] bg-white p-7 shadow-sm">

                <div className="space-y-4 mb-7">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#146c43]" />
                    <p className="text-[16px] leading-7 text-[#374151]">
                      Sponsor direct support for pregnant women
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#146c43]" />
                    <p className="text-[16px] leading-7 text-[#374151]">
                      Strengthen maternal care systems at scale
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#146c43]" />
                    <p className="text-[16px] leading-7 text-[#374151]">
                      Track outcomes with transparent reporting
                    </p>
                  </div>
                </div>

               <div className="flex flex-col sm:flex-row gap-4">

  {/* View Partnerships Button 
  <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#146c43] px-6 py-4 text-white text-[16px] font-semibold shadow-[0_12px_24px_rgba(20,108,67,0.22)] hover:opacity-95 transition">
    Explore partnerships
    <ArrowRight className="w-5 h-5" />
  </button>
*/}
      <div className="w-full pt-2 flex flex-col items-center">

      <button className="inline-flex items-center justify-center rounded-2xl bg-[#146c43] px-8 py-4 text-white text-[16px] font-semibold min-w-[260px] shadow-[0_12px_24px_rgba(20,108,67,0.22)] hover:opacity-95 transition">
        Speak with our team
      </button>

      <p className="text-center text-[14px] text-[#6b7280] mt-3">
        We usually respond within 1 business day.
      </p>

    </div>

    </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}