"use client";

import { useState, useEffect } from "react";
import BottomNav from "./bottom-nav";
import { getPregnancyData } from "@/lib/pregnancy";
import { getSavingsUrgency } from "@/lib/savings";

type Props = {
  data: {
    phone: string;
    profile: {
      name: string;
      edd: string;
    };
    result: {
      userNeeds: number;
      weeklySavings: number;
    };
  };
};

export default function Dashboard({ data }: Props) {
  const [savedAmount, setSavedAmount] = useState(0);
  const [transactions, setTransactions] = useState<any[]>([]);

  const goal = data.result.userNeeds;
  const pregnancy = getPregnancyData(data.profile.edd);

  useEffect(() => {
    const stored = localStorage.getItem("mama_saved_amount");
    if (stored) setSavedAmount(Number(stored));

    const tx = localStorage.getItem("mama_transactions");
    if (tx) setTransactions(JSON.parse(tx));
  }, []);

  function logout() {
    localStorage.removeItem("mama_auth");
    window.location.reload();
  }

  const percentage = Math.min((savedAmount / goal) * 100, 100);

  const urgency =
    pregnancy &&
    getSavingsUrgency({
      goal,
      saved: savedAmount,
      weeksRemaining: pregnancy.weeksRemaining,
    });

  return (
    <div className="min-h-screen bg-background pb-24">

      {/* TOP */}
      <div className="flex justify-between items-center px-4 py-4">
        <h1 className="text-lg font-semibold">Mama’s Call</h1>

        <button onClick={logout} className="text-sm text-muted">
          Logout
        </button>
      </div>

      <div className="px-4 space-y-6">

        {/* WELCOME */}
        <div>
          <h2 className="text-2xl font-semibold">
            Hi {data.profile.name || "Mama"} 👋
          </h2>

          <p className="text-sm text-muted">
            Stay consistent with your savings so you’re ready before delivery.
          </p>
        </div>

       {/* BALANCE */}
<div className="bg-primary text-white rounded-2xl p-6 shadow-soft space-y-3">

  <div className="flex justify-between items-start">

    <div>
      <p className="text-sm opacity-80">Total Saved</p>

      <h3 className="text-3xl font-bold">
        ₦{savedAmount.toLocaleString()}
      </h3>
    </div>

    {/* 👉 NEW LINK */}
    <button
      onClick={() => (window.location.href = "/dashboard/transactions")}
      className="text-xs underline opacity-90"
    >
      Transactions →
    </button>

  </div>

  <p className="text-xs opacity-80">
    Account: 1029384756
  </p>

  <p className="text-xs opacity-80">
    Mama’s Call Micro-Savings Bank
  </p>

</div>

        {/* PROGRESS */}
        <div className="bg-white border rounded-2xl p-5 space-y-3">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{Math.round(percentage)}%</span>
          </div>

          <div className="bg-gray-100 h-3 rounded-full">
            <div
              className="bg-primary h-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

       {urgency && (
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 space-y-1">

        <p className="text-sm text-muted">
          Before delivery
        </p>

        <p className="font-semibold text-orange-700">
          You need ₦{urgency.weeklyNeeded.toLocaleString()} weekly
        </p>

      </div>
    )}
    {pregnancy && pregnancy.weeksRemaining <= 10 && (
      <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
        <p className="text-sm text-red-600 font-medium">
          You’re close to delivery. Make sure funds are ready.
        </p>
      </div>
    )}
        {/* ACTION */}
        <button
          onClick={() => (window.location.href = "/dashboard/fund")}
          className="w-full bg-primary text-white py-4 rounded-full"
        >
          Add Money
        </button>
{/* INSURANCE */}
<div className="bg-green-50 rounded-2xl p-5 space-y-3">

  <div className="flex justify-between items-center">
    <p className="text-sm text-muted">Insurance</p>

    <button className="text-primary text-sm font-medium">
      View options
    </button>
  </div>

  <p className="font-medium">
    No insurance added yet
  </p>

  <p className="text-xs text-muted">
    Protect yourself from unexpected delivery costs.
  </p>

  <button className="w-full border border-primary text-primary py-2 rounded-full font-medium">
    + Add Insurance
  </button>

</div>

   {pregnancy && (
  <div className="bg-white border border-border rounded-2xl p-4 flex justify-between items-center">

    <div>
      <p className="text-xs text-muted">
        Pregnancy
      </p>

      <p className="font-medium">
        Week {pregnancy.weeksPassed}
      </p>
    </div>

    <p className="text-sm text-muted">
      {pregnancy.weeksRemaining} weeks left
    </p>

  </div>
)}     

      </div>

      <BottomNav />
    </div>
  );
}