import {
  CheckCircle2,
  UserRound,
  Building2,
  Wallet,
  X,
} from "lucide-react";
import Image from "next/image";

export default function GapResponseSection() {
  return (
    <section className="bg-white border-t border-[#eef1ec]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-20 md:py-28">
        
        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-18 items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            
            {/* HEADING */}
            <h2 className="text-[32px] md:text-[44px] leading-[1.05] font-bold tracking-[-0.03em] text-[#0f1720]">
              The gap we are addressing
            </h2>

            <p className="text-[18px] text-[#5b6470] leading-8">
              There is a missing layer between:
            </p>

            {/* FLOW CARD */}
            <div className="relative rounded-[28px] border border-[#e4eadf] bg-[#f4f8ef] px-6 md:px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              
              {/* connector line */}
              <div className="hidden md:block absolute left-[18%] right-[18%] top-[72px] h-[2px] bg-[#dbe2d6]" />

              {/* red x */}
              <div className="hidden md:flex absolute left-[34%] top-[56px] w-9 h-9 rounded-full bg-white border border-[#f3d9d9] items-center justify-center shadow-sm">
                <X className="w-5 h-5 text-red-500" strokeWidth={2.4} />
              </div>

              <div className="hidden md:flex absolute right-[34%] top-[56px] w-9 h-9 rounded-full bg-white border border-[#f3d9d9] items-center justify-center shadow-sm">
                <X className="w-5 h-5 text-red-500" strokeWidth={2.4} />
              </div>

              {/* icons */}
              <div className="grid grid-cols-3 gap-4 relative z-10">
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border border-[#dde5d8] shadow-sm flex items-center justify-center">
                    <UserRound className="w-12 h-12 text-[#146c43]" />
                  </div>
                  <p className="mt-4 text-[17px] font-semibold text-[#111827]">
                    The Patient
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border border-[#dde5d8] shadow-sm flex items-center justify-center">
                    <Building2 className="w-12 h-12 text-[#146c43]" />
                  </div>
                  <p className="mt-4 text-[17px] font-semibold text-[#111827]">
                    The Hospital
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border border-[#dde5d8] shadow-sm flex items-center justify-center">
                    <Wallet className="w-12 h-12 text-[#146c43]" />
                  </div>
                  <p className="mt-4 text-[17px] font-semibold text-[#111827]">
                    The Money
                  </p>
                </div>
              </div>
            </div>

            {/* SUBTEXT */}
            <p className="text-[19px] font-medium text-[#374151]">
              Today, these systems are disconnected.
            </p>

            {/* BULLETS */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#146c43] mt-1 shrink-0" />
                <p className="text-[18px] leading-8 text-[#374151]">
                  Families prepare late
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#146c43] mt-1 shrink-0" />
                <p className="text-[18px] leading-8 text-[#374151]">
                  Hospitals often require payment before care
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#146c43] mt-1 shrink-0" />
                <p className="text-[18px] leading-8 text-[#374151]">
                  Emergencies are uncoordinated
                </p>
              </div>
            </div>
          </div>

                    {/* RIGHT SIDE */}
                  <div className="lg:border-l lg:border-[#eceee8] lg:pl-14">

            {/* Heading */}
            <h2 className="text-[32px] md:text-[44px] leading-[1.05] font-bold tracking-[-0.03em] text-[#0f1720] mb-8">
              Our response
            </h2>

            {/* BIG IMAGE */}
            <div className="relative w-full h-[340px] md:h-[460px] mb-8">
              <Image
                src="/response-lady.webp"
                alt="Maternal support specialist"
                fill
                priority
                className="object-contain object-center scale-[1.08]"
              />
            </div>

            {/* TEXT */}
            <div className="space-y-7 max-w-[620px]">

              <p className="text-[19px] leading-[2] text-[#374151]">
                <span className="font-semibold text-[#111827]">
                  To address this gap,
                </span>{" "}
                we launched Mama’s Call—starting with a{" "}
                <span className="font-semibold text-[#111827]">
                  24/7 maternal care support line.
                </span>
              </p>

              <p className="text-[19px] leading-[2] text-[#4b5563]">
                We observed that while many women are in care, access to timely
                guidance during emergencies or uncertain moments remains limited and
                inconsistent. This often leads to delays in decision-making and action.
              </p>

              <p className="text-[22px] leading-[1.8] font-semibold text-[#146c43]">
                Mama’s Call was designed to provide immediate support when it matters most.
              </p>

            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}