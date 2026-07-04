import { useState, useEffect } from "react";
import SectionHeading from "../section-heading";

const GITHUB_GRAPHQL_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

interface ContributionDay {
  color: string;
  contributionCount: number;
  date: string;
  weekday: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export default function GitHubContributions() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stats, setStats] = useState<{ total: number; weeks: ContributionWeek[] } | null>(null);

  // Fallback mock definitions (quieter grid configuration)
  const weeksMock = Array.from({ length: 53 }, (_, i) => i);
  const daysMock = Array.from({ length: 7 }, (_, i) => i);
  const getMockColor = () => {
    const rand = Math.random();
    if (rand > 0.96) return "bg-emerald-600 dark:bg-emerald-500"; // 4% dark green
    if (rand > 0.88) return "bg-emerald-400 dark:bg-emerald-600/70"; // 8% medium green
    if (rand > 0.76) return "bg-emerald-200 dark:bg-emerald-800/40"; // 12% light green
    return "bg-neutral-100 dark:bg-neutral-800/80"; // 76% gray (uncommitted)
  };

  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (!token) {
      setLoading(false);
      return;
    }

    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        query: GITHUB_GRAPHQL_QUERY,
        variables: { username: "banerjee-arijit" },
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("API call failed");
        return res.json();
      })
      .then((resData) => {
        const calendar = resData?.data?.user?.contributionsCollection?.contributionCalendar;
        if (calendar) {
          setStats({
            total: calendar.totalContributions,
            weeks: calendar.weeks,
          });
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error calling GitHub GraphQL API:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const getThemeColorClass = (apiColor: string) => {
    switch (apiColor.toLowerCase()) {
      case "#216e39":
      case "#196127":
      case "#216e3a":
        return "bg-emerald-600 dark:bg-emerald-500";
      case "#30a14e":
      case "#239a3b":
        return "bg-emerald-400 dark:bg-emerald-600/70";
      case "#40c463":
      case "#7bc96f":
      case "#9be9a8":
      case "#c6e48b":
        return "bg-emerald-200 dark:bg-emerald-800/40";
      default:
        return "bg-neutral-100 dark:bg-neutral-800/80";
    }
  };

  const isUsingApi = stats !== null && !error;
  const totalContributionsText = isUsingApi 
    ? `${stats.total} contributions in this year`
    : "78 contributions in this year";
  const descText = isUsingApi
    ? `My recent activity on GitHub. Over ${stats.total}+ contributions in the last year.`
    : "My recent activity on GitHub. Over 200+ contributions in the last year.";

  return (
    <div className="py-6 px-4 md:px-6 mb-6 border-t border-neutral-200/20">
      <SectionHeading className="mb-2">GitHub Contributions</SectionHeading>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 font-medium">
        {descText}
      </p>
      
      <div className="w-full overflow-x-auto pb-2 [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
        <div className="flex flex-col gap-1 min-w-[50rem]">
          {loading ? (
            <div className="flex gap-1 animate-pulse">
              {weeksMock.map((week) => (
                <div key={week} className="flex flex-col gap-1">
                  {daysMock.map((day) => (
                    <div
                      key={day}
                      className="w-[10px] h-[10px] rounded-[2px] bg-neutral-200 dark:bg-neutral-800/50"
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : isUsingApi ? (
            <div className="flex gap-1">
              {stats.weeks.map((week, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-1">
                  {week.contributionDays.map((day, dayIdx) => (
                    <div
                      key={dayIdx}
                      className={`w-[10px] h-[10px] rounded-[2px] transition ${getThemeColorClass(day.color)}`}
                      title={`${day.contributionCount} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex gap-1">
              {weeksMock.map((week) => (
                <div key={week} className="flex flex-col gap-1">
                  {daysMock.map((day) => (
                    <div
                      key={day}
                      className={`w-[10px] h-[10px] rounded-[2px] transition ${getMockColor()}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-500 mt-3 font-mono">
        <span>{totalContributionsText}</span>
        <div className="flex items-center gap-1">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded-[1px] bg-neutral-100 dark:bg-neutral-800/80" />
          <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-200 dark:bg-emerald-800/40" />
          <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-400 dark:bg-emerald-600/70" />
          <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-600 dark:bg-emerald-500" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

