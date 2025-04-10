import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <li>
        <ul>
          <Link href="/">Home</Link>
        </ul>
        <ul>
          <Link href="/news">News</Link>
        </ul>
      </li>
    </header>
  );
}
