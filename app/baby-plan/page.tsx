"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BabyPlanComingSoon() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [saved, setSaved] = useState(false);

 function handleNotify() {
  if (!phone) return;

  const existing =
    JSON.parse(localStorage.getItem("mama_notify_list") || "[]");

  localStorage.setItem(
    "mama_notify_list",
    JSON.stringify([...existing, phone])
  );

  // 👉 track conversion
  const conversions = Number(localStorage.getItem("baby_conversions") || 0);
  localStorage.setItem("baby_conversions", String(conversions + 1));

  setSaved(true);
  setPhone("");
}
  return (
    <main className="min-h-screen bg-background py-16">

      <div className="max-w-md mx-auto px-4 space-y-8 text-center">

        {/* BACK */}
        <button
          onClick={() => router.back()}
          className="text-sm text-muted"
        >
          ← Back
        </button>

        {/* CONTENT */}
        <div className="space-y-3">

          <h1 className="text-2xl font-semibold">
            Baby Plan is coming soon 👶
          </h1>

          <p className="text-sm text-muted">
            We’re building a better way to help you manage your baby’s
            monthly needs — from feeding to healthcare.
          </p>

        </div>

        {/* NOTIFY */}
        <div className="bg-white border border-border rounded-2xl p-5 space-y-4">

          {!saved ? (
            <>
              <p className="text-sm text-muted">
                Get notified when we launch
              </p>

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-border rounded-xl px-4 py-3"
              />

              <button
                onClick={handleNotify}
                className="w-full bg-primary text-white py-3 rounded-full font-medium"
              >
                Notify Me
              </button>
            </>
          ) : (
            <div className="space-y-2">
              <p className="font-medium">
                You’ll be notified 💚
              </p>

              <p className="text-sm text-muted">
                We’ll reach out as soon as it’s ready.
              </p>
            </div>
          )}

        </div>

      </div>

    </main>
  );
}