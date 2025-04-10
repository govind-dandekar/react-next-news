import { getNewsForYear } from "@/app/lib/news";
import NewsList from "@/components/news-list";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;

  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
