"use client";

type Props = {
  role: string;
  setRole: (v: string) => void;
};

export default function UserRole({ role, setRole }: Props) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">Who are you planning for?</p>

      <div className="space-y-2">

        <button
          type="button"
          onClick={() => setRole("pregnant")}
          className={`w-full border rounded-xl p-3 text-left ${
            role === "pregnant" ? "bg-green-50 border-primary" : ""
          }`}
        >
          I’m pregnant
        </button>

        <button
          type="button"
          onClick={() => setRole("partner")}
          className={`w-full border rounded-xl p-3 text-left ${
            role === "partner" ? "bg-green-50 border-primary" : ""
          }`}
        >
          I’m the husband/partner
        </button>

        <button
          type="button"
          onClick={() => setRole("other")}
          className={`w-full border rounded-xl p-3 text-left ${
            role === "other" ? "bg-green-50 border-primary" : ""
          }`}
        >
          I’m helping someone
        </button>

      </div>
    </div>
  );
}