import { Phone, MessageCircle, Stethoscope, MapPin } from "lucide-react";

export default function SupportSection() {
  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-3 gap-8 items-start">

        {/* LEFT — INTRO */}
        <div className="space-y-4">

          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary" />
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            24/7 maternal care support
          </h3>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Our helpline connects mothers and families to trained professionals, including midwives and medical personnel, who provide:
          </p>

        </div>

        {/* MIDDLE — FEATURES */}
        <div className="space-y-6">

          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">
                Real-time guidance during emergencies
              </p>
              <p className="text-sm text-muted-foreground">
                Get immediate advice when it matters most.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">
                Support when symptoms are unclear
              </p>
              <p className="text-sm text-muted-foreground">
                Speak to experts who listen and guide you.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <MapPin className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">
                Direction to appropriate and verified facilities
              </p>
              <p className="text-sm text-muted-foreground">
                We help you find the right care, quickly.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT — CALL CARD */}
        <div className="bg-muted/40 border border-border rounded-2xl p-6 space-y-4 shadow-sm">

          <p className="text-sm text-muted-foreground">
            Call us anytime
          </p>

          <h4 className="text-2xl font-bold text-foreground">
            0800-911-0000
          </h4>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Available 24/7
          </div>

          <p className="text-sm text-muted-foreground">
            Day or night, we are here for you.
          </p>

        </div>

      </div>
    </section>
  );
}