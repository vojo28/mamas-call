"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [phone, setPhone] = useState("");

  function handleLogin() {
    if (!phone) return;

    localStorage.setItem("mama_auth", "true");

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">

      <div className="w-full max-w-md space-y-8">

        {/* BRAND */}
        <div className="text-center space-y-2">
          <h1 className="text-xl font-semibold">
            Mama’s Call
          </h1>

          <p className="text-sm text-muted">
            Financial preparation for a safe delivery
          </p>
        </div>

        {/* HERO TEXT */}
        <div className="text-center space-y-3">

          <h2 className="text-2xl font-semibold leading-tight">
            Stay prepared before your delivery
          </h2>

          <p className="text-sm text-muted">
            Track your savings, manage your plan, and stay ready when it matters most.
          </p>

        </div>

        {/* FORM */}
        <div className="bg-white border border-border rounded-2xl p-6 space-y-5 shadow-soft">

          <div className="space-y-2">
            <label className="text-sm text-muted">
              Phone number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-primary text-white py-3 rounded-full font-medium"
          >
            Continue
          </button>

        </div>

        {/* TRUST */}
        <p className="text-xs text-center text-muted">
          Your information is secure and used only to manage your savings plan.
        </p>

      </div>

    </main>
  );
}