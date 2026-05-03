"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";

interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  private: boolean;
  default_branch: string;
  isConnected?: boolean;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// Language color map for visual badges
const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Ruby: "#701516",
  "C++": "#f34b7d",
  C: "#555555",
  Dart: "#00B4AB",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
};

export default function Repositories() {
  const { token, isLoading: authLoading } = useAuth();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (authLoading) return;

    if (!token) {
      setError("Please log in with GitHub to view your repositories.");
      setIsLoading(false);
      return;
    }

    async function fetchRepos() {
      try {
        const res = await fetch("http://localhost:5000/api/github/repos", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await res.json();
        setRepos(data.repos);
        setFilteredRepos(data.repos);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    // Check if we just returned from a GitHub App installation
    const urlParams = new URLSearchParams(window.location.search);
    const installationId = urlParams.get('installation_id');
    
    if (installationId) {
      // Clean up the URL so it looks nice
      window.history.replaceState({}, '', '/dashboard/repos');
      // Give the backend webhook 1 second to finish processing before fetching repos
      setTimeout(() => fetchRepos(), 1000);
    } else {
      fetchRepos();
    }
  }, [token, authLoading]);

  // Filter repos when search changes
  useEffect(() => {
    if (!search.trim()) {
      setFilteredRepos(repos);
      return;
    }
    const q = search.toLowerCase();
    setFilteredRepos(
      repos.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.full_name.toLowerCase().includes(q) ||
          (r.description && r.description.toLowerCase().includes(q)) ||
          (r.language && r.language.toLowerCase().includes(q))
      )
    );
  }, [search, repos]);

  function timeAgo(dateStr: string) {
    const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
    if (seconds < 60) return "just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    return `${months}mo ago`;
  }

  // Loading skeleton
  if (isLoading || authLoading) {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Repositories</h1>
          <p className="text-[var(--color-muted)] mt-1">Loading your repositories...</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-2xl p-6 animate-pulse"
            >
              <div className="h-5 bg-[var(--color-border)] rounded w-3/4 mb-3" />
              <div className="h-4 bg-[var(--color-border)] rounded w-full mb-2" />
              <div className="h-4 bg-[var(--color-border)] rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Repositories</h1>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-red-400 mb-4">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p className="text-red-400 text-lg font-medium">{error}</p>
          <a
            href="http://localhost:5000/api/auth/github/login"
            className="inline-block mt-4 px-6 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg font-bold hover:bg-[var(--color-accent)] transition-colors"
          >
            Login with GitHub
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Repositories</h1>
          <p className="text-[var(--color-muted)] mt-1">
            {repos.length} repositories from your GitHub account
          </p>
        </div>
        <a
          href={`https://github.com/apps/${process.env.NEXT_PUBLIC_GITHUB_APP_NAME}/installations/new`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg font-bold hover:bg-[var(--color-accent)] transition-colors text-sm"
        >
          Manage App Installation
        </a>
      </div>

      {/* Search */}
      <div className="bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-xl px-4 py-3 flex items-center gap-3 backdrop-blur-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-muted)]">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          placeholder="Search repositories by name, description, or language..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent border-none text-[var(--color-foreground)] placeholder-[var(--color-muted)] focus:outline-none text-sm"
        />
        {search && (
          <span className="text-xs text-[var(--color-muted)]">
            {filteredRepos.length} result{filteredRepos.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Repo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRepos.map((repo) => (
          <div
            key={repo.id}
            className="group relative bg-[var(--color-surface)]/50 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Header */}
            <div className="relative flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 min-w-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-muted)] shrink-0">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <h3 className="font-semibold text-[var(--color-foreground)] truncate group-hover:text-[var(--color-primary)] transition-colors">
                  {repo.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {repo.isConnected && (
                  <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                    Connected
                  </span>
                )}
                {repo.private && (
                  <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                    Private
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="relative text-sm text-[var(--color-muted)] line-clamp-2 mb-4 min-h-[2.5rem] flex-grow">
              {repo.description || "No description provided"}
            </p>

            {/* Footer stats */}
            <div className="relative flex flex-col gap-4 mt-auto">
              <div className="flex items-center gap-4 text-xs text-[var(--color-muted)]">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: langColors[repo.language] || "#8b8b8b" }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  {repo.stargazers_count}
                </span>
                <span className="ml-auto">{timeAgo(repo.updated_at)}</span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2 border-t border-[var(--color-border)]/50">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-1.5 text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-foreground)] bg-[var(--color-background)]/50 rounded-md border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors"
                >
                  View Code
                </a>
                {!repo.isConnected ? (
                  <a
                    href={`https://github.com/apps/${process.env.NEXT_PUBLIC_GITHUB_APP_NAME}/installations/new`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-1.5 text-xs font-bold text-[var(--color-background)] bg-[var(--color-primary)] hover:bg-[var(--color-accent)] rounded-md transition-colors"
                  >
                    Connect App
                  </a>
                ) : (
                  <button
                    className="flex-1 text-center py-1.5 text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 rounded-md transition-colors"
                  >
                    Generate Docs
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRepos.length === 0 && !isLoading && (
        <div className="text-center py-12 text-[var(--color-muted)]">
          <p className="text-lg">No repositories found matching &quot;{search}&quot;</p>
        </div>
      )}
    </div>
  );
}
