
import Link from "next/link";
import { notFound } from "next/navigation";
import berita from "@/data/berita";

export const instant = false;

export default async function DetailBerita({ params }) {
  const { id } = await params;

  const item = berita.find((beritaItem) => beritaItem.id === id);

  if (!item) {
    notFound();
  }

  const tanggal = new Date(item.tanggal + "T00:00:00").toLocaleDateString(
    "id-ID",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/berita"
          className="mb-8 inline-flex items-center gap-2 font-medium text-blue-700 hover:text-blue-900"
        >
          ← Kembali ke Berita
        </Link>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <img
            src={item.gambar}
            alt={item.judul}
            className="h-64 w-full object-cover sm:h-96"
          />

          <div className="p-6 sm:p-10">
            <p className="mb-3 text-sm font-semibold text-blue-700">
              {item.kategori} · {tanggal}
            </p>

            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {item.judul}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {item.ringkasan}
            </p>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
              {item.isi.map((paragraf, index) => (
                <p key={index}>{paragraf}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
