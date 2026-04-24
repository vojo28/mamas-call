"use client";

type Props = {
  name: string;
};

export default function SavingSetup({ name }: Props) {

  function handleActivate() {
    // mark user as having started saving
    localStorage.setItem("mama_saved", "true");

    // redirect to dashboard
    window.location.href = "/dashboard";
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-6 space-y-6 shadow-soft">

      {/* HEADER */}
      <div>
        <h2 className="text-xl font-semibold">
          Let’s set up your savings
        </h2>

        <p className="text-sm text-muted mt-1">
          You’re one step away from starting your baby plan.
        </p>
      </div>

      {/* SUMMARY */}
      <div className="bg-green-50 rounded-xl p-4">
        <p className="text-sm text-muted">
          This plan will help you stay prepared before your delivery.
        </p>
      </div>

      {/* USER */}
      <div className="text-sm">
        <p className="text-muted">Saving for</p>
        <p className="font-medium">
          {name || "You"}
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={handleActivate}
        className="w-full bg-primary text-white py-3 rounded-full font-medium shadow-soft transition hover:opacity-90"
      >
        Activate My Savings
      </button>

    </div>
  );
}