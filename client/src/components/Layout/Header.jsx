import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-700 bg-ink-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link to="/" className="flex items-center gap-2 font-display text-3xl tracking-wider">
          <span>
            Cinema<span className="text-accent-500">Net</span>
          </span>
        </Link>

        {/* TODO Add navigation, language change and location selector */}
      </div>
    </header>
  );
}
