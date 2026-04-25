"use client";

import {
  Clock,
  Wallet,
  AlertTriangle,
  PhoneCall,
  HeartPulse,
  MapPin,
  Users,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import Image from "next/image";

export default function ImpactPage() {
  return (
    <main className="bg-background">

      {/* ================= HERO ================= */}
     <section className="pt-12 md:pt-16 pb-16 md:pb-20 bg-background">
<div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* LEFT */}
        <div className="space-y-6">

          {/* LABEL */}
          <p className="text-xs md:text-sm font-medium text-primary uppercase tracking-wide">
            For partners, NGOs & Government
          </p>

          {/* HEADLINE */}
          <h1 className="text-[28px] sm:text-[34px] md:text-[48px] font-semibold leading-[1.15] tracking-tight text-foreground">
            Improving maternal outcomes starts with reducing delay.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-muted max-w-lg leading-relaxed">
            Mama’s Call helps families prepare for childbirth, access care faster,
            and receive support when it matters most.
          </p>

        {/* TRUST LINE */}
          <div className="flex items-center gap-2 text-[13px] sm:text-sm text-muted pt-1">
            <span className="text-base">🇳🇬</span>
            Nigeria’s first 24/7 maternal care support system
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">

            <button className="bg-primary text-white px-6 py-3.5 rounded-full font-medium shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]">
              Partner with us
            </button>

            <button className="border border-border bg-white px-6 py-3.5 rounded-full font-medium transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]">
              Talk to our team
            </button>

          </div>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">

          {/* SOFT BACKGROUND GLOW */}
          <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] bg-green-100 rounded-full blur-3xl opacity-40" />

          {/* IMAGE */}
          <div className="relative w-full max-w-sm md:max-w-md h-[280px] md:h-[360px]">
            <Image
              src="/impact-hero.webp"
              alt="Impact"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>


      {/* ================= PROBLEM ================= */}
      <section className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 space-y-10">

          <h2 className="text-center text-2xl md:text-3xl font-semibold">
            Every delay can cost a life
          </h2>

          <p className="text-center text-muted max-w-2xl mx-auto">
            Most maternal deaths are not because care does not exist —
            but because it is accessed too late.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white border rounded-2xl p-6 space-y-3">
              <Clock className="text-red-500" />
              <p className="font-semibold">Help comes too late</p>
              <p className="text-sm text-muted">Decisions are delayed</p>
            </div>

            <div className="bg-white border rounded-2xl p-6 space-y-3">
              <Wallet className="text-primary" />
              <p className="font-semibold">Families not prepared</p>
              <p className="text-sm text-muted">Money not ready</p>
            </div>

            <div className="bg-white border rounded-2xl p-6 space-y-3">
              <AlertTriangle className="text-red-500" />
              <p className="font-semibold">Panic & delays</p>
              <p className="text-sm text-muted">Confusion slows action</p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= QUOTE ================= */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">

          <div className="bg-green-50 rounded-2xl p-6 text-center">
            <p className="text-xl font-semibold">
              “The real risk is not the absence of care,
              but the delay in accessing it.”
            </p>
          </div>

        </div>
      </section>


      {/* ================= GAP + RESPONSE ================= */}
      <section className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">

          {/* GAP */}
          <div className="space-y-6">

            <h3 className="text-2xl font-semibold">
              The gap we are addressing
            </h3>

            <p className="text-muted">
              There is a missing layer between the patient, the hospital, and the money.
            </p>

            <ul className="space-y-2 text-muted">
              <li>• Families prepare late</li>
              <li>• Payment delays care</li>
              <li>• Emergencies are uncoordinated</li>
            </ul>

          </div>


          {/* RESPONSE */}
          <div className="space-y-6">

            <h3 className="text-2xl font-semibold">
              Our response
            </h3>

            <p className="text-muted">
              We launched Mama’s Call — a 24/7 maternal care support system
              designed to provide immediate guidance when it matters most.
            </p>

            <img
              src="/nurse-support.png"
              className="w-full max-w-sm"
            />

          </div>

        </div>
      </section>


      {/* ================= SUPPORT ================= */}
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6">

          {[
            {
              icon: <PhoneCall />,
              title: "Real-time guidance",
            },
            {
              icon: <HeartPulse />,
              title: "Support when unclear",
            },
            {
              icon: <MapPin />,
              title: "Direction to care",
            },
            {
              icon: <Users />,
              title: "Trained professionals",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 text-center space-y-2">
              <div className="flex justify-center text-primary">{item.icon}</div>
              <p className="font-medium">{item.title}</p>
            </div>
          ))}

        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-10">

          <h2 className="text-center text-2xl md:text-3xl font-semibold">
            How Mama’s Call works
          </h2>

          <div className="grid md:grid-cols-6 gap-6 text-center text-sm">

            {[
              "Financial preparation",
              "24/7 support",
              "Emergency coordination",
              "Care Now Pay Later",
              "Insurance support",
              "Postpartum support",
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center font-semibold">
                  {i + 1}
                </div>
                <p>{item}</p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= PARTNERS ================= */}
      <section className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 space-y-8">

          <h2 className="text-2xl font-semibold">
            Who we work with
          </h2>

          <div className="grid md:grid-cols-5 gap-4 text-sm text-muted">
            <p>NGOs</p>
            <p>Government</p>
            <p>Hospitals</p>
            <p>HMOs</p>
            <p>Community Networks</p>
          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">

          <h2 className="text-2xl md:text-3xl font-semibold">
            To ensure no woman is left without care because of delay,
            lack of preparation, or financial barriers.
          </h2>

          <button className="bg-white text-primary px-6 py-3 rounded-full font-medium">
            Partner with us
          </button>

        </div>
      </section>

    </main>
  );
}