"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  MessageCircle,
  AlertTriangle,
  Stethoscope,
  HeartHandshake,
  Users,
  Hospital,
  Clock,
  ShieldCheck,
  MapPin,
} from "lucide-react";

/* ================= FLOATING BUTTON ================= */
function FloatingEmergencyButton() {
  return (
    <a href="tel:08000000911" className="fixed bottom-5 right-5 z-50">
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-red-500 opacity-30 animate-ping" />

        <div className="relative flex items-center gap-2 px-4 h-14 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition">
          <PhoneCall className="w-5 h-5" />
          <span className="hidden sm:inline font-semibold">Call Now</span>
        </div>
      </div>
    </a>
  );
}

/* ================= AUTO POPUP ================= */
function EmergencyPrompt({ open, onClose }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-[60] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full space-y-4 shadow-xl">

        <h3 className="text-lg font-semibold text-[#111827]">
          Do you need urgent help?
        </h3>

        <p className="text-sm text-[#374151]">
          If this feels urgent, call now. You don’t need to wait.
        </p>

        <div className="space-y-3">

          <a href="tel:08000000911">
            <button className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700">
              Call Now
            </button>
          </a>

          <a
            href="https://wa.me/2348000000911?text=Hello%20Mama’s%20Call,%20I%20need%20urgent%20pregnancy%20support."
            target="_blank"
          >
            <button className="w-full border py-3 rounded-xl font-semibold">
              WhatsApp Instead
            </button>
          </a>

          <button
            onClick={onClose}
            className="w-full text-sm text-gray-500"
          >
            I’m okay for now
          </button>

        </div>
      </div>
    </div>
  );
}

export default function EmergencyPage() {
  const [showPrompt, setShowPrompt] = useState(false);

  /* ================= TRIGGER ================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 12000); // 12 seconds hesitation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
   

      <main className="bg-white">

        {/* AUTO POPUP */}
        <EmergencyPrompt
          open={showPrompt}
          onClose={() => setShowPrompt(false)}
        />

        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center">

          <div className="space-y-6">

            <h1 className="text-[34px] md:text-[52px] font-bold leading-tight text-[#0f1720]">
              EMERGENCY SUPPORT
            </h1>

            <p className="text-[18px] text-[#146c43] font-medium">
              Immediate guidance when pregnancy concerns cannot wait
            </p>

            <div className="rounded-2xl border border-[#e5e7eb] p-6 bg-[#fafafa] space-y-4">

              <h3 className="text-[20px] font-semibold text-[#111827]">
                Need urgent support right now?
              </h3>

              <p className="text-[15px] text-[#374151] leading-7">
                If you or a pregnant woman is experiencing pain, bleeding,
                labor concerns, or anything that feels wrong — reach out now.
              </p>

              <p className="text-[#146c43] font-semibold">
                You do not need to figure it out alone.
              </p>

              <div className="space-y-3 pt-2">

                <a href="tel:08000000911">
                  <button className="w-full flex items-center justify-center gap-3 bg-red-600 text-white px-5 py-4 rounded-xl font-semibold shadow-md hover:bg-red-700 transition">
                    <PhoneCall className="w-5 h-5" />
                    Call Now • 0800-0000-911
                  </button>
                </a>

                <a
                  href="https://wa.me/2348000000911?text=Hello%20Mama’s%20Call,%20I%20need%20urgent%20pregnancy%20support."
                  target="_blank"
                >
                  <button className="w-full flex items-center justify-center gap-3 border border-[#dfe7de] bg-white text-[#146c43] px-5 py-4 rounded-xl font-semibold hover:bg-[#f7faf6] transition">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Support
                  </button>
                </a>

                <a
                  href="https://www.google.com/maps/search/hospital+near+me"
                  target="_blank"
                >
                  <button className="w-full flex items-center justify-center gap-3 border border-[#dfe7de] bg-white text-[#374151] px-5 py-4 rounded-xl font-semibold hover:bg-[#f7faf6] transition">
                    <MapPin className="w-5 h-5" />
                    Find nearest hospital
                  </button>
                </a>

              </div>
            </div>
          </div>

        <div className="relative w-full h-[500px] md:h-[520px] rounded-[28px] overflow-hidden">

  <Image
    src="/emergency-hero.webp"
    alt="Emergency support"
    fill
    priority
    className="object-cover object-[80%_center]"
  />

  {/* subtle depth overlay */}
  <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/10 via-transparent to-transparent" />

