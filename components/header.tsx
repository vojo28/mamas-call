"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/90 border-b border-border">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="h-[72px] md:h-[80px] flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-primary text-2xl">♡</div>
            <span className="font-semibold text-lg tracking-tight text-gray-900">
              Mama’s Call
            </span>
          </div>

          {/* NAV (desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-700">

            {[
              "How it Works",
              "For You",
              "Pregnancy Costs",
              "Care & Guidance",
              "About Us",
            ].map((item, i) => (
              <span
                key={i}
                className="cursor-pointer transition hover:text-gray-900"
              >
                {item}
              </span>
            ))}

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* ✅ EMERGENCY (CLICKABLE FULL BADGE) */}
            <a
              href="tel:+2348000000911"
              className="hidden lg:flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-2.5 rounded-full hover:bg-red-100 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <span className="text-red-500 text-base">🚨</span>

              <div className="flex flex-col leading-tight">
                <span className="text-red-600 font-semibold text-sm">
                  0800-0000-911
                </span>
                <span className="text-[11px] text-gray-500">
                  Free Emergency Line
                </span>
              </div>
            </a>

            {/* CTA */}
            <Link href="/budget">
              <button className="hidden sm:block bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold shadow-soft transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-[0.98]">
                Create Your Baby Budget
              </button>
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[420px] pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-5 pt-4">

            {/* LINKS */}
            {[
              "How it Works",
              "For You",
              "Pregnancy Costs",
              "Care & Guidance",
              "About Us",
            ].map((item, i) => (
              <span
                key={i}
                className="text-base font-medium text-gray-800 hover:text-gray-900 transition cursor-pointer"
              >
                {item}
              </span>
            ))}

            {/* ✅ MOBILE EMERGENCY (CLICKABLE) */}
            <a
              href="tel:+2348000000911"
              className="flex items-center gap-3 border border-red-200 bg-red-50 px-4 py-3 rounded-xl hover:bg-red-100 transition-all duration-200 active:scale-[0.98]"
            >
              <span className="text-red-500 text-base">🚨</span>

              <div className="flex flex-col">
                <span className="text-red-600 font-semibold text-sm">
                  0800-0000-911
                </span>
                <span className="text-xs text-gray-500">
                  Free Emergency Line
                </span>
              </div>
            </a>

            {/* CTA */}
            <Link href="/budget">
              <button className="bg-primary text-white px-6 py-3 rounded-full text-base font-semibold shadow-soft transition-all duration-200 hover:opacity-90 active:scale-[0.98]">
                Create Your Baby Budget
              </button>
            </Link>

          </div>
        </div>

      </div>
    </header>
  );
}