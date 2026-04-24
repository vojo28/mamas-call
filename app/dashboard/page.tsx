"use client";

import { useEffect, useState } from "react";
import Dashboard from "@/components/dashboard";
import PhoneLogin from "@/components/phone-login";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("mama_user");
    const storedAuth = localStorage.getItem("mama_auth");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedAuth === "true") {
      setLoggedIn(true);
    }
  }, []);

  if (!loggedIn) {
    return <PhoneLogin onSuccess={() => setLoggedIn(true)} />;
  }

  if (!user) {
    return <div className="p-6">No data found. Start a plan.</div>;
  }

  return (
    <main className="min-h-screen bg-background py-10">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <Dashboard data={user} />
      </div>
    </main>
  );
}