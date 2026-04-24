"use client";

import { CheckCircle, Phone, MessageCircle, ShieldCheck } from "lucide-react";
import TestimonialCard from "./testimonial-card";

export default function SecuritySection() {
  return (
    <section className="pt-12 md:pt-16 pb-16 md:pb-24 bg-gradient-to-b from-white to-yellow-50/60">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 space-y-3">

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
            You don’t have to figure everything out on your own.
          </h2>

          <p className="text-lg text-gray-700">
            We help you stay prepared, supported, and in control.
          </p>

        </div>


        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">


          {/* ========================= */}
          {/* MONEY SAFETY */}
          {/* ========================= */}

          <div className="group bg-white border border-border rounded-2xl p-6 flex flex-col justify-between shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="flex items-start justify-between gap-8">

            {/* TEXT */}
            
            <div className="space-y-7">

            {/* TITLE */}
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Your money stays yours
            </h3>

            {/* LIST */}
            <ul className="space-y-4 text-base md:text-lg text-gray-800">

              <li className="flex items-start gap-3 transition-transform duration-200 group-hover:translate-x-1">
                <CheckCircle size={18} className="text-green-600 mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Withdraw anytime
                </span>
              </li>

              <li className="flex items-start gap-3 transition-transform duration-200 group-hover:translate-x-1">
                <CheckCircle size={18} className="text-green-600 mt-1 shrink-0" />
                <span className="leading-relaxed">
                  No hidden charges
                </span>
              </li>

              <li className="flex items-start gap-3 transition-transform duration-200 group-hover:translate-x-1">
                <CheckCircle size={18} className="text-green-600 mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Full visibility of your savings
                </span>
              </li>

              <li className="flex items-start gap-3 transition-transform duration-200 group-hover:translate-x-1">
                <CheckCircle size={18} className="text-green-600 mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Designed for real Nigerian costs
                </span>
              </li>

            </ul>

            {/* FOOT NOTE */}
            <p className="text-sm md:text-base text-gray-600">
              You’re always in control.
            </p>

          </div>


              {/* ICON */}
              <div className="hidden md:flex items-center justify-center shrink-0">

                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">

                  <ShieldCheck className="text-green-600 transition-transform duration-300 group-hover:scale-110" size={36} />

                </div>

              </div>

            </div>

          </div>



          {/* ========================= */}
          {/* EMERGENCY */}
          {/* ========================= */}

          <div className="group bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="space-y-4">

              <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                If something doesn’t feel right,
                <br />
                get help immediately
              </h3>

              <p className="text-base text-gray-700">
                Don’t wait. Early action can make all the difference.
              </p>

            </div>


            <div className="space-y-3">

              <button className="w-full bg-red-600 text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md">

                <Phone size={18} />
                Call 0800-911-0000

              </button>


              <button className="w-full border border-red-200 py-3 rounded-full font-medium flex items-center justify-center gap-2 bg-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-sm">

                <MessageCircle size={18} />
                Talk to a Nurse

              </button>

            </div>


            <p className="text-base text-gray-600 text-center">
              It’s okay to ask. It’s better to be sure.
            </p>

          </div>



          {/* ========================= */}
          {/* TESTIMONIALS */}
          {/* ========================= */}

          <div className="group bg-white border border-border rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Real support for real families
            </h3>

            <div className="space-y-3">

              <div className="transition-all duration-300 group-hover:translate-y-[-2px]">
                <TestimonialCard
                  quote="I didn’t have to start calling people for money when it was time. Everything was already planned."
                  name="Mother"
                  location="Lagos"
                  image="/user1.jpg"
                />
              </div>

              <div className="transition-all duration-300 group-hover:translate-y-[-2px] delay-75">
                <TestimonialCard
                  quote="I knew my wife wouldn’t be delayed because of money. That peace of mind is everything."
                  name="Father"
                  location="Abuja"
                  image="/user2.jpg"
                />
              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}