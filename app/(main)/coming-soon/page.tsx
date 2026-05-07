"use client";

import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      
      {/* Brand */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold">Mama’s Call</h1>
      </div>

      {/* Main Card */}
      <div className="max-w-lg w-full bg-gray-50 rounded-2xl p-8 shadow-sm">

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-3">
          Coming Soon
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          We’re working on this section to make it simple, reliable, and truly helpful for mothers and families.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Actions */}
        <div className="flex flex-col gap-3">

          <Link
            href="/talk-to-a-nurse"
            className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium"
          >
            Talk to a Nurse
          </Link>

          <Link
            href="/emergency"
            className="w-full border border-gray-300 py-3 rounded-xl text-sm font-medium"
          >
            Emergency Support
          </Link>

          <Link
            href="/mamas-circle"
            className="w-full border border-gray-300 py-3 rounded-xl text-sm font-medium"
          >
            Start Saving
          </Link>
        </div>

      </div>

      {/* Footer note */}
      <p className="text-sm text-gray-500 mt-6">
        Need help now? You can reach us anytime.
      </p>

    </div>
  );
}