"use client";

import { useToast } from "@/components/ToastProvider";

export default function Profile() {
  const { success } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    success("Profile updated successfully");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Profile Settings</h1>
        <p className="text-[var(--color-muted)] mt-1">Manage your account details and preferences.</p>
      </div>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-sm overflow-hidden">
        <form onSubmit={handleSave} className="p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[var(--color-foreground)] border-b border-[var(--color-border)] pb-2">Personal Information</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="John Doe"
                  className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg px-4 py-2 text-[var(--color-foreground)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="john@company.com"
                  className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg px-4 py-2 text-[var(--color-foreground)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-semibold text-[var(--color-foreground)] border-b border-[var(--color-border)] pb-2">Preferences</h2>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[var(--color-foreground)]">Email Notifications</p>
                <p className="text-sm text-[var(--color-muted)]">Receive emails when your documentation builds complete or fail.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-[var(--color-border)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]"></div>
              </label>
            </div>
          </div>

          <div className="pt-6 flex justify-end">
            <button type="submit" className="px-6 py-2.5 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg font-bold hover:bg-[var(--color-accent)] transition-colors">
              Save Changes
            </button>
          </div>
        </form>
      </div>
      
      {/* Danger Zone */}
      <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-red-500 mb-2">Danger Zone</h2>
        <p className="text-sm text-[var(--color-muted)] mb-4">Permanently delete your account and all of your content. This action is not reversible.</p>
        <button className="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-colors">
          Delete Account
        </button>
      </div>
    </div>
  );
}
