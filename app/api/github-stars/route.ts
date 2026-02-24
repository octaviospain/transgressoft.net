import { NextResponse } from "next/server";

const REVALIDATE_SECONDS = 60 * 60 * 6; // 6 hours
const MUSICOTT_REPO = "octaviospain/musicott";

async function getGitHubRepoStars(repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

export async function GET() {
  const stars = await getGitHubRepoStars(MUSICOTT_REPO);

  return NextResponse.json({
    repo: MUSICOTT_REPO,
    url: `https://github.com/${MUSICOTT_REPO}`,
    stars,
  });
}
