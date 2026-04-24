"use client";

type Props = {
  phone: string;
  setPhone: (value: string) => void;
};

export default function PhoneCapture({ phone, setPhone }: Props) {
  return (
    <div className="bg-green-50 border border-border rounded-2xl p-5 space-y-4">

      <h3 className="font-semibold">
        Save your plan & get support
      </h3>

      <p className="text-sm text-muted">
        We’ll help you stay on track, send reminders, and support you when needed.
      </p>

      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border border-border rounded-xl px-4 py-3"
        required
      />

      <p className="text-xs text-muted">
        No spam. Only helpful reminders and support.
      </p>

    </div>
  );
}