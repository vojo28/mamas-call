"use client";

import { useState } from "react";
import { calculateBudget } from "@/lib/calculate-budget";
import BudgetResult from "./budget-result";

export default function BudgetForm() {
  const [form, setForm] = useState({
    location: "",
    hospitalType: "",
    hasInsurance: "",
  });

  const [result, setResult] = useState<any>(null);

  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    // ✅ IMPORTANT: Reset saved state when starting new calculation
    localStorage.removeItem("mama_saved");

    const calculated = calculateBudget(form);
    setResult(calculated);
  }

  if (result) {
    return <BudgetResult result={result} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* LOCATION */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Where are you located?
        </label>

        <select
          name="location"
          onChange={handleChange}
          className="w-full border border-border rounded-xl px-4 py-3"
          required
        >
          <option value="">Select location</option>
          <option value="lagos">Lagos</option>
          <option value="abuja">Abuja</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* HOSPITAL */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Preferred hospital type
        </label>

        <select
          name="hospitalType"
          onChange={handleChange}
          className="w-full border border-border rounded-xl px-4 py-3"
          required
        >
          <option value="">Select type</option>
          <option value="private">Private hospital</option>
          <option value="public">Public hospital</option>
        </select>
      </div>

      {/* INSURANCE */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Do you have insurance?
        </label>

        <select
          name="hasInsurance"
          onChange={handleChange}
          className="w-full border border-border rounded-xl px-4 py-3"
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-full font-medium"
      >
        Calculate My Budget
      </button>

    </form>
  );
}