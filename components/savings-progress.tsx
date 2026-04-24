"use client";

import { useState } from "react";
import SavingSetup from "./saving-setup";

type Props = {
  total: number;
  weekly: number;
};

export default function SavingsProgress({ total, weekly }: Props) {
  const [step, setStep] = useState<"plan" | "setup">("plan");

  const user = JSON.parse(localStorage.getItem("mama_user") || "{}");

  function handleActivate() {
    // Save flag so dashboard loads
    localStorage.setItem("mama_saved", "true");
    window.location.reload();
  }

  if (step === "setup") {
    return (
      <SavingSetup
        name={user?.profile?.name}
        onComplete={handleActivate}
      />
    );
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-5 space-y-5 shadow-soft">

      {/* TITLE */}
      <div>
        <h3 className="font-semibold text-lg">
          Your savings plan is ready
        </h3>

        <p className="text-sm text-muted mt-1">
          Start saving gradually to stay prepared before your delivery.
        </p>
      </div>

      {/* GOAL */}
      <div className="bg-green-50 rounded-xl p-4">
        <p className="text-sm text-muted">Total amount to prepare</p>
        <p className="text-xl font-semibold">
          ₦{total.toLocaleString()}
        </p>
      </div>

      {/* WEEKLY */}
      <div>
        <p className="text-sm text-muted">Suggested weekly savings</p>
        <p className="text-lg font-semibold">
          ₦{weekly.toLocaleString()}
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={() => setStep("setup")}
        className="w-full bg-primary text-white py-3 rounded-full font-medium shadow-soft transition hover:opacity-90"
      >
        Start Saving
      </button>

      {/* RESET */}
      <button
        onClick={() => {
          localStorage.removeItem("mama_user");
          localStorage.removeItem("mama_saved");
          localStorage.removeItem("mama_saved_amount");
          window.location.reload();
        }}
        className="w-full border border-border py-3 rounded-full font-medium"
      >
        Create New Plan
      </button>

    </div>
  );
}