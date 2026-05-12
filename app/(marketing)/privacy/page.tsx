
export const metadata = {
  title: 'Privacy Policy – ShipQuill',
  description: 'How we handle your data at ShipQuill.',
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
      </div>

      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a231f] tracking-tight mb-12">
          Privacy Policy
        </h1>
        
        <div className="prose prose-slate prose-lg max-w-none text-[#1a231f]/80 font-medium space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1a231f] mb-4">1. Information We Collect</h2>
            <p>
              When you use ShipQuill, we collect information necessary to provide our documentation services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (email, name) when you join the waitlist.</li>
              <li>Repository metadata and source code (when authorized via GitHub App) for documentation generation.</li>
              <li>Usage data to improve our agentic parsing engine.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a231f] mb-4">2. How We Use Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and generate AI-driven documentation.</li>
              <li>Notify you about product updates and early access invitations.</li>
              <li>Ensure the security and reliability of our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a231f] mb-4">3. Data Security</h2>
            <p>
              Your security is our priority. We use industry-standard encryption and security practices to protect your data. We never sell your personal information or your source code to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a231f] mb-4">4. Updates to this Policy</h2>
            <p>
              We may update this policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the effective date.
            </p>
            <p className="mt-8 text-sm italic">
              Last updated: May 5, 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
