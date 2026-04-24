"use client";

import Link from "next/link";
import { MessageCircle, User, PiggyBank, Wallet } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-14 md:py-20 bg-background">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="relative bg-gradient-to-br from-green-50 to-white border border-border rounded-3xl p-8 md:p-10 overflow-hidden shadow-soft">

          {/* DECOR */}
          <img
            src="/leaf-left.png"
            className="hidden md:block absolute left-0 bottom-0 w-28 opacity-30"
          />
          <img
            src="/leaf-right.png"
            className="hidden md:block absolute right-0 bottom-0 w-28 opacity-30"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">


            {/* LEFT IMAGE */}
            <div className="hidden md:block flex-shrink-0">
              <img
                src="/family.png"
                alt="Family"
                className="w-52 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>


            {/* CENTER CONTENT */}
            <div className="text-center lg:text-left max-w-xl space-y-5">

              <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                Start now. You’ll be glad you did.
              </h2>

              <p className="text-lg text-gray-700">
                In less than a minute, you’ll know what to expect and how to prepare.
              </p>


              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">

                <Link href="/budget">
                  <button className="w-full sm:w-auto bg-primary text-white px-7 py-3.5 rounded-full font-medium shadow-soft transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-[0.98]">
                    Create Your Baby Budget
                  </button>
                </Link>

                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-white font-medium transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]">

                  <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageCircle size={14} className="text-primary" />
                  </div>

                  Talk to a Nurse
                </button>

              </div>

            </div>


            {/* RIGHT TRUST ITEMS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5 text-sm">

              {/* ITEM */}
              <div className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1">

                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <User size={18} className="text-primary" />
                </div>

                <span className="text-sm font-medium text-gray-800">
                  Start with any amount
                </span>

              </div>

              {/* ITEM */}
              <div className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1">

                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                  <PiggyBank size={18} className="text-yellow-600" />
                </div>

                <span className="text-sm font-medium text-gray-800">
                  Save at your pace
                </span>

              </div>

              {/* ITEM */}
              <div className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1">

                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Wallet size={18} className="text-blue-600" />
                </div>

                <span className="text-sm font-medium text-gray-800">
                  Access your money anytime
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}