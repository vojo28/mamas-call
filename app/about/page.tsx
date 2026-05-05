"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  HeartPulse,
  CheckCircle,
  XCircle,
  Target,
  PiggyBank,
  PhoneCall,
  ShieldCheck,
  Users,
  Eye,
  MapPin,
  MessageCircleHeart,
  Handshake,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      

      <main className="bg-white">

        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-7">

  <p className="text-[#146c43] font-semibold text-sm tracking-wide">
    Mama’s Call
  </p>

  <h1 className="text-[36px] md:text-[56px] font-bold leading-[1.05] text-[#0f1720]">
    ABOUT MAMA’S CALL
  </h1>

  <p className="text-[18px] md:text-[20px] text-[#146c43] font-medium leading-relaxed max-w-[540px]">
    Making pregnancy safer through preparation, guidance, and timely support
  </p>



           {/* WHY CARD */}
<div className="rounded-2xl border border-[#e5e7eb] p-7 md:p-8 bg-[#fafafa] space-y-7">

  {/* HEADER */}
  <div className="flex items-center gap-4">

    <div className="w-14 h-14 rounded-full bg-[#e7f4ec] flex items-center justify-center shrink-0">
      <HeartPulse className="text-[#146c43] w-7 h-7" />
    </div>

    <h3 className="font-semibold text-[22px] leading-snug text-[#111827]">
      Why Mama’s Call exists
    </h3>

  </div>

  {/* TEXT */}
  <p className="text-[16px] text-[#374151] leading-7">
    Every year, many women face serious risks during pregnancy and childbirth.
  </p>

  <p className="text-[16px] text-[#374151] leading-7">
    Not always because care does not exist, but because:
  </p>

  {/* LIST */}
  <div className="space-y-4">
    {[
      "Families are not financially prepared",
      "Emergencies lead to panic",
      "Decisions are delayed",
      "Help comes too late",
    ].map((item, i) => (
      <div key={i} className="flex items-start gap-3">

        <XCircle className="text-red-500 w-6 h-6 mt-[2px] shrink-0" />

        <span className="text-[16px] text-[#374151] leading-7">
          {item}
        </span>

      </div>
    ))}
  </div>

  {/* FINAL TEXT */}
  <p className="text-[16px] text-[#374151] leading-7">
    We started Mama’s Call to address this gap — helping families prepare early,
    act quickly, and access the right support when it matters most.
  </p>

</div>
          </div>

          {/* RIGHT IMAGE */}
    <div className="relative w-full h-[500px] md:h-[620px] lg:h-[680px] overflow-hidden rounded-[28px]">

  <Image
    src="/about-hero.webp"
    alt="Maternal support"
    fill
    priority
    className="object-cover object-[70%_center] scale-[1.02]"
  />

  {/* VERY LIGHT EDGE BLEND */}
  <div className="pointer-events-none absolute inset-0 
    bg-gradient-to-r 
    from-white/40 via-transparent to-white/40"
  />

</div>

        </section>

        {/* ================= WHAT WE DO ================= */}
<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-12">

  <div className="rounded-2xl border border-[#e5ebe2] bg-white p-7 md:p-8 space-y-7">

    {/* HEADER */}
    <div className="flex items-center gap-4">

      <div className="w-14 h-14 rounded-full bg-[#e7f4ec] flex items-center justify-center shrink-0">
        <HeartPulse className="text-[#146c43] w-7 h-7" />
      </div>

      <h3 className="text-[22px] font-semibold text-[#111827]">
        What we do
      </h3>

    </div>

    {/* TEXT */}
    <p className="text-[16px] text-[#374151] leading-7 max-w-[640px]">
      Mama’s Call is a maternal support platform that helps women and families:
    </p>

    {/* LIST */}
    <div className="space-y-4">
      {[
        "Save gradually for childbirth (Mama’s Circle)",
        "Get trusted guidance from trained professionals",
        "Access support during urgent situations",
        "Cover financial gaps when needed",
        "Continue receiving support after delivery",
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-3">

          <CheckCircle className="text-[#146c43] w-6 h-6 mt-[2px] shrink-0" />

          <span className="text-[16px] text-[#374151] leading-7">
            {item}
          </span>

        </div>
      ))}
    </div>

  </div>
