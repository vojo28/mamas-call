export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white pt-16 pb-0">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-5 gap-10 mb-14">


          {/* BRAND */}
          <div className="space-y-4">

            <h3 className="font-semibold text-2xl tracking-tight text-white">
              Mama’s Call
            </h3>

            <p className="text-base text-white/80 leading-relaxed max-w-xs">
              Smarter planning. Stronger families. Better beginnings.
            </p>

          </div>


          {/* EXPLORE */}
          <div>
            <p className="font-semibold mb-4 text-white text-lg">Explore</p>

            <ul className="space-y-3 text-base text-white/80">

              <li className="hover:text-white transition cursor-pointer">
                How it Works
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Create Your Baby Budget
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Emergency Support
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Talk to a Nurse
              </li>

            </ul>
          </div>


          {/* COSTS */}
          <div>
            <p className="font-semibold mb-4 text-white text-lg">Pregnancy Costs</p>

            <ul className="space-y-3 text-base text-white/80">

              <li className="hover:text-white transition cursor-pointer">
                Cost of childbirth in Nigeria
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Delivery cost in Lagos
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Pregnancy expenses breakdown
              </li>

              <li className="hover:text-white transition cursor-pointer">
                HMO coverage guide
              </li>

            </ul>
          </div>


          {/* CARE */}
          <div>
            <p className="font-semibold mb-4 text-white text-lg">Care & Support</p>

            <ul className="space-y-3 text-base text-white/80">

              <li className="hover:text-white transition cursor-pointer">
                When to go to hospital
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Emergency signs in pregnancy
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Mental health support
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Postpartum care
              </li>

            </ul>
          </div>


          {/* CONNECT */}
          <div className="space-y-4">

            <p className="font-semibold text-white text-lg">
              Stay Connected
            </p>

            <p className="text-base text-white/80 leading-relaxed">
              Get reminders, tips, and support directly on WhatsApp
            </p>

            <button className="w-full bg-green-600 hover:bg-green-500 px-5 py-3 rounded-full text-base font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]">
              Connect on WhatsApp
            </button>

          </div>


        </div>

      </div>


      {/* BOTTOM STRIP */}
      <div className="bg-background border-t border-border">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-base">


          {/* LEFT */}
          <p className="text-gray-800 text-center md:text-left">
            🚨 Maternal Emergency? Call{" "}
            <span className="text-red-500 font-semibold">
              0800-0000-911
            </span>{" "}
            (Free)
          </p>


          {/* CENTER LINKS */}
          <div className="flex gap-6 text-gray-700">

            <span className="hover:text-gray-900 cursor-pointer transition font-medium">
              Privacy Policy
            </span>

            <span className="hover:text-gray-900 cursor-pointer transition font-medium">
              Terms of Use
            </span>

          </div>


          {/* RIGHT */}
          <p className="text-gray-600 text-center md:text-right">
            © Mama’s Call 2026
          </p>


        </div>

      </div>

    </footer>
  );
}