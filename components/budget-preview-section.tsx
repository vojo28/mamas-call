import StepItem from "./step-item";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BudgetPreviewSection() {
  return (
    <section className="relative pt-14 pb-16 md:pt-24 md:pb-24">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-background to-white" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">
          
          <p className="text-[11px] md:text-xs font-medium text-primary uppercase tracking-wide">
            Your Baby Budget
          </p>

          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold leading-tight tracking-tight">
            See what childbirth could cost you
          </h2>

          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-muted leading-relaxed">
            In less than a minute, you’ll know what to expect and how to prepare.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
          
          {/* LEFT — STEPS */}
          <div className="bg-white border border-border rounded-2xl shadow-soft p-5 sm:p-6 md:p-7 flex flex-col justify-center space-y-5 transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
            
            <StepItem
              number="1"
              title="Tell us about you"
              description="Share a few details so we can estimate your delivery cost."
            />

            <StepItem
              number="2"
              title="See your Baby Budget"
              description="Get a clear breakdown of what to expect."
            />

            <StepItem
              number="3"
              title="Start preparing immediately"
              description="Follow a simple savings plan toward your goal."
            />
          </div>

          {/* MIDDLE — BUDGET */}
          <div className="bg-white border border-border rounded-2xl shadow-soft p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-md hover:scale-[1.01]">

            <p className="text-sm md:text-base text-muted">
              Example estimate
            </p>

            {/* TOTAL */}
            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-muted">
                Total estimated cost
              </p>
              <p className="text-[26px] sm:text-[30px] md:text-[36px] font-semibold tracking-tight">
                ₦350,000
              </p>
            </div>

            {/* SPLIT */}
            <div className="flex justify-between items-start pt-4 border-t border-border">
              
              <div className="space-y-1">
                <p className="text-sm text-muted">
                  Insurance covers
                </p>
                <p className="text-green-600 font-semibold text-lg sm:text-xl md:text-2xl">
                  ₦200,000
                </p>
              </div>

              <div className="space-y-1 text-right">
                <p className="text-sm text-muted">
                  You may still need
                </p>
                <p className="text-red-600 font-semibold text-lg sm:text-xl md:text-2xl">
                  ₦150,000
                </p>
              </div>
            </div>

            {/* SAVINGS */}
            <div className="bg-green-50 rounded-xl p-4 sm:p-5 flex items-center justify-between gap-4">
              
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-muted">
                  You can reach this by saving
                </p>
                <p className="font-semibold text-lg sm:text-xl">
                  ₦5,000 weekly
                </p>
                <p className="text-xs sm:text-sm text-muted">
                  For 30 weeks (~6 months)
                </p>
              </div>

              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                <Image
                  src="/piggy-bank.webp"
                  alt="Savings"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — INSURANCE */}
          <div className="bg-orange-50 border border-border rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
  
  {/* TOP */}
  <div className="space-y-4">

    {/* ICON + TITLE */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-white border border-green-200 flex items-center justify-center flex-shrink-0">
        <CheckCircle className="text-green-600" size={18} />
      </div>

      <h3 className="font-semibold text-lg sm:text-xl md:text-2xl leading-snug tracking-tight">
        Already have insurance?
      </h3>
    </div>

    {/* TEXT */}
    <div className="space-y-3 text-sm sm:text-base md:text-lg text-muted leading-relaxed">
      <p>
        Find out what your plan covers — and what it doesn’t — so you can prepare ahead.
      </p>

      <p>
        Even with insurance, there are often gaps.
      </p>
    </div>
  </div>

  {/* CTA */}
  <div className="space-y-4">

    <Link href="/budget" className="w-full">
      <button className="w-full bg-primary text-white py-3 sm:py-3.5 rounded-full font-medium text-base shadow-soft transition hover:opacity-90">
        Create Your Baby Budget
      </button>
    </Link>

    <p className="text-sm sm:text-base text-muted text-center">
      Already have a budget?{" "}
      <span className="underline cursor-pointer">
        Start with your own
      </span>
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}