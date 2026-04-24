"use client";

type Props = {
  profile: {
    name: string;
    edd: string;
    insuranceProvider: string;
  };
  setProfile: (value: any) => void;
};

export default function ExtendedProfile({ profile, setProfile }: Props) {
  function handleChange(e: any) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-5 space-y-4 shadow-soft">

      <h3 className="font-semibold text-lg">
        Let’s personalise your plan
      </h3>

      <p className="text-sm text-muted">
        This helps us guide you better and send the right support at the right time.
      </p>

      {/* NAME */}
      <input
        type="text"
        name="name"
        placeholder="Your full name"
        value={profile.name}
        onChange={handleChange}
        className="w-full border border-border rounded-xl px-4 py-3"
      />

      {/* EDD */}
      <div>
        <label className="text-sm text-muted block mb-1">
          Expected delivery date
        </label>

        <input
          type="date"
          name="edd"
          value={profile.edd}
          onChange={handleChange}
          className="w-full border border-border rounded-xl px-4 py-3"
        />
      </div>

      {/* INSURANCE PROVIDER */}
      <input
        type="text"
        name="insuranceProvider"
        placeholder="Insurance provider (optional)"
        value={profile.insuranceProvider}
        onChange={handleChange}
        className="w-full border border-border rounded-xl px-4 py-3"
      />

    </div>
  );
}