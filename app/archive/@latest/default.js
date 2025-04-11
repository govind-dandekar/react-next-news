import { getLatestNews } from "@/app/lib/news";

import NewsList from "@/components/news-list";

// parallel routes shown on same page must support paths
// fallback can be set as default
export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
