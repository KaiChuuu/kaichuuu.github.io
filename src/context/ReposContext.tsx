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
  const [loading] = useState(true);

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
                  acc.unshift(lowerTopic);
                } else if (
                  projectKeywords.some((k) => k.toLowerCase() === lowerTopic)
                ) {
                  acc.push(lowerTopic);
                }
                return acc;
              },
              []
            );

            return { ...repo, displayed_topics };
          })
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          );

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
