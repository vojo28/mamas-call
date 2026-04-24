"use client";

type Props = {
  name: string;
  onComplete?: () => void;
};

export default function SavingSetup({ name, onComplete }: Props) {

  function handleActivate() {
    localStorage.setItem("mama_saved", "true");

    if (onComplete) {
      onComplete();
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-6 space-y-6 shadow-soft">

      <div>
        <h2 className="text-xl font-semibold">
          Let’s set up your savings
        </h2>

        <p className="text-sm text-muted mt-1">
          You’re one step away from starting your baby plan.
        </p>
      </div>

      <div className="bg-green-50 rounded-xl p-4">
        <p className="text-sm text-muted">
          This plan will help you stay prepared before your delivery.
        </p>
      </div>

      <div className="text-sm">
        <p className="text-muted">Saving for</p>
        <p className="font-medium">{name || "You"}</p>
      </div>

      <button
        onClick={handleActivate}
        className="w-full bg-primary text-white py-3 rounded-full font-medium shadow-soft transition hover:opacity-90 active:scale-[0.98]"
      >
        Activate My Savings
      </button>

    </div>
  );
}