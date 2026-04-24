"use client";

type Props = {
  name: string;
  setName: (v: string) => void;
};

export default function NameCapture({ name, setName }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Your first name</label>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-xl px-4 py-3"
        placeholder="Enter your name"
        required
      />
    </div>
  );
}