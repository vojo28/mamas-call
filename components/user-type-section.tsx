"use client";

import OptionCard from "./option-card";
import { useRouter } from "next/navigation";

export default function UserTypeSection() {
  const router = useRouter();

  return (
    <section className="relative py-16 md:py-24">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-white to-background" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3">

          <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
            What best describes you?
          </h2>

          <p className="text-sm md:text-base text-muted">
            Choose your path to get started with Mama’s Call.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          <OptionCard
            title="I’m Pregnant"
            description="Plan, save, and prepare for your delivery."
            buttonText="Create Your Baby Budget"
            image="/pregnant.png"
            variant="green"
            onClick={() => router.push("/budget")}
          />

          <OptionCard
            title="I Have a Baby"
            description="Manage ongoing baby costs and stay supported."
            buttonText="Start Your Baby Plan"
            image="/mother-baby.png"
            variant="orange"
            onClick={() => {
            const clicks = Number(localStorage.getItem("baby_clicks") || 0);
            localStorage.setItem("baby_clicks", String(clicks + 1));

            router.push("/baby-plan");
          }}
          />

        </div>

      </div>
    </section>
  );
}