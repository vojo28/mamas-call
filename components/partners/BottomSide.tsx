import {
  PhoneCall,
  MessageCircleMore,
  Stethoscope,
  MapPin,
  Headphones,
} from "lucide-react";

export default function BottomSide() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pb-24">

        {/* OUTER CARD */}
        <div className="rounded-[34px] border border-[#e8ede5] bg-gradient-to-b from-[#fafcf8] to-[#f5f8f2] overflow-hidden shadow-[0_20px_60px_rgba(15,23,32,0.06)]">

          <div className="grid lg:grid-cols-[1.55fr_1fr_1fr_1fr_1fr] lg:min-h-[430px]">

            {/* FEATURE BOX */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#e6ebe2] flex flex-col items-center justify-center text-center">
              
              {/* GREEN ICON */}
              <div className="w-20 h-20 rounded-full bg-[#146c43] shadow-[0_10px_25px_rgba(20,108,67,0.22)] flex items-center justify-center mb-6">
                <PhoneCall className="w-9 h-9 text-white" />
              </div>

              <h3 className="text-[24px] leading-[1.22] font-semibold tracking-[-0.02em] text-[#111827] mb-4 max-w-[250px]">
                24/7 maternal care support
              </h3>

              <p className="text-[15px] leading-7 text-[#66707b] max-w-[250px]">
                Our helpline connects mothers and families to trained
                professionals, including midwives and medical personnel.
              </p>
            </div>

            {/* BOX 1 */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#e6ebe2] flex flex-col items-center justify-center text-center">
              
              <div className="w-20 h-20 rounded-full bg-white border border-[#e6ebe2] shadow-sm flex items-center justify-center mb-6">
                <MessageCircleMore className="w-9 h-9 text-[#146c43]" />
              </div>

              <h3 className="text-[22px] leading-[1.28] font-semibold text-[#111827] mb-4 max-w-[220px]">
                Real-time guidance during emergencies
              </h3>

              <p className="text-[15px] leading-7 text-[#66707b] max-w-[220px]">
                Get immediate advice when it matters most.
              </p>
            </div>

            {/* BOX 2 */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#e6ebe2] flex flex-col items-center justify-center text-center">
              
              <div className="w-20 h-20 rounded-full bg-white border border-[#e6ebe2] shadow-sm flex items-center justify-center mb-6">
                <Stethoscope className="w-9 h-9 text-[#146c43]" />
              </div>

              <h3 className="text-[22px] leading-[1.28] font-semibold text-[#111827] mb-4 max-w-[220px]">
                Support when symptoms are unclear
              </h3>

              <p className="text-[15px] leading-7 text-[#66707b] max-w-[220px]">
                Speak to experts who listen and guide you.
              </p>
            </div>

            {/* BOX 3 */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#e6ebe2] flex flex-col items-center justify-center text-center">
              
              <div className="w-20 h-20 rounded-full bg-white border border-[#e6ebe2] shadow-sm flex items-center justify-center mb-6">
                <MapPin className="w-9 h-9 text-[#146c43]" />
              </div>

              <h3 className="text-[22px] leading-[1.28] font-semibold text-[#111827] mb-4 max-w-[240px]">
                Direction to appropriate and verified facilities
              </h3>

              <p className="text-[15px] leading-7 text-[#66707b] max-w-[220px]">
                We help you find the right care, quickly.
              </p>
            </div>

            {/* RIGHT CTA BOX - MATCHED STYLE */}
            <div className="p-8 flex flex-col items-center justify-center text-center">
              
              <div className="w-20 h-20 rounded-full bg-white border border-[#e6ebe2] shadow-sm flex items-center justify-center mb-6">
                <Headphones className="w-9 h-9 text-[#146c43]" />
              </div>

              <p className="text-[15px] font-medium text-[#66707b] mb-3">
                Call us anytime
              </p>

              <h3 className="text-[24px] leading-[1.2] font-semibold text-[#146c43] mb-4">
                0800-911-0000
              </h3>

              <p className="text-[18px] leading-tight font-semibold text-[#111827] mb-3">
                Available 24/7
              </p>

              <p className="text-[15px] leading-7 text-[#66707b] max-w-[220px]">
                Day or night, we are here for you.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}