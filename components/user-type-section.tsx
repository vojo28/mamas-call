"use client";

import OptionCard from "./option-card";
import { useRouter } from "next/navigation";

export default function UserTypeSection() {
  const router = useRouter();

  return (
    <section className="relative pt-14 md:pt-24 md:pt-28 md:pb-24">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-white to-background" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">
          
          <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-semibold leading-tight tracking-tight text-foreground">
            What best describes you?
          </h2>

          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-muted leading-relaxed">
            Choose your path to get started with Mama’s Call.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          
          <OptionCard
            title="I’m Pregnant"
            description="Plan, save, and prepare for your delivery."
            buttonText="Create Your Baby Budget"
            image="/pregnant.webp"
            variant="green"
            onClick={() => router.push("/budget")}
          />

          <OptionCard
            title="I Have a Baby"
            description="Manage ongoing baby costs and stay supported."
            buttonText="Start Your Baby Plan"
            image="/mother-baby.webp"
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