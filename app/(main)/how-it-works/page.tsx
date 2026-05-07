"use client";

import Image from "next/image";
import {
  Baby,
  Siren,
  CalendarDays,
  HeartHandshake,
  Users,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

/* ================= STEPS ================= */

const steps = [
  {
    id: "1",
    title: "Join Mama’s Call",
    image: "/step-join.webp",
    desc: "Create your account in minutes and choose the support that fits your needs.",
    bullets: [
      "Saving for childbirth",
      "Talking to a nurse",
      "Emergency support",
      "Insurance / HMO guidance",
      "Postpartum support",
    ],
    cta: "Get Started",
  },
  {
    id: "2",
    title: "Prepare with Mama’s Circle",
    image: "/step-save.webp",
    desc: "Build financial readiness gradually instead of last-minute stress.",
    bullets: [
      "Save small amounts regularly",
      "Track progress",
      "Stay financially prepared",
      "Reduce stress before delivery",
    ],
    cta: "Start Saving",
  },
  {
    id: "3",
    title: "Talk to a Nurse Anytime",
    image: "/step-nurse.webp",
    desc: "Speak with a trained maternal care professional whenever you need guidance.",
    bullets: [
      "Pregnancy symptoms",
      "Nutrition",
      "Delivery preparation",
      "Antenatal care",
      "Breastfeeding",
      "Newborn care basics",
    ],
    cta: "Talk to a Nurse",
  },
  {
    id: "4",
    title: "Get Emergency Support Fast",
    image: "/step-emergency.webp",
    desc: "Immediate help when urgent symptoms arise.",
    bullets: [
      "Immediate guidance",
      "Direction to care",
      "Help reducing delays",
    ],
    cta: "Emergency Support",
    highlight: true,
  },
  {
    id: "5",
    title: "Cover Funding Gaps if Needed",
    image: "/step-funding.webp",
    desc: "Structured financial support when unexpected costs arise.",
    bullets: [
      "Care Now, Pay Later (CNPL)",
      "Guidance for uncovered expenses",
      "Flexible support options",
    ],
  },
  {
    id: "6",
    title: "Support for HMO / Insured Users",
    image: "/step-hmo.webp",
    desc: "We help you understand coverage, identify gaps, and prepare for additional costs if needed.",
  },
  {
    id: "7",
    title: "Continued Support for Nursing Mothers",
    image: "/step-postpartum.webp",
    desc: "Ongoing support after delivery with guidance and reassurance.",
    bullets: [
      "Breastfeeding support",
      "Recovery after childbirth",
      "Newborn care basics",
      "Emotional wellbeing",
    ],
  },
  {
    id: "8",
    title: "Affordable Baby & Maternal Essentials",
    image: "/step-marketplace.webp",
    desc: "Access trusted baby and maternal products at discounted prices.",
    bullets: [
      "Diapers and wipes",
      "Baby clothing",
      "Feeding items",
      "Hygiene products",
      "Recovery essentials",
    ],
    cta: "Visit Marketplace",
  },
];

/* ================= MAIN ================= */

export default function HowItWorksFull() {
  const stages = [
    { icon: Baby, label: "During pregnancy" },
    { icon: Siren, label: "During urgent moments" },
    { icon: CalendarDays, label: "While preparing for childbirth" },
    { icon: HeartHandshake, label: "After delivery" },
    { icon: Users, label: "As mothers care for their newborns" },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          <div className="space-y-5">
            <h2 className="text-[34px] md:text-[46px] font-bold leading-tight text-[#0f1720]">
              HOW IT WORKS
            </h2>

            <p className="text-[18px] text-[#146c43] font-medium">
              Simple support for pregnancy, childbirth, new mothers, and beyond
            </p>

            <p className="text-[16px] text-[#374151] leading-7">
              Mama’s Call helps women and families prepare financially, get trusted guidance, access urgent support quickly, and continue receiving help after delivery.
            </p>

            <p className="text-[16px] text-[#374151] leading-7">
              Whether you are planning ahead, have questions, facing an urgent concern, or adjusting to life with a newborn, we are here to support you.
            </p>
          </div>

          <div className="relative w-full h-[320px] md:h-[420px]">
            <Image
              src="/how-it-works-hero.webp"
              alt="How Mama’s Call works"
              fill
              className="object-contain"
            />
          </div>

        </div>

        {/* ================= STEPS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step) => (
            <div
              key={step.id}
              className={`rounded-2xl border p-6 flex flex-col ${
                step.highlight
                  ? "border-red-200 bg-red-50"
                  : "border-[#e5e7eb] bg-white"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#146c43] text-white text-sm font-semibold flex items-center justify-center">
                  {step.id}
                </div>

                <h3 className="text-[16px] font-semibold text-[#111827]">
                  {step.title}
                </h3>
              </div>

              <div className="relative w-full h-[120px] mb-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-[14px] text-[#374151] mb-3">
                {step.desc}
              </p>

              {step.bullets && (
                <ul className="text-[14px] space-y-1 mb-4 list-disc pl-5 text-[#374151]">
                  {step.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {step.cta && (
                <button className={`mt-auto px-4 py-3 rounded-xl text-sm font-semibold ${
                  step.highlight
                    ? "border border-red-300 text-red-600 bg-white"
                    : "bg-[#146c43] text-white"
                }`}>
                  {step.cta}
                </button>
              )}
            </div>
          ))}

        </div>

        {/* ================= SUPPORT STAGES ================= */}
        <div className="mt-20 rounded-[26px] border border-[#e5ebe2] bg-[#f7faf6] px-6 md:px-10 py-10">

          <div className="text-center mb-10">
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#111827]">
              Support for every stage
            </h3>
            <p className="text-[14px] text-[#6b7280] mt-2">
              Mama’s Call is built to support families:
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-6">

            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div key={index} className="flex items-center">

                  <div className="flex flex-col items-center text-center max-w-[140px]">
                    <div className="w-16 h-16 rounded-full bg-white border flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-[#146c43]" />
                    </div>

                    <p className="text-[14px] text-[#374151] font-medium">
                      {stage.label}
                    </p>
                  </div>

                  {index !== stages.length - 1 && (
                    <div className="hidden md:block w-12 h-px bg-[#dbe2d6] mx-4" />
                  )}

                </div>
              );
            })}

          </div>
        </div>

       {/* ================= WHO / WHY / START ================= */}