</section>


{/* ================= APPROACH ================= */}
<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-16 grid md:grid-cols-2 gap-8 items-center">

  {/* LEFT */}
  <div className="rounded-2xl border border-[#e5e7eb] p-7 bg-white space-y-6">

    <div className="flex items-center gap-4">

      <Target className="text-[#146c43] w-7 h-7 shrink-0" />

      <h3 className="font-semibold text-[22px] text-[#111827]">
        How we approach the problem
      </h3>

    </div>

    <p className="text-[16px] text-[#374151] leading-7">
      We believe maternal health is not only a medical issue.
    </p>

    <p className="text-[16px] text-[#374151] leading-7">
      It is also:
    </p>

    <ul className="text-[16px] text-[#374151] space-y-3 leading-7">
      <li>• A financial challenge</li>
      <li>• A timing problem</li>
      <li>• A coordination gap</li>
    </ul>

  </div>


  {/* RIGHT SYSTEM */}
  <div className="rounded-2xl border border-[#e5ebe2] bg-[#f7faf6] p-10 text-center space-y-7">

    {/* ICON SYSTEM */}
    <div className="flex justify-center gap-6">

      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border shadow-sm">
        <PiggyBank className="text-[#146c43] w-7 h-7" />
      </div>

      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border shadow-sm">
        <HeartPulse className="text-[#146c43] w-7 h-7" />
      </div>

      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border shadow-sm">
        <PhoneCall className="text-[#b7791f] w-7 h-7" />
      </div>

    </div>

    {/* TEXT */}
    <h3 className="font-semibold text-[22px] text-[#111827]">
      Preparation + Care + Response
    </h3>

    <p className="text-[16px] text-[#374151] leading-7 max-w-[420px] mx-auto">
      So families are not left making last-minute decisions under pressure.
    </p>

  </div>

</section>

     {/* ================= DIFFERENT ================= */}
<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-16">

  <div className="rounded-2xl border border-[#e5e7eb] bg-white p-7 md:p-10 space-y-10">

    {/* HEADER */}
    <div className="flex items-center gap-4">

      <div className="w-14 h-14 rounded-full bg-[#e7f4ec] flex items-center justify-center shrink-0">
        <HeartPulse className="text-[#146c43] w-7 h-7" />
      </div>

      <h3 className="text-[22px] md:text-[24px] font-semibold text-[#111827] leading-snug">
        What makes Mama’s Call different
      </h3>

    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <Feature
        title="Built around real-life situations"
        text="Many women already attend antenatal care, but challenges happen outside the clinic."
      />

      <Feature
        title="Support when it matters most"
        text="Access guidance during uncertain and urgent moments when families are unsure what to do."
      />

      <Feature
        title="Financial readiness, not last-minute stress"
        text="Families prepare gradually instead of reacting under pressure."
      />

      <Feature
        title="Support beyond delivery"
        text="We continue supporting mothers after childbirth with guidance and access to essentials."
      />

    </div>

  </div>

</section>


         {/* ================= WHO + VISION ================= */}
