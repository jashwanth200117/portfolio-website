import { useEffect, useState } from "react";

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  html_url: string;
}

const GitHubProfilePage = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGitHubUser = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/jashwanth200117"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub profile");
        }

        const data: GitHubUser = await response.json();
        setUser(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubUser();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading GitHub profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-400">
        {error}
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="px-10 py-20 max-w-3xl mx-auto">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-32 h-32 rounded-full mb-6"
      />

      <h1 className="text-4xl font-bold mb-2">
        {user.name ?? user.login}
      </h1>

      <p className="text-gray-300 mb-6">
        @{user.login}
      </p>

      <div className="space-y-2 mb-8">
        <p>Public Repositories: {user.public_repos}</p>
        <p>Followers: {user.followers}</p>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
      >
        View GitHub Profile
      </a>
    </div>
  );
};

export default GitHubProfilePage;