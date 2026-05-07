"use client";

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">

        {/* HEADER */}
        <div className="mb-12 space-y-3">
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#111827]">
            Terms of Service
          </h1>

          <p className="text-[15px] text-[#374151] font-medium">
            Mama’s Call
          </p>

          <p className="text-[14px] text-[#6b7280]">
            Last updated: 6 May 2026
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-10 text-[15px] text-[#374151] leading-7">

          {/* 1 */}
          <Section title="1. Introduction">
            <p>
              Welcome to Mama’s Call. These Terms of Service (“Terms”) govern your use of our platform and services.
            </p>

            <p>
              By accessing or using Mama’s Call, you agree to these Terms. If you do not agree, please do not use our services.
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. Services Overview">
            <p>Mama’s Call provides support services including:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Mama’s Circle (savings and financial preparation)</li>
              <li>Talk to a Nurse (guidance and support)</li>
              <li>Emergency Support coordination</li>
              <li>Marketplace access</li>
              <li>Digital services via website, mobile app, USSD, WhatsApp, and phone</li>
            </ul>

            <p>
              Our services are designed to support decision-making, not replace professional medical care or financial institutions.
            </p>
          </Section>

          {/* 3 */}
          <Section title="3. Medical Disclaimer">
            <p>
              Mama’s Call provides guidance, education, and support. We do not provide medical diagnosis, treatment, or prescriptions.
            </p>

            <p>
              Any information provided through Talk to a Nurse or related services is for informational purposes only and should not be considered a substitute for professional medical care.
            </p>

            <p>
              In case of serious or life-threatening conditions, you must seek immediate in-person medical attention.
            </p>
          </Section>

          {/* 4 */}
          <Section title="4. Eligibility">
            <p>
              You must be at least 18 years old or have permission from a parent/guardian to use Mama’s Call.
            </p>

            <p>
              By using our services, you confirm that the information you provide is accurate and truthful.
            </p>
          </Section>

          {/* 5 */}
          <Section title="5. User Responsibilities">
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Use the platform responsibly and lawfully</li>
              <li>Do not misuse emergency services</li>
              <li>Do not impersonate another person</li>
              <li>Do not attempt to disrupt or harm the platform</li>
            </ul>
          </Section>

          {/* 6 */}
          <Section title="6. Emergency Services Limitation">
            <p>
              Mama’s Call may assist in guiding or coordinating emergency support, but we are not an ambulance provider or emergency medical service.
            </p>

            <p>
              We do not guarantee response times, availability of hospitals, or outcomes of medical situations.
            </p>
          </Section>

          {/* 7 */}
          <Section title="7. Financial Services Disclaimer">
            <p>
              Mama’s Circle and related financial features are designed to support savings and financial preparedness.
            </p>

            <p>
              Mama’s Call is not a bank or licensed financial institution. Financial services may be provided through third-party partners.
            </p>

            <p>
              We are not liable for financial losses resulting from user decisions or third-party services.
            </p>
          </Section>

          {/* 8 */}
          <Section title="8. Payments and Transactions">
            <p>
              Certain services may involve payments. By making a payment, you agree to the applicable terms and fees.
            </p>

            <p>
              Payments are processed through third-party providers, and Mama’s Call does not store sensitive payment details unless explicitly stated.
            </p>
          </Section>

          {/* 9 */}
          <Section title="9. Privacy">
            <p>
              Your use of Mama’s Call is also governed by our Privacy Policy, which explains how we collect and process your data.
            </p>
          </Section>

          {/* 10 */}
          <Section title="10. Intellectual Property">
            <p>
              All content, branding, and materials on Mama’s Call are owned by or licensed to us.
            </p>

            <p>
              You may not copy, reproduce, or distribute any content without permission.
            </p>
          </Section>

          {/* 11 */}
          <Section title="11. Service Availability">
            <p>
              We aim to provide reliable services but do not guarantee uninterrupted access.
            </p>

            <p>
              Services may be modified, suspended, or discontinued at any time.
            </p>
          </Section>

          {/* 12 */}
          <Section title="12. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Mama’s Call is not liable for:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Medical outcomes or health-related decisions</li>
              <li>Delays in emergency response</li>
              <li>Financial losses</li>
              <li>Indirect or consequential damages</li>
            </ul>

            <p>
              Your use of the platform is at your own risk.
            </p>
          </Section>

          {/* 13 */}
          <Section title="13. Termination">
            <p>
              We may suspend or terminate access if you violate these Terms or misuse the platform.
            </p>
          </Section>

          {/* 14 */}
          <Section title="14. Governing Law">
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria.
            </p>
          </Section>

          {/* 15 */}
          <Section title="15. Changes to Terms">
            <p>
              We may update these Terms from time to time. Continued use of the platform means you accept the updated Terms.
            </p>
          </Section>

          {/* 16 */}
          <Section title="16. Contact Us">
            <p>
              If you have questions about these Terms, please contact us:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Email: mamascall247@gmail.com</li>
              <li>Phone / WhatsApp: </li>
            </ul>
          </Section>

        </div>

      </section>
    </main>
  );
}

/* COMPONENT */

function Section({ title, children }: any) {
  return (
    <div className="space-y-3">
      <h2 className="text-[18px] md:text-[20px] font-semibold text-[#111827]">
        {title}
      </h2>
      {children}
    </div>
  );
}