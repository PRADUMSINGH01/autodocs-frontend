"use client";

import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch('http://localhost:5000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Thank you for joining!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to connect to server.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 p-6 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">🎉 You're on the list!</h3>
        <p className="text-emerald-600 dark:text-emerald-500/80">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access..."
          required
          className="w-full bg-white dark:bg-[#151822] border border-gray-200 dark:border-gray-800 px-6 py-4 rounded-full font-sans text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm pr-36"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary/90 text-white px-6 rounded-full font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-3 text-red-500 text-sm text-center font-medium">{message}</p>
      )}
    </form>
  );
}
