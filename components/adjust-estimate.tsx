"use client";

import { useState } from "react";

type Props = {
  onUpdate: (data: any) => void;
};

export default function AdjustEstimate({ onUpdate }: Props) {
  const [form, setForm] = useState({
    hospitalName: "",
    insuranceProvider: "",
    planType: "",
  });

  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleApply() {
    onUpdate(form);
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-5 space-y-4">

      <h3 className="font-semibold">
        Make your estimate more accurate
      </h3>

      <p className="text-sm text-muted">
        Add your hospital or insurance details to refine your plan.
      </p>

      {/* HOSPITAL */}
      <input
        type="text"
        name="hospitalName"
        placeholder="Enter hospital name (optional)"
        value={form.hospitalName}
        onChange={handleChange}
        className="w-full border border-border rounded-xl px-4 py-3"
      />

      {/* INSURANCE PROVIDER */}
      <input
        type="text"
        name="insuranceProvider"
        placeholder="Insurance provider (e.g. AXA, Hygeia)"
        value={form.insuranceProvider}
        onChange={handleChange}
        className="w-full border border-border rounded-xl px-4 py-3"
      />

      {/* PLAN TYPE */}
      <select
        name="planType"
        onChange={handleChange}
        className="w-full border border-border rounded-xl px-4 py-3"
      >
        <option value="">Select plan type</option>
        <option value="basic">Basic</option>
        <option value="standard">Standard</option>
        <option value="premium">Premium</option>
      </select>

      <button
        onClick={handleApply}
        className="w-full bg-primary text-white py-3 rounded-full font-medium"
      >
        Update Estimate
      </button>

    </div>
  );
}