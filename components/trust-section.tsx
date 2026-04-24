import FeatureItem from "./feature-item";
import CoverageItem from "./coverage-item";
import TrustCard from "./trust-card";

import {
  ClipboardList,
  PhoneCall,
  MessageCircle,
  Wallet,
  AlertCircle,
  Heart,
  Phone,
  HeartPulse,
} from "lucide-react";

import Link from "next/link";

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-background">

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

        {/* ========================= */}
        {/* PART 1 — FUNCTIONAL TRUST */}
        {/* ========================= */}

        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
            Simple. Clear.
            <br />
            Built for real life.
          </h2>

          <p className="text-lg text-muted leading-relaxed">
            Everything you need to prepare, save, and stay supported.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* 1 */}
          <FeatureItem
            icon={
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <ClipboardList size={26} className="text-blue-600" />
              </div>
            }
            title="Create your Baby Budget"
            description="Know what to expect and what you need."
          />

          {/* 2 (PIGGY IMAGE) */}
          <FeatureItem
            icon={
                      <div className="flex items-center justify-center">

          <div className="flex items-center justify-center">

<div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">

  <img
    src="/piggy-bank.png"
    alt="Savings"
    className="w-12 h-12 md:w-10 md:h-10 object-contain"
  />

</div>

</div>

        </div>
            }
            title="Start saving gradually"
            description="Save small amounts at your own pace."
          />

          {/* 3 (PHONE CALL) */}
          <FeatureItem
            icon={
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <PhoneCall size={26} className="text-orange-600" />
              </div>
            }
            title="Get help when needed"
            description="Access care, guidance, or flexible payment if things change."
          />

        </div>


        {/* ========================= */}
        {/* PART 2 — SITUATIONAL TRUST */}
        {/* ========================= */}

        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">

          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
            You’re covered in every situation
          </h3>

          <p className="text-lg text-muted">
            No matter what happens, you have support.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-5 mb-16">

          {/* UNSURE */}
          <CoverageItem
            icon={
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                <MessageCircle size={22} className="text-purple-600" />
              </div>
            }
            title="When you're unsure"
            description="Talk to a nurse"
          />

          {/* SOMETHING WRONG */}
          <CoverageItem
            icon={
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <HeartPulse size={22} className="text-red-600" />
              </div>
            }
            title="When something feels wrong"
            description="Get help immediately"
          />

          {/* MONEY */}
          <CoverageItem
            icon={
              <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                <Wallet size={22} className="text-yellow-600" />
              </div>
            }
            title="When money is tight"
            description="Use savings or pay in parts"
          />

          {/* OVERWHELMED */}
          <CoverageItem
            icon={
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                <Heart size={22} className="text-pink-600" />
              </div>
            }
            title="When you feel overwhelmed"
            description="Get guidance"
          />

        </div>

        

      </div>

    </section>
  );
}