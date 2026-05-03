export const metadata = {
  title: "Privacy Policy - Auto Docs",
  description: "Privacy Policy and Terms of Service for Auto Docs.",
};

export default function Policy() {
  return (
    <div className="flex-1 py-24 sm:py-32 bg-[var(--color-background)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-foreground)] mb-8">Privacy Policy & Terms of Service</h1>
        
        <div className="prose prose-invert prose-p:text-[var(--color-muted)] prose-headings:text-[var(--color-foreground)] prose-a:text-[var(--color-primary)] max-w-none">
          
          <p className="text-sm text-[var(--color-muted)] mb-8">Last Updated: May 2026</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-6">
            Welcome to Auto Docs. We respect your privacy and are committed to protecting your personal data and the source code you entrust to our service. This privacy policy will inform you as to how we look after your data when you visit our website and use our automated documentation service.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. The Data We Collect</h2>
          <p className="mb-4">We may collect, use, store and transfer different kinds of data about you and your organization which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-[var(--color-muted)]">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
            <li><strong>Repository Data:</strong> We require read access to the repositories you connect. We process your code strictly in memory to generate documentation and do not persistently store your proprietary source code after the documentation artifact is generated.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="mb-6">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, specifically to provide the Auto Docs service and generate documentation for your codebases.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p className="mb-6">
            We have put in place appropriate security measures to prevent your data and source code from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Access to your repositories is encrypted and secured via OAuth tokens provided by GitHub, GitLab, or Bitbucket.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@autodocs.com.
          </p>

        </div>
      </div>
    </div>
  );
}
