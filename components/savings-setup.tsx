"use client";

type Props = {
  onComplete: () => void;
};

export default function SavingsSetup({ onComplete }: Props) {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-xl font-semibold">
          Let’s set up your savings
        </h2>

        <p className="text-sm text-muted">
          This will help you stay consistent and prepared.
        </p>
      </div>

      {/* SIMPLE OPTIONS */}
      <div className="bg-green-50 rounded-xl p-4">
        <p className="text-sm text-muted">Savings frequency</p>
        <p className="font-semibold">Weekly</p>
      </div>

      <button
        onClick={onComplete}
        className="w-full bg-primary text-white py-3 rounded-full font-medium"
      >
        Continue"use client";

type Props = {
  name: string;
  onComplete: () => void;
};

export default function SavingSetup({ name, onComplete }: Props) {
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
        onClick={onComplete}
        className="w-full bg-primary text-white py-3 rounded-full font-medium shadow-soft transition hover:opacity-90"
      >
        Activate My Savings
      </button>

    </div>
  );
}
      </button>

    </div>
  );
}