<div className="mt-20 grid md:grid-cols-3 gap-6">

  {/* WHO */}
  <div className="rounded-[20px] border border-[#e5ebe2] bg-white p-6">
    <h3 className="text-[18px] font-semibold text-[#111827] mb-2">
      Who it is for
    </h3>

    <p className="text-[14px] text-[#6b7280] mb-5">
      Mama’s Call supports:
    </p>

    <div className="space-y-4">
      {[
        "Pregnant women",
        "Husbands and fathers",
        "Families and caregivers",
        "Nursing mothers",
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#e7f4ec] flex items-center justify-center">
            <Users className="w-4 h-4 text-[#146c43]" />
          </div>
          <span className="text-[14px] text-[#374151] font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* WHY */}
  <div className="rounded-[20px] border border-[#e5ebe2] bg-white p-6">
    <h3 className="text-[18px] font-semibold text-[#111827] mb-5">
      Why families choose Mama’s Call
    </h3>

    <div className="space-y-4">
      {[
        "Better preparation",
        "Less panic during emergencies",
        "Trusted guidance",
        "Reduced last-minute stress",
        "Ongoing support after delivery",
        "More confidence throughout the journey",
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-[#146c43] flex items-center justify-center">
            <span className="text-white text-[12px]">✓</span>
          </div>
          <span className="text-[14px] text-[#374151]">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* START TODAY */}
  <div className="rounded-[20px] border border-[#e5ebe2] bg-white p-6 flex flex-col justify-between">
    <div>
      <h3 className="text-[18px] font-semibold text-[#111827] mb-3">
        Start today
      </h3>

      <p className="text-[14px] text-[#374151] mb-3">
        You do not need to wait until there is a problem.
      </p>

      <p className="text-[14px] text-[#374151]">
        Start preparing now and know support is available when you need it.
      </p>
    </div>

    <div className="relative w-full h-[120px] mt-6">
      <Image
        src="/start-calendar.webp"
        alt="Start today"
        fill
        className="object-contain"
      />
    </div>
  </div>

</div>

{/* ================= CTA STRIP ================= */}
<div className="mt-8 rounded-[20px] border border-[#e5ebe2] bg-[#f7faf6] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">

  {/* LEFT IMAGE */}
  <div className="hidden md:block relative w-[140px] h-[120px]">
    <Image
      src="/cta-mother.webp"
      alt="Mama's Call"
      fill
      className="object-contain"
    />
  </div>

  {/* BUTTONS */}
  <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">

    {/* PRIMARY */}
    <button className="flex items-center justify-center gap-3 bg-[#146c43] text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:opacity-90 transition">

      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
        <Users className="w-4 h-4" />
      </div>

      Get Started
    </button>

    {/* SECONDARY */}
    <button className="flex items-center justify-center gap-3 border border-[#dfe7de] px-8 py-4 rounded-xl font-semibold text-[#146c43] bg-white hover:bg-[#f7faf6] transition">

      <div className="w-6 h-6 rounded-full bg-[#e7f4ec] flex items-center justify-center">
        <MessageCircle className="w-4 h-4 text-[#146c43]" />
      </div>

      Chat on WhatsApp
    </button>

  </div>

</div>

{/* ================= IMPORTANT NOTE ================= */}
<div className="mt-8 rounded-[20px] border border-[#f0e2c7] bg-[#fffaf2] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">

 {/* LEFT CONTENT */}
<div className="flex items-start gap-4 max-w-[520px]">

  <div className="w-12 h-12 rounded-full bg-[#fef3c7] flex items-center justify-center">
    <ShieldCheck className="w-6 h-6 text-[#b7791f]" />
  </div>

  <div>
    <h4 className="font-semibold text-[#111827] mb-2">
      Important note
    </h4>

    <p className="text-[14px] text-[#5b6470] leading-6">
      Mama’s Call provides support, guidance, and coordination.
      We do not replace hospital treatment or emergency medical services.
      For severe emergencies, seek immediate in-person care.
    </p>
  </div>

</div>

  {/* RIGHT ILLUSTRATION */}
  <div className="relative w-[140px] h-[100px]">
    <Image
      src="/hospital-illustration.webp"
      alt="Hospital"
      fill
      className="object-contain"
    />
  </div>

</div>
        </div>
    </section>
  );
}