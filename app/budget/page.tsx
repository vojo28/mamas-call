"use client";

import { useEffect, useState } from "react";
import BudgetForm from "@/components/budget-form";
import Dashboard from "@/components/dashboard";

export default function BudgetPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("mama_user");

    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <main className="min-h-screen bg-background py-10">
      <div className="max-w-2xl mx-auto px-4 md:px-6">

        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          Create Your Baby Budget
        </h1>

        <div className="bg-white border border-border rounded-2xl p-6 shadow-soft">

          {user ? (
            <Dashboard data={user} />
          ) : (
            <BudgetForm />
          )}

        </div>

      </div>
    </main>
  );
}