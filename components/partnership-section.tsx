"use client";

import Image from "next/image";
import Link from "next/link";
import { Handshake, Shield, Users, HeartHandshake, BarChart3,} from "lucide-react";

export default function PartnershipSection() {
  return (
    <section className="pt-12 md:pt-16 pb-16 md:pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* CARD */}
        <div className="bg-white border border-border rounded-3xl shadow-soft p-6 md:p-10">

          {/* TOP GRID */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">

            {/* LEFT */}
            <div className="space-y-6">

              {/* LABEL */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-primary uppercase tracking-wide">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Handshake size={18} className="text-primary" />
                </div>
                For Partners, NGOs & Government
              </div>

              {/* HEADLINE */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                Working to improve maternal health at scale?
              </h2>

              {/* DESCRIPTION */}
              <p className="text-[15px] sm:text-base md:text-lg text-muted leading-relaxed max-w-lg">
                We collaborate with organizations to reduce delays in maternal care 
                through financial preparation, real-time support, and coordinated response.
              </p>

              {/* CTA */}
                  <div className="pt-2">

        <Link
          href="/partnerships"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium shadow-soft transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
        >
          Explore Partnerships
          <span className="text-lg">→</span>
        </Link>

      </div>

              {/* TRUST LINE */}
              <div className="flex items-center gap-2 text-sm text-muted pt-1">
                <Shield size={16} className="text-primary" />
                See how Mama’s Call is improving outcomes across Nigeria
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">

              {/* soft background */}
              <div className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] bg-green-100 rounded-full blur-3xl opacity-40" />

              <div className="relative w-full max-w-sm md:max-w-md h-[260px] md:h-[320px]">
                <Image
                  src="/partners-illustration.webp"
                  alt="Partnership"
                  fill
                  className="object-contain"
                />
              </div>

            </div>

          </div>

          {/* BOTTOM METRICS */}
         <div className="mt-10 md:mt-12 bg-green-50 rounded-2xl p-5 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

  {/* ITEM 1 */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
      <HeartHandshake className="text-green-600" size={20} />
    </div>
    <div>
      <p className="text-base font-semibold leading-tight">
        Stronger communities
      </p>
      <p className="text-sm text-muted mt-1 leading-relaxed">
        Building healthier families and safer communities
      </p>
    </div>
  </div>

  {/* ITEM 2 */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
      <Users className="text-blue-600" size={20} />
    </div>
    <div>
      <p className="text-base font-semibold leading-tight">
        Better outcomes at scale
      </p>
      <p className="text-sm text-muted mt-1 leading-relaxed">
        Data-driven approach to reduce maternal mortality
      </p>
    </div>
  </div>

  {/* ITEM 3 */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
      <Shield className="text-pink-600" size={20} />
    </div>
    <div>
      <p className="text-base font-semibold leading-tight">
        Sustainable impact
      </p>
      <p className="text-sm text-muted mt-1 leading-relaxed">
        Working together for long-term change
      </p>
    </div>
  </div>

  {/* ITEM 4 */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
      <BarChart3 className="text-amber-600" size={20} />
    </div>
    <div>
      <p className="text-base font-semibold leading-tight">
        Measurable results
      </p>
      <p className="text-sm text-muted mt-1 leading-relaxed">
        Transparent reporting and shared learning
      </p>
    </div>
  </div>

</div>

        </div>

      </div>
    </section>
  );
}