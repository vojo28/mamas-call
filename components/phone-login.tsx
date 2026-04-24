"use client";

import { useState } from "react";

type Props = {
  onSuccess: () => void;
};

export default function PhoneLogin({ onSuccess }: Props) {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  function sendOTP() {
    if (!phone) return alert("Enter phone number");
    setStep("otp");
  }

  function verifyOTP() {
    if (otp.length < 4) return alert("Enter valid OTP");

    // ✅ simulate success
    localStorage.setItem("mama_auth", "true");

    onSuccess();
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-soft space-y-5">

        {step === "phone" && (
          <>
            <h2 className="text-xl font-semibold text-center">
              Login to continue
            </h2>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-3"
            />

            <button
              onClick={sendOTP}
              className="w-full bg-primary text-white py-3 rounded-full font-medium"
            >
              Send OTP
            </button>
          </>
        )}

        {step === "otp" && (
          <>
            <h2 className="text-xl font-semibold text-center">
              Enter OTP
            </h2>

            <input
              type="text"
              placeholder="1234"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-3 text-center text-lg tracking-widest"
            />

            <button
              onClick={verifyOTP}
              className="w-full bg-primary text-white py-3 rounded-full font-medium"
            >
              Verify & Continue
            </button>
          </>
        )}

      </div>

    </div>
  );
}