</div>

        </section>

        {/* ================= CONTENT GRID ================= */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card icon={AlertTriangle} title="When to contact us immediately" list={[
              "Heavy bleeding",
              "Severe abdominal pain",
              "Convulsions or seizures",
              "Difficulty breathing",
              "High fever",
              "Reduced or no baby movement",
            ]} />

            <Card icon={Stethoscope} title="What happens when you contact Mama’s Call" list={[
              "Immediate listening and support",
              "Guidance based on your symptoms",
              "Help understanding urgency",
              "Direction to a healthcare facility",
            ]} />

            <Card icon={HeartHandshake} title="You are not overreacting"
              text="Many families delay because they are unsure."
              extra="Asking early is better than waiting too long."
            />

            <Card icon={Users} title="What this looks like in real life"
              text="A woman feels severe pain late at night."
              extra="Within minutes, they get clarity on what to do next."
            />

            <Card icon={Hospital} title="If this is life-threatening"
              text="If unconscious, seizing, or bleeding heavily:"
              extra="Go to the nearest hospital immediately."
              highlight
            />

            <Card icon={Users} title="Support for families too"
              text="Partners and caregivers can contact us."
              extra="Emergencies affect the whole family."
            />

          </div>
        </section>

        {/* ================= CTA STRIP ================= */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-20 space-y-6">

          <div className="rounded-2xl border border-[#e5ebe2] bg-[#f7faf6] p-6 flex flex-col lg:flex-row items-center justify-between gap-6">

            <div className="flex items-start gap-4 max-w-[520px]">
              <div className="w-12 h-12 rounded-full bg-[#146c43] text-white flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#111827]">
                  Available when it matters most
                </h3>

                <p className="text-[15px] text-[#374151]">
                  Pregnancy concerns do not follow business hours.
                </p>
              </div>
            </div>

            <a href="tel:08000000911">
              <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold">
                Call Now
              </button>
            </a>

          </div>

          {/* DISCLAIMER */}
          <div className="rounded-2xl border border-[#f0e2c7] bg-[#fffaf2] p-6 grid md:grid-cols-2 gap-6">

            <div className="flex items-start gap-4">
              <ShieldCheck className="text-[#b7791f]" />
              <p className="text-[15px] text-[#5b6470]">
                Mama’s Call provides guidance and support. We do not replace hospital care.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Hospital className="text-[#b7791f]" />
              <p className="text-[15px] font-medium">
                For severe emergencies, go to the nearest hospital immediately.
              </p>
            </div>

          </div>

        </section>

        <FloatingEmergencyButton />

      </main>

     
    </>
  );
}

/* ================= CARD ================= */
function Card({ icon: Icon, title, list, text, extra, highlight }: any) {
  return (
    <div className={`rounded-2xl border p-6 space-y-4 ${
      highlight ? "border-red-200 bg-red-50" : "border-[#e5e7eb] bg-white"
    }`}>
      <div className="flex items-center gap-3">
        <Icon className="text-[#146c43]" />
        <h3 className="font-semibold text-[#111827]">{title}</h3>
      </div>

      {text && <p className="text-[14px] text-[#374151]">{text}</p>}

      {list && (
        <ul className="text-[14px] space-y-2 list-disc pl-5 text-[#374151]">
          {list.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {extra && <p className="text-[14px] text-[#374151]">{extra}</p>}
    </div>
  );
}