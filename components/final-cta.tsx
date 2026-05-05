"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, User, PiggyBank, Wallet } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="pt-12 pb-16 md:pt-24 md:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* changed overflow-hidden to overflow-visible */}
        <div className="relative bg-gradient-to-br from-green-50 to-white border border-border rounded-3xl p-6 sm:p-8 md:p-10 overflow-visible shadow-soft">

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

           {/* LEFT IMAGE */}
<div className="hidden md:block relative flex-shrink-0 w-[160px] md:w-[190px] lg:w-[220px]">

  
  {/* FAMILY IMAGE */}
  <Image
    src="/family2.webp"
    alt="Family"
    width={220}
    height={220}
    priority
    className="relative z-10 w-full h-auto object-contain "
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

              <div className="flex flex-col sm:flex-row gap-3 pt-2">

                <Link href="/budget" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-primary text-white px-6 py-3.5 rounded-full font-medium shadow-soft hover:opacity-90 transition">
                    Create Your Baby Budget
                  </button>
                </Link>

                <Link
                  href="/nurse"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-white font-medium hover:bg-gray-50 transition"
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageCircle size={14} className="text-primary" />
                  </div>
                  Chat with a Nurse
                </Link>

              </div>

            </div>

            {/* RIGHT TRUST */}
            <div className="relative w-full lg:w-auto">

              {/* LEAF NOW VISIBLE */}
              <div className="hidden md:block absolute -right-10 -bottom-4 z-0 opacity-45 pointer-events-none">
                <Image
                  src="/leaf-right.webp"
                  alt=""
                  width={130}
                  height={130}
                  className="object-contain"
                />
              </div>

              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4 text-sm">

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

      </div>
    </section>
  );
}