import { createContext, useContext, useEffect, useState } from "react";

export type Repo = {
  id: number;
  name: string;
  description: string;
  homepage: string | null;
  html_url: string;
  topics: string[];
  created_at: string;
};

type ReposContextType = {
  repos: Repo[];
  loading: boolean;
};

const ReposContext = createContext<ReposContextType>({
  repos: [],
  loading: true,
});

export const ReposProvider = ({ children }: { children: React.ReactNode }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/KaiChuuu/repos")
      .then((res) => res.json())
      .then((data: Repo[]) => {
        setRepos(data.filter((r) => r.topics.includes("project")));
        setLoading(false);
      });
  }, []);

  return (
    <ReposContext.Provider value={{ repos, loading }}>
      {children}
    </ReposContext.Provider>
  );
};

export const useRepos = () => useContext(ReposContext);
