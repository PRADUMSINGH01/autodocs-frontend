"use client";

import React, { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

// Robust email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (value: string): string | null => {
    if (!value.trim()) return 'Email address is required.';
    if (!EMAIL_REGEX.test(value.trim())) return 'Please enter a valid email address.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation before hitting the API
    const validationError = validateEmail(email);
    if (validationError) {
      setStatus('error');
      setMessage(validationError);
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
      const response = await fetch(`${apiUrl}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Thank you for joining!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Could not reach the server. Please try again later.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 bg-emerald-50 border border-emerald-200 px-8 py-6 rounded-2xl text-center shadow-sm">
        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        <h3 className="text-lg font-bold text-emerald-800">You're on the list!</h3>
        <p className="text-sm text-emerald-700">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto" noValidate>
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            // Clear error as user types
            if (status === 'error') { setStatus('idle'); setMessage(''); }
          }}
          placeholder="Enter your work email..."
          autoComplete="email"
          className={`w-full bg-white border px-6 py-4 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-2 transition-all shadow-sm pr-40 ${
            status === 'error'
              ? 'border-red-300 focus:ring-red-300'
              : 'border-gray-200 focus:ring-[#1f2d25]/30'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="absolute right-2 top-2 bottom-2 bg-[#1f2d25] hover:bg-black text-white px-5 rounded-full font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
        >
          {status === 'loading' ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {status === 'error' && message && (
        <div className="mt-3 flex items-center justify-center gap-2 text-red-600 text-sm font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {message}
        </div>
      )}
    </form>
  );
}
