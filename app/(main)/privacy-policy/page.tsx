"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">

        {/* HEADER */}
        <div className="mb-12 space-y-3">
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#111827]">
            Privacy Policy
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
              Mama’s Call (“we”, “our”, “us”) is committed to protecting your personal data in accordance with the Nigeria Data Protection Regulation (NDPR) and other applicable laws.
            </p>

            <p>
              This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our services across multiple channels, including:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Mama’s Circle (savings)</li>
              <li>Talk to a Nurse</li>
              <li>Emergency Support and call lines</li>
              <li>Marketplace</li>
              <li>Website and mobile applications</li>
              <li>USSD services</li>
              <li>WhatsApp and messaging platforms</li>
              <li>Phone calls</li>
              <li>Social media platforms</li>
              <li>Community outreach activities</li>
            </ul>

            <p>
              By using Mama’s Call, you consent to the collection and use of your personal data as described in this Privacy Policy.
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. Legal Basis for Processing (NDPR Compliance)">
            <p>We process your personal data based on one or more of the following lawful bases:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Your consent</li>
              <li>Performance of a contract (providing our services)</li>
              <li>Legal obligations</li>
              <li>Legitimate interests (such as improving services and ensuring safety)</li>
            </ul>
          </Section>

          {/* 3 */}
          <Section title="3. Information We Collect">
            <p>We collect only the data necessary to provide safe and effective services.</p>

            <Sub title="a. Personal Information">
              <ul className="list-disc pl-5 space-y-1">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address (if provided)</li>
                <li>Location (city/state)</li>
              </ul>
            </Sub>

            <Sub title="b. Sensitive Personal Data (Health Information)">
              <p>
                Under NDPR, health data is classified as sensitive personal data.
              </p>

              <ul className="list-disc pl-5 space-y-1">
                <li>Pregnancy-related information</li>
                <li>Symptoms and health concerns</li>
                <li>Medical history (if voluntarily provided)</li>
              </ul>

              <p>
                We collect and process this data only with your explicit consent and for the purpose of providing support and guidance.
              </p>
            </Sub>

            <Sub title="c. Financial Information">
              <ul className="list-disc pl-5 space-y-1">
                <li>Savings activity</li>
                <li>Transaction records</li>
              </ul>

              <p>
                Payment details are handled securely through licensed third-party providers. We do not store full card or bank details unless explicitly required and secured.
              </p>
            </Sub>

            <Sub title="d. Technical and Usage Data">
              <ul className="list-disc pl-5 space-y-1">
                <li>Device and browser information</li>
                <li>IP address</li>
                <li>Pages visited and interactions</li>
              </ul>
            </Sub>

            <Sub title="e. Communication Data">
              <ul className="list-disc pl-5 space-y-1">
                <li>Calls, WhatsApp messages, and chat records</li>
                <li>Emails and support interactions</li>
                <li>USSD session data</li>
              </ul>
            </Sub>
          </Section>

          {/* 4 */}
          <Section title="4. How We Use Your Data">
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide maternal support and guidance</li>
              <li>Respond to emergencies and health concerns</li>
              <li>Facilitate financial preparation services</li>
              <li>Improve service quality and user experience</li>
              <li>Send important updates and reminders</li>
              <li>Ensure safety, fraud prevention, and system integrity</li>
            </ul>
          </Section>

          {/* 5 */}
          <Section title="5. Data Sharing and Disclosure">
            <p>We do not sell your personal data.</p>

            <p>We may share data only when necessary:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li>With healthcare providers for referrals or support</li>
              <li>With licensed financial and payment partners</li>
              <li>With trusted service providers under strict confidentiality agreements</li>
              <li>When required by law or regulatory authorities</li>
            </ul>
          </Section>

          {/* 6 */}
          <Section title="6. Data Security">
            <p>We implement appropriate technical and organizational measures to protect your data, including:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Encryption and secure storage</li>
              <li>Access control and authentication</li>
              <li>Monitoring and security updates</li>
            </ul>
          </Section>

          {/* 7 */}
          <Section title="7. Data Retention">
            <p>
              We retain personal data only as long as necessary to provide services, comply with legal obligations, and resolve disputes.
            </p>
          </Section>

          {/* 8 */}
          <Section title="8. Your Rights (NDPR)">
            <p>Under the NDPR, you have the right to:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Object to processing in certain circumstances</li>
              <li>Request data portability</li>
            </ul>

            <p>
              To exercise your rights, contact us using the details below.
            </p>
          </Section>

          {/* 9 */}
          <Section title="9. International Data Transfers">
            <p>
              Where your data is transferred outside Nigeria, we ensure adequate safeguards are in place in compliance with NDPR requirements.
            </p>
          </Section>

          {/* 10 */}
          <Section title="10. Third-Party Services">
            <p>
              We use third-party providers for payments, communication, hosting, and analytics. These providers are required to protect your data in line with applicable laws.
            </p>
          </Section>

          {/* 11 */}
          <Section title="11. Updates to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted with an updated date.
            </p>
          </Section>

          {/* 12 */}
          <Section title="12. Contact and Data Protection Officer">
            <p>
              If you have questions or wish to exercise your rights, contact:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Email: mamascall247@gmail.com</li>
              <li>Phone / WhatsApp: </li>
            </ul>

            <p>
              You may also lodge a complaint with the Nigeria Data Protection Commission (NDPC).
            </p>
          </Section>

          {/* 13 */}
          <Section title="13. Consent">
            <p>
              By using Mama’s Call, you consent to the processing of your personal data in accordance with this Privacy Policy.
            </p>
          </Section>

        </div>

      </section>
    </main>
  );
}

/* COMPONENTS */

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

function Sub({ title, children }: any) {
  return (
    <div className="space-y-2 pt-2">
      <h3 className="font-medium text-[#111827]">{title}</h3>
      {children}
    </div>
  );
}