<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-20">

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* ================= WHO WE SERVE ================= */}
    <div className="rounded-2xl border border-[#eef2ee] bg-white p-6 md:p-7 space-y-6">

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#e7f4ec] flex items-center justify-center">
          <Users className="text-[#146c43] w-6 h-6" />
        </div>
        <h3 className="text-[18px] font-semibold text-[#111827]">
          Who we serve
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-6 text-[15px] text-[#374151]">

        <div className="space-y-3">
          <p className="text-sm text-[#6b7280]">Mama’s Call supports:</p>
          <ul className="space-y-2">
            <li>Pregnant women</li>
            <li>Nursing mothers</li>
            <li>Husbands and fathers</li>
            <li>Families and caregivers</li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-[#6b7280]">We also work with:</p>
          <ul className="space-y-2">
            <li>Hospitals and maternity centers</li>
            <li>NGOs and development partners</li>
            <li>Government programs</li>
            <li>HMOs and health insurers</li>
          </ul>
        </div>

      </div>

    </div>


          {/* ================= VISION + MISSION ================= */}
          <div className="rounded-2xl border border-[#eef2ee] bg-white p-6 md:p-7 space-y-6">

            {/* VISION */}
            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-full bg-[#e7f4ec] flex items-center justify-center shrink-0">
                <Eye className="text-[#146c43] w-6 h-6" />
              </div>

              <div>
                <h4 className="text-[16px] font-semibold text-[#111827] mb-1">
                  Our vision
                </h4>
                <p className="text-[15px] text-[#374151] leading-7">
                  To build a system where every mother is prepared, supported, and able to access care without delay.
                </p>
              </div>

            </div>

            {/* DIVIDER */}
            <div className="border-t border-[#f0f2f5]" />

            {/* MISSION */}
            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-full bg-[#e7f4ec] flex items-center justify-center shrink-0">
                <Target className="text-[#146c43] w-6 h-6" />
              </div>

              <div>
                <h4 className="text-[16px] font-semibold text-[#111827] mb-1">
                  Our mission
                </h4>
                <p className="text-[15px] text-[#374151] leading-7">
                  To reduce preventable risks during pregnancy and childbirth by helping families prepare financially, access guidance, and act quickly when needed.
                </p>
              </div>

            </div>

          </div>


          {/* ================= WHERE WE ARE ================= */}
          <div className="rounded-2xl border border-[#eef2ee] bg-white p-6 md:p-7 space-y-6">

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#e7f4ec] flex items-center justify-center">
                <MapPin className="text-[#146c43] w-6 h-6" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#111827]">
                Where we are today
              </h3>
            </div>

            <p className="text-[15px] text-[#374151] leading-7">
              Mama’s Call is currently active in Lagos State, with plans to expand across other regions.
            </p>

            <p className="text-[15px] text-[#374151] leading-7">
              We are focused on building a system that is simple, reliable, and adaptable to real-life conditions.
            </p>

            {/* MAP */}
            <div className="relative w-full h-[100px]">
              <Image
                src="/nigeria-map.webp"
                alt="Nigeria map"
                fill
                className="object-contain"
              />
            </div>

          </div>

        </div>

      </section>

{/* ================= FOUNDER / TEAM / HOW WE WORK ================= */}
<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-16">

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* ================= FOUNDER ================= */}
    <div className="rounded-2xl border border-[#eef2ee] bg-white p-6 md:p-7 space-y-5">

      {/* HEADER */}
      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-full bg-[#e7f4ec] flex items-center justify-center">
          <MessageCircleHeart className="text-[#146c43] w-6 h-6" />
        </div>

        <h3 className="text-[18px] font-semibold text-[#111827]">
          A note from our founder
        </h3>

      </div>

      {/* CONTENT */}
      <p className="text-[15px] text-[#374151] leading-7">
        Mama’s Call started from a simple observation.
      </p>

      <p className="text-[15px] text-[#374151] leading-7">
        Many families were doing the right things — attending antenatal clinics,
        preparing in their own way — but when it mattered most, they were still unprepared.
      </p>

      <p className="text-[15px] text-[#374151] leading-7">
        Mama’s Call was built to reduce that gap and help families act quickly when it matters most.
      </p>

    </div>


    {/* ================= TEAM ================= */}
    <div className="rounded-2xl border border-[#eef2ee] bg-white p-6 md:p-7 space-y-5">

      {/* HEADER */}
      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-full bg-[#e7f4ec] flex items-center justify-center">
          <Users className="text-[#146c43] w-6 h-6" />
        </div>

        <h3 className="text-[18px] font-semibold text-[#111827]">
          The team behind Mama’s Call
        </h3>

      </div>

      {/* TEXT */}
      <p className="text-[15px] text-[#374151] leading-7">
        We are a small, focused team working to make pregnancy safer by helping families prepare financially and access support without delay.
      </p>

      <p className="text-[15px] text-[#374151] leading-7">
        We work closely with mothers, families, and healthcare providers to build solutions that reflect real-life needs.
      </p>

      {/* IMAGE */}
      <div className="relative w-full h-[160px] mt-2 rounded-xl overflow-hidden">
        <Image
          src="/team.webp"
          alt="Mama's Call team"
          fill
          className="object-cover"
        />
      </div>

    </div>


    {/* ================= HOW WE WORK ================= */}
    <div className="rounded-2xl border border-[#eef2ee] bg-white p-6 md:p-7 space-y-5">

      {/* HEADER */}
      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-full bg-[#e7f4ec] flex items-center justify-center">
          <Handshake className="text-[#146c43] w-6 h-6" />
        </div>

        <h3 className="text-[18px] font-semibold text-[#111827]">
          How we work
        </h3>

      </div>

      {/* TEXT */}
      <p className="text-[15px] text-[#374151] leading-7">
        Mama’s Call provides guidance, coordination, and support.
      </p>

      <p className="text-[15px] text-[#374151] leading-7">
        We do not replace hospitals or emergency medical services. Instead, we work alongside existing healthcare systems to improve how families prepare and respond.
      </p>

      {/* IMAGE */}
      <div className="relative w-full h-[160px] mt-2 rounded-xl overflow-hidden">
        <Image
          src="/how-we-work.webp"
          alt="How Mama's Call works"
          fill
          className="object-cover"
        />
      </div>

    </div>

  </div>

</section>


{/* ================= JOIN US CTA ================= */}
<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-12">

  <div className="rounded-2xl border border-[#e5ebe2] bg-[#f7faf6] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">

    {/* LEFT */}
    <div className="flex items-center gap-4 max-w-[520px]">

      <div className="w-14 h-14 rounded-full bg-[#e7f4ec] flex items-center justify-center">
        <HeartPulse className="text-[#146c43]" />
      </div>

      <div>
        <h3 className="font-semibold text-[#111827] mb-1">
          Join us
        </h3>

        <p className="text-[14px] text-[#374151]">
          Whether you are preparing for childbirth, supporting a loved one, or improving maternal health outcomes, Mama’s Call is here to support you.
        </p>
      </div>

    </div>


    {/* CTA BUTTONS */}
    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

      <button className="w-full sm:w-auto bg-[#146c43] text-white px-6 py-3 rounded-xl font-semibold">
        Get Started
      </button>

      <button className="w-full sm:w-auto border border-[#dfe7de] text-[#146c43] px-6 py-3 rounded-xl font-semibold bg-white">
        Contact Us
      </button>

    </div>

  </div>

</section>


{/* ================= IMPORTANT NOTE ================= */}
<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-20">

  <div className="rounded-2xl border border-[#f0e2c7] bg-[#fffaf2] p-6 flex items-start justify-between gap-6 flex-col md:flex-row">

    {/* LEFT */}
    <div className="flex items-start gap-4 max-w-[520px]">

      <div className="w-12 h-12 rounded-full bg-[#fef3c7] flex items-center justify-center">
        <ShieldCheck className="text-[#b7791f]" />
      </div>

      <div>
        <h4 className="font-semibold text-[#111827] mb-1">
          Important note
        </h4>

        <p className="text-[14px] text-[#5b6470] leading-6">
          Mama’s Call provides support, guidance, and coordination.
          We do not replace hospital treatment or emergency medical services.
          For severe emergencies, seek immediate in-person care.
        </p>
      </div>

    </div>


    {/* RIGHT ICON */}
    <div className="hidden md:block relative w-[120px] h-[80px]">
      <Image
        src="/hospital-icon.webp"
        alt="Hospital"
        fill
        className="object-contain"
      />
    </div>

  </div>

</section>
      </main>

      
    </>
  );
}

function Feature({ title, text }: any) {
  return (
    <div className="space-y-5">

      {/* ICON */}
      <div className="w-14 h-14 rounded-full bg-[#e7f4ec] flex items-center justify-center">
        <CheckCircle className="text-[#146c43] w-6 h-6" />
      </div>

      {/* TITLE */}
      <h4 className="font-semibold text-[#111827] text-[18px] leading-snug">
        {title}
      </h4>

      {/* TEXT */}
      <p className="text-[15px] text-[#374151] leading-7">
        {text}
      </p>

    </div>
  );
}