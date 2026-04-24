"use client";

import { useState, useEffect } from "react";
import PhoneCapture from "./phone-capture";
import SavingsProgress from "./savings-progress";
import ExtendedProfile from "./extended-profile";
import SuccessToast from "./success-toast";

type Props = {
  result: {
    totalCost: number;
    insuranceCoverage: number;
    userNeeds: number;
    weeklySavings: number;
    durationWeeks: number;
  };
};

export default function BudgetResult({ result }: Props) {
  const [saved, setSaved] = useState(false);
  const [phone, setPhone] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const [profile, setProfile] = useState({
    name: "",
    edd: "",
    insuranceProvider: "",
  });

  // Load saved state
  useEffect(() => {
    const stored = localStorage.getItem("mama_saved");
    if (stored === "true") {
      setSaved(true);
    }
  }, []);

  async function handleContinue() {
    setError("");

    if (!phone) {
      setError("Please enter your phone number");
      return;
    }

    if (!profile.name || !profile.edd) {
      setError("Please complete your details");
      return;
    }

    try {
     await fetch("/api/save-user", {
  method: "POST",
  body: JSON.stringify({
    phone,
    profile,
    result,
  }),
});

// ✅ SAVE EVERYTHING LOCALLY
localStorage.setItem(
  "mama_user",
  JSON.stringify({
    phone,
    profile,
    result,
  })
);

      // Show success toast
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        localStorage.setItem("mama_saved", "true");
        setSaved(true);
      }, 2000);

    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  }

  // If user already saved → show savings
  if (saved) {
    return (
      <SavingsProgress
        total={result.userNeeds}
        weekly={result.weeklySavings}
      />
    );
  }

  return (
    <div className="space-y-6 relative">

      {/* ✅ TOAST */}
      {showToast && (
        <SuccessToast message="Your plan has been sent to your phone 💬" />
      )}

      {/* TITLE */}
      <h2 className="text-xl font-semibold">
        Your Baby Budget
      </h2>

      {/* TOTAL */}
      <div>
        <p className="text-sm text-muted">Estimated total cost</p>
        <p className="text-2xl font-semibold">
          ₦{result.totalCost.toLocaleString()}
        </p>
      </div>

      {/* SPLIT */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-muted">Insurance covers</p>
          <p className="text-green-600 font-semibold">
            ₦{result.insuranceCoverage.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-xs text-muted">You may need</p>
          <p className="text-red-600 font-semibold">
            ₦{result.userNeeds.toLocaleString()}
          </p>
        </div>
      </div>

      {/* SAVINGS PLAN */}
      <div className="bg-green-50 p-4 rounded-xl">
        <p className="text-sm text-muted">
          Suggested savings plan
        </p>

        <p className="font-semibold text-lg">
          ₦{result.weeklySavings.toLocaleString()} weekly
        </p>

        <p className="text-xs text-muted">
          for {result.durationWeeks} weeks (~6 months)
        </p>
      </div>

      {/* PROFILE */}
      <ExtendedProfile profile={profile} setProfile={setProfile} />

      {/* PHONE */}
      <PhoneCapture phone={phone} setPhone={setPhone} />

      {/* ERROR MESSAGE */}
      {error && (
        <p className="text-sm text-red-500 text-center">
          {error}
        </p>
      )}

      {/* CTA */}
      <button
        onClick={handleContinue}
        className="w-full bg-primary text-white py-3 rounded-full font-medium shadow-soft transition hover:opacity-90"
      >
        Continue to Savings
      </button>

    </div>
  );
}