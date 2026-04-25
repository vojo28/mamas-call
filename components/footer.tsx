import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white pt-14 pb-0">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 mb-12 md:mb-14">

          {/* BRAND */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">

            <h3 className="font-semibold text-xl sm:text-2xl tracking-tight">
              Mama’s Call
            </h3>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xs">
              Smarter planning. Stronger families. Better beginnings.
            </p>

          </div>

          {/* EXPLORE */}
          <div>
            <p className="font-semibold mb-3 text-base sm:text-lg">Explore</p>

            <ul className="space-y-2.5 text-sm sm:text-base text-white/80">
              <li>
                <Link href="#" className="hover:text-white transition">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/budget" className="hover:text-white transition">
                  Create Your Baby Budget
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Emergency Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Talk to a Nurse
                </Link>
              </li>
            </ul>
          </div>

          {/* COSTS */}
          <div>
            <p className="font-semibold mb-3 text-base sm:text-lg">
              Pregnancy Costs
            </p>

            <ul className="space-y-2.5 text-sm sm:text-base text-white/80">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Cost of childbirth in Nigeria
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Delivery cost in Lagos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Pregnancy expenses breakdown
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  HMO coverage guide
                </Link>
              </li>
            </ul>
          </div>

          {/* CARE */}
          <div>
            <p className="font-semibold mb-3 text-base sm:text-lg">
              Care & Support
            </p>

            <ul className="space-y-2.5 text-sm sm:text-base text-white/80">
              <li>
                <Link href="#" className="hover:text-white transition">
                  When to go to hospital
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Emergency signs in pregnancy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Mental health support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Postpartum care
                </Link>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div className="space-y-4">

            <p className="font-semibold text-base sm:text-lg">
              Stay Connected
            </p>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Get reminders, tips, and support directly on WhatsApp
            </p>

            <button className="w-full bg-green-600 hover:bg-green-500 px-5 py-3.5 rounded-full text-sm sm:text-base font-medium transition shadow-sm hover:shadow-md">
              Connect on WhatsApp
            </button>

          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-6">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm sm:text-base">

          {/* LEFT */}
          <p className="text-white/80 text-center md:text-left">
            🚨 Maternal Emergency? Call{" "}
            <span className="text-red-400 font-semibold">
              0800-0000-911
            </span>{" "}
            (Free)
          </p>

          {/* CENTER */}
          <div className="flex gap-5 text-white/70">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Use
            </Link>
          </div>

          {/* RIGHT */}
          <p className="text-white/60 text-center md:text-right">
            © Mama’s Call 2026
          </p>

        </div>
      </div>

    </footer>
  );
}