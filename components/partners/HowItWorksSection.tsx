import {
  PiggyBank,
  PhoneCall,
  Ambulance,
  HandCoins,
  ShieldCheck,
  Baby,
} from "lucide-react";

const steps = [
  {
    id: "1",
    icon: PiggyBank,
    title: "Financial preparation (Mama’s Circle)",
    text:
      "We help families save gradually for childbirth, so they are not forced to look for money at the last minute.",
  },
  {
    id: "2",
    icon: PhoneCall,
    title: "24/7 maternal care support",
    text:
      "Mothers and families can reach out at any time—day or night—for guidance and support.",
  },
  {
    id: "3",
    icon: Ambulance,
    title: "Emergency response coordination",
    text:
      "When complications occur, we help ensure faster action by connecting users to care.",
  },
  {
    id: "4",
    icon: HandCoins,
    title: "Care Now, Pay Later (CNPL)",
    text:
      "For families with funding gaps, we provide structured financial support to reduce delays in care.",
  },
  {
    id: "5",
    icon: ShieldCheck,
    title: "Support for HMO / insured users",
    text:
      "We help insured users understand what is covered, identify gaps, and avoid unexpected financial stress.",
  },
  {
    id: "6",
    icon: Baby,
    title: "Improved support at delivery",
    text:
      "Data supports mothers beyond childbirth with access to essential products at affordable prices.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-20 md:py-24">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[34px] md:text-[46px] leading-[1.05] font-bold tracking-[-0.03em] text-[#0f1720]">
            How Mama’s Call works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-5">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative text-center flex flex-col items-center"
              >
                {/* connector line desktop */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[54px] left-[58%] w-full border-t border-dashed border-[#dbe2d6]" />
                )}

                {/* icon circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#f7faf5] border border-[#e5ebe2] flex items-center justify-center shadow-sm">
                  <Icon className="w-11 h-11 text-[#146c43]" />
                </div>

                {/* number badge */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-[#146c43] text-white text-[14px] font-semibold flex items-center justify-center mt-4 shadow-sm">
                  {step.id}
                </div>

                {/* title */}
                <h3 className="mt-4 text-[18px] md:text-[19px] leading-[1.38] font-semibold text-[#111827] max-w-[220px]">
                  {step.title}
                </h3>

                {/* refined body text */}
<p className="mt-3 text-[15px] md:text-[16px] leading-[1.9] text-[#66707b] max-w-[220px]">             
       {step.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}