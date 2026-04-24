"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Copy, CheckCircle } from "lucide-react";

export default function FundPage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [planType, setPlanType] = useState<"weekly" | "monthly">("weekly");

  const [copied, setCopied] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("mama_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  function copyAccount() {
    navigator.clipboard.writeText("1029384756");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function formatCurrency(value: string) {
    if (!value) return "";
    return Number(value.replace(/,/g, "")).toLocaleString();
  }

  function handlePayment() {
    const amountNumber = Number(amount);

    if (!amountNumber || amountNumber <= 0) {
      setError("Enter a valid amount");
      return;
    }

    setProcessing(true);

    setTimeout(() => {
      const existing = JSON.parse(
        localStorage.getItem("mama_transactions") || "[]"
      );

      const newTx = {
        id: Date.now(),
        amount: amountNumber,
        date: new Date().toISOString(),
        type: "credit",
      };

      localStorage.setItem(
        "mama_transactions",
        JSON.stringify([newTx, ...existing])
      );

      const current = Number(
        localStorage.getItem("mama_saved_amount") || 0
      );

      localStorage.setItem(
        "mama_saved_amount",
        String(current + amountNumber)
      );

      setProcessing(false);
      setSuccess(true);
    }, 1000);
  }

  if (!user) return <div className="p-6">No data found</div>;

  const weekly = user.result.weeklySavings;

  return (
    <main className="min-h-screen bg-background py-10">
      <div className="max-w-2xl mx-auto px-4 space-y-6">

        {/* HEADER */}
        <button
          onClick={() => router.back()}
          className="text-sm text-muted"
        >
          ← Back
        </button>

        {/* TITLE */}
        <div>
          <h1 className="text-2xl font-semibold">Add Money</h1>
          <p className="text-sm text-muted">
            Fund your savings using your account details below
          </p>
        </div>

        {/* ACCOUNT */}
        <div className="bg-white border border-border rounded-2xl p-6 shadow-soft space-y-4">

          <p className="text-sm text-muted">Account Number</p>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold tracking-wide">
              1029384756
            </p>

            <button
              onClick={copyAccount}
              className="flex items-center gap-1 text-sm text-primary font-medium"
            >
              {copied ? (
                <>
                  <CheckCircle size={16} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-muted">
            Account Name: Mama’s Call
          </p>

          <p className="text-xs text-muted">
            Mama’s Call Micro-Savings Bank
          </p>

          <div className="flex items-center gap-2 text-xs text-muted">
            <span>🔒</span>
            <p>Secure transfer. Your funds are tracked and recorded.</p>
          </div>
        </div>

        {/* TRANSFER STEPS */}
        <div className="bg-white border border-border rounded-2xl p-5 space-y-3">

          <p className="text-sm font-medium">
            How to fund your account
          </p>

          <div className="text-sm text-muted space-y-2">
            <p>1. Open your bank app</p>
            <p>2. Tap Transfer</p>
            <p>3. Enter the account number</p>
            <p>4. Complete payment</p>
          </div>
        </div>

        

        {/* PLAN TYPE */}
        <div className="bg-white border border-border rounded-2xl p-5 space-y-3">
          <p className="text-sm text-muted">Savings plan</p>

          <div className="flex gap-3">
            <button
              onClick={() => setPlanType("weekly")}
              className={`flex-1 py-2 rounded-full ${
                planType === "weekly"
                  ? "bg-primary text-white"
                  : "border border-border"
              }`}
            >
              Weekly
            </button>

            <button
              onClick={() => setPlanType("monthly")}
              className={`flex-1 py-2 rounded-full ${
                planType === "monthly"
                  ? "bg-primary text-white"
                  : "border border-border"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* AMOUNT */}
        <div className="bg-white border border-border rounded-2xl p-5 space-y-4">

          <p className="text-sm text-muted">Enter amount</p>

          <div className="flex items-center text-2xl font-semibold border border-border rounded-xl px-4 py-4">
            <span className="mr-2 text-muted">₦</span>

            <input
              type="text"
              inputMode="numeric"
              placeholder="0"
              value={formatCurrency(amount)}
              onChange={(e) => {
                const raw = e.target.value.replace(/[^\d]/g, "");
                setAmount(raw);
                setError("");
              }}
              className="w-full outline-none bg-transparent"
            />
          </div>

          {error && (
            <p className="text-xs text-red-500">{error}</p>
          )}

          <button
            onClick={() => setAmount(String(weekly))}
            className="text-sm text-primary"
          >
            Use suggested: ₦{weekly.toLocaleString()}
          </button>
        </div>

        {/* INFO */}
        <div className="bg-green-50 rounded-2xl p-5 text-sm text-muted space-y-1">
          <p>Your balance updates automatically after transfer.</p>
          <p>Send only from your own account for proper tracking.</p>
        </div>

        {/* CTA */}
        {!success ? (
          <button
            onClick={handlePayment}
            disabled={processing}
            className="w-full bg-primary text-white py-3 rounded-full font-medium"
          >
            {processing ? "Confirming..." : "I’ve Made Payment"}
          </button>
        ) : (
          <div className="bg-white border border-border rounded-2xl p-6 text-center space-y-3">

            <div className="text-3xl">✅</div>

            <p className="font-semibold">
              Payment Recorded
            </p>

            <p className="text-sm text-muted">
              ₦{Number(amount).toLocaleString()} added successfully
            </p>

            <button
              onClick={() => router.push("/dashboard")}
              className="w-full bg-primary text-white py-3 rounded-full font-medium"
            >
              Go to Dashboard
            </button>

          </div>
        )}

      </div>
    </main>
  );
}