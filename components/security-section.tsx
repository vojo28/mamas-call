"use client";

import { CheckCircle, Phone, MessageCircle, ShieldCheck } from "lucide-react";
import TestimonialCard from "./testimonial-card";

export default function SecuritySection() {
  return (
    <section className="pt-12 pb-16 md:pt-24 md:pb-24 bg-gradient-to-b from-white to-yellow-50/60">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">

          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold leading-tight tracking-tight">
            You’re supported. You’re protected.
          </h2>

          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
            From your money to your health, everything is designed to keep you safe and prepared.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

          {/* ========================= */}
          {/* MONEY SAFETY */}
          {/* ========================= */}
          <div className="group bg-white border border-border rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-6 shadow-soft transition-all duration-300 hover:shadow-md">

            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                Your money stays yours
              </h3>

              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                <ShieldCheck className="text-green-600" size={22} />
              </div>
            </div>

            <ul className="space-y-3 text-sm sm:text-base text-gray-800">

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-600 mt-1" />
                Withdraw anytime
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-600 mt-1" />
                No hidden charges
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-600 mt-1" />
                Full visibility of your savings
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-600 mt-1" />
                Designed for real Nigerian costs
              </li>

            </ul>

            <p className="text-sm text-gray-600">
              You’re always in control.
            </p>
          </div>

          {/* ========================= */}
          {/* EMERGENCY */}
          {/* ========================= */}
          <div className="group bg-red-50 border border-red-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-md">

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                If something doesn’t feel right
              </h3>

              <p className="text-sm sm:text-base text-gray-700">
                Don’t wait. Early action can make all the difference.
              </p>
            </div>

            <div className="space-y-3">

              <button className="w-full bg-red-600 text-white py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
                <Phone size={18} />
                Call 0800-911-0000
              </button>

              <button className="w-full border border-red-200 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
                <MessageCircle size={18} />
                Talk to a Nurse
              </button>

            </div>

            <p className="text-sm text-gray-600 text-center">
              It’s okay to ask. It’s better to be sure.
            </p>
          </div>

          {/* ========================= */}
          {/* TESTIMONIALS */}
          {/* ========================= */}
          <div className="group bg-white border border-border rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-5 shadow-soft transition-all duration-300 hover:shadow-md">

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
              Real support for real families
            </h3>

            <div className="space-y-3">

              <TestimonialCard
                quote="I didn’t have to start calling people for money when it was time. Everything was already planned."
                name="Mother"
                location="Lagos"
                image="/user1.webp"
              />

              <TestimonialCard
                quote="I knew my wife wouldn’t be delayed because of money. That peace of mind is everything."
                name="Father"
                location="Abuja"
                image="/user2.webp"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}