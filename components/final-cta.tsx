"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, User, PiggyBank, Wallet } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="pt-12 pb-16 md:pt-24 md:pb-24 bg-background">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="relative bg-gradient-to-br from-green-50 to-white border border-border rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden shadow-soft">

          {/* DECOR */}
          <div className="hidden md:block absolute left-0 bottom-0 w-28 opacity-30">
            <Image src="/leaf-left.webp" alt="" width={112} height={112} />
          </div>

          <div className="hidden md:block absolute right-0 bottom-0 w-28 opacity-30">
            <Image src="/leaf-right.webp" alt="" width={112} height={112} />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT IMAGE (TABLET + DESKTOP) */}
      <div className="hidden md:block flex-shrink-0">
        <Image
          src="/family.webp"
          alt="Family"
          width={200}
          height={200}
          className="w-[140px] md:w-[180px] lg:w-[200px] h-auto object-contain"
        />
      </div>

            {/* CENTER */}
            <div className="text-center lg:text-left max-w-xl space-y-5">

              <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold leading-tight tracking-tight">
                Start now. You’ll be glad you did.
              </h2>

              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-700">
                In less than a minute, you’ll know what to expect and how to prepare.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">

                <Link href="/budget" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-primary text-white px-6 py-3.5 rounded-full font-medium shadow-soft hover:opacity-90 transition">
                    Create Your Baby Budget
                  </button>
                </Link>

                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-white font-medium hover:bg-gray-50 transition">
                  
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageCircle size={14} className="text-primary" />
                  </div>

                  Talk to a Nurse
                </button>

              </div>
            </div>

            {/* RIGHT TRUST */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4 text-sm w-full lg:w-auto">

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                  <User size={16} className="text-primary" />
                </div>
                <span className="text-sm text-gray-800">
                  Start with any amount
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-yellow-50 flex items-center justify-center">
                  <PiggyBank size={16} className="text-yellow-600" />
                </div>
                <span className="text-sm text-gray-800">
                  Save at your pace
                </span>
              </div>

              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                  <Wallet size={16} className="text-blue-600" />
                </div>
                <span className="text-sm text-gray-800">
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