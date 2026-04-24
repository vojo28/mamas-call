"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TransactionsPage() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("mama_transactions");
    if (stored) {
      setTransactions(JSON.parse(stored));
    }
  }, []);

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
          <h1 className="text-2xl font-semibold">
            Transactions
          </h1>

          <p className="text-sm text-muted">
            Your savings activity
          </p>
        </div>

        {/* LIST */}
        <div className="bg-white border border-border rounded-2xl p-5 space-y-4">

          {transactions.length === 0 && (
            <p className="text-sm text-muted">
              No transactions yet
            </p>
          )}

          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex justify-between items-center border-b last:border-none pb-3"
            >
              <div>
                <p className="text-sm font-medium">
                  Deposit
                </p>

                <p className="text-xs text-muted">
                  {new Date(tx.date).toLocaleDateString()}
                </p>
              </div>

              <p className="font-semibold">
                ₦{tx.amount.toLocaleString()}
              </p>
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}