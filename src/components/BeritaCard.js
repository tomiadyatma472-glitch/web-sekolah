
import Link from "next/link";

export default function BeritaCard({ item }) {
  const tanggal = new Date(
    `${item.tanggal}T00:00:00`
  ).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      {/* Gambar berita */}
      <Link
        href={`/berita/${item.id}`}
        className="relative block overflow-hidden bg-slate-100"
        aria-label={`Baca berita: ${item.judul}`}
      >
        <img
          src={item.gambar}
          alt={item.judul}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

        <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/95 px-3 py-1 text-xs font-bold text-blue-900 shadow-sm">
          {item.kategori}
        </span>
      </Link>

      {/* Isi kartu */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <time
          dateTime={item.tanggal}
          className="flex items-center gap-2 text-sm text-slate-500"
        >
          <span aria-hidden="true">▦</span>
          {tanggal}
        </time>

        <h2 className="mt-3 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-800">
          {item.judul}
        </h2>

        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
          {item.ringkasan}
        </p>

        <div className="mt-6 border-t border-slate-100 pt-4">
          <Link
            href={`/berita/${item.id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Baca Selengkapnya
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
