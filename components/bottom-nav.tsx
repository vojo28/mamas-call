"use client";

import { Home, Wallet, Phone, User } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border py-2 px-6 flex justify-between items-center max-w-md mx-auto">

      <NavItem icon={<Home size={20} />} label="Home" active />
      <NavItem icon={<Wallet size={20} />} label="Savings" />
      <NavItem icon={<Phone size={20} />} label="Support" />
      <NavItem icon={<User size={20} />} label="Profile" />

    </div>
  );
}

function NavItem({ icon, label, active = false }: any) {
  return (
    <div className="flex flex-col items-center text-xs">
      <div className={active ? "text-primary" : "text-muted"}>
        {icon}
      </div>
      <span className={active ? "text-primary" : "text-muted"}>
        {label}
      </span>
    </div>
  );
}