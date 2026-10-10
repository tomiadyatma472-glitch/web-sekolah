
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
            S1P
          </div>

          <div>
            <p className="font-bold text-blue-950">
              SMA NEGERI 1 PEKALONGAN
            </p>
            <p className="text-xs text-slate-500">
              Unggul, Berkarakter, Berprestasi
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-5 text-sm font-semibold">
          <Link href="/" className="text-slate-700 transition hover:text-blue-700">
            Home
          </Link>
          <Link href="/about" className="text-slate-700 transition hover:text-blue-700">
            About
          </Link>
          <Link href="/berita" className="text-slate-700 transition hover:text-blue-700">
            Berita
          </Link>
        </div>
      </div>
    </nav>
  );
}
