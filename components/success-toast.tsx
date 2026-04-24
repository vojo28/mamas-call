"use client";

type Props = {
  message: string;
};

export default function SuccessToast({ message }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative bg-white rounded-2xl shadow-xl px-6 py-5 text-center max-w-sm w-full animate-fadeIn">

        <div className="text-2xl mb-2">✅</div>

        <p className="font-medium">
          {message}
        </p>

      </div>

    </div>
  );
}