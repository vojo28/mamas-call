"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [clicks, setClicks] = useState(0);
  const [conversions, setConversions] = useState(0);

  useEffect(() => {
    setClicks(Number(localStorage.getItem("baby_clicks") || 0));
    setConversions(Number(localStorage.getItem("baby_conversions") || 0));
  }, []);

  const rate =
    clicks > 0 ? ((conversions / clicks) * 100).toFixed(1) : 0;

  return (
    <main className="p-6 space-y-4">

      <h1 className="text-xl font-semibold">
        Baby Plan Interest
      </h1>

      <div className="space-y-2 text-sm">
        <p>Clicks: {clicks}</p>
        <p>Signups: {conversions}</p>
        <p>Conversion Rate: {rate}%</p>
      </div>

    </main>
  );
}