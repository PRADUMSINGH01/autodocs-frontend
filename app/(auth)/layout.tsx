export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCF9]">
      <main className="flex-grow flex flex-col">
        {children}
      </main>
    </div>
  );
}
