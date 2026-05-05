import waterBg from '@/public/water-bg.jpg';

export const metadata = {
  title: 'Terms of Service – ShipQuill',
  description: 'The terms governing your use of ShipQuill.',
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src={waterBg.src}
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
      </div>

      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a231f] tracking-tight mb-12">
          Terms of Service
        </h1>
        
        <div className="prose prose-slate prose-lg max-w-none text-[#1a231f]/80 font-medium space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1a231f] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using ShipQuill, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a231f] mb-4">2. Description of Service</h2>
            <p>
              ShipQuill provides an AI-powered documentation platform that connects to your GitHub repositories to generate, host, and manage project documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a231f] mb-4">3. User Responsibilities</h2>
            <p>
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the confidentiality of your account.</li>
              <li>Ensuring you have the right to provide ShipQuill access to any repositories you connect.</li>
              <li>All activities that occur under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a231f] mb-4">4. Intellectual Property</h2>
            <p>
              You retain all ownership rights to your source code. ShipQuill retains all rights to the platform, the agentic engine, and any documentation themes provided by the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a231f] mb-4">5. Limitation of Liability</h2>
            <p>
              ShipQuill is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the service.
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
