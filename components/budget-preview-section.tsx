import StepItem from "./step-item";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function BudgetPreviewSection() {
  return (
    <section className="relative py-16 md:py-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-background to-white" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">

          <p className="text-xs font-medium text-primary uppercase tracking-wide">
            Your Baby Budget
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
            See what childbirth could cost you
          </h2>

          <p className="text-base text-muted">
            In less than a minute, you’ll know what to expect and how to prepare.
          </p>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-stretch">

          {/* LEFT — STEPS (NOW A CARD ✅) */}
          <div className="bg-white border border-border rounded-2xl shadow-soft p-6 md:p-7 flex flex-col justify-center space-y-5 transition-all duration-300 hover:shadow-md hover:scale-[1.01]">

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

          {/* MIDDLE — BUDGET CARD */}
          <div className="bg-white border border-border rounded-2xl shadow-soft p-6 md:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-md hover:scale-[1.01]">

            <p className="text-base text-muted">
              Example estimate
            </p>

            {/* TOTAL */}
            <div className="space-y-1">
              <p className="text-sm text-muted">Total estimated cost</p>
              <p className="text-3xl md:text-4xl font-semibold tracking-tight">
                ₦350,000
              </p>
            </div>

            {/* SPLIT */}
            <div className="flex justify-between items-start pt-5 border-t border-border">

              <div className="text-left space-y-1">
                <p className="text-base text-muted">
                  Insurance covers
                </p>

                <p className="text-green-600 font-semibold text-xl md:text-2xl">
                  ₦200,000
                </p>
              </div>

              <div className="text-right space-y-1">
                <p className="text-base text-muted">
                  You may still need
                </p>

                <p className="text-red-600 font-semibold text-xl md:text-2xl">
                  ₦150,000
                </p>
              </div>

            </div>

            {/* SAVINGS */}
            <div className="bg-green-50 rounded-xl p-5 flex items-center justify-between">

              <div className="space-y-1">
                <p className="text-sm text-muted">
                  You can reach this by saving
                </p>

                <p className="font-semibold text-xl">
                  ₦5,000 weekly
                </p>

                <p className="text-sm text-muted">
                  For 30 weeks (~6 months)
                </p>
              </div>

              {/* PIGGY ICON */}
              <div className="flex items-center justify-center">
                   <img
                    src="/piggy-bank.png"
                    alt="Savings"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 hover:scale-105"
                  />
                
              </div>

            </div>

          </div>

          {/* RIGHT — INSURANCE */}
          <div className="bg-orange-50 border border-border rounded-2xl p-6 md:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-md transition-all duration-300 hover:shadow-md hover:scale-[1.01]">

            {/* HEADER */}
            <div className="flex items-center justify-between gap-6">

              <div className="space-y-3 max-w-md">

                <h3 className="font-semibold text-xl md:text-2xl leading-snug tracking-tight">
                  Already have insurance?
                  <br />
                  Don’t be caught off guard.
                </h3>

                <div className="space-y-3 text-base md:text-lg text-muted leading-relaxed">

                  <p>
                    Find out what your plan covers — and what it doesn’t — so you can prepare ahead.
                  </p>

                  <p>
                    Even with insurance, there are often gaps.
                  </p>

                </div>

              </div>

              {/* ICON */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white border border-green-200 flex items-center justify-center shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="space-y-4">

              <Link href="/budget">
                <button className="w-full bg-primary text-white py-3.5 rounded-full font-medium text-base shadow-soft transition hover:opacity-90">
                  Create Your Baby Budget
                </button>
              </Link>

              <p className="text-base text-muted text-center">
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