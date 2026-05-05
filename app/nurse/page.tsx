"use client";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  MessageCircle,
  HelpCircle,
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";

export default function TalkToNursePage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-center">

  {/* LEFT */}
  <div className="space-y-7">

    {/* BRAND */}
    <p className="text-[#146c43] font-semibold text-sm tracking-wide">
      Mama’s Call
    </p>

    {/* HEADLINE */}
    <h1 className="text-[42px] md:text-[64px] font-bold leading-[1.05] text-[#0f1720]">
      Talk to a Nurse
    </h1>

    {/* SUBTEXT */}
    <p className="text-[19px] text-[#146c43] font-medium max-w-lg leading-relaxed">
      Get trusted pregnancy support when you need answers, reassurance, or guidance.
    </p>

    {/* CARD */}
    <div className="rounded-2xl border border-[#edf2ed] bg-white shadow-sm hover:shadow-md transition-all duration-300 p-7 space-y-6">

      <h3 className="text-[20px] font-semibold text-[#111827]">
        You don’t have to figure it out alone
      </h3>

      <div className="space-y-3 text-[15.5px] text-[#4b5563] leading-7">
        <p>Pregnancy comes with many questions.</p>

        <p>
          Sometimes it is something small. Sometimes it feels worrying.
          Sometimes you just need someone qualified to talk to.
        </p>

        <p>
          Mama’s Call connects you with trained maternal care professionals who
          listen, guide, and help you understand your next step.
        </p>
      </div>

      {/* CTA */}
      <div className="space-y-3 pt-2">

        <Link
          href="/request-call"
          className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#146c43] to-[#0f5132] text-white px-6 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <PhoneCall className="w-5 h-5 group-hover:scale-110 transition" />
          Speak with a Nurse Now
        </Link>

        <Link
          href="/whatsapp"
          className="group flex items-center justify-center gap-2 border border-[#e3e8e3] text-[#146c43] px-6 py-3.5 rounded-xl font-semibold bg-white hover:bg-[#f7faf6] transition"
        >
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition" />
          Chat on WhatsApp
        </Link>

      </div>

      {/* RESPONSE TIME */}
      <p className="text-[12.5px] text-[#6b7280] text-center">
        Typically responds in{" "}
        <span className="font-semibold text-[#146c43]">under 5 minutes</span>
      </p>

      {/* TRUST */}
      <div className="flex flex-wrap gap-4 text-[13px] text-[#6b7280] pt-1">

        <span className="flex items-center gap-1">
          <span className="text-[#146c43]">✔</span>
          Trusted professionals
        </span>

        <span className="flex items-center gap-1">
          <span className="text-[#146c43]">⚡</span>
          Fast response
        </span>

        <span className="flex items-center gap-1">
          <span className="text-[#146c43]">🔒</span>
          Private & confidential
        </span>

      </div>

      {/* SOCIAL PROOF */}
      <div className="flex items-center gap-3 pt-2">

        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-[#146c43]/90 border-2 border-white" />
          <div className="w-8 h-8 rounded-full bg-[#146c43]/80 border-2 border-white" />
          <div className="w-8 h-8 rounded-full bg-[#146c43]/70 border-2 border-white" />
        </div>

        <p className="text-[13px] text-[#6b7280]">
          Speak with real nurses who understand what you're going through
        </p>

      </div>

      
   {/* SOCIAL PROOF with real images
   
   
   <div className="flex items-center gap-3 pt-2">

  <div className="flex -space-x-2">

    <img
      src="/avatar1.jpg"
      className="w-8 h-8 rounded-full object-cover border-2 border-white"
    />

    <img
      src="/avatar2.jpg"
      className="w-8 h-8 rounded-full object-cover border-2 border-white"
    />

    <img
      src="/avatar3.jpg"
      className="w-8 h-8 rounded-full object-cover border-2 border-white"
    />

  </div>

  <p className="text-[13px] text-[#6b7280]">
    Speak with real nurses who understand what you're going through
  </p>

</div>
   
   
   
   
   
   
   */}




    </div>
  </div>

        {/* RIGHT IMAGE */}

<div className="relative w-full h-[520px] md:h-[600px] lg:h-[640px]">

  <Image
    src="/talk-to-nurse-hero.webp"
    alt="Talk to a nurse"
    fill
    priority
    className="object-cover object-[60%_center] scale-[1.02]"
  />

</div>

      </section>

      {/* ================= WHAT YOU CAN ASK ================= */}

<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-14 items-center">

  {/* LEFT */}
  <div className="rounded-[24px] border border-[#edf2ed] bg-white shadow-sm p-8 md:p-10 space-y-7">

    {/* HEADER */}
    <div className="flex items-center gap-4">

      <div className="w-12 h-12 rounded-full bg-[#e7f4ec] flex items-center justify-center">
        <HelpCircle className="text-[#146c43] w-6 h-6" />
      </div>

      <h3 className="text-[22px] md:text-[24px] font-semibold text-[#111827]">
        What you can ask about
      </h3>

    </div>

    {/* LIST */}
    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-[16px] text-[#374151] leading-7">

      {[
        "Is this symptom normal?",
        "What should I eat during pregnancy?",
        "Swelling, tiredness, nausea, or discomfort",
        "What should I pack for delivery?",
        "Missed antenatal appointment—what next?",
        "When should I go to the hospital?",
        "How do I prepare financially?",
        "Breastfeeding & newborn care",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">

          <span className="mt-2 w-2 h-2 rounded-full bg-[#146c43]" />

          <span>{item}</span>

        </li>
      ))}

    </ul>

    {/* SUB CARD */}
    <div className="bg-[#f7faf6] border border-[#e5ebe2] rounded-xl p-5 space-y-3">

      <p className="font-semibold text-[#111827] text-[15px]">
        When should you use this?
      </p>

      <ul className="space-y-2 text-[15px] text-[#374151]">
        <li>• When something feels off but you're not sure</li>
        <li>• When you need quick reassurance</li>
        <li>• When you want to avoid unnecessary hospital visits</li>
      </ul>

    </div>

    {/* CTA */}
    <div className="pt-4">

      <Link
        href="/request-call"
        className="inline-flex items-center justify-center bg-[#146c43] text-white px-7 py-3.5 rounded-xl font-semibold shadow-sm hover:shadow-md transition hover:scale-[1.02]"
      >
        Speak with a Nurse Now
      </Link>

    </div>

  </div>

  {/* RIGHT IMAGE */}
  <div className="relative w-full h-[500px] md:h-[560px] flex items-center justify-center">

    {/* soft glow */}
    <div className="absolute w-[260px] h-[260px] bg-[#e7f4ec] rounded-full blur-3xl opacity-40" />

    <Image
      src="/chat-preview.webp"
      alt="Chat preview"
      fill
      className="object-contain scale-[1.1]"
    />

  </div>

</section>


     {/* ================= HOW IT WORKS ================= */}

<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-20">

  <div className="text-center mb-10">
    <h3 className="text-[26px] md:text-[32px] font-semibold text-[#111827]">
      How it works
    </h3>

    <p className="text-[16px] text-[#6b7280] mt-2">
      Simple steps to get clarity and support
    </p>
  </div>

  <div className="rounded-[26px] border border-[#edf2ed] bg-gradient-to-b from-[#f7faf6] to-white p-8 md:p-10 grid md:grid-cols-3 gap-8">

    <Step
      number="1"
      title="Reach out"
      text="Call, request a callback, or send a message on WhatsApp."
    />

    <Step
      number="2"
      title="Speak with a professional"
      text="A trained nurse listens carefully and understands your situation."
    />

    <Step
      number="3"
      title="Get clear guidance"
      text="You receive practical next steps or advice on what to do next."
    />

  </div>

</section>

   {/* ================= VALUE ================= */}

<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-20">

  {/* HEADER */}
  <div className="text-center max-w-2xl mx-auto mb-12">

    <h3 className="text-[26px] md:text-[32px] font-semibold text-[#111827]">
      Why families trust Mama’s Call
    </h3>

    <p className="text-[16px] md:text-[17px] text-[#6b7280] mt-3 leading-7">
      When something feels uncertain, you shouldn’t have to guess.  
      We provide clear guidance, reassurance, and support when it matters most.
    </p>

  </div>

  {/* CARDS */}
  <div className="grid md:grid-cols-3 gap-8">

    <InfoCard
      title="Why mothers use Mama’s Call"
      items={[
        "Quick answers without confusion",
        "Trusted guidance from trained professionals",
        "Peace of mind during uncertain moments",
        "Help knowing when to act",
        "Support that fits real life",
      ]}
    />

    <InfoCard
      title="For fathers and families too"
      text="If you are supporting a pregnant woman and unsure what to do, you can reach out and get clear guidance without confusion or delay."
    />

    <InfoCard
      title="What this looks like in real life"
      text="A first-time mother feels worried, speaks with a nurse, gets clarity, and understands exactly what to do next instead of panicking."
    />

  </div>

</section>

     {/* ================= EMERGENCY ================= */}

<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-16">

  <div className="rounded-[26px] border border-red-200 bg-gradient-to-r from-red-50 via-white to-red-50 p-7 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">

    <div className="flex items-start gap-4">

      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
        <AlertTriangle className="text-red-600 w-6 h-6" />
      </div>

      <div>
        <h4 className="font-semibold text-[18px] text-red-700 mb-1">
          Need urgent help instead?
        </h4>

        <p className="text-[15px] text-[#374151] leading-6">
          Heavy bleeding, severe pain, or serious symptoms should be treated immediately.
        </p>
      </div>

    </div>

    <Link
      href="/emergency"
      className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline"
    >
      Go to Emergency Support →
    </Link>

  </div>

</section>

      {/* ================= FINAL CTA ================= */}

<section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-20">

  <div className="rounded-[26px] border border-[#edf2ed] bg-[#f7faf6] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">

    <div className="flex items-center gap-4">

      <div className="w-12 h-12 rounded-full bg-white border border-[#e5ebe2] flex items-center justify-center">
        <Clock className="text-[#146c43] w-5 h-5" />
      </div>

      <p className="text-[16px] text-[#374151]">
        Available when support matters most — not just during clinic hours
      </p>

    </div>

    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

      <Link
        href="/request-call"
        className="bg-[#146c43] text-white px-7 py-3.5 rounded-xl font-semibold shadow-sm hover:shadow-md transition hover:scale-[1.02]"
      >
        Speak with a Nurse
      </Link>

      <Link
        href="/whatsapp"
        className="border border-[#dfe7de] px-7 py-3.5 rounded-xl text-[#146c43] font-semibold bg-white hover:bg-[#f7faf6]"
      >
        Chat on WhatsApp
      </Link>

    </div>

  </div>

</section>
<a
  href="/whatsapp"
  className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-6 py-3.5 rounded-full shadow-lg flex items-center gap-2 text-[15px] font-semibold hover:scale-105 transition"
>
  💬 Chat Now
</a>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Step({ number, title, text }: any) {
  return (
    <div className="space-y-3 group">

      <div className="w-10 h-10 rounded-full bg-[#146c43] text-white flex items-center justify-center text-sm font-semibold shadow-sm group-hover:scale-105 transition">
        {number}
      </div>

      <h4 className="font-semibold text-[16px] text-[#111827]">
        {title}
      </h4>

      <p className="text-[14px] text-[#5b6470] leading-6">
        {text}
      </p>

    </div>
  );
}

function InfoCard({ title, text, items }: any) {
  return (
    <div className="rounded-2xl border border-[#edf2ed] bg-white p-6 md:p-7 space-y-4 hover:shadow-md transition">

      <h4 className="font-semibold text-[18px] text-[#111827] leading-snug">
        {title}
      </h4>

      {items && (
        <ul className="space-y-2 text-[15px] text-[#374151]">
          {items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#146c43] mt-[3px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {text && (
        <p className="text-[15px] text-[#374151] leading-7">
          {text}
        </p>
      )}

    </div>
  );
}