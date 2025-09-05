import { createContext, useContext, useEffect, useState } from "react";
import { techStackGroup, projectKeywords } from "@/data/TopicGroupings";

export type Repo = {
  id: number;
  name: string;
  description: string;
  homepage: string | null;
  html_url: string | null;
  topics: string[];
  displayed_topics?: string[];
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
        const filtered = data
          .filter((r) => r.topics.includes("project"))
          .map((repo) => {
            const displayed_topics = repo.topics.reduce<string[]>(
              (acc, topic) => {
                const lowerTopic = topic.toLowerCase();
                if (
                  techStackGroup.some((t) => t.toLowerCase() === lowerTopic)
                ) {
                  acc.unshift(topic);
                } else if (
                  projectKeywords.some((k) => k.toLowerCase() === lowerTopic)
                ) {
                  acc.push(topic);
                }
                return acc;
              },
              []
            );

            return { ...repo, displayed_topics };
          });

        setRepos(filtered);
      });
  }, []);

  return (
    <ReposContext.Provider value={{ repos, loading }}>
      {children}
    </ReposContext.Provider>
  );
};

export const useRepos = () => useContext(ReposContext);
