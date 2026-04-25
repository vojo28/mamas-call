"use client";

import { Check, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
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
];

export default function Hero() {
  return (
    <section className="pt-10 pb-16 md:pt-14 md:pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="flex flex-col md:grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            {/* HEADLINE */}
            <h1 className="text-[30px] sm:text-[34px] md:text-[54px] font-bold leading-[1.08] tracking-tight text-foreground">
              Be ready before childbirth happens
              <span className="block text-primary mt-1.5">
                not when it's too late.
              </span>
            </h1>

            {/* SUBTEXT */}
            <div className="space-y-2.5">
              <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[color:var(--color-body)] leading-relaxed max-w-xl">
                Prepare financially, avoid delays in care, and get support instantly when it matters most.
              </p>
              <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[color:var(--color-body)] max-w-lg">
                Create your Baby Budget and start saving toward it, at your pace.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/budget" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-primary text-white px-6 py-3.5 rounded-full text-base font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:opacity-90 transition-all duration-300 hover:scale-[1.02]">
                  Create Your Baby Budget
                </button>
              </Link>

              <button className="w-full sm:w-auto border border-border text-foreground bg-white px-6 py-3.5 rounded-full text-base font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Talk to a Nurse
              </button>
            </div>

            {/* MICROCOPY */}
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[color:var(--color-body)]">
              Already have a budget?{" "}
              <span className="text-primary font-semibold underline cursor-pointer hover:opacity-80 transition">
                Start with your own.
              </span>
            </p>

            {/* MOBILE IMAGE */}
            <div className="w-full flex justify-center mt-4 md:hidden">
              <div className="relative w-full max-w-[520px] h-[220px] sm:h-[300px]">
                <Image
                  src="/hero-mother.webp"
                  alt="Pregnant woman"
                  fill
                  priority
                  className="object-cover object-[85%_center] rounded-[28px]"
                />
              </div>
            </div>

            {/* BUDGET CARD */}
            <div className="bg-card border border-border/70 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  🍼
                </div>

                <div className="flex flex-1 items-center">
                  <div className="flex-1">
                    <p className="text-xs text-muted">You may need</p>
                    <p className="text-[22px] font-bold">₦150,000</p>
                  </div>

                  <div className="h-8 w-[1px] mx-3 bg-gray-300/50" />

                  <div className="flex-1 text-right">
                    <p className="font-semibold">Save ₦5,000 weekly</p>
                    <p className="text-xs text-muted">for 6 months</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TRUST */}
            <div className="flex flex-col sm:flex-row gap-3 text-sm text-[color:var(--color-body)]">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-primary" />
                Start with any amount
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-primary" />
                Withdraw anytime
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-primary" />
                Works with or without insurance
              </div>
            </div>

            {/* EMERGENCY */}
            <div
              role="button"
              tabIndex={0}
              aria-label="Call maternal emergency line 0800-0000-911"
              onClick={() => window.open("tel:08000000911")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.open("tel:08000000911");
                }
              }}
              className="group flex items-start sm:items-center gap-4 bg-red-50 border border-red-100 px-4 sm:px-5 py-3 sm:py-4 rounded-xl transition-all duration-200 hover:bg-red-100 hover:shadow-sm active:scale-[0.98] cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400/30 animate-ping"></span>
                <Phone size={18} className="text-red-600 relative z-10" />
              </div>

              <div className="flex flex-col space-y-1">
                <p className="text-sm text-[color:var(--color-body)]">
                  Maternal emergency?
                </p>
                <p className="text-base font-semibold text-red-600 group-hover:underline">
                  Call 0800-0000-911 (Free)
                </p>
                <p className="text-xs text-muted">
                  24/7 maternal care helpline — speak to a real nurse anytime
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="hidden md:flex relative justify-center md:pr-8">
            <div className="relative w-full max-w-[520px] h-[740px]">
              <Image
                src="/hero-mother.webp"
                alt="Pregnant woman"
                fill
                priority
                className="object-cover object-[85%_center] rounded-[32px]"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="hidden md:block absolute top-[65%] -translate-y-1/2 right-[-20px] bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl p-6 w-[280px] space-y-5">
              {features.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center text-xl`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-base">{item.title}</p>
                    <p className="text-sm text-muted mt-1">{item.text}</p>
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