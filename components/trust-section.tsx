import FeatureItem from "./feature-item";
import CoverageItem from "./coverage-item";
import { ClipboardList, PhoneCall, MessageCircle, Wallet, Heart, HeartPulse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TrustSection() {
  return (
    <section className="pt-14 pb-16 md:pt-24 md:pb-24 bg-background">

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

        {/* ========================= */}
        {/* PART 1 — FUNCTIONAL TRUST */}
        {/* ========================= */}

        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">

          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold leading-tight tracking-tight">
            Simple. Clear.
            <br />
            Built for real life.
          </h2>

          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-muted leading-relaxed">
            Everything you need to prepare, save, and stay supported.
          </p>

        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-14">

          <FeatureItem
            icon={
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <ClipboardList size={24} className="text-blue-600" />
              </div>
            }
            title="Create your Baby Budget"
            description="Know what to expect and what you need."
          />

          <FeatureItem
            icon={
              <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
  <Image
    src="/piggy-bank.webp"
    alt="Savings"
    width={30}
    height={30}
    className="object-contain"
  />
</div>
            }
            title="Start saving gradually"
            description="Save small amounts at your own pace."
          />

          <FeatureItem
            icon={
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <PhoneCall size={24} className="text-orange-600" />
              </div>
            }
            title="Get help when needed"
            description="Access care, guidance, or flexible payment if things change."
          />
        </div>

        {/* ========================= */}
        {/* PART 2 — SITUATIONAL TRUST */}
        {/* ========================= */}

        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 space-y-2">

          <h3 className="text-[20px] sm:text-[24px] md:text-[30px] font-semibold leading-tight">
            You’re covered in every situation
          </h3>

          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-muted">
            No matter what happens, you have support.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-14">

          <CoverageItem
            icon={
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                <MessageCircle size={20} className="text-purple-600" />
              </div>
            }
            title="When you're unsure"
            description="Talk to a nurse"
          />

          <CoverageItem
            icon={
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <HeartPulse size={20} className="text-red-600" />
              </div>
            }
            title="When something feels wrong"
            description="Get help immediately"
          />

          <CoverageItem
            icon={
              <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                <Wallet size={20} className="text-yellow-600" />
              </div>
            }
            title="When money is tight"
            description="Use savings or pay in parts"
          />

          <CoverageItem
            icon={
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                <Heart size={20} className="text-pink-600" />
              </div>
            }
            title="When you feel overwhelmed"
            description="Get guidance"
          />
        </div>

        {/* CTA (NEW — IMPORTANT) */}
        <div className="text-center max-w-xl mx-auto space-y-4">

          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-muted">
            You don’t have to figure this out alone.
          </p>

          <Link href="/budget" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-primary text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-medium text-base shadow-soft hover:opacity-90 transition">
              Create Your Baby Budget
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}