import { Check, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-10 pb-16 md:pt-14 md:pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            <h1 className="text-[42px] md:text-[58px] font-bold leading-[1.08] tracking-tight text-foreground">
              Be ready before childbirth happens —
              <span className="block text-primary mt-1.5">
                not when it's too late.
              </span>
            </h1>

            <div className="space-y-2.5">
              <p className="text-[17px] md:text-[18px] text-[color:var(--color-body)] leading-relaxed max-w-xl">
                Prepare financially, avoid delays in care, and get support instantly when it matters most.
              </p>
              <p className="text-[17px] md:text-[18px] text-[color:var(--color-body)] max-w-lg">
                Create your Baby Budget and start saving toward it — at your pace.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/budget">
              <button className="bg-primary text-white px-7 py-3.5 rounded-full text-base font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:opacity-90 transition">
                Create Your Baby Budget
              </button>
              </Link>

              <button className="border border-border px-7 py-3.5 rounded-full text-base font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Talk to a Nurse
              </button>
            </div>

            {/* MICROCOPY */}
        <p className="text-base md:text-[17px] text-[color:var(--color-body)] leading-relaxed">
        Already have a budget?{" "}
        <span className="text-primary font-semibold underline underline-offset-2 cursor-pointer hover:opacity-80 transition">
            Start with your own.
        </span>
        </p>


            {/* BUDGET CARD */}
            <div className="bg-card border border-border/70 rounded-2xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.05)]">

  {/* TOP SECTION */}
  <div className="flex items-center gap-4">

    <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">
      🍼
    </div>

    <div className="flex items-center flex-1">

      {/* LEFT */}
      <div className="flex-1">
        <p className="text-sm text-muted">You may need</p>
        <p className="text-[26px] font-bold mt-0.5">₦150,000</p>
      </div>

      {/* DIVIDER */}
<div
  className="h-10 w-[1.5px] mx-5"
  style={{ backgroundColor: "rgba(31, 41, 55, 0.2)" }}
/>{/* RIGHT */}
      <div className="flex-1 text-right">
        <p className="font-semibold">Save ₦5,000 weekly</p>
        <p className="text-sm text-muted">for 6 months</p>
      </div>

    </div>
  </div>

  </div>
{/* TRUST SECTION */}
 <div className="flex md:flex-nowrap flex-wrap items-center justify-center md:justify-between gap-6 text-[15px] md:text-base text-[color:var(--color-body)] mt-5">

  <div className="flex items-center gap-2 whitespace-nowrap">
    <Check size={16} className="text-primary" />
    Start with any amount
  </div>

  <div className="flex items-center gap-2 whitespace-nowrap">
    <Check size={16} className="text-primary" />
    Withdraw anytime
  </div>

  <div className="flex items-center gap-2 whitespace-nowrap">
    <Check size={16} className="text-primary" />
    Works with or without insurance
  </div>

</div>

  {/* EMERGENCY */}
<div className="flex items-center gap-4 bg-red-50 border border-red-100 px-5 py-4 rounded-xl">

  {/* ICON */}
  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-red-100">

    {/* soft pulse */}
    <span className="absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-30 animate-pulse"></span>

    <Phone size={18} className="text-red-600 relative z-10" />
  </div>

  {/* TEXT + ACTIONS */}
  <div className="flex flex-col">

    <p className="text-[16px] md:text-[17px] text-[color:var(--color-body)] leading-relaxed">

      Maternal emergency?{" "}

      <span className="font-semibold">
        Call{" "}
        <a
          href="tel:08000000911"
          className="text-red-600 font-bold tracking-wide hover:underline"
        >
          0800-0000-911
        </a>{" "}
        (Free)
      </span>

    </p>

    {/* WHATSAPP FALLBACK */}
    <a
      href="https://wa.me/2348000000911"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[14px] text-green-600 font-medium mt-1 hover:underline"
    >
      Or chat via WhatsApp →
    </a>

  </div>

</div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center md:pr-8">

            <div className="relative w-full max-w-[520px] h-[420px] md:h-[740px]">

              <img
                src="/hero-mother.png"
                alt="Pregnant woman"
                className="w-full h-full object-cover object-[85%_center] rounded-[32px]"
              />

              {/* SOFT FADE */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-background/40 via-transparent to-transparent" />
            </div>

            {/* FLOATING CARD */}
            <div className="hidden md:block absolute top-[65%] -translate-y-1/2 right-[-20px] bg-white/95 backdrop-blur-sm shadow-[0_6px_20px_rgba(0,0,0,0.06)] rounded-2xl p-6 w-[280px] space-y-5">

              {[
                {
                  bg: "bg-green-100",
                  icon: "📋",
                  title: "Plan ahead",
                  text: "Know what to expect and how to prepare.",
                },
                {
                  bg: "bg-amber-100",
                  icon: "💰",
                  title: "Save at your pace",
                  text: "Small steps today, greater peace tomorrow.",
                },
                {
                  bg: "bg-pink-100",
                  icon: "🚑",
                  title: "Get help anytime",
                  text: "Talk to a nurse or access care when you need it.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">

                  <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0 text-xl opacity-90`}>
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-semibold text-base leading-tight">
                      {item.title}
                    </p>
                    <p className="text-[15px] text-muted leading-relaxed mt-1">
                      {item.text}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}