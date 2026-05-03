"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface AuthUser {
  uid: string;
  email: string;
  name: string;
}

interface AuthContextType {
  token: string | null;
  user: AuthUser | null;
  isLoading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  user: null,
  isLoading: true,
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    // 1. Check if there's a token in the URL (from OAuth callback redirect)
    const urlToken = searchParams.get("token");

    if (urlToken) {
      // Save token to localStorage and clean up the URL
      localStorage.setItem("autodocs_token", urlToken);
      setToken(urlToken);

      // Remove token from URL without triggering a full page reload
      const cleanUrl = pathname;
      router.replace(cleanUrl);
    } else {
      // 2. Check localStorage for an existing session
      const savedToken = localStorage.getItem("autodocs_token");
      if (savedToken) {
        setToken(savedToken);
      }
    }

    setIsLoading(false);
  }, [searchParams, pathname, router]);

  // Fetch user profile whenever token changes
  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }

    async function fetchUser() {
      try {
        const res = await fetch("http://localhost:5000/api/github/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          // Token is invalid or expired, clear it
          localStorage.removeItem("autodocs_token");
          setToken(null);
          setUser(null);
        }
      } catch {
        console.error("Failed to fetch user profile");
      }
    }

    fetchUser();
  }, [token]);

  async function logout() {
    // Call backend to invalidate the session (clears GitHub token from Firestore)
    if (token) {
      try {
        await fetch("http://localhost:5000/api/auth/logout", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch {
        console.error("Backend logout failed, clearing local session anyway");
      }
    }

    localStorage.removeItem("autodocs_token");
    setToken(null);
    setUser(null);
    router.push("/login");
  }

  return (
    <AuthContext.Provider value={{ token, user, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
