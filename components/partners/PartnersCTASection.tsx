import {
  Globe2,
  Landmark,
  Building2,
  ShieldCheck,
  Users,
  Users2,
  Network,
  BarChart3,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

export default function PartnersCTASection() {
  const partners = [
    {
      icon: Globe2,
      title: "NGOs & Development Partners",
      text: "Programs, grants, outreach and implementation support.",
    },
    {
      icon: Landmark,
      title: "Government Agencies",
      text: "Public health partnerships and maternal care systems.",
    },
    {
      icon: Building2,
      title: "Hospitals & Maternity Centers",
      text: "Referral pathways, faster access and continuity of care.",
    },
    {
      icon: ShieldCheck,
      title: "HMOs & Health Insurers",
      text: "Coverage support, education and gap reduction.",
    },
    {
      icon: Users,
      title: "Community Health Networks",
      text: "Grassroots deployment and local trust building.",
    },
    {
      icon: HeartHandshake,
      title: "Philanthropists & Sponsors",
      text: "Direct support for mothers and vulnerable families.",
    },
  ];

  const opportunities = [
    {
      icon: Users2,
      title: "Support pregnant women directly",
      points: [
        "Sponsorship programs",
        "Targeted support for vulnerable populations",
      ],
    },
    {
      icon: Network,
      title: "Strengthen maternal care systems",
      points: [
        "Integration with healthcare providers",
        "Community-based deployment",
      ],
    },
    {
      icon: BarChart3,
      title: "Improve outcomes at scale",
      points: [
        "Data-driven insights",
        "Program design and implementation",
      ],
    },
    {
      icon: HeartHandshake,
      title: "Sponsor emergency maternal response",
      points: [
        "Fund urgent care access",
        "Reduce treatment delays during emergencies",
      ],
    },
    {
      icon: Lightbulb,
      title: "Fund innovation & research",
      points: [
        "Pilot new maternal care models",
        "Generate insights for wider scale adoption",
      ],
    },
  ];

  return (
    <section className="bg-white border-t border-[#eef1ec]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-20 md:py-24">

        {/* OUTER WRAPPER */}
        <div className="rounded-[30px] border border-[#e7ece5] bg-[#fbfcfa] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.03)]">

          <div className="grid lg:grid-cols-2">

            {/* ================= LEFT SIDE ================= */}
            <div className="p-8 md:p-10 lg:border-r border-[#e7ece5]">

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Who we work with
              </h2>

              <p className="text-[16px] leading-8 text-[#374151] max-w-[560px] mb-10">
                We collaborate with institutions, funders, and care networks
                committed to improving maternal health outcomes.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {partners.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={i}
                      className="rounded-[24px] bg-[#f6f9f2] border border-[#e5ebe2] p-6"
                    >
                      <div className="flex gap-4 items-start">

                        <div className="w-14 h-14 rounded-full bg-white border border-[#e5ebe2] flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 text-[#146c43]" />
                        </div>

                        <div>
                          <h3 className="text-[18px] leading-[1.35] font-semibold text-[#111827] mb-2">
                            {item.title}
                          </h3>

                          <p className="text-[15px] leading-7 text-[#374151]">
                            {item.text}
                          </p>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="p-8 md:p-10">

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Partnership opportunities
              </h2>

              <p className="text-[16px] leading-8 text-[#374151] mb-8">
                We work with partners to:
              </p>

              <div className="space-y-5">
                {opportunities.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={i}
                      className="rounded-[24px] bg-[#f6f9f2] border border-[#e5ebe2] p-6 transition hover:shadow-sm"
                    >
                      <div className="flex gap-5 items-start">

                        <div className="w-14 h-14 rounded-full bg-white border border-[#e5ebe2] flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 text-[#146c43]" />
                        </div>

                        <div>
                          <h3 className="text-[20px] leading-[1.35] font-semibold text-[#111827] mb-3">
                            {item.title}
                          </h3>

                          <ul className="space-y-2 text-[15px] leading-7 text-[#374151] list-disc pl-5">
                            {item.points.map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}