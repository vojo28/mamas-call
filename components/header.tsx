"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "How it Works", href: "#" },
  { label: "For You", href: "#" },
  { label: "Pregnancy Costs", href: "#" },
  { label: "Care & Guidance", href: "#" },
  { label: "About Us", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/90 border-b border-border">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="h-[68px] md:h-[76px] flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-primary text-2xl">♡</div>
            <span className="font-semibold text-base sm:text-lg tracking-tight text-gray-900">
              Mama’s Call
            </span>
          </Link>

          {/* NAV (desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-gray-700">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="transition hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* EMERGENCY */}
            <a
              href="tel:+2348000000911"
              className="hidden lg:flex items-center gap-2.5 bg-red-50 border border-red-200 px-3.5 py-2 rounded-full hover:bg-red-100 transition active:scale-[0.98]"
            >
              <span className="text-red-500 text-sm">🚨</span>

              <div className="flex flex-col leading-tight">
                <span className="text-red-600 font-semibold text-xs">
                  0800-0000-911
                </span>
                <span className="text-[10px] text-gray-500">
                  Free Emergency Line
                </span>
              </div>
            </a>

            {/* CTA */}
            <Link href="/budget" className="hidden sm:block">
              <button className="bg-primary text-white px-5 sm:px-6 py-3.5 rounded-full text-sm font-semibold shadow-soft hover:opacity-90 transition">
                Create Your Baby Budget
              </button>
            </Link>

            {/* MENU BUTTON */}
            <button
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-5 pt-4">

            {/* LINKS */}
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="text-base font-medium text-gray-800 hover:text-gray-900 transition"
              >
                {item.label}
              </Link>
            ))}

            {/* EMERGENCY */}
            <a
              href="tel:+2348000000911"
              className="flex items-center gap-3 border border-red-200 bg-red-50 px-4 py-3 rounded-xl hover:bg-red-100 transition active:scale-[0.98]"
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
              <button className="w-full bg-primary text-white px-6 py-3.5 rounded-full text-base font-semibold shadow-soft hover:opacity-90 transition">
                Create Your Baby Budget
              </button>
            </Link>

          </div>
        </div>

      </div>
    </header>
  );
}